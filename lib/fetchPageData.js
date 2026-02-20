import apiFetch from './api';

export async function fetchPageData(slug) {
  try {
    const data = await apiFetch(`/api/s/dynamic-page/${slug}?contentBlock=Object`, {
      headers: {
        'apihost': 'https://schooltheme1.institute.org.in',
        'Accept': 'application/json',
      },
    });
    return data;
  } catch (error) {
    console.error(`Fetch error for ${slug}:`, error);
    return null;
  }
}
