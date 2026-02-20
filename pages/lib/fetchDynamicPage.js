import apiFetch from '../../lib/api';

export async function fetchDynamicPage(slug = "") {
  try {
    const data = await apiFetch(`/api/s/dynamic-page/blog?contentBlock=Object&slug=${encodeURIComponent(slug)}`, {
      headers: {
        Accept: "application/json",
        apihost: "https://schooltheme1.institute.org.in",
      },
    });
    return { ok: true, status: 200, data };
  } catch (error) {
    console.error(`API Error for slug ${slug}:`, error);
    return { ok: false, status: error.status || 500, data: null };
  }
}
 