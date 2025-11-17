# Gift a Report – Standalone Page

This package isolates the Gift-a-Report checkout experience from the main Valuegraphics site while keeping the original layout, styling, and dependencies intact.

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3
- Shadcn UI primitives (Button, Form, Input, Checkbox)
- Stripe Checkout + Axios API helpers

## Getting Started

```bash
cd gift-a-report-app
npm install
npm run dev
```

The app boots at `http://localhost:3000` and renders the Buyer → Recipient flow on the root route.

## Environment Variables

Create a `.env.local` by copying `.env.example`. You must provide valid values for:

- `NEXT_PUBLIC_HOST_API_CLIENT_URL`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_VALUES_IDENTIFIER_APP`
- `NEXT_PUBLIC_CLIENT_BASE_URL`
- `NEXT_PUBLIC_COACH_PORTAL_URL`
- `NEXT_PUBLIC_PARTNERO_PROGRAM_ID`
- `NEXT_PUBLIC_AI_API_KEY`

The API helpers and checkout handler depend on these keys to talk to the production services the original app used.

## Project Structure

- `app/` – Next.js App Router entry points (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/gar` – Buyer & Recipient flows copied from the main repo
- `components/ui` – Shadcn primitives used across the flow
- `lib/` – Axios, Stripe, and toast utilities
- `utils/` – Shared constants and helpers
- `public/` – Original image assets, including `images/squares.png`

## Linting & Build

```bash
npm run lint
npm run build
```

Both commands use the same package versions as the source project to minimize drift.
