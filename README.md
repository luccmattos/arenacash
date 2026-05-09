# ArenaCash — onboarding MVP prototype (React)

Interactive prototype for the Q2 onboarding activation flow. Visual tokens follow **ArenaCash design system v3** (training kit `design-system-arenacash.md`).

## Live demo (GitHub Pages, sem GitHub Actions)

O site estático publicado fica na pasta **`docs/`** (resultado de `npm run build:pages`). O GitHub Pages pode usar **Deploy from a branch** em **`/docs`**, sem workflow.

1. **Settings → Pages → Build and deployment**
2. **Source:** *Deploy from a branch*
3. **Branch:** `main` · **Folder:** `/docs` (não use `/(root)` com o código-fonte — a página fica em branco)

**Repository:** [github.com/luccmattos/arenacash](https://github.com/luccmattos/arenacash)  
**URL:** [https://luccmattos.github.io/arenacash/](https://luccmattos.github.io/arenacash/)

### Atualizar o site após mudanças no código

```bash
npm run build:pages
```

Faça commit da pasta `docs/` e push. O `base` do Vite continua `/arenacash/`; o `postbuild` de cópia gera `docs/404.html` para rotas do React Router.

## Run locally

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173/arenacash/`.

## Build (local / preview)

```bash
npm run build
npm run preview
```

`npm run build` gera `dist/`; `npm run build:pages` gera **`docs/`** para o Pages.

## Stack

- React 19 + TypeScript + Vite
- React Router — rotas sob basename `/arenacash`

## Scope

Prototype only: no backend, no analytics instrumentation. UI em português; código e comentários em inglês.
