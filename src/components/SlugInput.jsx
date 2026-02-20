import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { generateSlug } from '../utils/generateSlug';

/**
 * SlugInput Component
 *
 * A comprehensive slug input component that provides:
 * - Title input field
 * - Auto-generated slug preview
 * - Manual slug editing capability
 * - Real-time slug availability checking
 *
 * Features:
 * - Auto-generates slug from title using custom slug generator
 * - Allows manual editing of the slug
 * - Checks slug availability against existing slugs via API
 * - Provides visual feedback for availability status
 * - Handles loading and error states
 *
 * @param {Object} props
 * @param {string} props.title - Current title value
 * @param {function} props.onTitleChange - Callback when title changes
 * @param {string} props.slug - Current slug value
 * @param {function} props.onSlugChange - Callback when slug changes
 * @param {string} props.baseUrl - Base URL for API calls (optional, defaults to window.location.origin)
 */
const SlugInput = ({ title, onTitleChange, slug, onSlugChange, baseUrl }) => {
  const [isEditingSlug, setIsEditingSlug] = useState(false);
  const [manualSlug, setManualSlug] = useState(slug || '');
  const [isGenerating, setIsGenerating] = useState(false);

  // Use baseUrl or default to current origin
  const apiBaseUrl = baseUrl || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');

  // Fetch slug availability using SWR
  const { data: availabilityData, error: availabilityError, isLoading: isCheckingAvailability } = useSWR(
    slug ? `${apiBaseUrl}/api/pages/list` : null,
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch slugs');
      const data = await response.json();
      return data.slugs || [];
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // Check if current slug is available
  const isSlugAvailable = availabilityData ? !availabilityData.includes(slug) : true;
  const hasAvailabilityError = availabilityError !== undefined;

  // Auto-generate slug when title changes (if not manually editing)
  useEffect(() => {
    if (title && !isEditingSlug) {
      setIsGenerating(true);
      generateSlug(title, apiBaseUrl)
        .then((generatedSlug) => {
          onSlugChange(generatedSlug);
          setManualSlug(generatedSlug);
        })
        .catch((error) => {
          console.error('Failed to generate slug:', error);
          // Fallback to basic slug
          const fallbackSlug = title.toLowerCase().replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
          onSlugChange(fallbackSlug || 'untitled-page');
          setManualSlug(fallbackSlug || 'untitled-page');
        })
        .finally(() => {
          setIsGenerating(false);
        });
    }
  }, [title, isEditingSlug, apiBaseUrl, onSlugChange]);

  // Update manual slug when slug prop changes externally
  useEffect(() => {
    setManualSlug(slug || '');
  }, [slug]);

  // Handle manual slug editing
  const handleSlugChange = (newSlug) => {
    const cleanSlug = newSlug.toLowerCase().replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    setManualSlug(cleanSlug);
    onSlugChange(cleanSlug);
  };

  // Toggle manual editing mode
  const toggleEditingMode = () => {
    setIsEditingSlug(!isEditingSlug);
    if (!isEditingSlug) {
      // Switching to manual mode, set current slug as manual value
      setManualSlug(slug || '');
    }
  };

  return (
    <div className="space-y-4">
      {/* Title Input */}
      <div>
        <label htmlFor="title-input" className="block text-sm font-medium text-gray-700 mb-2">
          Page Title
        </label>
        <input
          id="title-input"
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Enter page title..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Slug Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="slug-input" className="block text-sm font-medium text-gray-700">
            Slug (URL)
          </label>
          <button
            type="button"
            onClick={toggleEditingMode}
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            {isEditingSlug ? 'Auto-generate' : 'Edit manually'}
          </button>
        </div>

        {/* Slug Preview/Display */}
        {!isEditingSlug ? (
          <div className="flex items-center space-x-2">
            <div className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-700">
              {isGenerating ? (
                <span className="text-gray-500">Generating slug...</span>
              ) : (
                slug || 'No slug generated'
              )}
            </div>
            {/* Availability Indicator */}
            {slug && (
              <div className="flex items-center space-x-1">
                {isCheckingAvailability ? (
                  <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                ) : hasAvailabilityError ? (
                  <span className="text-red-500 text-sm">Error checking</span>
                ) : isSlugAvailable ? (
                  <span className="text-green-600 text-sm">✓ Available</span>
                ) : (
                  <span className="text-red-600 text-sm">✗ Taken</span>
                )}
              </div>
            )}
          </div>
        ) : (
          /* Manual Slug Input */
          <div className="space-y-2">
            <input
              id="slug-input"
              type="text"
              value={manualSlug}
              onChange={(e) => handleSlugChange(e.target.value)}
              placeholder="Enter custom slug..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Preview: /{manualSlug || 'your-slug'}</span>
              {manualSlug && (
                <>
                  {isCheckingAvailability ? (
                    <span>Checking availability...</span>
                  ) : hasAvailabilityError ? (
                    <span className="text-red-500">Error checking availability</span>
                  ) : isSlugAvailable ? (
                    <span className="text-green-600">✓ Available</span>
                  ) : (
                    <span className="text-red-600">✗ Already taken</span>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {/* URL Preview */}
        {slug && (
          <div className="mt-2 text-sm text-gray-500">
            Full URL: {apiBaseUrl}/{slug}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlugInput;
