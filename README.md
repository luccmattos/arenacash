# ArenaCash — onboarding MVP prototype (React)

Interactive prototype for the Q2 onboarding activation flow. Visual tokens follow **ArenaCash design system v3** (training kit `design-system-arenacash.md`).

## Live demo (GitHub Pages)

After CI runs on `main`: **[https://luccmattos.github.io/arenacash/](https://luccmattos.github.io/arenacash/)**

**Repository:** [github.com/luccmattos/arenacash](https://github.com/luccmattos/arenacash)

### One-time GitHub settings

1. Repo **Settings → Pages → Build and deployment**
2. Source: **GitHub Actions** (not “Deploy from a branch”).

The workflow [.github/workflows/deploy-github-pages.yml](.github/workflows/deploy-github-pages.yml) builds with `base: /arenacash/` and copies `index.html` to `404.html` so deep links work on Pages.

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
