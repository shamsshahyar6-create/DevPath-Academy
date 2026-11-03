# Code Workshop — the complete 16-week program

A bilingual (Persian/English), hands-on frontend program and learning workspace. It starts with the developer toolchain, moves through strict TypeScript and React, and ends with a tested, accessible, deployed Next.js capstone.

**16 weeks · 3 phases · 3 gates · 69 lessons · full-course progress tracking**

## What is inside

| Phase | Weeks | Topic                                                                                    | Gate               |
| ----- | ----- | ---------------------------------------------------------------------------------------- | ------------------ |
| 1     | 1–5   | Tools and TypeScript — npm, Vite, strict TS, unions, data, fetch, AI as reviewer         | Gate 1, Tue 24 Nov |
| 2     | 6–13  | React and its libraries — React, Router, TanStack Query, TanStack Router, forms, testing | Gate 2, Wed 20 Jan |
| 3     | 14–16 | Next.js and the capstone — App Router, SEO, security, Lighthouse, RSS reader             | Gate 3, Thu 11 Feb |

| Week | Topic                                                                                     |
| ---- | ----------------------------------------------------------------------------------------- |
| 1    | A Developer’s Toolkit — npm, Vite, Tailwind, ESLint, DevTools, Git, deployment, AI review |
| 2    | TypeScript Basics — strict migration, rating component, FAQ accordion, models lab         |
| 3    | Unions and Narrowing — page states, tip calculator, newsletter form, tokens lab           |
| 4    | Data, Modules, and Tests — time dashboard, product cart, pure modules, Vitest suite       |
| 5    | HTTP, fetch, and Gate 1 — advice app, typed API, IP tracker gate, AGENTS.md lab           |
| 6    | React Basics and Tailwind in React — audit, rebuilds, notifications, pricing              |
| 7    | State — job listings with filters, product page, useReducer, context lab                  |
| 8    | Effects, Refs, Hooks, and Accessibility — countdown, modal, comments, a11y skill lab      |
| 9    | React Router and Context — REST Countries, loaders, URL state, pre-PR command             |
| 10   | TanStack Query — weather app, URL shortener, optimistic updates, MCP docs lab             |
| 11   | TanStack Router — Devjobs app, auth guards, code splitting, browser MCP lab               |
| 12   | Forms with React Hook Form and Zod — contact form, multi-step form, server errors, agent  |
| 13   | Testing, Deployment, and Gate 2 — filter tests, comments tests, Vercel, test plugin       |
| 14   | Next.js and SEO Metadata — planets site, rendering strategies, web vitals, SEO subagent   |
| 15   | Capstone Sprint 1 and Security — XSS fix, security headers, RSS reader, agent ticket      |
| 16   | Capstone Sprint 2, Quality, and Gate 3 — SEO pass, Lighthouse loop, final demo            |

Every week contains at least four complete lessons, including the project-heavy weeks and the AI labs. Every lesson includes bilingual goals, short concept notes, Persian explanations of technical terms, a step-by-step task, a small code example, a practice checklist, and a quiz.

## Features

- Persian (RTL) and English (LTR) interface with saved language choice per session.
- Light and dark theme, following the system preference on first visit.
- Per-lesson practice and quiz progress, week progress, and overall course percentage.
- Phase and gate overview plus full-course milestones, a submission checklist for every week, and the original Week 1 detailed requirements.
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
src/content/course.js      Assembles the 16 weeks, 3 phases, and program facts
src/content/week-01.js     Week 1 content
src/content/weeks-02-04.js Weeks 2–4 content
src/content/weeks-05-08.js Weeks 5–8 content
src/content/weeks-09-13.js Weeks 9–13 content
src/content/weeks-14-16.js Weeks 14–16 content
src/content/checklists.js  Daily, PR, and submission checklists
src/content/course.test.js Vitest content tests
src/exercises/lint-fix.js  Fixed lint exercise
scripts/validate-content.mjs  Node content validation
exercises/                 Week 1 evidence and practice package
.github/workflows/ci.yml   CI: install, lint, test, validate, build
netlify.toml               Deployment configuration
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
- **Vercel:** framework preset Vite, output `dist`.

After deploying, open the live URL in a private window and confirm the CSS, JavaScript, favicon, and images load.

## Important notes

- Progress is stored in `localStorage` only. There are no accounts or cloud sync.
- Checklist boxes are honest self-reporting, not verified evidence.
- AI rules follow the program stages: Reviewer in weeks 1–5 (no AI in Gate 1), Assistant in weeks 6–13 (no AI for the Gate 2 test), and Agent in weeks 14–16 (every diff reviewed by the learner).
- Lesson examples are displayed for study; the site does not execute them.
- `node_modules/`, `dist/`, and `.env` are ignored by Git. `package-lock.json` is committed.
