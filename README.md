# sanzcarlos.github.io

Personal portfolio site for Carlos Sanz. Built with Astro and Tailwind CSS,
with reusable components and a lightweight static build.

## Tech Stack

- Astro 6 beta
- Tailwind CSS 4
- Flowbite
- TypeScript
- Mulish variable font

## Getting Started

```sh
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

## Scripts

| Command         | Action                                     |
| :-------------- | :----------------------------------------- |
| `pnpm dev`      | Start dev server                           |
| `pnpm build`    | Build to `./dist/`                         |
| `pnpm preview`  | Preview the production build               |
| `pnpm check`    | Run Astro type checks                      |
| `pnpm astro`    | Run Astro CLI commands                     |

## Project Structure

```text
/
├── public/                 # Static assets served as-is
├── src/
│   ├── assets/             # Images and SVGs
│   ├── components/         # Reusable UI (PascalCase)
│   ├── layouts/            # Shared page wrappers
│   └── pages/              # Route entries (kebab-case)
└── package.json
```

## Notes

- Using Astro 6 beta while it is in preview.
- Main page: `src/pages/index.astro`
- Build output goes to `dist/`

## Known Warnings

`pnpm check` reports these warnings:

- `src/components/ExperienceItem.astro`: `ExperienceItemProps` declared but not used.
- `src/components/ExperienceItem.astro`: unused imports from `astro:actions`.
