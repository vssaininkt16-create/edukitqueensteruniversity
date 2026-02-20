const slugify = require('slugify');

/**
 * Generates a unique slug from a title, handling special characters including Hindi,
 * and ensuring uniqueness by checking against existing slugs and adding numbers if needed.
 *
 * @param {string} title - The title to convert to slug
 * @param {string} [baseUrl='http://localhost:3000'] - Base URL for API calls
 * @returns {Promise<string>} - The generated unique slug
 */
async function generateSlug(title, baseUrl = 'http://localhost:3000') {
  try {
    // First, generate base slug using slugify with transliteration for special chars
    const baseSlug = slugify(title, {
      lower: true, // Convert to lowercase
      strict: true, // Strip special characters except replacement
      locale: 'en', // Use English locale, but slugify handles transliteration
    });

    // If base slug is empty, use a default
    const cleanSlug = baseSlug || 'untitled-page';

    // Fetch existing slugs from API
    const response = await fetch(`${baseUrl}/api/pages/list`);
    let existingSlugs = [];

    if (response.ok) {
      const data = await response.json();
      existingSlugs = data.slugs || [];
    } else {
      console.warn('Failed to fetch existing slugs, proceeding without uniqueness check');
    }

    // Check if base slug is unique
    if (!existingSlugs.includes(cleanSlug)) {
      return cleanSlug;
    }

    // If not unique, add numbers until unique
    let counter = 1;
    let uniqueSlug = `${cleanSlug}-${counter}`;

    while (existingSlugs.includes(uniqueSlug)) {
      counter++;
      uniqueSlug = `${cleanSlug}-${counter}`;
    }

    return uniqueSlug;
  } catch (error) {
    console.error('Error generating slug:', error);
    // Fallback: generate basic slug without uniqueness check
    const fallbackSlug = slugify(title, { lower: true, strict: true }) || 'untitled-page';
    return fallbackSlug;
  }
}

module.exports = { generateSlug };
