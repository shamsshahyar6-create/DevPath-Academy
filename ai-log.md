# AI log — Week 1

## Chat vs harness

**Tool 1 (chat):** ChatGPT — model: ChatGPT-5
**Tool 2 (harness):** OpenCode — model: Big Pickle (free model)

### What each one could see

- **Chat:** only the files and excerpts I pasted. Long documents had to be split, and images were limited, so the model's picture of the project was incomplete.
- **OpenCode:** opened in the same repository, so it could read the whole tree, follow imports, and check files I did not paste. It could also run commands, but only after asking for permission.

### 3 points both found

1. **Two `<h1>` elements.** Both said a page should normally have one `<h1>` and the second heading should be promoted or demoted to keep the outline correct for SEO and assistive technology.
2. **CSS file problems.** Both noticed repeated or inconsistent stylesheet references and suggested one clear source of styles.
3. **Empty title fallback.** Both said that if `VITE_APP_TITLE` is missing, the title becomes empty, so the code needs a default value.

### 1 point only OpenCode found

- **Broken practice scripts.** OpenCode read the whole repository and found that `exercises/01-npm-practice` had scripts but no `index.html`, so a Vite-style `dev` script could not work. It also found that `03-lint-fix.md`, `04-debugging-journal.md`, and `05-git-practice.md` were missing from the repository at the time of the review. A chat could not see those absences because I had not pasted the folder listing.

### 1 thing either one got wrong

- The chat model said `max-w-100` probably does not work in Tailwind v4. After OpenCode checked the generated CSS, the class was present and valid in Tailwind v4. The chat model was wrong.
- Lesson for me: a model predicts text; it can be confident and still wrong. I verified the class in the built CSS instead of trusting the answer.

### What a harness adds

A harness is the layer around a model:

- **Tools:** read files, search the repository, edit files, run commands such as `npm run lint`.
- **Loop:** act, observe the result, check it, and try again — instead of answering once and stopping.
- **Permissions:** allow, ask, or deny a tool call. OpenCode asked before running `npm run lint`; a chat cannot run anything at all.

A chat sees only what I paste. A harness can read the whole repository and take action, which makes its answers more grounded but not automatically correct.

### Permission check

OpenCode requested permission before running `npm run lint`. After approval it ran the command and explained the empty output as "zero errors and zero warnings". No file was edited during the review.
