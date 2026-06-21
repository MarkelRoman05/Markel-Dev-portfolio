# markel-dev-portfolio — AGENTS.md

## Stack
- **Astro v6** (static SSG, no SSR adapter)
- **Tailwind CSS v3** with `darkMode: 'class'`
- **AOS** for scroll animations, **Microsoft Clarity** for analytics

## Commands
```sh
npm run dev       # astro dev (localhost:4321)
npm run build     # astro build → dist/
npm run preview   # astro preview
```
No test, lint, or typecheck commands exist — skip validation scripts entirely unless asked.

## Structure
- **Components**: 9 pure `.astro` files in `src/components/` (no React/Vue/Svelte)
- **Pages**: `index.astro` (single-page layout), `404.astro`, `proyectos/[slug].astro`
- **Dynamic routes**: `proyectos/[slug]` uses `getStaticPaths()` from `src/data/projects.ts` — follow this pattern for new dynamic routes
- **Data**: mostly inline in components; only `src/data/projects.ts` as separate data file
- **Styles**: `src/styles/global.css` (3 Tailwind directives); custom utilities in `Layout.astro` `<style is:global>`
- **Layout**: `src/layouts/Layout.astro` wraps all pages (theme init, AOS, analytics, global styles)

## Dark mode
- Tailwind `class` strategy: `dark:` variants everywhere
- localStorage key: `MARKEL05_PORTFOLIO:THEME` (values: `"dark"` / `"light"`)
- Toggle: `#theme-toggle` button dispatches `CustomEvent("themeToggle")` — handled in Layout

## Content
- **All UI text is in Spanish** — do not translate or anglicize
- No CMS, no content collections, no markdown content — edit inline arrays and `projects.ts` directly

## Deployment
- GitHub Actions (`deploy.yml`): SSH deploy on push to `master` via `appleboy/ssh-action`
- Docker multi-stage: `node:lts-alpine` build → `nginx:alpine` serve
- Generated types in `.astro/`, build output in `dist/` — both gitignored

## Tooling
- Full Speckit SDD framework in `.specify/`, `.github/agents/`, `.github/prompts/` — reactive when present
- VSCode: recommends `astro-build.astro-vscode` extension; launch config for dev server
