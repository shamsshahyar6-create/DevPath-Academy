export const conceptExamples = {
  'w1-npm': {
    fa: [
      'مثال: npm install dayjs — تاریخ‌ها را بدون نوشتن منطق تاریخ مدیریت می‌کنی.',
      'مثال: "dependencies": { "dayjs": "^1.11.0" } در زمان اجرا و "devDependencies": { "prettier": "^3.0.0" } فقط برای توسعه.',
      'مثال: lockfile می‌گوید دقیقاً dayjs@1.11.13 نصب شود، حتی اگر فردا نسخهٔ 1.11.14 منتشر شود.',
      'مثال: "scripts": { "dev": "vite" } سپس npm run dev؛ یا npx prettier --check . بدون نصب سراسری.',
      'مثال: ^5.2.1 تا 5.9.0 می‌رسد ولی به 6.0.0 نه؛ ~5.2.1 داخل 5.2.x می‌ماند.',
    ],
    en: [
      'Example: npm install dayjs — manage dates without writing date logic yourself.',
      'Example: "dependencies": { "dayjs": "^1.11.0" } at runtime and "devDependencies": { "prettier": "^3.0.0" } for development only.',
      'Example: the lockfile pins dayjs@1.11.13 even if version 1.11.14 ships tomorrow.',
      'Example: "scripts": { "dev": "vite" } then npm run dev; or npx prettier --check . with no global install.',
      'Example: ^5.2.1 can reach 5.9.0 but not 6.0.0; ~5.2.1 stays inside 5.2.x.',
    ],
  },
  'w1-project': {
    fa: [
      'مثال: متنی را در main.js تغییر می‌دهی و صفحه بدون refresh کامل به‌روز می‌شود (HMR).',
      'مثال: npm run dev برای توسعه، npm run build برای ساخت dist و npm run preview برای دیدن همان خروجی.',
      'مثال: <script type="module" src="/src/main.js"></script> تنها نقطهٔ اتصال HTML به JavaScript توست.',
      'مثال: <h1 class="text-3xl font-bold text-blue-700">سلام</h1> بدون نوشتن یک فایل CSS جداگانه.',
      'مثال: VITE_API_URL عمومی است؛ کلید واقعی را در تابع سرور نگه دار، نه در .env فرانت‌اند.',
    ],
    en: [
      'Example: save a text change in main.js and the page updates without a full refresh (HMR).',
      'Example: npm run dev for development, npm run build for dist, and npm run preview to view the output.',
      'Example: <script type="module" src="/src/main.js"></script> is the single link from HTML to your JavaScript.',
      'Example: <h1 class="text-3xl font-bold text-blue-700">Hello</h1> without a separate CSS file.',
      'Example: VITE_API_URL is public; keep the real key in a server function, not the frontend .env.',
    ],
  },
  'w1-lint': {
    fa: [
      'مثال: استفاده از متغیری که هرگز تعریف نشده، پیش از اجرا با پیام no-undef گزارش می‌شود.',
      'مثال: "no-unused-vars": "warn" فقط هشدار می‌دهد؛ "eqeqeq": "error" با دیدن == فرمان lint را شکست می‌دهد.',
      'مثال: npx eslint . --fix گیومه‌ها و فاصله‌گذاری را درست می‌کند، اما شرط منطقی اشتباه را نه.',
      'مثال: در VS Code خط موج‌دار زیر متغیر استفاده‌نشده همان پیام ESLint است، نه خطای اجرا.',
      'مثال: ESLint می‌گوید «این متغیر استفاده نشده»؛ Prettier فقط می‌گوید «این خط را یک‌دست بنویس».',
    ],
    en: [
      'Example: using a variable that was never defined is reported by no-undef before running.',
      'Example: "no-unused-vars": "warn" only warns; "eqeqeq": "error" fails lint when it sees ==.',
      'Example: npx eslint . --fix repairs quotes and spacing, but not a wrong if condition.',
      'Example: in VS Code the squiggle under an unused variable is the ESLint message, not a runtime error.',
      'Example: ESLint says “this variable is unused”; Prettier only says “format this line consistently”.',
    ],
  },
  'w1-debug': {
    fa: [
      'مثال: console.log(user) فقط مقدار را چاپ می‌کند؛ debugger در همان خط اجرا را متوقف می‌کند تا scope را ببینی.',
      'مثال: روی خط ۱۲ در تب Sources کلیک می‌کنی، فرم را با دادهٔ ناقص می‌فرستی و اجرا همان‌جا می‌ایستد.',
      'مثال: روی validateForm()، Step over نتیجه را می‌دهد؛ Step into وارد بدنهٔ تابع می‌شود.',
      'مثال: Logpoint با متن «rating =» مقدار rating را چاپ می‌کند، بدون افزودن console.log به فایل.',
      'مثال: هنگام توقف، Scope مقدار state محلی، Watch عبارت total > 100 و Call Stack مسیر فراخوانی را نشان می‌دهد.',
    ],
    en: [
      'Example: console.log(user) prints a value; debugger pauses at that line so you can inspect scope.',
      'Example: click line 12 in Sources, submit an invalid form, and execution pauses right there.',
      'Example: on validateForm(), Step over runs it; Step into enters the function body.',
      'Example: a Logpoint with “rating =” prints rating without adding console.log to the file.',
      'Example: while paused, Scope shows local state, Watch evaluates total > 100, and Call Stack shows the call path.',
    ],
  },
  'w1-git': {
    fa: [
      'مثال: git add src/main.js فقط همان فایل را برای commit بعدی آماده می‌کند؛ بقیهٔ تغییرها خارج می‌مانند.',
      'مثال: git restore --staged src/main.js فایل را از staging بیرون می‌آورد ولی متن آن را پاک نمی‌کند.',
      'مثال: برای برگرداندن commit منتشرشده از git revert <hash> استفاده کن؛ git reset --hard فقط برای تاریخچهٔ شخصی.',
      'مثال: کار نیمه‌تمام را با git stash push کنار بگذار، شاخه عوض کن، بعد با git stash pop برگردان.',
      'مثال: npm run build سپس انتشار dist؛ در پنجرهٔ خصوصی Network را باز کن و ۲۰۰ بودن CSS و JS را ببین.',
    ],
    en: [
      'Example: git add src/main.js stages only that file for the next commit; other edits stay out.',
      'Example: git restore --staged src/main.js unstages the file without deleting its text.',
      'Example: use git revert <hash> for a published commit; git reset --hard only for private history.',
      'Example: git stash push your work in progress, switch branches, then restore it with git stash pop.',
      'Example: npm run build, publish dist, open Network in a private window, and confirm CSS and JS return 200.',
    ],
  },
  'w1-ai': {
    fa: [
      'مثال: جملهٔ «سلام دنیا» به چند token کوچک شکسته می‌شود و مدل یکی‌یکی token بعدی را حدس می‌زند.',
      'مثال: مدل ممکن است آدرسی را از خود بسازد؛ پیش از استفاده، همان ادعا را در مستندات رسمی پیدا کن.',
      'مثال: Chat فقط فایلی را می‌بیند که پیوست می‌کنی؛ harness می‌تواند پروژه را جست‌وجو کند، تست اجرا کند و خطا را برگرداند.',
      'مثال: در Plan mode می‌نویسی «این باگ را تحلیل کن» و فقط گزارش می‌گیری؛ هیچ فایلی تغییر نمی‌کند.',
      'مثال: کد را خودت می‌نویسی، سپس از AI می‌خواهی فقط ریسک‌ها و خطاهای آن را فهرست کند.',
    ],
    en: [
      'Example: “Hello world” is split into small tokens and the model predicts the next token one at a time.',
      'Example: the model may invent a URL; before using it, find the same claim in the official docs.',
      'Example: chat sees only the file you attach; a harness can search the project, run tests, and return errors.',
      'Example: in Plan mode ask “analyze this bug” and get a report; no file changes.',
      'Example: write the code yourself, then ask AI only to list its risks and mistakes.',
    ],
  },
  'w2-ts-migration': {
    fa: [
      'مثال: let age: number = "20" پیش از اجرا خطا می‌دهد؛ tsc نسخهٔ درست را به JavaScript ساده تبدیل می‌کند.',
      'مثال: با strictNullChecks، user.name وقتی user ممکن است null باشد خطا می‌دهد تا اول بررسی کنی.',
      'مثال: const count = 0 نوع number را می‌گیرد؛ نوشتن const count: number = 0 فقط تکرار است.',
      'مثال: npx tsc --noEmit در CI نوع‌ها را بررسی می‌کند و هیچ فایلی در dist نمی‌سازد.',
      'مثال: lint کد را می‌سنجد، tsc --noEmit نوع را و vite build خروجی نهایی را می‌سازد.',
    ],
    en: [
      'Example: let age: number = "20" fails before running; tsc turns valid TypeScript into plain JavaScript.',
      'Example: with strictNullChecks, user.name errors when user can be null until you check it first.',
      'Example: const count = 0 infers number; const count: number = 0 just repeats it.',
      'Example: npx tsc --noEmit checks types in CI and writes nothing to dist.',
      'Example: lint checks code, tsc --noEmit checks types, and vite build creates the final output.',
    ],
  },
  'w2-rating': {
    fa: [
      'مثال: const state = { rating: null, submitted: false }؛ کل صفحه از همین object ساخته می‌شود.',
      'مثال: if (state.rating === null) دکمهٔ ارسال را غیرفعال کن؛ TypeScript همین بررسی را اجباری می‌کند.',
      'مثال: کلیک روی ۴ فقط state.rating = 4 را عوض می‌کند، بعد render(state) دوباره اجرا می‌شود.',
      'مثال: <button aria-pressed="true" aria-label="امتیاز ۴">۴</button> وضعیت انتخاب را برای screen reader می‌گوید.',
    ],
    en: [
      'Example: const state = { rating: null, submitted: false }; the whole screen is built from this object.',
      'Example: if (state.rating === null) disable submit; TypeScript forces that check.',
      'Example: clicking 4 only sets state.rating = 4, then render(state) runs again.',
      'Example: <button aria-pressed="true" aria-label="Rating 4">4</button> exposes the selected state.',
    ],
  },
  'w2-faq': {
    fa: [
      'مثال: const items = [{ id: 1, question: "…", answer: "…", open: false }] شکل state را نشان می‌دهد.',
      'مثال: <button aria-expanded="false">پرسش</button> و <div hidden>پاسخ</div> یک جفت کنترل‌شده‌اند.',
      'مثال: اگر open === true باشد، aria-expanded="true" می‌شود و hidden از پنل حذف می‌شود.',
      'مثال: items.map(item => ({ ...item, open: item.id === clickedId })) همه را می‌بندد و فقط یکی را باز می‌کند.',
    ],
    en: [
      'Example: const items = [{ id: 1, question: "…", answer: "…", open: false }] shows the state shape.',
      'Example: <button aria-expanded="false">Question</button> and <div hidden>Answer</div> form one controlled pair.',
      'Example: when open === true, aria-expanded="true" and hidden is removed from the panel.',
      'Example: items.map(item => ({ ...item, open: item.id === clickedId })) closes all but one.',
    ],
  },
  'w2-models': {
    fa: [
      'مثال: «این تابع را توضیح بده و ریسک‌هایش را بگو؛ کد را بازنویسی نکن.» خروجی فقط توضیح و فهرست ریسک است.',
      'مثال: اگر مدل بگوید «این API در نسخهٔ ۶ حذف شده»، صفحهٔ changelog رسمی را باز کن و همان جمله را پیدا کن.',
      'مثال: مدل ممکن است نسخهٔ جدید React را نداند؛ تاریخ cutoff را بپرس و دادهٔ حساس نفرست.',
      'مثال: یک پرسش را به دو مدل بده و در ai-log.md ستون‌های دقت، سرعت و شاهد را پر کن.',
    ],
    en: [
      'Example: “Explain this function and list its risks; do not rewrite it.” The output is explanation and risks only.',
      'Example: if the model says “this API was removed in v6”, open the official changelog and find that line.',
      'Example: the model may not know the newest React release; ask its cutoff date and do not send sensitive data.',
      'Example: give the same prompt to two models and fill accuracy, speed, and evidence columns in ai-log.md.',
    ],
  },
};
