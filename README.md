# Bond

The creator campaign launchpad on Solana. Launch a pump.fun coin and put its creator fees toward marketing and UGC creators.

## What's here

| File | What it does |
| --- | --- |
| `index.html` | The whole site. |
| `api/ipfs.js` | Uploads the coin image and details to pump.fun's IPFS (pump.fun blocks direct browser uploads). |
| `api/rpc.js` | Passes the launch's Solana calls to an RPC (public RPCs often refuse browsers). |

## Put it live (about 2 minutes, free)

Launching needs the two small `api/` functions, so host it on **Vercel**. GitHub Pages only serves static files, so the site loads there but launches won't work.

1. Put these files at the top level of your GitHub repo (`index.html`, `package.json`, the `api` folder).
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub → **Add New → Project** → pick the repo → **Deploy**. No settings needed.
3. Optional, recommended: get a free RPC URL from [Helius](https://helius.dev), then in Vercel go to **Settings → Environment Variables**, add `SOLANA_RPC_URL` with that URL, and redeploy. The public RPC works but is rate-limited.

## Launching a coin

1. Open your Vercel site, fill in the name, ticker and image (description, X, Telegram, website and dev buy are optional).
2. Press **Launch on pump.fun**. Phantom, Solflare or Backpack asks for one approval.
3. When it confirms you get the contract address and a link to the coin on pump.fun.

You need about **0.03 SOL** for network costs plus any dev buy. The transaction is simulated before your wallet opens, so if something would fail you aren't charged.

The launching wallet is the coin's creator and receives pump.fun's creator fees. The fee plan on the form is how you intend to spend them; it isn't enforced on-chain yet. Transactions are built by [PumpPortal](https://pumpportal.fun), which takes 0.5% of the dev buy.

## Brand

`brand/` has the logo (`logo.svg`), a 1000×1000 profile picture and a 1500×500 banner.
