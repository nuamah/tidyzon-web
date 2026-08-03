# AI Chatbot Setup Guide (DeepSeek)

Tidy A.I. Assistant answers **Tidyzon-only** questions using a full site knowledge base and the **DeepSeek** API.

## Prerequisites

- Node.js installed
- DeepSeek API key from [https://platform.deepseek.com](https://platform.deepseek.com)

## 1. Configure environment

Create a `.env` file in the project root:

```
DEEPSEEK_API_KEY=sk-your_deepseek_api_key
PORT=3001
```

Optional:

```
DEEPSEEK_MODEL=deepseek-chat
```

### Static hosting (Vercel) without Express

If only the frontend is deployed, set a Vite env var so the browser can call DeepSeek directly:

```
VITE_DEEPSEEK_API_KEY=sk-your_deepseek_api_key
```

**Note:** `VITE_*` keys are visible in the client bundle. Prefer running the Express server with `DEEPSEEK_API_KEY` whenever possible.

## 2. Run locally

**Both frontend + API (recommended):**

```bash
npm run dev:all
```

Or separately:

```bash
npm run dev      # Vite on :5173 (proxies /api → :3001)
npm run server   # Express DeepSeek proxy on :3001
```

## How it works

1. Visitor messages go to `POST /api/chat` (Vite proxy in development).
2. The server calls DeepSeek (`deepseek-chat`) with a system prompt that includes the full Tidyzon knowledge base from `src/data/tidyzon-knowledge-base.js`.
3. Off-topic questions are refused; only Tidyzon-related answers are allowed.
4. If the API is unavailable, the widget falls back to a local keyword knowledge base.

## Knowledge base coverage

The assistant is loaded with data aligned to the live site:

- Company story, mission, vision, contact, hours
- All car packages (Speed Interior/Full, Deluxe, Premium, Biofluids) + trash bin cleaning
- Team / board members from the Teams page
- Booking, apps, provider signup, FAQs, careers, legal page pointers

When you change prices or copy on the site, update `src/data/tidyzon-knowledge-base.js` so answers stay accurate.

## Try asking

- "What services do you offer?"
- "How much is the Deluxe package?"
- "Tell me about Biofluids"
- "How do I become a provider?"
- "Who is on the team?"

Off-topic (e.g. weather, politics) should be politely declined.

## Security

- Never commit `.env`
- Prefer `DEEPSEEK_API_KEY` on the server over `VITE_DEEPSEEK_API_KEY`
- Monitor usage and set limits in the DeepSeek dashboard
