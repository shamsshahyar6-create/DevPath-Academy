# Package Detective — dayjs

**Repository studied:** https://github.com/iamkun/dayjs
**Files used:** `package.json`, `package-lock.json` (repository publishes with npm), `README.md`
**Checked on:** October 2026 (repository `dev` branch)

dayjs is a small date library. All answers below come from the repository's own files, not from memory.

---

## 1. What commands can I run, and what does each one do?

Source: `package.json` → `scripts`

| Command                  | What it does                                                                                             |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| `npm test`               | Runs the timezone tests in four timezones and then the full Jest suite with 100% line coverage required. |
| `npm run test-tz`        | Runs only `test/timezone.test` with Jest and no coverage.                                                |
| `npm run test-tz-plugin` | Runs only the timezone-plugin tests.                                                                     |
| `npm run lint`           | Runs ESLint on `src/*`, `test/*`, and `build/*`.                                                         |
| `npm run prettier`       | Formats the Markdown files in `docs/`.                                                                   |
| `npm run babel`          | Compiles `src/` to the `esm/` folder with Babel.                                                         |
| `npm run build`          | Builds the distributable files, then runs the size check.                                                |
| `npm run size`           | Runs `size-limit` and `gzip-size` against `dayjs.min.js`.                                                |
| `npm run sauce`          | Starts Karma for Sauce Labs browser tests.                                                               |
| `npm run test:sauce`     | Runs the Sauce Labs suites in four browsers.                                                             |

The tools behind those commands:

- **Jest** — a test runner for JavaScript. It executes test files and reports pass/fail.
- **ESLint** — a linter. It reads code without running it and reports suspicious or inconsistent lines.
- **Prettier** — a formatter. It changes layout and spacing, not program logic.
- **Babel** — a compiler/transpiler. It converts modern JavaScript into code older browsers can run.
- **Rollup** — a bundler. It combines modules and assets into optimized files.
- **size-limit / gzip-size** — measure the final file size and fail if it grows past a limit.
- **Karma** — a browser test runner. Unlike Jest (which can run in Node.js), Karma runs tests in a real browser.
- **cross-env** — sets environment variables the same way on Windows, macOS, and Linux.

These are developer tools. An end user who installs `dayjs` does not run them.

---

## 2. Which dependencies ship to users, and which are development-only?

Source: `package.json` → `dependencies` and `devDependencies`

**Runtime dependencies:** none. dayjs has **zero** runtime dependencies, which is one of its selling points.

**Development-only tools** include:

`@babel/cli`, `@babel/core`, `@babel/node`, `@babel/preset-env`, `babel-core`, `babel-jest`, `babel-plugin-external-helpers`, `cross-env`, `eslint`, `eslint-config-airbnb-base`, `eslint-plugin-import`, `eslint-plugin-jest`, `gzip-size-cli`, `jasmine-core`, `jest`, `karma`, `karma-jasmine`, `karma-sauce-launcher`, `mockdate`, `moment`, `moment-timezone`, `ncp`, `pre-commit`, `prettier`, `rollup`, `rollup-plugin-babel`, `rollup-plugin-terser`, `size-limit`, `typescript`.

Why the split matters:

- `dependencies` are installed in production because the running app imports them.
- `devDependencies` are installed for building, testing, linting, and publishing. They are normally skipped with `npm install --omit=dev` in production.

---

## 3. Which version ranges could update, and to what?

Versions follow `major.minor.patch`:

- **major** — incompatible change: `5.2.1 → 6.0.0`
- **minor** — new feature, backward compatible: `5.2.1 → 5.3.0`
- **patch** — bug fix, backward compatible: `5.2.1 → 5.2.2`

Source: `package.json` → `devDependencies`

### Caret ranges (`^`)

`"jest": "^22.4.3"` may update to any `22.x.x` version, for example:

| Version    | Allowed? | Why                                        |
| ---------- | -------- | ------------------------------------------ |
| `22.4.4`   | Yes      | Same major, higher patch.                  |
| `22.4.99`  | Yes      | Same major, higher patch.                  |
| `22.5.0`   | Yes      | Same major, higher minor.                  |
| `22.99.99` | Yes      | Same major.                                |
| `23.0.0`   | No       | Major changed → breaking changes possible. |

The same rule applies to `"eslint": "^4.19.1"`, `"karma": "^2.0.2"`, and `"karma-jasmine": "^1.1.2"`.

### Pre-release ranges

`"@babel/cli": "^7.0.0-beta.44"` is a pre-release. Under caret rules it can move to another `7.0.0-beta.*` build such as `7.0.0-beta.99`, but not to `7.1.0` or `8.0.0` while the version is pre-release.

### Tilde ranges (`~`)

The repository does not use `~`, but it does pin `"moment": "2.29.2"` (an exact version). If that line were `"moment": "~2.29.2"`, it could update to `2.29.9` but **not** to `2.30.0`, because `~` only allows patch updates.

### Exact pins

`"moment": "2.29.2"` and `"moment-timezone": "0.5.31"` are exact. They only install that exact version until a human edits `package.json`.

---

## 4. Which Node version does the project expect?

Source: `package.json` → `engines`; `.nvmrc`

- `package.json` has **no `engines` field**.
- The repository has **no `.nvmrc`** (requesting it returns 404).

So the repository does not declare a Node version. That means contributors must infer it from the tooling (`jest@22`, `eslint@4`, `rollup@2` all work on older Node versions) or from CI configuration. This is a real gap: adding `engines` and `.nvmrc` would make local setup reproducible.

---

## Intermediate

### `^` and `~` with a real "could become" version

- Caret: `"eslint": "^4.19.1"` could become `4.20.0` or `4.19.9`, but never `5.0.0`.
- Tilde: if `"moment": "2.29.2"` were written as `"~2.29.2"`, it could become `2.29.9`, but never `2.30.0`.

### The lockfile's job in one sentence

A lockfile records the exact version of every installed package (and its dependencies) so that every machine and every CI run installs the same tree.

---

## Advanced

### Command 1 — verify the runtime dependency answer

```bash
$ npm view dayjs@1.11.13 dependencies --json
{}
```

The empty object confirms dayjs has no runtime dependencies.

### Command 2 — verify a version range answer

```bash
$ npm view dayjs@1.11.13 devDependencies.jest
^22.4.3
```

This confirms the Jest range quoted from `package.json`.

A third useful check:

```bash
$ npm view dayjs version
1.11.23
```

The registry's current release is `1.11.23`, which is within the `1.11.x` line.

### A wrong answer, and why it was wrong

At first I wrote that `^7.0.0-beta.44` could update to `7.1.0`. That is wrong: for a pre-release version, caret does **not** allow a different minor while the package is still pre-1.0/pre-release; it stays on the same `7.0.0-beta.*` line. The correct statement is that the beta number may change, but `7.1.0` and `8.0.0` are outside the range.

I also initially said dayjs ships Jest to users. That was wrong because Jest appears under `devDependencies`, not `dependencies`.
