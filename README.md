# Zikri Haykal — Portfolio

React + TypeScript + Vite, vanilla CSS, Framer Motion, Lucide.

```bash
npm install --legacy-peer-deps
npm run dev      # http://localhost:5173
npm run build    # output in dist/
```

## Editing content
All content lives in `src/data/content.ts` (contact links, stats, experience, skills, certifications, projects).

- Screenshots: put files in `public/projects/<slug>/` and list them in `screenshots: ['/projects/<slug>/1.png']`. The first one replaces the abstract cover automatically.
- CV: put the PDF in `public/cv-zikri-haykal.pdf`.
- Hide the "Open to opportunities" badge: `site.openToWork = false`.

## Deploy
Vercel: import the repo; `vercel.json` handles SPA routes (`/projects/*`). Update the canonical / og:url in `index.html` to your real domain.
