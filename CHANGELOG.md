# Changelog

All notable changes to this project are documented in this file.

The format follows the spirit of [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project uses version numbers from `package.json` when available.

## [Unreleased]

### Added
- Added this changelog to document project changes going forward.

### Changed
- Updated agent guidelines to require maintaining `CHANGELOG.md` with each project change.
- Updated agent guidelines to require a patch version bump before each commit unless explicitly skipped.
- Updated Astro from `6.1.5` to `6.3.7`.
- Bumped project version to `0.2.2`.

## [0.2.1]

### Changed
- Updated project documentation for the current portfolio setup.
- Moved pnpm overrides from `package.json` to `pnpm-workspace.yaml`.
- Added pnpm build approvals for native dependencies used by the Astro toolchain.
- Renamed Tailwind configuration from `tailwindconfig.mjs` to `tailwind.config.mjs`.
- Updated package version to `0.2.1`.

### Fixed
- Resolved package security vulnerabilities through dependency updates.
- Removed obsolete pnpm configuration from `package.json`.

### Removed
- Removed the `.vscode` directory from version control and ignored editor files.

## [0.2.0]

### Added
- Added a projects section to the home page.
- Added the `Packages` icon component.

### Changed
- Updated work experience content and presentation.
- Updated Badge and Experience components.
- Updated Astro and Tailwind CSS dependencies.
- Updated package version to `0.2.0`.

### Removed
- Removed standalone `about`, `contact`, and `project` pages.

## [0.1.0]

### Added
- Added work experience section to the portfolio.
- Added `Experience`, `ExperienceItem`, and `SectionContainer` components.
- Added `Briefcase` icon component.
- Added Flowbite/Tailwind-related styling for the experience timeline.

### Changed
- Updated header navigation and home page structure.
- Updated layout styling for the portfolio page.
- Updated package version to `0.1.0`.
- Refreshed repository agent guidelines.

## Pre-0.1.0

### Added
- Created the Astro portfolio project foundation.
- Added GitHub Pages deployment workflow.
- Added opencode GitHub workflow configuration.
- Added Tailwind CSS integration and global CSS.
- Added reusable layout, header, footer, badge, social network, and icon components.
- Added favicon assets.
- Added initial content for the personal portfolio home page.
- Added temporary `mylove` page and related components/assets during development.
- Added repository guidelines in `AGENTS.md`.
- Added README documentation for setup, scripts, and project structure.

### Changed
- Configured Astro site settings for GitHub Pages.
- Iterated on the home page, footer, header, favicon, and responsive behavior.
- Updated Astro across several versions, including adoption of Astro 6.
- Updated dependency lockfile multiple times.
- Updated pnpm workspace settings for allowed native build dependencies.

### Fixed
- Improved responsive behavior in the header.
- Removed console/debug remnants from the header.

### Removed
- Removed the default Astro starter `Welcome` component and unused starter assets.
- Removed temporary `mylove` page, related components, and related assets.
- Removed an unused release workflow after it was added experimentally.
