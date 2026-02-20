/**
 * Simple in-memory store for pages data
 * In production, this should be replaced with a proper database
 */

// In-memory storage for pages
let pages = [];
let slugs = new Set();

/**
 * Initialize with some sample data if needed
 */
function initializeSampleData() {
  // Add some sample pages for testing
  const samplePages = [
    {
      id: '1',
      title: 'About Us',
      slug: 'about-us',
      content: 'About us page content',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Contact',
      slug: 'contact',
      content: 'Contact page content',
      createdAt: new Date().toISOString(),
    },
  ];

  samplePages.forEach(page => {
    pages.push(page);
    slugs.add(page.slug);
  });
}

// Initialize sample data
initializeSampleData();

/**
 * Get all pages
 */
function getAllPages() {
  return [...pages];
}

/**
 * Get all slugs
 */
function getAllSlugs() {
  return Array.from(slugs);
}

/**
 * Get page by slug
 */
function getPageBySlug(slug) {
  return pages.find(page => page.slug === slug) || null;
}

/**
 * Check if slug exists
 */
function slugExists(slug) {
  return slugs.has(slug);
}

/**
 * Add a new page
 */
function addPage(pageData) {
  const { title, slug, content = '', ...rest } = pageData;

  if (slugExists(slug)) {
    throw new Error(`Slug "${slug}" already exists`);
  }

  const newPage = {
    id: Date.now().toString(), // Simple ID generation
    title,
    slug,
    content,
    createdAt: new Date().toISOString(),
    ...rest,
  };

  pages.push(newPage);
  slugs.add(slug);

  return newPage;
}

/**
 * Update a page
 */
function updatePage(slug, updateData) {
  const index = pages.findIndex(page => page.slug === slug);
  if (index === -1) {
    throw new Error(`Page with slug "${slug}" not found`);
  }

  const updatedPage = { ...pages[index], ...updateData, updatedAt: new Date().toISOString() };
  pages[index] = updatedPage;

  return updatedPage;
}

/**
 * Delete a page
 */
function deletePage(slug) {
  const index = pages.findIndex(page => page.slug === slug);
  if (index === -1) {
    return false;
  }

  pages.splice(index, 1);
  slugs.delete(slug);
  return true;
}

module.exports = {
  getAllPages,
  getAllSlugs,
  getPageBySlug,
  slugExists,
  addPage,
  updatePage,
  deletePage,
};
