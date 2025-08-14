# BrandSync AI — MVP Starter

Stack: Next.js (App Router) + Prisma/Postgres + BullMQ/Redis + Nodemailer + Stripe (placeholder) + OpenAI (placeholder).

## Quick start
1. **Install deps**: `npm i`
2. **Start DB/Redis**: `docker compose up -d`
3. **Create .env** from `.env.example` and set your keys.
4. **Push schema**: `npm run db:push`
5. **Dev server**: `npm run dev` (http://localhost:3000)
6. **Worker** (jobs): `npm run worker`

## API
- `GET /api/health`
- `GET /api/leads` — list
- `POST /api/leads` — create (JSON body)

## Next steps
- Implement OAuth (Auth.js) and Stripe billing.
- Add endpoints: `/api/outreach/start`, `/api/proposals`, `/api/brief`.
- Connect Gmail/Meta APIs for email/DM.
- Implement AI negotiator in `src/lib/llm.ts` with your policy.
