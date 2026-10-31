# Lint-fix exercise

The fixed version is in `src/exercises/lint-fix.js`. `npm run lint` passes with **zero errors and zero warnings**, and no rule was turned off and no `eslint-disable` comment was added.

The ten errors found in the provided exercise file and what each rule protects me from:

| #   | Rule                    | What it protects me from                                                                |
| --- | ----------------------- | --------------------------------------------------------------------------------------- |
| 1   | `no-unused-vars`        | Leaving variables or imports that nobody uses, which hides dead code and slows review.  |
| 2   | `no-undef`              | Using a name that was never declared, which becomes a runtime `ReferenceError`.         |
| 3   | `eqeqeq`                | Loose equality (`==`) silently converting types, for example `"0" == false` being true. |
| 4   | `no-var`                | Function-scoped `var` leaking outside blocks and being hoisted in confusing ways.       |
| 5   | `prefer-const`          | Marking a value with `let` when it is never reassigned, which hides intent.             |
| 6   | `no-unreachable`        | Code after `return` or `throw` that can never run, which is usually a logic mistake.    |
| 7   | `no-empty`              | Empty blocks that swallow errors or conditions without doing anything.                  |
| 8   | `no-constant-condition` | `if (true)` or `while (1)` conditions that make a branch pointless or a loop dangerous. |
| 9   | `no-dupe-keys`          | Duplicate object keys where the later value silently overwrites the earlier one.        |
| 10  | `no-redeclare`          | Declaring the same name twice in one scope, which hides the first value.                |

## How the fix was done

1. Read the full ESLint output before editing.
2. Fixed the real cause of each error instead of changing the rule.
3. Re-ran `npm run lint` after every group of fixes.
4. Checked that runtime behavior stayed the same.
5. Ran `npm run build` to confirm the production bundle still worked.

```bash
$ npm run lint
> eslint . --max-warnings=0
# no output = success

$ npm run build
✓ built in ...
```
