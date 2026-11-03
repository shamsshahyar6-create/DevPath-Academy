export const weeks02to04 = [
  {
    id: 'week-2',
    number: '02',
    title: { fa: 'مبانی TypeScript', en: 'TypeScript Basics' },
    subtitle: {
      fa: 'فاز ۱ · پروژه را به TypeScript سخت‌گیرانه ببر و اولین کامپوننت‌های تعاملی را بساز.',
      en: 'Phase 1 · Move your project to strict TypeScript and build your first interactive components.',
    },
    outcome: {
      fa: 'در پایان هفته یک پروژهٔ TypeScript سخت‌گیرانه، کامپوننت امتیازدهی و آکاردئون FAQ با صفر any داری.',
      en: 'Finish with a strict TypeScript project, an interactive rating component, and a FAQ accordion with zero any.',
    },
    lessons: [
      {
        id: 'w2-ts-migration',
        day: '۱',
        title: { fa: 'مهاجرت پروژه به TypeScript', en: 'Move Your Project to TypeScript' },
        summary: {
          fa: 'شنبه ۳۱ اکتبر · پروژه را با قالب vanilla-ts از نو بساز، strict را روشن کن و typecheck اضافه کن.',
          en: 'Sat 31 Oct · Recreate the project with the vanilla-ts template, turn on strict, and add typecheck.',
        },
        duration: 120,
        goals: {
          fa: [
            'پروژه را با قالب Vite vanilla-ts بسازی و Tailwind، ESLint و Prettier را منتقل کنی.',
            'typescript-eslint را اضافه کنی و حالت strict را روشن کنی.',
            'یک script به نام typecheck با فرمان tsc --noEmit بسازی.',
          ],
          en: [
            'Recreate the project with the Vite vanilla-ts template and carry over Tailwind, ESLint, and Prettier.',
            'Add typescript-eslint and turn on strict mode.',
            'Add a typecheck script that runs tsc --noEmit.',
          ],
        },
        deepDive: {
          fa: [
            'TypeScript یک لایهٔ نوع روی JavaScript است: پیش از اجرا خطاهای نوع را پیدا می‌کند و سپس با tsc به JavaScript قابل اجرا تبدیل می‌شود. مرورگر خود TypeScript را اجرا نمی‌کند.',
            'فایل tsconfig.json تنظیمات را تعیین می‌کند. با strict چند بررسی مهم روشن می‌شود، از جمله noImplicitAny (نوع any ضمنی ممنوع) و strictNullChecks (null و undefined باید مدیریت شوند).',
            'TypeScript اغلب نوع را از مقدار اولیه حدس می‌زند (inference)؛ فقط جایی نوع بنویس که خوانایی یا ایمنی را بیشتر می‌کند. هدف این دوره صفر any و صفر @ts-ignore است.',
            'فرمان tsc --noEmit فقط نوع‌ها را بررسی می‌کند و فایل خروجی نمی‌سازد؛ به همین دلیل برای typecheck در CI و پیش از commit مناسب است. Vite هنگام build از esbuild استفاده می‌کند و بررسی نوع جداگانه لازم است.',
            'با نصب typescript-eslint، ESLint هم قواعد مربوط به نوع را بررسی می‌کند. ترتیب درست: lint برای کیفیت، typecheck برای نوع، و build برای خروجی.',
          ],
          en: [
            'TypeScript is a type layer on top of JavaScript. It finds type errors before runtime and then tsc compiles it to runnable JavaScript. Browsers do not run TypeScript directly.',
            'tsconfig.json controls the compiler. Turning on strict enables several checks, including noImplicitAny (no implicit any) and strictNullChecks (null and undefined must be handled).',
            'TypeScript often infers the type from the initial value; write a type only where it improves clarity or safety. The goal in this course is zero any and zero @ts-ignore.',
            'tsc --noEmit only checks types and writes no files, which makes it ideal for typecheck in CI and before commits. Vite uses esbuild during build, so a separate type check is still required.',
            'Installing typescript-eslint lets ESLint check type-aware rules too. The correct order is lint for quality, typecheck for types, and build for output.',
          ],
        },
        terms: [
          [
            'tsconfig.json',
            'فایل تنظیمات TypeScript؛ سطح سخت‌گیری، پوشهٔ خروجی و کتابخانه‌ها را تعیین می‌کند.',
          ],
          ['strict', 'حالت سخت‌گیرانه که null، undefined و نوع‌های ناشناخته را جدی می‌گیرد.'],
          ['@ts-ignore', 'خاموش‌کردن بررسی نوع برای یک خط؛ در این دوره ممنوع است.'],
          ['typecheck', 'اجرای tsc بدون تولید فایل؛ فقط خطاهای نوع را نشان می‌دهد.'],
          ['inference', 'توانایی TypeScript در حدس نوع از مقدار اولیه، بدون نوشتن نوع دستی.'],
          ['TypeScript', 'زبان نوع‌دار روی JavaScript که پیش از اجرا خطاهای نوع را پیدا می‌کند.'],
          ['type annotation', 'نوشتن صریح نوع یک متغیر یا تابع، مثلاً نام: string.'],
          [
            'any / unknown',
            'any بررسی نوع را خاموش می‌کند؛ unknown امن است و باید پیش از استفاده باریک شود.',
          ],
        ],
        steps: {
          fa: [
            'پروژه را با npm create vite@latest . -- --template vanilla-ts بساز و وابستگی‌ها را نصب کن.',
            'افزونهٔ Tailwind، ESLint، Prettier و eslint-config-prettier را مثل هفتهٔ ۱ اضافه کن.',
            'typescript-eslint را نصب کن، strict را در tsconfig روشن کن و script نوع typecheck را اضافه کن.',
            'طرح هفتهٔ ۱ را منتقل کن و مطمئن شو npm run lint و npm run typecheck هر دو پاس می‌شوند.',
          ],
          en: [
            'Create the project with npm create vite@latest . -- --template vanilla-ts and install dependencies.',
            'Add the Tailwind plugin, ESLint, Prettier, and eslint-config-prettier as in week 1.',
            'Install typescript-eslint, enable strict in tsconfig, and add a typecheck script.',
            'Move your week 1 design in and confirm npm run lint and npm run typecheck both pass.',
          ],
        },
        example: {
          code: '{\n  "compilerOptions": { "strict": true },\n  "include": ["src"]\n}\n// package.json\n"typecheck": "tsc --noEmit"',
          explanation: {
            fa: 'strict بررسی null و any ضمنی را سخت می‌کند؛ tsc --noEmit همان بررسی را بدون ساخت فایل اجرا می‌کند.',
            en: 'strict makes null and implicit any checks harder, and tsc --noEmit runs the same checks without emitting files.',
          },
        },
        practice: {
          fa: 'مهاجرت را انجام بده و اولین commit هفته را با پیام chore: migrate project to strict TypeScript بفرست.',
          en: 'Do the migration and send the first commit of the week with the message chore: migrate project to strict TypeScript.',
        },
        quiz: {
          question: {
            fa: 'فرمان tsc --noEmit چه کاری می‌کند؟',
            en: 'What does tsc --noEmit do?',
          },
          options: {
            fa: [
              'فقط نوع‌ها را بررسی می‌کند و فایل نمی‌سازد',
              'پروژه را منتشر می‌کند',
              'قاعده‌های ESLint را خاموش می‌کند',
            ],
            en: [
              'Checks types without writing files',
              'Deploys the project',
              'Turns off ESLint rules',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'noEmit جلوی تولید خروجی را می‌گیرد و فقط بررسی نوع انجام می‌شود.',
            en: 'noEmit stops output and leaves only the type check.',
          },
        },
      },
      {
        id: 'w2-rating',
        day: '۲',
        title: { fa: 'کامپوننت امتیازدهی تعاملی', en: 'Interactive Rating Component' },
        summary: {
          fa: 'یکشنبه ۱ نوامبر · انتخاب عدد، ارسال، نمایش تشکر و نگه‌داشتن امتیاز در یک متغیر تایپ‌شده.',
          en: 'Sun 1 Nov · Select a number, submit, show the thank-you view, and keep state in a typed variable.',
        },
        duration: 180,
        goals: {
          fa: [
            'با کلیک روی هر عدد، انتخاب قبلی برداشته و عدد جدید انتخاب شود.',
            'ارسال بدون انتخاب مدیریت شود و صفحه دوباره بارگذاری نشود.',
            'حالت انتخاب‌شده با صفحه‌کلید و screen reader قابل استفاده باشد.',
          ],
          en: [
            'Clicking a number deselects the previous one and selects the new one.',
            'Submitting with no selection is handled, with no page reload.',
            'The selected state is usable by keyboard and announced to screen readers.',
          ],
        },
        deepDive: {
          fa: [
            'state منبع حقیقت است: چیزی که صفحه برای کارکرد خود به یاد می‌سپارد. در این کامپوننت یک type برای شکل state می‌نویسیم، مثلاً { rating: number | null; submitted: boolean }.',
            'عبارت number | null یعنی امتیاز می‌تواند عدد یا null باشد. در حالت strict، TypeScript اجازه نمی‌دهد پیش از بررسی null از مقدار استفاده کنی؛ همین تو را به مدیریت حالت «هنوز انتخاب نشده» مجبور می‌کند.',
            'روش State-First: تابع render کل صفحه را فقط از روی state می‌سازد و هر رویداد فقط state را عوض می‌کند و بعد render را صدا می‌زند. هیچ مقداری را از متن HTML صفحه به‌عنوان منبع داده نخوان.',
            'برای دسترس‌پذیری هر عدد را به‌صورت button بساز، وضعیت انتخاب را با aria-pressed اعلام کن، پیمایش با Tab و Enter و کلیدهای جهت‌دار را ممکن کن و مطمئن شو focus همیشه دیده می‌شود.',
          ],
          en: [
            'State is the source of truth: what the page remembers in order to work. Here we describe its shape with a type such as { rating: number | null; submitted: boolean }.',
            'number | null means the rating can be a number or null. Under strict mode TypeScript refuses to use the value before you handle null, which forces you to design the “not selected yet” state.',
            'The State-First method: render builds the whole screen from state only, and each event changes state and then calls render. Never read data back from the page HTML as the source of truth.',
            'For accessibility, make each number a button, expose selection with aria-pressed, support Tab, Enter, and arrow keys, and keep focus visible at all times.',
          ],
        },
        terms: [
          ['state', 'داده‌ای که صفحه برای کارکرد خود به یاد می‌سپارد، مثل امتیاز انتخاب‌شده.'],
          ['typed variable', 'متغیری که نوع آن صریح است، مثلاً number | null.'],
          [
            'aria-pressed',
            'ویژگی‌ای که وضعیت فشرده‌بودن یک دکمهٔ انتخابی را به screen reader می‌گوید.',
          ],
          ['focus', 'محلی که صفحه‌کلید در آن قرار دارد؛ باید همیشه دیده شود.'],
          ['type alias', 'نام‌دادن به یک نوع با type تا شکل داده در چند جا تکرار نشود.'],
          ['null', 'نبود مقدار؛ در strict باید پیش از استفاده بررسی شود.'],
          ['source of truth', 'منبع اصلی داده که همهٔ نمایش‌ها از آن ساخته می‌شوند.'],
        ],
        steps: {
          fa: [
            'یک تایپ RatingState با فیلدهای rating و submitted بنویس و اولین commit را بفرست.',
            'تابع render را طوری بنویس که کل صفحه فقط از روی state ساخته شود.',
            'رویداد کلیک هر عدد فقط state را عوض کند و سپس render صدا زده شود.',
            'با Tab، Enter و کلیدهای جهت‌دار آزمایش کن و وضعیت انتخاب را به screen reader اعلام کن.',
          ],
          en: [
            'Write a RatingState type with rating and submitted fields, then send the first commit.',
            'Write render so the whole screen is produced from state only.',
            'Each number click handler only updates state, then calls render.',
            'Test with Tab, Enter, and arrow keys, and announce the selection to screen readers.',
          ],
        },
        example: {
          code: 'type RatingState = { rating: number | null; submitted: boolean };\nlet state: RatingState = { rating: null, submitted: false };',
          explanation: {
            fa: 'همهٔ نمایش‌ها از همین یک object می‌آیند؛ هیچ مقداری از خود صفحه خوانده نمی‌شود.',
            en: 'Every view comes from this one object; nothing is read back from the page.',
          },
        },
        practice: {
          fa: 'کامپوننت را بساز، حالت‌های بدون انتخاب و انتخاب‌شده را بررسی کن و دکمهٔ تغییر امتیاز را اضافه کن.',
          en: 'Build the component, check the unselected and selected states, and add a change-my-rating button.',
        },
        quiz: {
          question: {
            fa: 'امتیاز انتخاب‌شده کجا نگهداری می‌شود؟',
            en: 'Where is the selected rating kept?',
          },
          options: {
            fa: ['در یک متغیر تایپ‌شده در state', 'در متن HTML صفحه', 'در یک فایل CSS'],
            en: ['In a typed variable in state', 'In the page HTML text', 'In a CSS file'],
          },
          answer: 0,
          explanation: {
            fa: 'state منبع حقیقت است؛ صفحه فقط آن را نمایش می‌دهد.',
            en: 'State is the source of truth; the page only displays it.',
          },
        },
      },
      {
        id: 'w2-faq',
        day: '۳',
        title: { fa: 'آکاردئون پرسش‌های متداول', en: 'FAQ Accordion' },
        summary: {
          fa: 'چهارشنبه ۴ نوامبر · باز و بسته‌کردن پاسخ‌ها، تغییر آیکون و هم‌گام‌نگه‌داشتن aria-expanded.',
          en: 'Wed 4 Nov · Open and close answers, change the icon, and keep aria-expanded in sync.',
        },
        duration: 180,
        goals: {
          fa: [
            'با کلیک روی پرسش، پاسخ همان پرسش باز یا بسته شود.',
            'آیکون با وضعیت باز یا بسته هم‌گام شود.',
            'هر پرسش یک button با aria-expanded باشد و با Enter و Space کار کند.',
          ],
          en: [
            'Clicking a question opens or closes its answer.',
            'The icon changes with the open state.',
            'Each question is a button with aria-expanded that works with Enter and Space.',
          ],
        },
        deepDive: {
          fa: [
            'آکاردئون را با آرایه‌ای از objectها مدل کن؛ هر عضو می‌تواند id، question، answer و open داشته باشد. تایپ این آرایه باعث می‌شود فراموش نکنی فیلد open را در همهٔ حالت‌ها مدیریت کنی.',
            'برای هر پرسش عنصر button بساز؛ button با Enter و Space به‌صورت طبیعی کار می‌کند و برای صفحه‌کلید بهتر از div قابل کلیک است. پاسخ را در یک پنل جدا بگذار و فقط با همان حالت open نشان بده.',
            'aria-expanded وضعیت باز یا بسته را به screen reader می‌گوید و hidden پنل پاسخ را پنهان می‌کند. هر دو را از یک مقدار state بساز تا هرگز با هم ناهماهنگ نشوند.',
            'گزینهٔ «فقط یکی باز بماند» را با map روی state پیاده کن: ابتدا همه را ببند و بعد فقط پرسش کلیک‌شده را باز کن. برای حرکت با کلیدهای جهت‌دار، ترتیب دکمه‌ها و focus را هم در نظر بگیر.',
          ],
          en: [
            'Model the accordion as an array of objects; each item can have id, question, answer, and open. Typing that array stops you from forgetting to manage open in every state.',
            'Make each question a button; button works with Enter and Space by default and is better for keyboard users than a clickable div. Put the answer in a separate panel and show it only from the same open flag.',
            'aria-expanded tells screen readers whether the section is open or closed, and hidden hides the answer panel. Build both from one state value so they can never disagree.',
            'Implement “only one open” by mapping over state: first close all, then open only the clicked question. For arrow-key movement, also consider button order and focus.',
          ],
        },
        terms: [
          ['aria-expanded', 'ویژگی‌ای که می‌گوید بخش کنترل‌شده باز است یا بسته.'],
          ['accordion', 'الگویی که چند بخش را جمع می‌کند و یکی‌یکی باز می‌کند.'],
          ['event handler', 'تابعی که در پاسخ به یک رویداد کاربر اجرا می‌شود.'],
          [
            'single source of truth',
            'یک محل مشخص برای نگه‌داشتن state تا نسخه‌های متناقض ساخته نشود.',
          ],
          ['toggle', 'عوض‌کردن یک مقدار بین دو حالت، مثلاً باز و بسته.'],
          [
            'array of objects',
            'آرایه‌ای که هر عضو آن مجموعه‌ای از فیلدها دارد؛ مناسب فهرست پرسش‌ها.',
          ],
        ],
        steps: {
          fa: [
            'state را به‌صورت آرایه‌ای از پرسش‌ها با فیلد open بنویس و اولین commit را بفرست.',
            'تابع render را بنویس و هر پرسش را به‌صورت button با aria-expanded بساز.',
            'رویداد کلیک فقط open همان پرسش را عوض کند و بعد render صدا زده شود.',
            'گزینهٔ «فقط یکی باز بماند» و حرکت با کلیدهای جهت‌دار را اضافه کن.',
          ],
          en: [
            'Write state as an array of questions with an open field and send the first commit.',
            'Write render and make every question a button with aria-expanded.',
            'The click handler only toggles that question’s open flag, then calls render.',
            'Add the “only one open” option and arrow-key movement.',
          ],
        },
        example: {
          code: "button.setAttribute('aria-expanded', String(question.open));\npanel.hidden = !question.open;",
          explanation: {
            fa: 'aria-expanded و hidden هر دو از همان مقدار state ساخته می‌شوند تا هرگز ناهماهنگ نشوند.',
            en: 'Both aria-expanded and hidden come from the same state value, so they never disagree.',
          },
        },
        practice: {
          fa: 'آکاردئون را با روش State-First بساز و با Tab، Enter و Space کامل آزمایش کن.',
          en: 'Build the accordion with the State-First Method and test it fully with Tab, Enter, and Space.',
        },
        quiz: {
          question: {
            fa: 'کدام ویژگی وضعیت باز بودن پاسخ را به screen reader می‌گوید؟',
            en: 'Which attribute tells a screen reader whether an answer is open?',
          },
          options: {
            fa: ['aria-expanded', 'aria-hidden', 'tabindex="-1"'],
            en: ['aria-expanded', 'aria-hidden', 'tabindex="-1"'],
          },
          answer: 0,
          explanation: {
            fa: 'aria-expanded دقیقاً برای کنترل باز و بسته‌بودن است.',
            en: 'aria-expanded exists exactly for open and closed state.',
          },
        },
      },
      {
        id: 'w2-models',
        day: '۴',
        title: { fa: 'آزمایشگاه AI: مقایسهٔ دو مدل', en: 'AI Lab: Compare Two Models' },
        summary: {
          fa: 'چهارشنبه ۴ نوامبر · دو مدل رایگان را در حالت Plan دربارهٔ کد امتیازدهی مقایسه کن.',
          en: 'Wed 4 Nov · Compare two free models in Plan mode on your rating component code.',
        },
        duration: 45,
        goals: {
          fa: [
            'از دو مدل آزاد بخواهی فقط توضیح بدهند و کد را بازنویسی نکنند.',
            'هر نکته را در ai-log.md درست یا نادرست علامت بزنی و شاهدش را بنویسی.',
            'سرعت، دقت و طول پاسخ دو مدل را مقایسه کنی.',
          ],
          en: [
            'Ask two free models to explain only, without rewriting code.',
            'Mark each point right or wrong in ai-log.md and name the evidence.',
            'Compare the two models on accuracy, speed, and length.',
          ],
        },
        deepDive: {
          fa: [
            'در Plan mode از مدل بخواه فقط کد را توضیح دهد و بازبینی کند؛ عبارت «Explain, don’t rewrite» نقش Reviewer را حفظ می‌کند و کد را از دست تو نمی‌گیرد.',
            'هر ادعای مدل را با ESLint، typecheck یا مستندات رسمی بررسی کن. مدل ممکن است کتابخانه‌ای را از خود بسازد یا رفتار قدیمی یک نسخه را با اطمینان بیان کند.',
            'knowledge cutoff یعنی دانش مدل تا زمانی مشخص است و بعد از آن را نمی‌داند. data policy یعنی مدل با داده‌ای که می‌فرستی چه می‌کند؛ پیش از فرستادن کد، این دو را در نظر بگیر.',
            'دو مدل را با یک پرسش یکسان مقایسه کن و دقت، سرعت و طول پاسخ را در ai-log.md ثبت کن. برای هر ادعا شاهد بنویس و موارد نادرست را هم مستند کن.',
          ],
          en: [
            'In Plan mode ask the model to explain and review only; “Explain, don’t rewrite” keeps the Reviewer role and leaves the code in your hands.',
            'Verify every claim against ESLint, typecheck, or official docs. A model may invent a library or confidently describe outdated behavior.',
            'knowledge cutoff means the model knows events only up to a certain date. data policy means what the provider does with the data you send. Consider both before sharing code.',
            'Compare two models with the same prompt and record accuracy, speed, and answer length in ai-log.md. Cite evidence for each claim and document the wrong ones too.',
          ],
        },
        terms: [
          ['Plan mode', 'حالتی که agent فقط می‌خواند و پیشنهاد می‌دهد و فایل را تغییر نمی‌دهد.'],
          ['knowledge cutoff', 'تاریخی که دانش مدل تا آن زمان است؛ بعد از آن را نمی‌داند.'],
          ['data policy', 'قاعدهٔ نگه‌داری یا استفاده از داده‌ای که به مدل می‌دهی.'],
          ['hallucination', 'پاسخ مطمئن اما نادرست؛ مدل چیزی را از خود می‌سازد.'],
        ],
        steps: {
          fa: [
            'در حالت Plan دو مدل رایگان را انتخاب کن و همان پرسش را برای هر دو بفرست.',
            'هر ادعا را با ESLint، TypeScript یا مستندات رسمی بررسی کن.',
            'دقت، سرعت و طول پاسخ‌ها را در ai-log.md بنویس.',
            'از هر مدل دربارهٔ یک ویژگی تازهٔ TypeScript بپرس تا مرز دانشش را ببینی.',
          ],
          en: [
            'In Plan mode, pick two free models and send the same prompt to both.',
            'Check each claim with ESLint, TypeScript, or the official docs.',
            'Write accuracy, speed, and length into ai-log.md.',
            'Ask each model about a recent TypeScript feature to see where its knowledge stops.',
          ],
        },
        example: {
          code: 'What is wrong with this code? Explain, don’t rewrite.\n<main.js contents>',
          explanation: {
            fa: 'درخواست «توضیح بده، بازنویسی نکن» نقش Reviewer را حفظ می‌کند و کد را از دست تو نمی‌گیرد.',
            en: '“Explain, don’t rewrite” keeps the Reviewer role and leaves the code in your hands.',
          },
        },
        practice: {
          fa: 'گزارش مقایسه را در ai-log.md کامل کن و موارد نادرست هر مدل را با شاهد بنویس.',
          en: 'Complete the comparison report in ai-log.md and record each model’s wrong points with evidence.',
        },
        quiz: {
          question: {
            fa: 'چرا از مدل می‌خواهیم کد را بازنویسی نکند؟',
            en: 'Why do we ask the model not to rewrite the code?',
          },
          options: {
            fa: [
              'چون در مرحلهٔ Reviewer، AI نباید کد پروژه را بنویسد',
              'چون مدل‌ها همیشه اشتباه می‌کنند',
              'چون بازنویسی سرعت را کم می‌کند',
            ],
            en: [
              'Because at the Reviewer stage AI must not write project code',
              'Because models are always wrong',
              'Because rewriting slows things down',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'نقش Reviewer توضیح و بازبینی است؛ نوشتن کد کار توست.',
            en: 'The Reviewer role explains and reviews; writing the code is your job.',
          },
        },
      },
    ],
  },
  {
    id: 'week-3',
    number: '03',
    title: { fa: 'union و narrowing', en: 'Unions and Narrowing' },
    subtitle: {
      fa: 'فاز ۱ · با union به‌جای enum حالت‌ها را مدل کن و محاسبات را در تابع‌های خالص بنویس.',
      en: 'Phase 1 · Model states with unions instead of enums and keep calculations in pure functions.',
    },
    outcome: {
      fa: 'در پایان هفته ماشین‌حساب انعام با تابع خالص تایپ‌شده و فرم خبرنامه با اعتبارسنجی تایپ‌شده داری.',
      en: 'Finish with a tip calculator built on a pure typed function and a newsletter form with typed validation.',
    },
    lessons: [
      {
        id: 'w3-narrowing',
        day: '۱',
        title: { fa: 'union، narrowing و حالت‌های صفحه', en: 'Unions, Narrowing, and Page States' },
        summary: {
          fa: 'شنبه ۷ نوامبر · با typeof، truthiness و equality نوع را باریک کن و حالت‌ها را با union بنویس.',
          en: 'Sat 7 Nov · Narrow types with typeof, truthiness, and equality, and write states as unions.',
        },
        duration: 90,
        goals: {
          fa: [
            'union تایپ بسازی مثل "idle" | "loading" | "success" | "error".',
            'با typeof و مقایسه، نوع را داخل شرط باریک کنی.',
            'به‌جای enum از union استفاده کنی.',
          ],
          en: [
            'Build union types such as "idle" | "loading" | "success" | "error".',
            'Narrow a type inside a condition with typeof and equality.',
            'Use unions instead of enums.',
          ],
        },
        terms: [
          ['union type', 'نوعی که یکی از چند مقدار مجاز را می‌پذیرد.'],
          ['narrowing', 'باریک‌کردن نوع با بررسی شرط، تا TypeScript مطمئن شود.'],
          ['typeof', 'عملگری که نوع یک مقدار را برمی‌گرداند و برای narrowing استفاده می‌شود.'],
          ['enum', 'ساختار شمارشی؛ در این دوره به‌جای آن از union استفاده می‌شود.'],
        ],
        steps: {
          fa: [
            'خواندن بخش‌های typeof، truthiness و equality از مستند Narrowing را انجام بده.',
            'یک union برای حالت درخواست بنویس و برای هر حالت پیام یا نمایش متفاوت بساز.',
            'تابعی بنویس که ورودی unknown بگیرد و قبل از استفاده نوعش را بررسی کند.',
            'مثال‌ها را خودت تایپ کن و هیچ‌جا @ts-ignore نگذار.',
          ],
          en: [
            'Read the typeof, truthiness, and equality sections of the Narrowing handbook.',
            'Write a union for request state and give each state a different message or view.',
            'Write a function that accepts unknown and checks its type before use.',
            'Type the examples yourself and never add @ts-ignore.',
          ],
        },
        example: {
          code: 'type RequestState = "idle" | "loading" | "success" | "error";\nfunction message(state: RequestState): string {\n  if (state === "error") return "Try again";\n  return state;\n}',
          explanation: {
            fa: 'union همهٔ حالت‌های ممکن را محدود می‌کند و مقایسه، نوع را باریک می‌کند.',
            en: 'The union limits the possible states, and the comparison narrows the type.',
          },
        },
        practice: {
          fa: 'چهار حالت را در یک صفحهٔ کوچک پیاده کن و با تغییر state همهٔ نمایش‌ها را بررسی کن.',
          en: 'Implement the four states on a small page and check every view by changing state.',
        },
        quiz: {
          question: {
            fa: 'چرا union به enum ترجیح داده می‌شود؟',
            en: 'Why is a union preferred over an enum?',
          },
          options: {
            fa: [
              'سبک‌تر است و با رشته‌ها و بررسی ساده کار می‌کند',
              'چون TypeScript enum را نمی‌شناسد',
              'چون union همیشه امن‌تر از هر نوع دیگری است',
            ],
            en: [
              'It is lighter and works with plain strings and simple checks',
              'Because TypeScript does not know enums',
              'Because unions are always safer than any other type',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'union بدون کد اضافی، حالت‌ها را محدود و narrow کردن را ساده می‌کند.',
            en: 'A union limits states without extra code and keeps narrowing simple.',
          },
        },
      },
      {
        id: 'w3-tip',
        day: '۲',
        title: { fa: 'ماشین‌حساب انعام', en: 'Tip Calculator App' },
        summary: {
          fa: 'دوشنبه ۹ نوامبر · محاسبه در تابع خالص calculateTip و نمایش نتایج با هر کلید.',
          en: 'Mon 9 Nov · Calculate in a pure calculateTip function and update results on every keystroke.',
        },
        duration: 210,
        goals: {
          fa: [
            'تابع خالص calculateTip(bill, percent, people) بنویسی که به صفحه دست نزند.',
            'نتیجه با هر کلید و با انعام سفارشی به‌روز شود.',
            'صفر یا تعداد نامعتبر خطای طراحی را نشان دهد، نه NaN یا Infinity.',
          ],
          en: [
            'Write a pure calculateTip(bill, percent, people) that never touches the page.',
            'Update results on every keystroke and support a custom tip.',
            'Zero or invalid people shows the design’s error state, never NaN or Infinity.',
          ],
        },
        terms: [
          ['pure function', 'تابعی که فقط از ورودی استفاده می‌کند و بیرون را تغییر نمی‌دهد.'],
          ['NaN / Infinity', 'نتیجهٔ محاسبهٔ نامعتبر یا تقسیم بر صفر که باید مهار شود.'],
          ['edge case', 'ورودی غیرعادی مثل صفر، خالی یا عدد بسیار بزرگ.'],
          ['reset', 'بازگرداندن برنامه به حالت شروع.'],
        ],
        steps: {
          fa: [
            'تایپ TipState و state اولیه را بنویس و اولین commit را بفرست.',
            'calculateTip را جدا از DOM بنویس و برای تقسیم بر صفر بررسی بگذار.',
            'render را از روی state بساز و دکمهٔ reset را تا ورود داده غیرفعال نگه دار.',
            'مبالغ را با دو رقم اعشار نشان بده و حالت‌های صفر و نامعتبر را آزمایش کن.',
          ],
          en: [
            'Write the TipState type and initial state, then send the first commit.',
            'Write calculateTip separately from the DOM and guard against division by zero.',
            'Build render from state and keep reset disabled until something is entered.',
            'Show money with two decimals and test zero and invalid cases.',
          ],
        },
        example: {
          code: 'function calculateTip(bill: number, percent: number, people: number): number {\n  if (!bill || !percent || !people) return 0;\n  return (bill * (percent / 100)) / people;\n}',
          explanation: {
            fa: 'تابع فقط عدد می‌گیرد و عدد برمی‌گرداند؛ به همین دلیل ساده و قابل تست است.',
            en: 'The function takes numbers and returns a number, which makes it easy to test.',
          },
        },
        practice: {
          fa: 'پروژه را کامل کن، برای calculateTip پنج تست Vitest بنویس و README را پر کن.',
          en: 'Finish the project, write five Vitest tests for calculateTip, and complete the README.',
        },
        quiz: {
          question: {
            fa: 'چرا محاسبه در تابع خالص انجام می‌شود؟',
            en: 'Why is the calculation done in a pure function?',
          },
          options: {
            fa: [
              'تا مستقل از صفحه قابل تست و قابل اعتماد باشد',
              'تا کد طولانی‌تر شود',
              'تا از localStorage استفاده کند',
            ],
            en: [
              'So it can be tested and trusted independently of the page',
              'So the code gets longer',
              'So it can use localStorage',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'تابع خالص ورودی و خروجی روشن دارد و بدون مرورگر قابل تست است.',
            en: 'A pure function has clear inputs and outputs and can be tested without a browser.',
          },
        },
      },
      {
        id: 'w3-newsletter',
        day: '۳',
        title: { fa: 'فرم عضویت در خبرنامه', en: 'Newsletter Sign-up Form' },
        summary: {
          fa: 'چهارشنبه ۱۱ نوامبر · اعتبارسنجی ایمیل با تابع خالص و نمایش پیام موفقیت با همان ایمیل.',
          en: 'Wed 11 Nov · Validate email with a pure function and show the success view with that email.',
        },
        duration: 180,
        goals: {
          fa: [
            'ایمیل خالی یا نامعتبر پیام و استایل خطا را نشان دهد.',
            'ایمیل معتبر نمای موفقیت را با همان ایمیل نشان دهد.',
            'خطا با aria-describedby به input وصل و اعلام شود.',
          ],
          en: [
            'An empty or invalid email shows the error message and style.',
            'A valid email shows the success view with that email.',
            'The error is linked to the input with aria-describedby and announced.',
          ],
        },
        terms: [
          ['validation', 'بررسی درستی ورودی پیش از استفاده از آن.'],
          ['typed result', 'خروجی تابع به‌صورت union، مثل { ok: true } یا { ok: false; reason }.'],
          ['aria-describedby', 'پیوند دادن input به متن راهنما یا خطا برای screen reader.'],
          ['aria-invalid', 'علامت‌گذاری یک فیلد به‌عنوان نامعتبر.'],
        ],
        steps: {
          fa: [
            'تایپ نتیجهٔ اعتبارسنجی و تابع خالص validateEmail را بنویس و commit کن.',
            'render را برای سه حالت خالی، خطا و موفقیت بساز.',
            'رویداد submit فقط state را عوض کند و فرم را از reload جلوگیری کند.',
            'دکمهٔ Dismiss را اضافه کن که فرم خالی را برگرداند.',
          ],
          en: [
            'Write the validation result type and a pure validateEmail, then commit.',
            'Build render for the empty, error, and success states.',
            'The submit handler only updates state and prevents a reload.',
            'Add a Dismiss button that returns to an empty form.',
          ],
        },
        example: {
          code: 'type EmailResult = { ok: true } | { ok: false; reason: "empty" | "format" };\nfunction validateEmail(value: string): EmailResult {\n  if (!value.trim()) return { ok: false, reason: "empty" };\n  return /^\\S+@\\S+\\.\\S+$/.test(value) ? { ok: true } : { ok: false, reason: "format" };\n}',
          explanation: {
            fa: 'نتیجه با union تایپ‌شده است، پس فراموش‌کردن حالت خطا در TypeScript خطا می‌دهد.',
            en: 'The result is a typed union, so forgetting the error case becomes a TypeScript error.',
          },
        },
        practice: {
          fa: 'فرم را کامل کن و حالت‌های خالی، فرمت بد، موفقیت و Dismiss را آزمایش کن.',
          en: 'Finish the form and test empty, bad format, success, and Dismiss.',
        },
        quiz: {
          question: {
            fa: 'خطای فرم چگونه به screen reader اعلام می‌شود؟',
            en: 'How is a form error announced to a screen reader?',
          },
          options: {
            fa: ['با aria-describedby و aria-invalid', 'فقط با رنگ قرمز', 'با مخفی‌کردن input'],
            en: [
              'With aria-describedby and aria-invalid',
              'With red color only',
              'By hiding the input',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'این دو ویژگی رابطهٔ فیلد و پیام خطا را برای فناوری کمکی روشن می‌کنند.',
            en: 'These attributes make the field–error relationship clear to assistive technology.',
          },
        },
      },
      {
        id: 'w3-tokens',
        day: '۴',
        title: { fa: 'آزمایشگاه AI: شمارش توکن', en: 'AI Lab: Count the Tokens' },
        summary: {
          fa: 'چهارشنبه ۱۱ نوامبر · توکن‌های فایل calculateTip را بشمار و هزینهٔ بازبینی را تخمین بزن.',
          en: 'Wed 11 Nov · Count the tokens in calculateTip and estimate what that review would cost.',
        },
        duration: 45,
        goals: {
          fa: [
            'فایل calculateTip را در tokenizer بگذاری و تعداد توکن را بنویسی.',
            'از opencode بخواهی پروژه را بازبینی کند و اعداد توکن و context را ثبت کنی.',
            'با قیمت یک مدل پولی، هزینهٔ تخمینی بازبینی را حساب کنی.',
          ],
          en: [
            'Put calculateTip into a tokenizer and record the token count.',
            'Ask opencode to review the project and record its token and context numbers.',
            'Estimate the review cost using one paid model’s price.',
          ],
        },
        terms: [
          ['token', 'تکه‌ای از یک واژه؛ حدود سه تا چهار حرف انگلیسی.'],
          [
            'context window',
            'همهٔ چیزی که مدل در یک لحظه می‌بیند: پیام‌ها، فایل‌ها و نتیجهٔ ابزارها.',
          ],
          ['input / output tokens', 'توکن‌های فرستاده‌شده به مدل و توکن‌های پاسخ آن.'],
          ['price per million', 'قیمت هر یک میلیون توکن که مبنای محاسبهٔ هزینه است.'],
        ],
        steps: {
          fa: [
            'متن فایل calculateTip را در tokenizer بگذار و عدد را بنویس.',
            'در opencode بازبینی بگیر و اعداد توکن و context را از خروجی ثبت کن.',
            'قیمت یک مدل پولی را پیدا کن و هزینهٔ همین بازبینی را حساب کن.',
            'یک session طولانی را ادامه بده تا پاسخ‌ها بد شوند، بعد در session تازه مقایسه کن.',
          ],
          en: [
            'Put the calculateTip file into a tokenizer and record the number.',
            'Run a review in opencode and record its token and context numbers.',
            'Find a paid model’s price and calculate the cost of that review.',
            'Keep one session going until answers get worse, then compare in a fresh session.',
          ],
        },
        example: {
          code: 'cost = (inputTokens / 1_000_000) * inputPrice\n     + (outputTokens / 1_000_000) * outputPrice',
          explanation: {
            fa: 'هزینه از تعداد توکن ورودی و خروجی جدا محاسبه و بعد جمع می‌شود.',
            en: 'Cost is calculated from input and output tokens separately, then added.',
          },
        },
        practice: {
          fa: 'جدول توکن و هزینهٔ تخمینی را در ai-log.md بگذار و دلیل بدترشدن پاسخ در session طولانی را بنویس.',
          en: 'Put the token and cost table into ai-log.md and explain why long sessions get worse.',
        },
        quiz: {
          question: {
            fa: 'context window چیست؟',
            en: 'What is the context window?',
          },
          options: {
            fa: [
              'همهٔ چیزی که مدل در یک لحظه می‌بیند',
              'تعداد کاربران یک سایت',
              'نسخهٔ TypeScript',
            ],
            en: [
              'Everything the model sees at once',
              'The number of site users',
              'The TypeScript version',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'context window شامل پیام‌ها، فایل‌ها، قواعد و نتیجهٔ ابزارهاست.',
            en: 'The context window includes messages, files, rules, and tool results.',
          },
        },
      },
    ],
  },
  {
    id: 'week-4',
    number: '04',
    title: { fa: 'داده، ماژول و تست', en: 'Data, Modules, and Tests' },
    subtitle: {
      fa: 'فاز ۱ · دادهٔ JSON را تایپ کن، کد را به ماژول بشکن و منطق سبد خرید را با Vitest بسنج.',
      en: 'Phase 1 · Type JSON data, split code into modules, and test cart logic with Vitest.',
    },
    outcome: {
      fa: 'در پایان هفته داشبورد زمان و فهرست محصولات با منطق خالص تست‌شده و ذخیرهٔ محلی داری.',
      en: 'Finish with a time-tracking dashboard and a product cart with pure tested logic and local persistence.',
    },
    lessons: [
      {
        id: 'w4-dashboard',
        day: '۱',
        title: { fa: 'داشبورد پیگیری زمان', en: 'Time Tracking Dashboard' },
        summary: {
          fa: 'یکشنبه ۱۵ نوامبر · import دادهٔ JSON با interface و تغییر Daily، Weekly و Monthly.',
          en: 'Sun 15 Nov · Import data.json with an interface and switch Daily, Weekly, and Monthly.',
        },
        duration: 210,
        goals: {
          fa: [
            'data.json را با یک interface برای شکل داده import کنی.',
            'دکمه‌های Daily، Weekly و Monthly ساعت‌ها و برچسب‌ها را عوض کنند.',
            'دورهٔ انتخاب‌شده در localStorage بماند و کد به ماژول‌های داده، render و رویداد تقسیم شود.',
          ],
          en: [
            'Import data.json with an interface for its shape.',
            'Daily, Weekly, and Monthly buttons update every card’s hours and label.',
            'The chosen period is remembered in localStorage and code is split into data, render, and events.',
          ],
        },
        terms: [
          ['interface', 'قرارداد شکل یک object؛ مشخص می‌کند چه فیلدهایی با چه نوعی دارد.'],
          ['JSON import', 'واردکردن فایل دادهٔ JSON به‌عنوان دادهٔ تایپ‌شده.'],
          ['localStorage', 'حافظهٔ پایدار مرورگر برای نگه‌داشتن مقدارهای کوچک.'],
          ['module', 'فایل مستقل با وظیفهٔ مشخص که چیزها را export می‌کند.'],
        ],
        steps: {
          fa: [
            'interface مربوط به data.json را بنویس و اولین commit را بفرست.',
            'ماژول داده را بساز و ساعت‌ها و برچسب‌ها را برای هر دوره برگردان.',
            'ماژول render را از روی دورهٔ فعال بساز و دکمه‌ها را به state وصل کن.',
            'دوره را در localStorage ذخیره و در بارگذاری بعدی بازیابی کن.',
          ],
          en: [
            'Write the interface for data.json and send the first commit.',
            'Build a data module that returns hours and labels for each period.',
            'Build render from the active period and connect the buttons to state.',
            'Save the period in localStorage and restore it on the next load.',
          ],
        },
        example: {
          code: "interface Activity {\n  title: string;\n  timeframes: { daily: { current: number; previous: number } };\n}\nconst saved = localStorage.getItem('period') ?? 'weekly';",
          explanation: {
            fa: 'interface شکل داده را ثابت می‌کند و localStorage مقدار انتخاب کاربر را نگه می‌دارد.',
            en: 'The interface fixes the data shape, and localStorage keeps the user’s choice.',
          },
        },
        practice: {
          fa: 'داشبورد را با سه دوره بساز، دوره را ذخیره کن و با صفحه‌کلید و تب‌های دسترس‌پذیر آزمایش کن.',
          en: 'Build the dashboard with three periods, persist the period, and test accessible tabs and keyboard use.',
        },
        quiz: {
          question: {
            fa: 'چرا برای دادهٔ JSON interface می‌نویسیم؟',
            en: 'Why write an interface for JSON data?',
          },
          options: {
            fa: [
              'تا شکل داده در کل کد بررسی و قابل اتکا شود',
              'تا فایل بزرگ‌تر شود',
              'تا داده تغییر کند',
            ],
            en: [
              'So the data shape is checked and reliable across the code',
              'So the file gets bigger',
              'So the data changes',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'interface خطاهای نام‌گذاری و نوع فیلدها را پیش از اجرا نشان می‌دهد.',
            en: 'The interface surfaces field-name and type mistakes before runtime.',
          },
        },
      },
      {
        id: 'w4-cart',
        day: '۲',
        title: { fa: 'فهرست محصولات با سبد خرید', en: 'Product List with Cart' },
        summary: {
          fa: 'چهارشنبه ۱۸ نوامبر · افزودن، کم‌کردن، حذف و محاسبهٔ همیشه‌از‌نو سبد با پنج تست.',
          en: 'Wed 18 Nov · Add, decrease, remove, and always recalculate the cart, with five tests.',
        },
        duration: 240,
        goals: {
          fa: [
            'محصولات را از data.json رندر کنی و افزودن، افزایش، کاهش و حذف کار کند.',
            'تعداد و جمع کل همیشه از سبد محاسبه شوند و جدا ذخیره نشوند.',
            'منطق سبد در ماژول خالص با حداقل پنج تست Vitest باشد و بعد از refresh بماند.',
          ],
          en: [
            'Render products from data.json with working add, increase, decrease, and remove.',
            'Cart count and total are always calculated from the cart, never stored separately.',
            'Cart logic is pure functions in its own module with at least five passing Vitest tests and survives a refresh.',
          ],
        },
        terms: [
          ['derived state', 'مقداری که از state دیگر محاسبه می‌شود و جدا ذخیره نمی‌شود.'],
          ['immutable update', 'ساختن نسخهٔ تازه از state به‌جای تغییر مستقیم آن.'],
          ['Vitest', 'ابزار تست سریع برای پروژه‌های Vite.'],
          ['modal', 'پنجرهٔ روی صفحه که تا بسته‌نشدن، تعامل با پشت آن را محدود می‌کند.'],
        ],
        steps: {
          fa: [
            'تایپ محصول و سبد را بنویس و اولین commit را بفرست.',
            'هر عملیات سبد را به‌صورت تابع خالص در ماژول جدا بنویس.',
            'برای add، increase، decrease-to-zero، remove و total تست بنویس.',
            'سبد را در localStorage نگه دار و modal تأیید سفارش را با Escape ببند.',
          ],
          en: [
            'Write the product and cart types and send the first commit.',
            'Write each cart operation as a pure function in its own module.',
            'Write tests for add, increase, decrease-to-zero, remove, and total.',
            'Persist the cart in localStorage and close the confirmation modal with Escape.',
          ],
        },
        example: {
          code: 'export function total(cart: CartItem[]): number {\n  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);\n}',
          explanation: {
            fa: 'جمع کل از سبد محاسبه می‌شود؛ هیچ فیلد جداگانه‌ای نمی‌تواند با آن ناهماهنگ شود.',
            en: 'The total is calculated from the cart, so no separate field can drift out of sync.',
          },
        },
        practice: {
          fa: 'سبد را کامل کن، پنج تست را پاس کن و مطمئن شو سبد بعد از refresh می‌ماند.',
          en: 'Finish the cart, pass the five tests, and confirm the cart survives a refresh.',
        },
        quiz: {
          question: {
            fa: 'چرا تعداد و جمع کل را جدا ذخیره نمی‌کنیم؟',
            en: 'Why not store the count and total separately?',
          },
          options: {
            fa: [
              'چون از سبد محاسبه‌شدنی‌اند و نسخهٔ جدا ممکن است ناهماهنگ شود',
              'چون localStorage از آن‌ها پشتیبانی نمی‌کند',
              'چون Vitest آن‌ها را نمی‌بیند',
            ],
            en: [
              'Because they are derivable from the cart and a separate copy can drift',
              'Because localStorage cannot store them',
              'Because Vitest cannot see them',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'هر مقدار محاسبه‌شدنی باید از منبع حقیقت ساخته شود.',
            en: 'Every derivable value should come from the source of truth.',
          },
        },
      },
      {
        id: 'w4-modules-tests',
        day: '۳',
        title: {
          fa: 'توابع خالص، ماژول‌های ES و مجموعهٔ تست',
          en: 'Pure Functions, ES Modules & a Test Suite',
        },
        summary: {
          fa: 'دوشنبه ۱۶ نوامبر · منطق سبد را به ماژول‌های کوچک بشکن و با Vitest یک مجموعهٔ تست خوانا بساز.',
          en: 'Mon 16 Nov · Split cart logic into small modules and build a readable Vitest suite.',
        },
        duration: 120,
        goals: {
          fa: [
            'منطق را به توابع خالص با ورودی و خروجی روشن تقسیم کنی.',
            'مرز ماژول‌ها را با export و import و بدون state مشترک تعریف کنی.',
            'تست‌های واحد را با نام توصیفی و الگوی Arrange-Act-Assert بنویسی.',
            'یک تست شکسته را با خواندن پیام خطا رفع کنی، نه با تغییر تست.',
          ],
          en: [
            'Split logic into pure functions with clear inputs and outputs.',
            'Define module boundaries with export and import, without shared state.',
            'Write unit tests with descriptive names and the Arrange-Act-Assert pattern.',
            'Fix a failing test from its error message instead of changing the test.',
          ],
        },
        terms: [
          [
            'Pure function',
            'تابعی که فقط از ورودی‌ها استفاده می‌کند و اثر جانبی ندارد؛ خروجی برای ورودی یکسان همیشه یکی است.',
          ],
          [
            'ES module',
            'فایل مستقل با import و export که مرز وابستگی بین بخش‌های کد را روشن می‌کند.',
          ],
          ['Unit test', 'تست کوچک‌ترین واحد منطقی، بدون مرورگر و شبکه، برای بررسی یک رفتار مشخص.'],
          ['Arrange-Act-Assert', 'سه بخش هر تست: آماده‌سازی داده، اجرای تابع، بررسی نتیجه.'],
          ['Test double', 'جایگزین ساده برای وابستگی بیرونی تا تست قطعی و مستقل از شبکه بماند.'],
          [
            'Code coverage',
            'درصد کدی که تست‌ها اجرا کرده‌اند؛ عدد پوشش جای کیفیت تست را نمی‌گیرد.',
          ],
        ],
        steps: {
          fa: [
            'ماژول cart.ts بساز و توابع add، increase، decrease، remove و total را با ورودی و خروجی تایپ‌شده جدا کن.',
            'برای هر رفتار یک describe و برای هر حالت یک it با نام توصیفی بنویس؛ مثلاً «increase adds one».',
            'در هر تست فقط یک رفتار را با الگوی Arrange-Act-Assert بسنج و دادهٔ تست را بیرون از تابع اصلی بساز.',
            'یک حالت نامعتبر مثل تعداد صفر یا منفی را تست کن و رفتار مورد انتظار را در نام تست روشن کن.',
            'با npm run test اجرا کن، یک تست را عمداً بشکن، پیام خطا را بخوان و سپس کد را اصلاح کن.',
          ],
          en: [
            'Create cart.ts and separate add, increase, decrease, remove, and total with typed inputs and outputs.',
            'Write one describe per behavior and one it per case with a descriptive name, such as “increase adds one”.',
            'Test one behavior per test with Arrange-Act-Assert, building the test data outside the function under test.',
            'Test an invalid case such as zero or negative quantity and state the expected behavior in the test name.',
            'Run npm run test, break one test on purpose, read the error, then fix the code rather than the test.',
          ],
        },
        example: {
          code: "export function increase(cart: CartItem[], id: string): CartItem[] {\n  return cart.map((item) =>\n    item.id === id ? { ...item, quantity: item.quantity + 1 } : item,\n  );\n}\n\ntest('increase adds one to the matching item', () => {\n  const cart = [{ id: 'a', price: 10, quantity: 1 }];\n  expect(increase(cart, 'a')[0].quantity).toBe(2);\n});",
          explanation: {
            fa: 'تابع آرایهٔ تازه برمی‌گرداند و آرایهٔ قبلی را تغییر نمی‌دهد؛ تست فقط همین یک رفتار را می‌سنجد.',
            en: 'The function returns a new array and does not mutate the old one; the test checks that one behavior only.',
          },
        },
        practice: {
          fa: 'منطق سبد را به cart.ts منتقل کن، حداقل هشت تست واحد با نام روشن بنویس و همه را با npm run test پاس کن.',
          en: 'Move cart logic into cart.ts, write at least eight clearly named unit tests, and make them all pass with npm run test.',
        },
        quiz: {
          question: {
            fa: 'چرا تابع خالص ساده‌تر تست می‌شود؟',
            en: 'Why is a pure function easier to test?',
          },
          options: {
            fa: [
              'چون فقط به ورودی‌ها وابسته است و نتیجهٔ قطعی می‌دهد',
              'چون همیشه در مرورگر اجرا می‌شود',
              'چون به DOM وصل است',
            ],
            en: [
              'Because it depends only on inputs and produces a predictable result',
              'Because it always runs in the browser',
              'Because it is connected to the DOM',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'تابع خالص به مرورگر، شبکه یا state بیرونی نیاز ندارد؛ پس تست آن سریع و پایدار است.',
            en: 'A pure function needs no browser, network, or outside state, so its test is fast and stable.',
          },
        },
      },
      {
        id: 'w4-effort',
        day: '۴',
        title: { fa: 'آزمایشگاه AI: تلاش کم و زیاد', en: 'AI Lab: Low vs High Effort' },
        summary: {
          fa: 'چهارشنبه ۱۸ نوامبر · فهرست حالت‌های مرزی را یک‌بار با مدل سریع و یک‌بار با مدل استدلالی بگیر.',
          en: 'Wed 18 Nov · Ask for edge-case ideas once with a fast model and once with a reasoning model.',
        },
        duration: 45,
        goals: {
          fa: [
            'برای تابع‌های سبد، فهرست حالت‌های مرزی از دو مدل بگیری.',
            'کیفیت، زمان و توکن دو پاسخ را مقایسه کنی.',
            'ایده‌هایی را که واقعاً استفاده کردی علامت بزنی و قاعدهٔ خودت را برای effort بنویسی.',
          ],
          en: [
            'Get edge-case lists for the cart functions from two models.',
            'Compare quality, time, and tokens of both answers.',
            'Mark the ideas you used and write your own rule for choosing effort.',
          ],
        },
        terms: [
          [
            'reasoning model',
            'مدلی که پیش از پاسخ فکر می‌کند و برای مسئله‌های چندمرحله‌ای بهتر است.',
          ],
          ['effort', 'میزان تلاش مدل؛ effort بالاتر زمان و توکن بیشتری می‌خواهد.'],
          ['edge case list', 'فهرست ورودی‌های غیرعادی که باید آزمایش شوند.'],
          ['trade-off', 'انتخاب بین کیفیت، سرعت و هزینه.'],
        ],
        steps: {
          fa: [
            'همان پرسش را یک‌بار با مدل سریع یا effort کم بفرست.',
            'همان پرسش را با مدل استدلالی یا effort زیاد بفرست.',
            'کیفیت، زمان و توکن را در ai-log.md مقایسه کن.',
            'برای هر ایده‌ای که استفاده کردی تست بنویس؛ تست‌ها را مدل نمی‌نویسد.',
          ],
          en: [
            'Send the same prompt once with a fast model or low effort.',
            'Send the same prompt with a reasoning model or high effort.',
            'Compare quality, time, and tokens in ai-log.md.',
            'Write a test for each idea you use; the model does not write the tests.',
          ],
        },
        example: {
          code: 'Give me edge cases to test for add, increase, decrease, remove, and total. Ideas only, no tests.',
          explanation: {
            fa: 'درخواست «فقط ایده» از نوشتن تست توسط مدل جلوگیری می‌کند؛ تست مال توست.',
            en: '“Ideas only” stops the model from writing tests; the tests stay yours.',
          },
        },
        practice: {
          fa: 'قاعدهٔ شخصی‌ات را بنویس: چه زمانی effort زیاد ارزش هزینه‌اش را دارد.',
          en: 'Write your personal rule for when higher effort is worth the cost.',
        },
        quiz: {
          question: {
            fa: 'effort بالاتر چه وقتی ارزش دارد؟',
            en: 'When is higher effort worth it?',
          },
          options: {
            fa: [
              'برای مسئله‌های سخت و چندمرحله‌ای',
              'برای هر پرسش کوتاه',
              'وقتی می‌خواهیم توکن کمتری مصرف شود',
            ],
            en: [
              'For hard, multi-step problems',
              'For every short question',
              'When we want to use fewer tokens',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'استدلال بیشتر برای مسائل پیچیده کمک می‌کند و برای پرسش ساده هزینهٔ اضافی است.',
            en: 'More reasoning helps complex problems and is wasted on simple questions.',
          },
        },
      },
    ],
  },
];
