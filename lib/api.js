// lib/api.js
const BASE = process.env.NEXT_PUBLIC_API_HOST || 'https://r1.edkt.net';

function wait(ms){return new Promise(r=>setTimeout(r,ms));}

export default async function apiFetch(pathOrUrl, options = {}, { retries = 2, timeout = 8000 } = {}) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : `${BASE.replace(/\/$/,'')}/${pathOrUrl.replace(/^\//,'')}`;
  const controller = new AbortController();
  const id = setTimeout(()=>controller.abort(), timeout);

  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);

    const text = await res.text();
    let data;
    try { data = text ? JSON.parse(text) : null; } catch(e) { data = text; }

    if (!res.ok) {
      const err = new Error(`HTTP ${res.status} ${res.statusText}`);
      err.status = res.status;
      err.body = data;
      throw err;
    }
    return data;
  } catch (err) {
    clearTimeout(id);
    if (err.name === 'AbortError') {
      if (retries > 0) {
        await wait(1000);
        return apiFetch(pathOrUrl, options, { retries: retries - 1, timeout: timeout * 2 });
      }
      throw new Error(`Timeout fetching ${url}`);
    }
    if (retries > 0 && (err.status == null || (err.status >= 500))) {
      await wait(500);
      return apiFetch(pathOrUrl, options, { retries: retries - 1, timeout: timeout * 2 });
    }
    throw err;
  }
}
