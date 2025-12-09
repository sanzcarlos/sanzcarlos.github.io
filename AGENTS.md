# Repository Guidelines

## Project Structure & Module Organization
All source resides in `src/`. Pages live under `src/pages/` and follow kebab-case folder names such as `about/index.astro`. Reusable UI goes in `src/components/` with PascalCase names, while shared wrappers belong in `src/layouts/`. Images or SVGs used by components sit in `src/assets/`, and any static files exposed verbatim belong in `public/`. Tests, when created, should mirror the feature tree under `tests/` (e.g., `tests/pages/home.spec.ts`). Production builds output to `dist/`, so never edit that folder manually.

## Build, Test, and Development Commands
Run `pnpm install` once per environment to sync dependencies. Use `pnpm dev` to start the Astro dev server on `http://localhost:4321` for rapid iteration. Execute `pnpm build` to emit an optimized bundle in `dist/`, and `pnpm preview` to serve that build locally for smoke checks. `pnpm astro check` runs the official diagnostics and TypeScript validation enforced by `tsconfig.json`.

## Coding Style & Naming Conventions
Follow 4-space indentation and concise line lengths. Prefer declarative, server-rendered Astro components, introducing islands only when client interactivity is essential. Components use PascalCase filenames, pages keep kebab-case, and asset names use lowercase-hyphen patterns. Keep modules focused, export typed interfaces when sharing data, and resolve lint or type warnings before committing.

## Testing Guidelines
No runner ships today, but choose Vitest for units (e.g., `tests/components/HeroBanner.spec.ts`) and Playwright for route smoke tests (e.g., `tests/pages/index.spec.ts`). Mirror the source structure, keep assertions minimal yet meaningful, and document any required fixtures. Include a short test plan in PRs describing how to run the suite.

## Commit & Pull Request Guidelines
Use Conventional Commits (`feat:`, `fix:`, `docs:`, etc.) with scoped messages when possible, such as `feat(pages): add about hero`. Each PR should describe motivation, link relevant issues, attach screenshots or GIFs for UI deltas, and list verification steps (`pnpm build`, page URLs). Keep diffs focused, update docs alongside code, and resolve review feedback promptly.

## Security & Configuration Tips
Never commit secrets; load runtime configuration from `.env` files (already git-ignored) and consume values via Astro’s environment APIs. Favor static assets over heavy client bundles, and keep `astro.config.mjs` minimal to maintain fast builds. Validate third-party links before merging to avoid broken or malicious references.
