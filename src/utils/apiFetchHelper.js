export async function apiFetch(url, options = {}) {
  const headers = {
    'Accept': 'application/json',
    'apihost': 'https://schooltheme1.institute.org.in',
    ...options.headers,
  };

  try {
    const response = await fetch(url, { ...options, headers });

    let data = null;
    if (response.ok) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error(`API Error for ${url}: ${response.status} ${response.statusText} - Body: ${text}`);
    }

    return { ok: response.ok, status: response.status, data };
  } catch (error) {
    console.error(`Network error for ${url}:`, error);
    return { ok: false, status: 0, data: null };
  }
}
