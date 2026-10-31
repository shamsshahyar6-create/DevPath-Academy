# Code Workshop — the complete course

A bilingual (Persian/English), hands-on web development course and learning workspace. It starts with the developer toolchain and ends with a tested, accessible, deployed capstone.

**8 weeks · 42 lessons · 42 quizzes · full-course progress tracking**

## What is inside

| Week | Topic                                                                                               |
| ---- | --------------------------------------------------------------------------------------------------- |
| 1    | A Developer’s Toolkit — npm, Vite, Tailwind, ESLint, DevTools, Git, deployment, AI review           |
| 2    | Build a Website — semantic HTML, responsive Tailwind, JavaScript, the DOM, storage, a final project |
| 3    | Deeper JavaScript — functions, scope, closures, arrays, objects, modules, errors                    |
| 4    | Live Data & APIs — HTTP, JSON, promises, `async/await`, loading/error/empty states, normalization   |
| 5    | Components, State & UX — component thinking, single source of truth, forms, accessibility           |
| 6    | Quality, Testing & Performance — breakpoints, Vitest, DOM tests, Core Web Vitals, GitHub Actions    |
| 7    | TypeScript & Tooling — types, unions, generics, narrowing, DOM typings, strict migration            |
| 8    | Capstone & Launch — scope, architecture, security and privacy, SEO, deployment, portfolio           |

Every lesson includes bilingual goals, Persian explanations of technical terms, a step-by-step task, a small code example, a practice checklist, and a quiz.

## Features

- Persian (RTL) and English (LTR) interface with saved language choice per session.
- Light and dark theme, following the system preference on first visit.
- Per-lesson practice and quiz progress, week progress, and overall course percentage.
- Full-course milestones plus the original Week 1 submission checklists and copyable PR template.
- Progress export/import as JSON and a two-step local reset.
- Searchable lesson glossary.
- Accessible focus styles, skip link, semantic landmarks, and reduced-motion support.
- Content validation, unit tests, lint, production build, and CI.

## Run locally

Requirements: Node.js 22+ and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (default `http://localhost:3000`).

## Scripts

| Script                  | Purpose                                                 |
| ----------------------- | ------------------------------------------------------- |
| `npm run dev`           | Start the Vite dev server.                              |
| `npm run build`         | Build production assets into `dist/`.                   |
| `npm run preview`       | Serve the production build locally.                     |
| `npm run lint`          | Run ESLint with zero warnings allowed.                  |
| `npm run format`        | Format the project with Prettier.                       |
| `npm run test`          | Run the Vitest content tests.                           |
| `npm run check:content` | Validate week/lesson/checklist data with Node.          |
| `npm run check`         | Lint, test, validate content, and build in one command. |

## Project structure

```text
index.html                 HTML shell, metadata, theme bootstrap
public/                    favicon, manifest, robots.txt
src/main.js                UI, routing state, progress, theme, import/export
src/styles.css             Tailwind import, layout, components, dark theme
src/content/course.js      Weeks 1–2 (foundation)
src/content/advanced-weeks.js  Weeks 3–8 (advanced curriculum)
src/content/checklists.js  Daily, PR, and submission checklists
src/content/course.test.js Vitest content tests
src/exercises/lint-fix.js  Fixed lint exercise
scripts/validate-content.mjs  Node content validation
exercises/                 Week 1 evidence and practice package
.github/workflows/ci.yml   CI: install, lint, test, validate, build
netlify.toml / vercel.json Deployment configuration
```

## Environment variables

`VITE_APP_TITLE` sets the visible course title. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Anything starting with `VITE_` is embedded in the browser bundle and is **public**. Never put API keys, tokens, or personal data in a `VITE_` variable. Real secrets belong on a server, for example a serverless function or API proxy.

## Deploy

The repository is ready for either host:

- **Netlify:** build command `npm run build`, publish directory `dist` (also in `netlify.toml`).
- **Vercel:** framework preset Vite, output `dist` (also in `vercel.json`).

After deploying, open the live URL in a private window and confirm the CSS, JavaScript, favicon, and images load.

## Important notes

- Progress is stored in `localStorage` only. There are no accounts or cloud sync.
- Checklist boxes are honest self-reporting, not verified evidence.
- The course’s AI rule is reviewer-only: AI may explain and review, but the learner writes and edits the project code.
- Lesson examples are displayed for study; the site does not execute them.
- `node_modules/`, `dist/`, and `.env` are ignored by Git. `package-lock.json` is committed.
