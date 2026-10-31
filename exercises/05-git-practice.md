# Git practice — recover the repo

Learn Git Branching: **Introduction Sequence** and **Push & Pull** completed.
Screenshot: add your own image at `docs/learn-git-branching.png` and embed it here.

## 1. Unstage a file

```bash
git status
git restore --staged src/app.js
git status
```

Why this tool: `git restore --staged` only removes the file from the index and keeps the working-tree edits.
Why not `git reset --hard`: that would delete the edits as well, which is far more than the task asks.

## 2. Fix a commit message

```bash
git log --oneline -3
git commit --amend -m "fix: describe the real change"
git log --oneline -3
```

Why this tool: `--amend` rewrites the latest commit, which is exactly the commit with the wrong message.
Why not a new commit: a second commit would leave the bad message in history. Because the commit was not shared yet, rewriting it is safe.

## 3. Undo a pushed commit with `git revert`

```bash
git log --oneline -5
git revert <commit-sha>
git push origin <branch>
```

Why this tool: `revert` creates a **new** commit that reverses the old one, so history stays intact for everyone who already pulled it.
Why not `reset`: rewriting a shared branch would force everyone else to repair their history, and it needs a force push.

## 4. Put unfinished work aside

```bash
git status
git stash push -u -m "wip: lesson search"
git switch main
# do the urgent work
git switch -
git stash list
git stash pop
```

Why this tool: `stash` saves tracked and (`-u`) untracked changes without making a commit.
Why not a WIP commit: a commit would put half-finished work into the shared history. A separate branch is the right choice when the work will take days; a stub branch is heavier than a quick interruption.

## 5. Recover a lost branch with `git reflog`

```bash
git reflog
# find the commit that was the branch tip
git switch -c recovered-feature <commit-sha>
git log --oneline -3
```

Why this tool: `reflog` records where `HEAD` has been, even after a branch is deleted.
Why not `git fsck --lost-found`: it finds unreachable objects but does not show the helpful "this was the branch tip" context that reflog gives.

## Deployment

The project is deployed from my branch to Netlify (or Vercel).

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: set in the host settings (the repository has no `.nvmrc`).
- Check: open the live URL in a private window and confirm the CSS, JavaScript, favicon, and images load.

Configuration files in the repository:

- `netlify.toml` for Netlify.
- `vercel.json` for Vercel.
