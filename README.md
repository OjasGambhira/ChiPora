# Ganesh — Personal Profile Site

A personal profile website built with Next.js 14 (Pages Router, TypeScript),
Tailwind CSS, and Framer Motion.

## Stack

- Next.js 14 + TypeScript
- Tailwind CSS (custom design tokens: ink / parchment / moss / brass palette)
- Framer Motion (hero entrance sequence, scroll-linked timeline, in-view reveals)
- Fraunces (display serif) + IBM Plex Sans / IBM Plex Mono via Google Fonts
- Dark mode with `localStorage` persistence and system-preference detection

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy

The project is a standard Next.js app and deploys as-is to Vercel, Netlify,
or any Node host:

- **Vercel:** import the repository at vercel.com/new — no configuration needed.
- **Netlify:** use the official Next.js runtime plugin.
- **Self-hosted:** `npm run build && npm run start` behind a reverse proxy.

## Structure

```
components/   Reusable section components (Hero, About, Experience, Skills,
              Projects, Photography, Fitness, Writing, Contact, Footer, Nav)
lib/          Content data (lib/data.ts) and the theme context (lib/theme.tsx)
pages/        index.tsx, _app.tsx, _document.tsx
public/       Favicon, background grain texture, and gallery scene artwork (SVG)
styles/       globals.css — design tokens, base styles, and the "spine" motif
```

## Content

All copy and structured content (skills, timeline, projects, gallery,
fitness principles, writing pillars) lives in `lib/data.ts` — edit that file
to update the site without touching component code.
