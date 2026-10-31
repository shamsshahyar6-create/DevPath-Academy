# npm practice

This folder is the Week 1 npm exercise. It has one runtime dependency, one development dependency, and three runnable scripts.

## Install and run

```bash
npm install
npm run check
npm run list
npm run format
```

## What each script does

- `check` imports `dayjs` (a runtime dependency) and prints today's date. It proves the package is installed where the application can use it.
- `list` reads this folder's `package.json` and prints its scripts, dependencies, and dev dependencies.
- `format` runs Prettier (a development dependency) on this README.

## Dependency placement

| Package    | Section           | Why                                                              |
| ---------- | ----------------- | ---------------------------------------------------------------- |
| `dayjs`    | `dependencies`    | The running program imports it.                                  |
| `prettier` | `devDependencies` | It is only a development tool; the deployed app does not use it. |

`npm install` installs both. `npm install -D <package>` adds a development dependency.
