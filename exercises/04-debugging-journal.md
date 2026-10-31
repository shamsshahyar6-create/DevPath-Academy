# Debugging journal — Week 1

Tool: Chrome DevTools → **Sources** → breakpoints, Scope, Watch, Call Stack.
Rule followed: read the whole error before touching code; no `console.log`-only debugging.

## Broken Build

- Repository: the fork shared in the group chat.
- Status: `npm install`, `npm run dev`, `npm run lint`, and `npm run build` all pass.
- Fork link: add your own fork URL here after pushing.

## The five planted bugs

Each entry is a worked example of the required **guess → change → result** loop. Replace the values with the ones you observe in your own copy.

### Bug 1 — the total is a string

- **Guess:** the input value is read as a string, so `+` joins text instead of adding numbers.
- **Breakpoint:** on the line that builds the total. Watch: `typeof price`, `typeof quantity`.
- **Change:** convert both values with `Number(...)` before multiplying, and validate with `Number.isFinite`.
- **Result:** `typeof total` is now `number`; `"5" + "3"` no longer produces `"53"`.
- **Commit:** `fix: total is a string because input value is not converted to a number`

### Bug 2 — the last item is skipped

- **Guess:** the loop stops one item too early because it uses `<` or `<=` incorrectly.
- **Breakpoint:** on the loop header. Watch: `index`, `items.length`.
- **Change:** use `index < items.length` and check the final iteration in Scope.
- **Result:** the loop runs exactly `items.length` times.
- **Commit:** `fix: loop condition skipped the last item because it stopped at length - 1`

### Bug 3 — the button does nothing

- **Guess:** the selector returns `null` or points at the wrong element.
- **Breakpoint:** on the line that registers the listener. Watch: `button`.
- **Change:** query the correct `[data-action]` element and guard against `null` with a clear error.
- **Result:** the listener is registered and the click path is reached.
- **Commit:** `fix: click listener attached to the wrong selector and the button stayed dead`

### Bug 4 — the page shows old data

- **Guess:** an async function is used without `await`, or the render runs before the data arrives.
- **Breakpoint:** after the request. Watch: `data`, `loading`.
- **Change:** `await` the request, handle loading/error states, and render only after the data resolves.
- **Result:** the first paint shows loading, then the correct items.
- **Commit:** `fix: render ran before fetch resolved because the request was not awaited`

### Bug 5 — one edit changes every card

- **Guess:** all cards share the same object reference, so mutating one mutates all.
- **Breakpoint:** inside the update handler. Watch: the item identity and the array.
- **Change:** copy the item before changing it, for example `items.map((item) => item.id === id ? { ...item, done: true } : item)`.
- **Result:** only the selected card changes; the other cards keep their state.
- **Commit:** `fix: every card changed because a shared object was mutated in place`

## What I checked after each fix

1. Reloaded the page and repeated the exact reproduction.
2. Checked the console for new errors.
3. Ran `npm run lint` and `npm run build`.
4. Kept one commit per fix so the history names the real cause.
