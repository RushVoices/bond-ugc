// Forwards the coin image + metadata to pump.fun's IPFS uploader.
// pump.fun doesn't send CORS headers, so the browser can't call it directly.
export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method !== 'POST') return new Response('POST only', { status: 405 });
  const type = req.headers.get('content-type') || '';
  if (!type.startsWith('multipart/form-data')) return new Response('Expected form data', { status: 400 });
  const body = await req.arrayBuffer();
  if (body.byteLength > 4.4e6) return new Response('Image too large (max 4 MB)', { status: 413 });
  const r = await fetch('https://pump.fun/api/ipfs', { method: 'POST', body, headers: { 'content-type': type } });
  return new Response(await r.text(), { status: r.status, headers: { 'content-type': r.headers.get('content-type') || 'application/json' } });
}
