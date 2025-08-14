# BrandSync — Clean Next.js Starter

Ultra-minimal Next.js 14 App Router project. No database, no env vars.
Perfect to deploy on Vercel in 1 minute, then iterate.

## Run locally
```bash
npm i
npm run dev
# open http://localhost:3000
```

## API
- `GET /api/health` → `{ ok: true }`
- `GET /api/leads` → returns mock data
- `POST /api/leads` → echoes payload (mock)

## Next steps
- Add a real DB (Neon + Prisma)
- Add auth (Auth.js)
- Move mock endpoints to real services
