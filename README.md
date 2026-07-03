# Shahenda Shaheen — Portfolio

Front-End & Mobile Developer portfolio, built as a real "Now Showing" cinema
title card — a nod to the CineVerse projects. Next.js 14 (App Router),
TypeScript, Tailwind CSS, Framer Motion, Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you deploy — 4 things to check

1. **Resume**: `public/Shahenda-Shaheen-CV.pdf` is already included.
2. **Screenshots**: drop real screenshots in `public/projects/` — see
   `public/projects/README.txt` for exact filenames. Until a file exists,
   that card shows a themed poster placeholder instead of a broken image.
3. **Domain for SEO**: once you have your real Vercel URL, replace
   `SITE_URL` in these 3 files (search for `TODO: replace with your real
   deployed domain`): `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`.
4. **LuxeShop repo**: already pointed at
   `github.com/SHAHENDA78/LuxeShop-React`.

## Production checklist already in place

- **Sticky, blurred nav** with active-section highlighting (IntersectionObserver)
- **Loading splash** ("Rolling the film…") on first paint, under 1s
- **SEO**: full metadata, Open Graph, Twitter card, `robots.ts`, `sitemap.ts`
- **Images** served through `next/image` (auto lazy-loading, correct sizing) —
  good for Lighthouse Performance
- **Fonts** self-hosted via `next/font` — no external font request, good for
  Lighthouse Performance
- **Dark theme** throughout, one visual identity, no light/dark flash
- **Reduced motion** respected (`prefers-reduced-motion`) — good for
  Lighthouse Accessibility
- **Responsive** from 360px mobile up to wide desktop

## Deploy

Push to GitHub, then import the repo on https://vercel.com — zero config
needed, Vercel detects Next.js automatically.

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/SHAHENDA78/portfolio.git
git push -u origin main
```

## Structure

- `app/` — root layout, global styles, the single page that assembles sections
- `components/` — Nav, Hero, About, Skills, Projects, Experience, Education,
  Contact, Footer, and the signature `FilmStripDivider`
- `lib/data.ts` — all real content (profile, skills, projects, experience,
  education) in one place — edit this file to add a new project or update
  anything, no need to touch component code
