# ArenaCash — onboarding MVP prototype (React)

Interactive prototype for the Q2 onboarding activation flow. Visual tokens follow **ArenaCash design system v3** (training kit `design-system-arenacash.md`).

## Live demo (GitHub Pages)

After CI runs on `main`: **[https://luccmattos.github.io/arenacash/](https://luccmattos.github.io/arenacash/)**

**Repository:** [github.com/luccmattos/arenacash](https://github.com/luccmattos/arenacash)

### GitHub Pages source (required — fixes blank page)

**Do not use “Deploy from a branch” at `/(root)`.** That publishes the **source** `index.html`, which loads `/src/main.tsx`. Browsers cannot run Vite/TSX directly, so the site stays **blank**.

You must publish the **built** app (`npm run build` → `dist/`). This repo does that via Actions.

1. Open **Settings → Pages → Build and deployment**.
2. Under **Source**, select **GitHub Actions** (not “Deploy from a branch”).
3. Save. Then open **Actions**, run **Deploy to GitHub Pages** (or push to `main`). Wait for green check.
4. Hard-refresh the live URL or wait ~1 minute for CDN.

If an old “Deploy from a branch” deployment still appears, switching to **GitHub Actions** replaces it.

The workflow [.github/workflows/deploy-github-pages.yml](.github/workflows/deploy-github-pages.yml) runs `npm ci`, `npm run build`, uploads `dist/`, and deploys. `base` is `/arenacash/`; `postbuild` copies `index.html` to `404.html` for SPA routes on Pages.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/arenacash/` (Vite dev server respects `base`).

## Build

```bash
npm run build
npm run preview   # serves dist with correct base
```

## Stack

- React 19 + TypeScript + Vite
- React Router — routes: `/`, `/verify-email`, `/kyc`, `/balance`, `/invest` (under basename `/arenacash`)

## Scope

Prototype only: no backend, no analytics instrumentation. UI copy is Brazilian Portuguese (`pt-BR`). Code identifiers and comments are in English.
