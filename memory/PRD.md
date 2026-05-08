# PRUMO Soalheiro, Lda. — Website PRD

## Original problem statement
Build a marketing website for PRUMO Soalheiro, Lda. (Portuguese construction
company). 5 pages mirroring the provided design mockups (Home, Sobre nós,
Serviços, Projetos, Orçamento). Tech stack: Next.js (latest), Tailwind CSS,
shadcn-style components. Anton for titles, Helvetica/Roboto for body. Primary
gold #e3ad3b, dark #100b00, light grays #dddddd / #ebebeb. Responsive with a
PT/EN language switcher.

## User personas
- Property owner / promoter looking for a construction partner.
- Public sector procurement officer evaluating contractors.
- Architects looking for a delivery partner for their project.

## Core requirements (static)
- 5 pages: `/`, `/sobre`, `/servicos`, `/projetos`, `/orcamento`.
- Header with logo, nav, PT/EN toggle, mobile burger menu.
- Footer with logo, copyright, "Entrar em contacto" link.
- Quote form (`/orcamento`) submits to backend and persists in MongoDB.
- Faithful to design mockups (Anton uppercase titles, gold eyebrow pills, dark
  hero overlays, gold CTAs).
- Fully responsive (mobile / tablet / desktop).

## Architecture
- **Frontend**: Next.js 14 App Router (`/app/frontend/src/app`) — JS files,
  Tailwind, lucide-react icons. Translations centralised in
  `/app/frontend/src/lib/i18n.js`. Language state in
  `/app/frontend/src/components/LanguageProvider.js` (React Context +
  localStorage). Reusable `Header`, `Footer`, `PageHero`, `Logo` components.
- **Backend**: FastAPI (`/app/backend/server.py`) with `/api/health`,
  `POST /api/quote`, `GET /api/quote`. MongoDB via motor (`prumo_website` DB,
  `quotes` collection).
- **Supervisor**: backend on 8001, frontend on 3000 (`yarn start` runs
  `next dev`).

## Implemented (2026-01)
- All 5 pages built and matching mockups.
- PT/EN language switcher with localStorage persistence.
- Quote form end-to-end (frontend → FastAPI → MongoDB), validated by Pydantic.
- Mobile burger menu with full nav and language toggle.
- Reusable inline SVG logo recreating the PRUMO mark.
- Tested with testing_agent_v3: backend 7/7 pytest passing, frontend e2e flows
  passing, no critical issues.

## Notes / placeholders
- Real PRUMO logo PNG and project photographs were not supplied; the site uses
  an SVG recreation of the logo and curated Unsplash construction imagery as
  placeholders. Easily swappable in `/app/frontend/src/components/Logo.js` and
  `/app/frontend/src/lib/images.js`.
- Helvetica World replaced by Roboto (free, close in feel) per user approval.

## Backlog / next tasks (P1 / P2)
- Replace Unsplash imagery with real PRUMO photography when supplied.
- Replace placeholder copy in `i18n.js` with the company's final wording.
- Admin view for received quote requests (currently exposed only via
  `GET /api/quote`).
- Email notification on new quote (Resend / SendGrid integration).
- SEO: Open Graph + structured data (LocalBusiness, ConstructionService).
- Analytics (Plausible / GA4).
