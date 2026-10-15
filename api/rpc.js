// Solana RPC passthrough for the launch flow. Browsers often get 403 from public RPCs,
// and this keeps a private RPC key (SOLANA_RPC_URL) off the page.
export const config = { runtime: 'edge' };

const RPC = process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com';
const ALLOWED = new Set(['getBalance', 'simulateTransaction', 'sendTransaction', 'getSignatureStatuses', 'getLatestBlockhash']);

export default async function handler(req) {
  if (req.method !== 'POST') return new Response('POST only', { status: 405 });
  let body;
  try { body = await req.json(); } catch { return new Response('Bad JSON', { status: 400 }); }
  const calls = Array.isArray(body) ? body : [body];
  if (calls.length > 5 || calls.some(c => !ALLOWED.has(c?.method))) return new Response('Method not allowed', { status: 403 });
  const r = await fetch(RPC, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  return new Response(await r.text(), { status: r.status, headers: { 'content-type': 'application/json' } });
}
