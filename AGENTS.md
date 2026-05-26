# Repository Guidelines

## Purpose
This repo is an Astro Starter Kit (basics) used as the foundation for a static website. Keep changes small and compatible with the Astro build pipeline.

## Project Structure & Module Organization
All source resides in `src/`. Pages live under `src/pages/` and follow kebab-case folder names such as `about/index.astro`. Reusable UI goes in `src/components/` with PascalCase names, while shared wrappers belong in `src/layouts/`. Images or SVGs used by components sit in `src/assets/`, and any static files exposed verbatim belong in `public/`. Tests, when created, should mirror the feature tree under `tests/` (e.g., `tests/pages/home.spec.ts`). Production builds output to `dist/`, so never edit that folder manually.

## Setup & Dependencies
- Install Node dependencies: `pnpm install`

## Build, Test, and Development Commands
- Dev server: `pnpm dev` (http://localhost:4321)
- Build: `pnpm build`
- Preview build: `pnpm preview`
- Diagnostics/TypeScript: `pnpm check` or `pnpm astro check`

## Coding Style & Naming Conventions
Follow 4-space indentation and concise line lengths. Prefer declarative, server-rendered Astro components, introducing islands only when client interactivity is essential. Components use PascalCase filenames, pages keep kebab-case, and asset names use lowercase-hyphen patterns. Keep modules focused, export typed interfaces when sharing data, and resolve lint or type warnings before committing.

## Testing Guidelines
No runner ships today, but choose Vitest for units (e.g., `tests/components/HeroBanner.spec.ts`) and Playwright for route smoke tests (e.g., `tests/pages/index.spec.ts`). Mirror the source structure, keep assertions minimal yet meaningful, and document any required fixtures. Include a short test plan in PRs describing how to run the suite.

## Commit & Pull Request Guidelines
Use Conventional Commits (`feat:`, `fix:`, `docs:`, etc.) with scoped messages when possible, such as `feat(pages): add about hero`. Unless explicitly instructed otherwise, bump the project patch version before every commit. Each PR should describe motivation, link relevant issues, attach screenshots or GIFs for UI deltas, and list verification steps (`pnpm build`, page URLs). Keep diffs focused, update docs alongside code, and resolve review feedback promptly. Update `CHANGELOG.md` for every user-facing, configuration, dependency, workflow, or documentation change. If a PR template exists in `.github/pull_request_template.md`, follow it.

## Review Changes
Recommended commands:
- `git status`
- `git diff`
- `git diff --staged`
- `git log -n 10 --oneline`

Look for:
- Breaking changes or behavioral regressions
- Performance regressions and excessive client-side bundles
- Security issues, secrets, or unsafe third-party links

## Security & Configuration Tips
Never commit secrets; load runtime configuration from `.env` files (already git-ignored) and consume values via Astro’s environment APIs. Favor static assets over heavy client bundles, and keep `astro.config.mjs` minimal to maintain fast builds. Validate third-party links before merging to avoid broken or malicious references.

## Definition of Done
- Build passes locally with `pnpm build`
- Relevant checks/tests executed or documented as not available
- No new lint/type warnings
- Docs updated if behavior or configuration changes
- `CHANGELOG.md` updated with the change or explicitly left unchanged when there is no project impact
- Project patch version bumped before committing, unless explicitly instructed otherwise
- Screenshots captured for UI changes
- Diff reviewed end-to-end for secrets and regressions

## Checklist
- [ ] Scope is minimal and focused
- [ ] Tests or checks run (or noted as not available)
- [ ] No secrets or credentials introduced
- [ ] Docs/README updated if needed
- [ ] CHANGELOG updated for project changes
- [ ] Patch version bumped before commit unless explicitly skipped
- [ ] PR description includes summary, test steps, and risks

## Agent Playbook
### Before Changing Code
- Inspect project structure and existing patterns in `src/`
- Read `README.md` for repo intent and commands
- Check `package.json` scripts for lint/test/build workflows

### While Changing Code
- Keep changes small and traceable
- Update or add tests/docs as needed
- Add a concise entry to `CHANGELOG.md` under `Unreleased` for each project change
- Avoid introducing new dependencies unless required

### Before Opening a PR
- Run `pnpm build` and `pnpm check` if available
- Review the full diff and remove unused files
- Ensure no secrets/credentials are present
