export const weeks05to08 = [
  {
    id: 'week-5',
    number: '05',
    title: { fa: 'HTTP، fetch و دروازهٔ ۱', en: 'HTTP, fetch, and Gate 1' },
    subtitle: {
      fa: 'فاز ۱ · داده را از API بگیر، خطاها را مدل کن و در دروازهٔ ۱ تنها و بدون AI کار کن.',
      en: 'Phase 1 · Fetch real data, model failures, and work alone without AI in Gate 1.',
    },
    outcome: {
      fa: 'در پایان هفته یک اپ تولیدکنندهٔ نصیحت و تایپ‌های API داری و دروازهٔ ۱ را با ۷۰+ پاس کرده‌ای.',
      en: 'Finish with an advice app and typed API functions, and pass Gate 1 with 70+.',
    },
    lessons: [
      {
        id: 'w5-advice',
        day: '۱',
        title: { fa: 'اپ تولیدکنندهٔ نصیحت', en: 'Advice Generator App' },
        summary: {
          fa: 'یکشنبه ۲۲ نوامبر · fetch با async/await و بررسی response.ok، حالت بارگذاری و خطا.',
          en: 'Sun 22 Nov · Fetch with async/await and response.ok, plus loading and error states.',
        },
        duration: 180,
        goals: {
          fa: [
            'در بارگذاری و با هر کلیک از Advice Slip API داده بگیری.',
            'response.ok را بررسی کنی و خطا را به پیام قابل‌فهم تبدیل کنی.',
            'در حال بارگذاری دکمه غیرفعال باشد و دو درخواست هم‌زمان ساخته نشود.',
          ],
          en: [
            'Fetch from the Advice Slip API on load and on every click.',
            'Check response.ok and turn failures into a readable message.',
            'Disable the button while loading so it cannot fire twice.',
          ],
        },
        terms: [
          ['HTTP status', 'کد سه‌رقمی پاسخ سرور؛ 2xx موفق و 4xx/5xx خطاست.'],
          ['response.ok', 'خصوصیتی که می‌گوید وضعیت پاسخ بین ۲۰۰ و ۲۹۹ است.'],
          ['async / await', 'نوشتن کد ناهمگام به شکل خوانا و ترتیبی.'],
          ['loading state', 'حالتی که به کاربر نشان می‌دهد درخواست در جریان است.'],
        ],
        steps: {
          fa: [
            'یک union برای حالت‌های idle، loading، success و error بنویس و commit کن.',
            'تابع fetchAdvice را در ماژول API بنویس و response.ok را بررسی کن.',
            'رویداد کلیک فقط state را به loading ببرد و بعد نتیجه را جایگزین کند.',
            'شبکه را در DevTools قطع کن و مطمئن شو پیام خطا نشان داده می‌شود.',
          ],
          en: [
            'Write a union for idle, loading, success, and error states, then commit.',
            'Write fetchAdvice in an API module and check response.ok.',
            'The click handler only moves state to loading, then replaces it with the result.',
            'Turn the network off in DevTools and confirm an error message appears.',
          ],
        },
        example: {
          code: 'const response = await fetch(url);\nif (!response.ok) throw new Error(`HTTP ${response.status}`);\nconst data: AdviceResponse = await response.json();',
          explanation: {
            fa: 'fetch خودش برای ۴۰۴ یا ۵۰۰ خطا نمی‌دهد؛ باید response.ok را دستی بررسی کنی.',
            en: 'fetch does not throw on 404 or 500, so you must check response.ok yourself.',
          },
        },
        practice: {
          fa: 'اپ را با حالت‌های چهارگانه بساز و حالت آفلاین را با قطع شبکه آزمایش کن.',
          en: 'Build the app with all four states and test the offline case by cutting the network.',
        },
        quiz: {
          question: {
            fa: 'چرا response.ok بررسی می‌شود؟',
            en: 'Why check response.ok?',
          },
          options: {
            fa: [
              'چون fetch برای پاسخ‌های ۴xx و ۵xx خطا پرتاب نمی‌کند',
              'چون همیشه false است',
              'چون JSON را تبدیل می‌کند',
            ],
            en: [
              'Because fetch does not throw on 4xx and 5xx responses',
              'Because it is always false',
              'Because it converts JSON',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'بدون این بررسی، پاسخ خطای سرور به‌اشتباه دادهٔ معتبر تلقی می‌شود.',
            en: 'Without the check, a server error response is mistaken for valid data.',
          },
        },
      },
      {
        id: 'w5-type-api',
        day: '۲',
        title: { fa: 'تایپ‌کردن API', en: 'Type the API' },
        summary: {
          fa: 'دوشنبه ۲۳ نوامبر · برای posts و users تایپ بنویس و پاسخ را به‌صورت unknown بررسی کن.',
          en: 'Mon 23 Nov · Write types for posts and users and treat responses as unknown.',
        },
        duration: 120,
        goals: {
          fa: [
            'بر اساس JSON واقعی JSONPlaceholder، تایپ Post و User بنویسی.',
            'توابع getPost و getUser را با Promise<Post> و Promise<User> بنویسی.',
            'پاسخ را unknown بگیری و پیش از استفاده بررسی کنی.',
          ],
          en: [
            'Write Post and User types based on the real JSONPlaceholder JSON.',
            'Write getPost and getUser with Promise<Post> and Promise<User>.',
            'Take the response as unknown and check it before use.',
          ],
        },
        terms: [
          ['generic', 'نوعی که نوع دیگری را می‌پذیرد، مثل Promise<Post>.'],
          ['unknown', 'نوع امن برای دادهٔ بیرونی؛ تا بررسی نشود نمی‌توان از آن استفاده کرد.'],
          ['type guard', 'تابع یا شرطی که نوع را در زمان اجرا بررسی می‌کند.'],
          ['optional field', 'فیلدی که ممکن است در پاسخ نباشد و با ? علامت می‌خورد.'],
        ],
        steps: {
          fa: [
            'پاسخ واقعی posts و users را بگیر و فایل JSON را بررسی کن.',
            'interface یا type مناسب بنویس و فیلدهای اختیاری را فقط جایی که واقعاً غایب بودند بگذار.',
            'توابع getPost و getUser را با بررسی پاسخ بنویس.',
            'یک mock خراب بساز و نشان بده بررسی زمان اجرا کجا وارد می‌شود.',
          ],
          en: [
            'Fetch the real posts and users responses and inspect the JSON.',
            'Write suitable types and mark optional fields only where you actually saw them missing.',
            'Write getPost and getUser with response checks.',
            'Break a mock on purpose and show where runtime checks begin.',
          ],
        },
        example: {
          code: 'async function getPost(id: number): Promise<Post> {\n  const response = await fetch(`${base}/posts/${id}`);\n  if (!response.ok) throw new Error("Post not found");\n  return (await response.json()) as Post;\n}',
          explanation: {
            fa: 'نوع Promise<Post> قرارداد تابع را روشن می‌کند؛ بررسی زمان اجرا هنوز لازم است.',
            en: 'Promise<Post> makes the contract clear, but runtime checks are still needed.',
          },
        },
        practice: {
          fa: 'توابع تایپ‌شده را بنویس و در README توضیح بده مرز بررسی TypeScript و بررسی زمان اجرا کجاست.',
          en: 'Write the typed functions and explain in the README where TypeScript checks end and runtime checks begin.',
        },
        quiz: {
          question: {
            fa: 'چرا دادهٔ پاسخ را unknown می‌گیریم؟',
            en: 'Why take the response data as unknown?',
          },
          options: {
            fa: [
              'تا مجبور شویم پیش از استفاده نوعش را بررسی کنیم',
              'تا کد سریع‌تر شود',
              'چون JSON نوع ندارد',
            ],
            en: [
              'So we must check its type before use',
              'So the code runs faster',
              'Because JSON has no types',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'unknown استفادهٔ ناایمن را تا زمان بررسی مسدود می‌کند.',
            en: 'unknown blocks unsafe use until you check it.',
          },
        },
      },
      {
        id: 'w5-gate1',
        day: '۳',
        title: { fa: 'دروازهٔ ۱: ردیاب نشانی IP', en: 'Gate 1: IP Address Tracker' },
        summary: {
          fa: 'سه‌شنبه ۲۴ نوامبر · چهار ساعت، تنها و بدون AI؛ تغییر زندهٔ روز پنجشنبه ۲۶ نوامبر.',
          en: 'Tue 24 Nov · Four hours, alone, with no AI; live change on Thursday 26 November.',
        },
        duration: 240,
        goals: {
          fa: [
            'جست‌وجو با IP یا دامنه و ساخت query با URLSearchParams.',
            'نمایش هر پنج حالت: loading، success، empty، error و invalid input.',
            'خطای 4xx، 5xx و قطع شبکه هرکدام پیام دوستانهٔ متفاوت داشته باشند.',
          ],
          en: [
            'Search by IP or domain and build the query with URLSearchParams.',
            'Show all five states: loading, success, empty, error, and invalid input.',
            '4xx, 5xx, and network failure each give a different friendly message.',
          ],
        },
        terms: [
          ['URLSearchParams', 'ابزار ساخت و خواندن query string به‌شکل امن و خوانا.'],
          ['API key', 'کلید دسترسی به سرویس؛ در فرانت‌اند عملاً عمومی است.'],
          ['4xx / 5xx', 'خطای سمت درخواست در برابر خطای سمت سرور.'],
          ['gate', 'آزمون ورود به فاز بعد؛ بدون AI و با تغییر زنده.'],
        ],
        steps: {
          fa: [
            'پیش از هر درخواست، ورودی را اعتبارسنجی کن و حالت invalid را نشان بده.',
            'query را با URLSearchParams بساز و پاسخ را با پنج حالت نمایش بده.',
            'نقشه را با نتیجهٔ جست‌وجو به‌روز کن و پیوندهای خطا را بررسی کن.',
            'در README توضیح بده کلید API کجا می‌رود و چرا در این پروژه پذیرفتنی است.',
          ],
          en: [
            'Validate input before any request and show the invalid state.',
            'Build the query with URLSearchParams and render all five states.',
            'Update the map from the search result and check the failure paths.',
            'Explain in the README where the API key ends up and why that is acceptable here.',
          ],
        },
        example: {
          code: 'const params = new URLSearchParams({ q: query, apiKey });\nconst response = await fetch(`https://geo.ipify.org/api/v2/country?${params}`);',
          explanation: {
            fa: 'URLSearchParams کاراکترهای خاص را امن می‌کند و query را خوانا می‌سازد.',
            en: 'URLSearchParams escapes special characters and keeps the query readable.',
          },
        },
        practice: {
          fa: 'در زمان مشخص‌شده کار کن، commitهای کوچک بفرست و برای تغییر زنده آماده باش.',
          en: 'Work in the fixed window, send small commits, and be ready for the live change.',
        },
        quiz: {
          question: {
            fa: 'در دروازهٔ ۱ چه چیزی مجاز نیست؟',
            en: 'What is not allowed during Gate 1?',
          },
          options: {
            fa: ['استفاده از AI', 'commit کردن', 'خواندن مستندات'],
            en: ['Using AI', 'Committing', 'Reading documentation'],
          },
          answer: 0,
          explanation: {
            fa: 'دروازه باید توانایی واقعی تو را نشان دهد؛ پس AI ممنوع است.',
            en: 'The gate must show your real ability, so AI is not allowed.',
          },
        },
      },
      {
        id: 'w5-agents-md',
        day: '۴',
        title: { fa: 'آزمایشگاه AI: نوشتن AGENTS.md', en: 'AI Lab: Write Your AGENTS.md' },
        summary: {
          fa: 'چهارشنبه ۲۵ نوامبر · با /init فایل قواعد بساز و بازبینی با و بدون آن را مقایسه کن.',
          en: 'Wed 25 Nov · Create a rules file with /init and compare reviews with and without it.',
        },
        duration: 60,
        goals: {
          fa: [
            'با /init فایل AGENTS.md بسازی و stack، scriptها و روش State-First را در آن بنویسی.',
            'قاعدهٔ zero any و ماژول API را اضافه کنی.',
            'بازبینی اپ نصیحت را با و بدون فایل قواعد مقایسه کنی.',
          ],
          en: [
            'Use /init to create AGENTS.md with the stack, npm scripts, and the State-First Method.',
            'Add the zero any rule and the API module rule.',
            'Compare a review of the advice app with and without the rules file.',
          ],
        },
        terms: [
          ['AGENTS.md', 'فایل قواعد پروژه در ریشهٔ مخزن که agent هر session می‌خواند.'],
          ['/init', 'فرمانی که agent با آن پیش‌نویس فایل قواعد را می‌سازد.'],
          ['rule', 'دستور ثابت پروژه که رفتار agent را محدود می‌کند.'],
          ['review format', 'شکل خواسته‌شدهٔ گزارش، مثلاً file:line: problem, fix.'],
        ],
        steps: {
          fa: [
            'در ریشهٔ پروژه /init را اجرا کن و AGENTS.md تولیدشده را ویرایش کن.',
            'stack، scriptها، zero any، State-First و ماژول API را دقیق بنویس.',
            'بازبینی را یک‌بار بدون فایل قواعد و یک‌بار با آن بگیر و تفاوت‌ها را بنویس.',
            'یک قاعده برای قالب گزارش اضافه کن و نشان بده کار می‌کند.',
          ],
          en: [
            'Run /init at the project root and edit the generated AGENTS.md.',
            'Write the stack, scripts, zero any, State-First, and API module rules precisely.',
            'Run the review once without the rules file and once with it, and note the differences.',
            'Add a rule for the report format and show it working.',
          ],
        },
        example: {
          code: '- Stack: Vite + strict TypeScript + Tailwind\n- No any and no @ts-ignore\n- All fetch calls live in src/api.ts\n- Findings: file:line: problem, fix',
          explanation: {
            fa: 'قواعد کوتاه و مشخص بهتر از متن کلی‌اند؛ agent می‌تواند آن‌ها را مستقیم اجرا کند.',
            en: 'Short, specific rules beat general prose; the agent can apply them directly.',
          },
        },
        practice: {
          fa: 'AGENTS.md را commit کن و در ai-log.md تفاوت دو بازبینی را ثبت کن.',
          en: 'Commit AGENTS.md and record the difference between the two reviews in ai-log.md.',
        },
        quiz: {
          question: {
            fa: 'چرا AGENTS.md در ریشهٔ مخزن است؟',
            en: 'Why is AGENTS.md at the repository root?',
          },
          options: {
            fa: [
              'تا agent آن را در هر session پیدا و بخواند',
              'تا در مرورگر دیده شود',
              'تا lint آن را بررسی کند',
            ],
            en: [
              'So the agent finds and reads it every session',
              'So it shows in the browser',
              'So lint checks it',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'قواعد باید همیشه در دسترس agent باشند، نه در حافظهٔ یک گفت‌وگو.',
            en: 'Rules must always be available to the agent, not buried in one chat.',
          },
        },
      },
    ],
  },
  {
    id: 'week-6',
    number: '06',
    title: { fa: 'مبانی React و Tailwind در React', en: 'React Basics and Tailwind in React' },
    subtitle: {
      fa: 'فاز ۲ · از state دستی به کامپوننت‌های React برو؛ AI دستیار کوچک است، نه نویسندهٔ پروژه.',
      en: 'Phase 2 · Move from manual state to React components; AI is a small assistant, not the project author.',
    },
    outcome: {
      fa: 'در پایان هفته اپ‌های هفتهٔ ۲ و ۳ را در React بازسازی کرده‌ای و صفحهٔ اعلان‌ها و قیمت‌گذاری را ساخته‌ای.',
      en: 'Finish with the week 2 and 3 apps rebuilt in React, plus a notifications page and a pricing component.',
    },
    lessons: [
      {
        id: 'w6-audit',
        day: '۱',
        title: { fa: 'ممیزی کد نوشته‌شده با AI', en: 'AI Audit' },
        summary: {
          fa: 'شنبه ۲۸ نوامبر · در یک کامپوننت نوشته‌شده با AI پنج ایراد پیدا کن و هرکدام را با line بنویس.',
          en: 'Sat 28 Nov · Find five flaws in an AI-written component and write each with a line reference.',
        },
        duration: 90,
        goals: {
          fa: [
            'حداقل چهار ایراد از پنج ایراد پنهان را پیدا کنی.',
            'هر ایراد را به‌شکل line، مشکل و پیشنهاد اصلاح بنویسی.',
            'برای هر ایراد بگویی کدام بررسی می‌توانست خودکار آن را بگیرد.',
          ],
          en: [
            'Find at least four of the five hidden flaws.',
            'Write each flaw as line, problem, and fix.',
            'Name which check could catch each flaw automatically.',
          ],
        },
        terms: [
          ['review comment', 'نظر دقیق روی یک خط یا بخش از کد با مشکل و پیشنهاد.'],
          ['TypeScript check', 'بررسی نوع که بسیاری از خطاها را پیش از اجرا می‌گیرد.'],
          ['lint rule', 'قاعدهٔ خودکار برای الگوهای مشکوک کد.'],
          ['keyboard check', 'آزمایش دسترسی‌پذیری با Tab، Enter و Escape.'],
        ],
        steps: {
          fa: [
            'کامپوننت داده‌شده را خط‌به‌خط بخوان و ایرادها را یادداشت کن.',
            'هر ایراد را با شمارهٔ خط، مشکل و اصلاح پیشنهادی بنویس.',
            'با TypeScript، lint و آزمایش صفحه‌کلید هر ایراد را تأیید کن.',
            'برای هر ایراد بنویس کدام بررسی خودکار می‌تواند جلوی آن را بگیرد.',
          ],
          en: [
            'Read the provided component line by line and note the flaws.',
            'Write each flaw with its line number, the problem, and a suggested fix.',
            'Confirm each flaw with TypeScript, lint, and a keyboard test.',
            'For each flaw, name which automated check could catch it.',
          ],
        },
        example: {
          code: 'src/Notification.tsx:14: the unread dot is rendered for every row; fix: render it only when !read',
          explanation: {
            fa: 'قالب file:line: problem, fix بازبینی را قابل‌اجرا و بدون ابهام می‌کند.',
            en: 'The file:line: problem, fix format makes the review actionable and unambiguous.',
          },
        },
        practice: {
          fa: 'گزارش ممیزی را در ai-log.md بگذار و همهٔ پنج ایراد را پیدا کن.',
          en: 'Put the audit report in ai-log.md and find all five flaws.',
        },
        quiz: {
          question: {
            fa: 'بهترین شکل نظر بازبینی کدام است؟',
            en: 'Which is the best review comment format?',
          },
          options: {
            fa: ['line، مشکل و اصلاح پیشنهادی', 'فقط «بد است»', 'یک بازنویسی کامل بدون توضیح'],
            en: [
              'Line, problem, and suggested fix',
              'Just “this is bad”',
              'A full rewrite with no explanation',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'بازبینی باید قابل‌اجرا باشد؛ مکان، مشکل و راه‌حل لازم است.',
            en: 'A review must be actionable: location, problem, and solution.',
          },
        },
      },
      {
        id: 'w6-rebuild',
        day: '۲',
        title: { fa: 'بازسازی انعام و FAQ در React', en: 'Rebuild Tip and FAQ in React' },
        summary: {
          fa: 'یکشنبه ۲۹ نوامبر · هر دو پروژه را با کامپوننت و props تایپ‌شده بازسازی کن و calculateTip را بازاستفاده کن.',
          en: 'Sun 29 Nov · Rebuild both projects with components and typed props, reusing calculateTip unchanged.',
        },
        duration: 210,
        goals: {
          fa: [
            'هر دو پروژه مثل نسخه‌های هفتهٔ ۲ و ۳ کار کنند.',
            'calculateTip بدون تغییر بازاستفاده شود.',
            'گزینهٔ «فقط یکی باز بماند» در FAQ با state بالاتر انجام شود.',
          ],
          en: [
            'Both projects work exactly like the week 2 and 3 versions.',
            'calculateTip is reused unchanged.',
            'The FAQ “only one open” option uses lifted state.',
          ],
        },
        terms: [
          ['component', 'واحد مستقل رابط کاربری که props می‌گیرد و UI برمی‌گرداند.'],
          ['props', 'ورودی‌های یک کامپوننت که از والد به فرزند داده می‌شوند.'],
          ['useState', 'قلاب React برای نگه‌داشتن state در یک کامپوننت.'],
          ['lifted state', 'بردن state به والد مشترک تا چند فرزند با آن هماهنگ باشند.'],
        ],
        steps: {
          fa: [
            'محاسبهٔ انعام را در یک ماژول تایپ‌شده نگه دار و فقط UI را به کامپوننت تبدیل کن.',
            'FAQ را با لیستی از پرسش‌ها و کامپوننت Question بساز.',
            'state بازبودن را در والد نگه دار تا گزینهٔ یکی‌باز ممکن شود.',
            'در README کوتاه بنویس render(state) و رویدادها چگونه به state و کامپوننت تبدیل شدند.',
          ],
          en: [
            'Keep the tip calculation in a typed module and convert only the UI to components.',
            'Build the FAQ from a list of questions with a Question component.',
            'Keep open state in the parent so the one-open option is possible.',
            'Add a short README note on how render(state) and handlers became state and components.',
          ],
        },
        example: {
          code: 'type QuestionProps = { question: Question; open: boolean; onToggle: () => void };\nfunction Question({ question, open, onToggle }: QuestionProps) { /* ... */ }',
          explanation: {
            fa: 'props تایپ‌شده قرارداد کامپوننت را روشن می‌کند و state در والد می‌ماند.',
            en: 'Typed props make the component contract clear and keep state in the parent.',
          },
        },
        practice: {
          fa: 'هر دو را در React بساز و رفتار و دسترسی‌پذیری را با نسخهٔ قبلی مقایسه کن.',
          en: 'Build both in React and compare behavior and accessibility with the earlier versions.',
        },
        quiz: {
          question: {
            fa: 'گزینهٔ «فقط یکی باز بماند» بهتر است کجا مدیریت شود؟',
            en: 'Where is the “only one open” option best managed?',
          },
          options: {
            fa: ['در state والد مشترک', 'در هر کامپوننت جدا', 'در CSS'],
            en: ['In the shared parent state', 'Inside each separate component', 'In CSS'],
          },
          answer: 0,
          explanation: {
            fa: 'هماهنگی بین فرزندان به state مشترک در والد نیاز دارد.',
            en: 'Coordination between siblings needs shared state in the parent.',
          },
        },
      },
      {
        id: 'w6-plan-permissions',
        day: '۳',
        title: {
          fa: 'آزمایشگاه AI: برنامه، سپس ساخت با مجوز',
          en: 'AI Lab: Plan, Then Build with Permissions',
        },
        summary: {
          fa: 'دوشنبه ۳۰ نوامبر · اول commit کن، مجوزها را تنظیم کن و فقط فایل‌های خالی را به agent بسپار.',
          en: 'Mon 30 Nov · Commit first, set permissions, and let the agent create only empty files.',
        },
        duration: 60,
        goals: {
          fa: [
            'پیش از اجرای agent commit کنی تا diff قابل بازبینی و قابل برگشت باشد.',
            'در Plan mode برنامهٔ کامپوننت‌های اعلان را بگیری و اصلاح کنی.',
            'در Build mode فقط فایل‌های خالی و تایپ Notification ساخته شود.',
          ],
          en: [
            'Commit before running the agent so the diff is reviewable and reversible.',
            'Get a plan for the notification components in Plan mode and correct it.',
            'In Build mode, let it create only empty files and the Notification type.',
          ],
        },
        terms: [
          ['Plan mode', 'حالت خواندنی که فقط پیشنهاد و برنامه می‌دهد.'],
          ['Build mode', 'حالتی که agent می‌تواند فایل را تغییر دهد و فرمان اجرا کند.'],
          ['permission', 'اجازهٔ allow، ask یا deny برای هر ابزار.'],
          ['diff', 'تفاوت کد قبل و بعد که پیش از commit بازبینی می‌شود.'],
        ],
        steps: {
          fa: [
            'کار فعلی را commit کن و مجوز ویرایش فایل و اجرای فرمان را روی ask بگذار.',
            'در Plan mode برنامهٔ ساخت اعلان‌ها را بگیر و اشتباه‌هایش را اصلاح کن.',
            'در Build mode فقط فایل‌های خالی و تایپ را بساز و diff را خط‌به‌خط بخوان.',
            'هر درخواست مجوز، تصمیم و دلیلش را در ai-log.md ثبت کن.',
          ],
          en: [
            'Commit current work and set file edits and commands to ask.',
            'In Plan mode, get the notification component plan and correct it.',
            'In Build mode, create only the empty files and type, and read the diff line by line.',
            'Record each permission request, your decision, and why in ai-log.md.',
          ],
        },
        example: {
          code: '// permissions\n{ "edit": "ask", "bash": "ask" }',
          explanation: {
            fa: 'حالت ask کنترل را نگه می‌دارد؛ agent بدون تأیید تو تغییری نمی‌دهد.',
            en: 'Ask mode keeps control: the agent changes nothing without your approval.',
          },
        },
        practice: {
          fa: 'بقیهٔ کامپوننت‌ها را خودت بنویس و یک تغییر نامناسب agent را با git برگردان.',
          en: 'Write the rest of the components yourself and undo one unwanted agent change with git.',
        },
        quiz: {
          question: {
            fa: 'چرا پیش از اجرای agent commit می‌کنیم؟',
            en: 'Why commit before running the agent?',
          },
          options: {
            fa: [
              'تا diff قابل بازبینی باشد و بتوان تغییر را برگرداند',
              'تا agent سریع‌تر شود',
              'تا lint اجرا نشود',
            ],
            en: [
              'So the diff is reviewable and changes can be undone',
              'So the agent runs faster',
              'So lint does not run',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'commit نقطهٔ بازگشت مطمئن می‌سازد.',
            en: 'A commit creates a safe point to return to.',
          },
        },
      },
      {
        id: 'w6-notifications',
        day: '۴',
        title: { fa: 'صفحهٔ اعلان‌ها', en: 'Notifications Page' },
        summary: {
          fa: 'سه‌شنبه ۱ دسامبر · یک کامپوننت برای همهٔ ردیف‌ها، شمارندهٔ محاسبه‌شده و استایل unread با clsx.',
          en: 'Tue 1 Dec · One component for every row, a calculated counter, and unread styling with clsx.',
        },
        duration: 180,
        goals: {
          fa: [
            'یک <Notification> همهٔ ردیف‌ها را از آرایهٔ تایپ‌شده رندر کند.',
            '«Mark all as read» کار کند و شمارندهٔ خوانده‌نشده محاسبه شود، نه ذخیره.',
            'استایل خوانده‌نشده با clsx از روی prop تعیین شود و @apply استفاده نشود.',
          ],
          en: [
            'One <Notification> renders every row from a typed data array.',
            '“Mark all as read” works, and the unread counter is calculated, not stored.',
            'Unread styling is switched with clsx from a prop, with no @apply anywhere.',
          ],
        },
        terms: [
          ['clsx', 'تابع کوچک برای ترکیب شرطی کلاس‌های CSS.'],
          ['derived count', 'شمارنده‌ای که از فیلترکردن داده محاسبه می‌شود.'],
          ['prop', 'ورودی کامپوننت که داده یا تابع را از والد می‌گیرد.'],
          ['@apply', 'دستور Tailwind برای نوشتن کلاس داخل CSS؛ در این دوره استفاده نمی‌شود.'],
        ],
        steps: {
          fa: [
            'تایپ Notification و دادهٔ نمونه را بنویس و commit کن.',
            'کامپوننت Notification را با prop خوانده‌شده و clsx بساز.',
            'شمارنده را از filter روی داده حساب کن و Mark all را با map پیاده کن.',
            'کلیک روی یک اعلان را طوری پیاده کن که فقط همان را خوانده کند.',
          ],
          en: [
            'Write the Notification type and sample data, then commit.',
            'Build the Notification component with a read prop and clsx.',
            'Calculate the counter with filter and implement Mark all with map.',
            'Implement per-row clicks so only that notification becomes read.',
          ],
        },
        example: {
          code: "const rowClass = clsx('notification', { 'notification-unread': !n.read });\nconst unread = notifications.filter((n) => !n.read).length;",
          explanation: {
            fa: 'کلاس‌ها و شمارنده هر دو از داده محاسبه می‌شوند و نسخهٔ جدا ندارند.',
            en: 'Both classes and the counter derive from the data, with no separate copies.',
          },
        },
        practice: {
          fa: 'صفحه را بساز و با تغییر خوانده‌شده‌ها شمارنده را آزمایش کن.',
          en: 'Build the page and test the counter by changing read states.',
        },
        quiz: {
          question: {
            fa: 'شمارندهٔ خوانده‌نشده باید چگونه باشد؟',
            en: 'How should the unread counter work?',
          },
          options: {
            fa: ['محاسبه‌شده از آرایهٔ اعلان‌ها', 'ذخیره‌شده در state جدا', 'نوشته‌شده در HTML'],
            en: [
              'Calculated from the notifications array',
              'Stored in separate state',
              'Written in the HTML',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'مقدار محاسبه‌شدنی نباید کپی و نگه‌داری شود.',
            en: 'A derivable value should not be copied and kept.',
          },
        },
      },
      {
        id: 'w6-pricing',
        day: '۵',
        title: { fa: 'کامپوننت قیمت‌گذاری با کلید تغییر', en: 'Pricing Component with Toggle' },
        summary: {
          fa: 'چهارشنبه ۲ دسامبر · یک PricingCard با cva، variant ویژه و کلید ماهانه/سالانه.',
          en: 'Wed 2 Dec · One PricingCard with cva, a featured variant, and a monthly/annual toggle.',
        },
        duration: 180,
        goals: {
          fa: [
            'یک <PricingCard> با تعریف cva بسازی و کارت ویژه را با intent: "featured" نشان بدهی.',
            'کلید ماهانه/سالانه قیمت‌ها را با state عوض کند و با صفحه‌کلید کار کند.',
            'رنگ‌ها با @theme تعریف شوند و tailwind-merge برای override والد استفاده شود.',
          ],
          en: [
            'Build one <PricingCard> with a cva definition and render the featured card as intent: "featured".',
            'The monthly/annual toggle changes prices through state and works by keyboard.',
            'Design colors are @theme tokens and tailwind-merge handles parent overrides.',
          ],
        },
        terms: [
          ['cva', 'ابزار ساخت variantهای تایپ‌شده برای کلاس‌های کامپوننت.'],
          ['variant', 'نسخهٔ متفاوت یک کامپوننت، مثل featured در برابر عادی.'],
          ['@theme', 'روش تعریف توکن رنگ و فاصله در Tailwind نسخهٔ ۴.'],
          ['tailwind-merge', 'ادغام کلاس‌ها به‌طوری که کلاس والد بی‌دلیل حذف نشود.'],
        ],
        steps: {
          fa: [
            'تعریف cva را با variant عادی و featured بنویس و commit کن.',
            'کارت‌ها را از آرایهٔ داده رندر کن تا افزودن طرح چهارم فقط یک داده باشد.',
            'state ماهانه/سالانه را بساز و قیمت‌ها را از آن محاسبه کن.',
            'کلید را با role و برچسب قابل‌دسترسی بساز و با Tab و Space آزمایش کن.',
          ],
          en: [
            'Write the cva definition with normal and featured variants, then commit.',
            'Render cards from a data array so a fourth plan needs only one new entry.',
            'Add monthly/annual state and calculate prices from it.',
            'Build the toggle with an accessible role and label, and test with Tab and Space.',
          ],
        },
        example: {
          code: 'const card = cva("pricing-card", {\n  variants: { intent: { default: "", featured: "pricing-card-featured" } },\n});',
          explanation: {
            fa: 'کارت ویژه یک variant است، نه یک کپی جدا؛ تغییر ظاهر در یک محل می‌ماند.',
            en: 'The featured card is a variant, not a copy, so styling stays in one place.',
          },
        },
        practice: {
          fa: 'طرح چهارم را فقط با یک ورودی دادهٔ جدید اضافه کن و بررسی کن همه‌جا درست نمایش داده شود.',
          en: 'Add a fourth plan with only one new data entry and check it renders correctly everywhere.',
        },
        quiz: {
          question: {
            fa: 'چرا کارت ویژه را variant می‌سازیم؟',
            en: 'Why make the featured card a variant?',
          },
          options: {
            fa: [
              'تا کد تکرار نشود و تغییر در یک محل بماند',
              'تا رنگ‌ها حذف شوند',
              'تا کلید کار نکند',
            ],
            en: [
              'So code is not duplicated and changes stay in one place',
              'So colors are removed',
              'So the toggle stops working',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'variant همان کامپوننت را با ظاهر متفاوت نگه می‌دارد.',
            en: 'A variant keeps the same component with a different appearance.',
          },
        },
      },
    ],
  },
  {
    id: 'week-7',
    number: '07',
    title: { fa: 'state', en: 'State' },
    subtitle: {
      fa: 'فاز ۲ · فقط فیلترهای فعال را نگه دار و فهرست قابل‌مشاهده را هنگام رندر محاسبه کن.',
      en: 'Phase 2 · Keep only active filters in state and calculate the visible list during render.',
    },
    outcome: {
      fa: 'در پایان هفته فیلتر آگهی‌های شغلی و صفحهٔ محصول با سبد مشترک و lightbox دسترس‌پذیر داری.',
      en: 'Finish with job filtering and a product page with shared cart state and an accessible lightbox.',
    },
    lessons: [
      {
        id: 'w7-jobs',
        day: '۱',
        title: { fa: 'آگهی‌های شغلی با فیلتر', en: 'Job Listings with Filtering' },
        summary: {
          fa: 'یکشنبه ۶ دسامبر · افزودن و حذف تگ‌ها، فیلتر همه‌با‌هم و محاسبهٔ فهرست در رندر.',
          en: 'Sun 6 Dec · Add and remove tags, filter by all active tags, and calculate the list during render.',
        },
        duration: 210,
        goals: {
          fa: [
            'کلیک روی تگ آن را به نوار فیلتر اضافه کند و حذف یک یا همه ممکن باشد.',
            'فهرست فقط شغل‌هایی را نشان دهد که با همهٔ تگ‌های فعال مطابقت دارند.',
            'فقط فیلترهای فعال state باشند و filteredJobs در useState ذخیره نشود.',
          ],
          en: [
            'Clicking a tag adds it to the filter bar, and removing one or all is possible.',
            'The list shows only jobs that match all active tags.',
            'Only active filters are state; filteredJobs is not stored in useState.',
          ],
        },
        terms: [
          ['derived list', 'فهرستی که در رندر از داده و فیلترها محاسبه می‌شود.'],
          ['active filters', 'مجموعهٔ تگ‌هایی که کاربر انتخاب کرده است.'],
          ['empty state', 'نمایش مناسب وقتی هیچ نتیجه‌ای وجود ندارد.'],
          ['pure filter', 'تابع فیلتر بدون وابستگی به React که قابل تست است.'],
        ],
        steps: {
          fa: [
            'تایپ Job و state آرایهٔ فیلترها را بنویس و commit کن.',
            'تابع خالص filterJobs را در فایل جدا بنویس.',
            'در رندر، فهرست را از filterJobs حساب کن و empty state بساز.',
            'حذف تگ و پاک‌کردن همه را با همان state پیاده کن.',
          ],
          en: [
            'Write the Job type and the state of active filter tags, then commit.',
            'Write a pure filterJobs function in its own file.',
            'During render, calculate the list with filterJobs and add an empty state.',
            'Implement tag removal and clear-all with the same state.',
          ],
        },
        example: {
          code: 'const visibleJobs = filterJobs(jobs, activeFilters);\n// not: const [filteredJobs, setFilteredJobs] = useState(jobs)',
          explanation: {
            fa: 'فهرست محاسبه‌شده همیشه با فیلترها هماهنگ است و state تکراری ندارد.',
            en: 'The calculated list always matches the filters and has no duplicate state.',
          },
        },
        practice: {
          fa: 'فیلتر را بساز و منطق آن را در فایل جدا نگه دار تا هفتهٔ ۱۳ تست شود.',
          en: 'Build the filter and keep its logic in a separate file for testing in week 13.',
        },
        quiz: {
          question: {
            fa: 'چرا filteredJobs را در useState نگه نمی‌داریم؟',
            en: 'Why not keep filteredJobs in useState?',
          },
          options: {
            fa: [
              'چون از داده و فیلترها محاسبه‌شدنی است',
              'چون React از آرایه پشتیبانی نمی‌کند',
              'چون فیلترها تایپ ندارند',
            ],
            en: [
              'Because it is derivable from data and filters',
              'Because React does not support arrays',
              'Because filters have no type',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'state تکراری می‌تواند از فیلترها عقب بماند و ناهماهنگ شود.',
            en: 'Duplicate state can fall behind the filters and drift.',
          },
        },
      },
      {
        id: 'w7-ecommerce',
        day: '۲',
        title: { fa: 'صفحهٔ محصول فروشگاهی', en: 'E-commerce Product Page' },
        summary: {
          fa: 'چهارشنبه ۹ دسامبر · گالری، انتخاب تعداد، سبد در هدر و lightbox با useRef.',
          en: 'Wed 9 Dec · Gallery, quantity picker, header cart, and a lightbox with useRef.',
        },
        duration: 240,
        goals: {
          fa: [
            'گالری با تصاویر بندانگشتی و انتخاب تعداد کار کند.',
            'افزودن به سبد سبد هدر را به‌روز کند و حذف از dropdown کار کند.',
            'سبد در پایین‌ترین والد مشترک باشد و lightbox با Escape بسته شود.',
          ],
          en: [
            'The gallery with thumbnails and the quantity picker work.',
            'Adding to cart updates the header cart and removal from the dropdown works.',
            'Cart state lives in the lowest shared parent, and the lightbox closes with Escape.',
          ],
        },
        terms: [
          ['lowest shared parent', 'نزدیک‌ترین والد مشترک که state در آن نگه داشته می‌شود.'],
          ['useRef', 'قلاب React برای نگه‌داشتن ارجاع به عنصر یا مقدار پایدار.'],
          ['lightbox', 'نمایش بزرگ تصویر روی صفحه.'],
          ['focus return', 'بازگرداندن فوکوس به عنصری که پنجره را باز کرده است.'],
        ],
        steps: {
          fa: [
            'تایپ محصول و سبد را بنویس و commit کن.',
            'state سبد را در والد مشترک هدر و صفحه نگه دار و همهٔ نماها را از آن بساز.',
            'گالری و انتخاب تعداد را به state وصل کن.',
            'lightbox را با useRef بساز و فوکوس را داخل نگه دار و با Escape ببند.',
          ],
          en: [
            'Write the product and cart types, then commit.',
            'Keep cart state in the shared parent of header and page, and build every view from it.',
            'Connect the gallery and quantity picker to state.',
            'Build the lightbox with useRef, trap focus inside, and close with Escape.',
          ],
        },
        example: {
          code: 'const trigger = useRef<HTMLButtonElement>(null);\n// on close\ntrigger.current?.focus();',
          explanation: {
            fa: 'useRef عنصر بازکننده را نگه می‌دارد تا پس از بستن پنجره فوکوس به آن برگردد.',
            en: 'useRef keeps the trigger so focus returns to it after the dialog closes.',
          },
        },
        practice: {
          fa: 'سه آیتم اضافه کن و از dropdown حذف کن؛ همهٔ نماها باید هماهنگ بمانند.',
          en: 'Add three items and remove from the dropdown; every view must stay in sync.',
        },
        quiz: {
          question: {
            fa: 'سبد خرید بهتر است کجا باشد؟',
            en: 'Where should cart state live?',
          },
          options: {
            fa: ['در پایین‌ترین والد مشترک هدر و صفحه', 'در هر کامپوننت جدا', 'در CSS'],
            en: [
              'In the lowest shared parent of header and page',
              'In each component separately',
              'In CSS',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'والد مشترک همهٔ نماها را با یک منبع حقیقت هماهنگ می‌کند.',
            en: 'The shared parent keeps every view aligned with one source of truth.',
          },
        },
      },
      {
        id: 'w7-reducer',
        day: '۳',
        title: {
          fa: 'useReducer، محل state و state محاسبه‌شده',
          en: 'useReducer, State Placement & Derived State',
        },
        summary: {
          fa: 'دوشنبه ۷ دسامبر · وقتی state چند فیلد وابسته دارد، تغییرها را در reducer جمع کن و مقادیر محاسبه‌شده را بیرون نگه دار.',
          en: 'Mon 7 Dec · When state has related fields, centralize changes in a reducer and keep derived values out of it.',
        },
        duration: 120,
        goals: {
          fa: [
            'تفاوت useState و useReducer را بر اساس پیچیدگی تغییرها تشخیص بدهی.',
            'actionهای تایپ‌شده و reducer خالص بنویسی.',
            'state را در پایین‌ترین والد مشترک نگه داری و state تکراری نسازی.',
            'مقادیر مشتق‌شده مثل total و count را هنگام رندر حساب کنی.',
          ],
          en: [
            'Choose between useState and useReducer based on how complex the transitions are.',
            'Write typed actions and a pure reducer.',
            'Keep state in the lowest shared parent and avoid duplicate state.',
            'Calculate derived values such as total and count during render.',
          ],
        },
        terms: [
          [
            'reducer',
            'تابع خالص (state, action) => newState که همهٔ تغییرهای مجاز را در یک جا نگه می‌دارد.',
          ],
          ['action', 'آبجکت توصیف تغییر، مثل { type: "add", id } که به reducer فرستاده می‌شود.'],
          ['dispatch', 'تابع ارسال action به reducer برای ساختن state تازه.'],
          [
            'state placement',
            'انتخاب نزدیک‌ترین والد مشترک برای نگه‌داشتن state؛ نه بالاتر از نیاز و نه در هر فرزند.',
          ],
          ['derived state', 'مقداری که از state دیگر محاسبه می‌شود و جدا ذخیره نمی‌شود.'],
          ['lifting state up', 'بالا بردن state به والد مشترک تا چند فرزند از یک منبع بخوانند.'],
        ],
        steps: {
          fa: [
            'stateهای وابستهٔ سبد یا فیلترها را فهرست کن و مشخص کن کدام‌ها را می‌توان از بقیه محاسبه کرد.',
            'actionها را با union تایپ کن و reducer خالص را در فایل جدا بنویس.',
            'useReducer را در والد مشترک استفاده کن و dispatch را به فرزندها بده.',
            'count و total را در رندر از state حساب کن و هیچ useState جداگانه‌ای برایشان نساز.',
            'reducer را با چند action در تست واحد آزمایش کن، بدون رندر React.',
          ],
          en: [
            'List the related cart or filter state and decide which values can be calculated from the rest.',
            'Type the actions as a union and write a pure reducer in its own file.',
            'Use useReducer in the shared parent and pass dispatch down to children.',
            'Calculate count and total from state during render, with no separate useState for them.',
            'Test the reducer with several actions in a unit test, without rendering React.',
          ],
        },
        example: {
          code: "type Action = { type: 'add'; id: string } | { type: 'clear' };\n\nfunction cartReducer(state: CartItem[], action: Action): CartItem[] {\n  if (action.type === 'clear') return [];\n  const exists = state.some((item) => item.id === action.id);\n  return exists ? state : [...state, { id: action.id, quantity: 1 }];\n}\n\nconst [cart, dispatch] = useReducer(cartReducer, []);",
          explanation: {
            fa: 'reducer همهٔ تغییرهای مجاز را در یک تابع خالص جمع می‌کند؛ تست آن به React نیاز ندارد.',
            en: 'The reducer collects every allowed transition in one pure function, and its test needs no React.',
          },
        },
        practice: {
          fa: 'سبد یا فیلترها را به useReducer منتقل کن، count و total را محاسبه کن و سه تست reducer بنویس.',
          en: 'Move the cart or filters to useReducer, calculate count and total, and write three reducer tests.',
        },
        quiz: {
          question: {
            fa: 'چه زمانی useReducer بهتر از چند useState است؟',
            en: 'When is useReducer better than several useState calls?',
          },
          options: {
            fa: [
              'وقتی تغییرها به هم وابسته‌اند و باید در یک جا مدیریت شوند',
              'همیشه، حتی برای یک مقدار ساده',
              'وقتی هیچ state‌ای در کامپوننت نداریم',
            ],
            en: [
              'When transitions are related and should be managed in one place',
              'Always, even for one simple value',
              'When the component has no state at all',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'reducer برای تغییرهای پیچیده و مرتبط یک منبع روشن و قابل تست می‌سازد؛ برای یک مقدار ساده useState کافی است.',
            en: 'A reducer gives complex, related transitions one clear testable source; one simple value is fine with useState.',
          },
        },
      },
      {
        id: 'w7-context',
        day: '۴',
        title: {
          fa: 'آزمایشگاه AI: context بهتر، پاسخ بهتر',
          en: 'AI Lab: Context In, Better Answers Out',
        },
        summary: {
          fa: 'چهارشنبه ۹ دسامبر · با اسکرین‌شات و فایل‌های @ دربارهٔ محل state سبد بپرس، بدون نوشتن کد.',
          en: 'Wed 9 Dec · Ask where cart state should live, using a screenshot and @ files, with no code written.',
        },
        duration: 45,
        goals: {
          fa: [
            'اسکرین‌شات طرح و فایل‌های کامپوننت را با @ به agent بدهی.',
            'دربارهٔ محل state سبد بپرسی و پاسخ را با جملهٔ README مقایسه کنی.',
            'با یک prompt مبهم و یک prompt دقیق تفاوت را ثبت کنی.',
          ],
          en: [
            'Give the agent the design screenshot and component files with @ mentions.',
            'Ask where cart state should live and compare the answer with your README sentence.',
            'Record the difference between a vague prompt and a detailed one.',
          ],
        },
        terms: [
          ['context', 'همهٔ اطلاعاتی که agent در یک درخواست می‌بیند.'],
          ['@ mention', 'اشارهٔ مستقیم به فایل در prompt تا agent آن را بخواند.'],
          ['vague prompt', 'درخواست کلی که جزئیات لازم را نمی‌دهد.'],
          ['mechanical work', 'کاری ساده و قابل‌بررسی مثل تولید تایپ از JSON.'],
        ],
        steps: {
          fa: [
            'اسکرین‌شات طرح را ضمیمه کن و فایل‌های اصلی را با @ نام ببر.',
            'بپرس state سبد باید کجا باشد؛ فقط توضیح بخواه، نه کد.',
            'پاسخ را با جملهٔ README خودت مقایسه کن.',
            'تایپ‌های دادهٔ هفتهٔ بعد را از agent بگیر و دستی با JSON بررسی کن.',
          ],
          en: [
            'Attach the design screenshot and name the main files with @.',
            'Ask where cart state should live; request explanation only, not code.',
            'Compare the answer with your own README sentence.',
            'Have the agent generate next week’s data types, then check them manually against the JSON.',
          ],
        },
        example: {
          code: 'Using @Header.tsx, @Product.tsx, and this screenshot, where should cart state live? Explain, no code.',
          explanation: {
            fa: 'نام‌بردن فایل‌ها و ضمیمهٔ طرح، حدس‌زدن agent را کم می‌کند.',
            en: 'Naming files and attaching the design reduces the agent’s guessing.',
          },
        },
        practice: {
          fa: 'تفاوت prompt مبهم و دقیق را در ai-log.md بنویس و تایپ‌های تولیدشده را اصلاح کن.',
          en: 'Write the vague-versus-detailed prompt difference in ai-log.md and fix the generated types.',
        },
        quiz: {
          question: {
            fa: 'کدام کار به AI سپرده می‌شود؟',
            en: 'Which task can be given to AI?',
          },
          options: {
            fa: [
              'تولید تایپ از JSON به‌عنوان کار مکانیکی',
              'طراحی state اصلی',
              'دیباگ کردن به‌جای تو',
            ],
            en: [
              'Generating types from JSON as mechanical work',
              'Designing the core state',
              'Debugging instead of you',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'کار مکانیکی و قابل‌بررسی مناسب است؛ طراحی state مال توست.',
            en: 'Mechanical, checkable work is suitable; state design is yours.',
          },
        },
      },
    ],
  },
  {
    id: 'week-8',
    number: '08',
    title: { fa: 'effect، ref، hook و دسترس‌پذیری', en: 'Effects, Refs, Hooks, and Accessibility' },
    subtitle: {
      fa: 'فاز ۲ · یک interval با cleanup، modal واقعی و بخش نظرات با useReducer.',
      en: 'Phase 2 · One interval with cleanup, a real modal, and a comments section with useReducer.',
    },
    outcome: {
      fa: 'در پایان هفته تایمر شمارش معکوس، modal دسترس‌پذیر و بخش نظرات پایدار با hook خودت داری.',
      en: 'Finish with a countdown timer, an accessible modal, and a persistent comments section with your own hook.',
    },
    lessons: [
      {
        id: 'w8-countdown',
        day: '۱',
        title: { fa: 'تایمر شمارش معکوس', en: 'Launch Countdown Timer' },
        summary: {
          fa: 'یکشنبه ۱۳ دسامبر · یک setInterval در یک effect با cleanup و محاسبهٔ همهٔ واحدها از یک مقدار.',
          en: 'Sun 13 Dec · One setInterval inside one effect with cleanup, all units from one remaining value.',
        },
        duration: 180,
        goals: {
          fa: [
            'یک interval در یک effect با cleanup داشته باشی.',
            'روز، ساعت، دقیقه و ثانیه از یک مقدار باقی‌مانده محاسبه شوند.',
            'با StrictMode تایمر دوبرابر سریع نشود و همیشه یک interval فعال باشد.',
          ],
          en: [
            'Have one interval inside one effect with cleanup.',
            'Calculate days, hours, minutes, and seconds from one remaining value.',
            'With StrictMode on, the timer does not tick twice as fast and exactly one interval runs.',
          ],
        },
        terms: [
          ['useEffect', 'قلاب React برای اجرای کد جانبی پس از رندر.'],
          ['cleanup', 'تابع بازگشتی از effect که منابع قبلی را آزاد می‌کند.'],
          ['functional update', 'به‌روزرسانی state بر اساس مقدار قبلی، نه مقدار قدیمی closure.'],
          ['stale value', 'مقدار کهنه‌ای که closure قدیمی نگه داشته است.'],
        ],
        steps: {
          fa: [
            'مقدار هدف را ثابت کن و مقدار باقی‌مانده را در state نگه دار و commit کن.',
            'یک effect بنویس که interval بسازد و در cleanup پاکش کند.',
            'با functional update هر ثانیه مقدار را کم کن و همهٔ واحدها را از آن حساب کن.',
            'StrictMode را روشن کن و مطمئن شو فقط یک interval اجرا می‌شود.',
          ],
          en: [
            'Fix the target time and keep the remaining value in state, then commit.',
            'Write one effect that creates the interval and clears it in cleanup.',
            'Use a functional update each second and derive all units from it.',
            'Turn on StrictMode and confirm exactly one interval runs.',
          ],
        },
        example: {
          code: 'useEffect(() => {\n  const id = setInterval(() => setRemaining((r) => Math.max(0, r - 1000)), 1000);\n  return () => clearInterval(id);\n}, []);',
          explanation: {
            fa: 'cleanup از اجرای چند interval هم‌زمان جلوگیری می‌کند؛ functional update مقدار کهنه نمی‌سازد.',
            en: 'Cleanup prevents multiple intervals, and the functional update avoids stale values.',
          },
        },
        practice: {
          fa: 'صفحه را بساز، tab را عوض کن و در README بنویس آیا drift دارد یا نه.',
          en: 'Build the page, switch tabs, and note in the README whether it drifts.',
        },
        quiz: {
          question: {
            fa: 'تابع cleanup در effect چه می‌کند؟',
            en: 'What does the cleanup function in an effect do?',
          },
          options: {
            fa: [
              'منبع قبلی مثل interval را آزاد می‌کند',
              'state را حذف می‌کند',
              'صفحه را reload می‌کند',
            ],
            en: [
              'Releases a previous resource such as an interval',
              'Deletes state',
              'Reloads the page',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'بدون cleanup، intervalهای قبلی باقی می‌مانند و تایمر سریع‌تر می‌شود.',
            en: 'Without cleanup, old intervals keep running and the timer speeds up.',
          },
        },
      },
      {
        id: 'w8-modal',
        day: '۲',
        title: { fa: 'اصلاح modal غیرقابل‌دسترس', en: 'Fix the Inaccessible Modal' },
        summary: {
          fa: 'دوشنبه ۱۴ دسامبر · فوکوس داخل، Tab محصور، Escape و بازگشت فوکوس با <dialog>.',
          en: 'Mon 14 Dec · Focus inside, trapped Tab, Escape, and focus return using <dialog>.',
        },
        duration: 120,
        goals: {
          fa: [
            'با باز شدن modal فوکوس داخل آن برود و Tab داخل بماند.',
            'Escape آن را ببندد و فوکوس به دکمهٔ بازکننده برگردد.',
            'از <dialog> و showModal() استفاده شود و دکمهٔ بستن نام دسترس‌پذیر داشته باشد.',
          ],
          en: [
            'Focus moves inside when the modal opens and Tab stays inside.',
            'Escape closes it and focus returns to the button that opened it.',
            'Use <dialog> and showModal(), and give the close button an accessible name.',
          ],
        },
        terms: [
          ['<dialog>', 'عنصر بومی HTML برای پنجرهٔ گفت‌وگو با رفتار دسترس‌پذیر.'],
          ['showModal()', 'متدی که dialog را modal و فوکوس را مدیریت می‌کند.'],
          ['focus trap', 'نگه‌داشتن Tab در محدودهٔ یک بخش.'],
          ['accessible name', 'نامی که screen reader برای دکمه یا کنترل می‌خواند.'],
        ],
        steps: {
          fa: [
            'modal فعلی را بخوان و فهرست ایرادهای دسترس‌پذیری را بنویس.',
            'آن را به <dialog> تبدیل کن و با showModal و close مدیریت کن.',
            'فوکوس اولیه، Tab محصور، Escape و بازگشت فوکوس را آزمایش کن.',
            'برای هر اصلاح یک خط بنویس چرا اهمیت دارد.',
          ],
          en: [
            'Read the current modal and list its accessibility problems.',
            'Convert it to <dialog> and manage it with showModal and close.',
            'Test initial focus, trapped Tab, Escape, and focus return.',
            'Write one line per fix explaining why it matters.',
          ],
        },
        example: {
          code: 'dialog.showModal();\ndialog.addEventListener("close", () => trigger.focus());',
          explanation: {
            fa: 'showModal فوکوس و Escape را رایگان مدیریت می‌کند؛ فقط بازگشت فوکوس را خودت انجام بده.',
            en: 'showModal handles focus and Escape for free; only return focus yourself.',
          },
        },
        practice: {
          fa: 'modal را فقط با صفحه‌کلید کامل آزمایش کن و بدون کتابخانه بساز.',
          en: 'Test the modal fully with the keyboard only and build it without libraries.',
        },
        quiz: {
          question: {
            fa: 'چرا پیش از ARIA از <dialog> استفاده می‌کنیم؟',
            en: 'Why use <dialog> before reaching for ARIA?',
          },
          options: {
            fa: [
              'چون رفتار دسترس‌پذیر و فوکوس را بومی فراهم می‌کند',
              'چون ظاهر بهتری دارد',
              'چون CSS کمتری می‌خواهد',
            ],
            en: [
              'Because it provides accessible behavior and focus natively',
              'Because it looks better',
              'Because it needs less CSS',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'عنصر بومی کمتر از ARIA دستی اشتباه می‌کند.',
            en: 'A native element makes fewer mistakes than hand-written ARIA.',
          },
        },
      },
      {
        id: 'w8-comments',
        day: '۳',
        title: { fa: 'بخش نظرات تعاملی (پروژهٔ بزرگ)', en: 'Interactive Comments Section (Major)' },
        summary: {
          fa: 'چهارشنبه ۱۶ دسامبر · افزودن، ویرایش درجا، حذف با modal و رأی، همه با useReducer.',
          en: 'Wed 16 Dec · Add, edit in place, delete with a modal, and vote, all with useReducer.',
        },
        duration: 300,
        goals: {
          fa: [
            'افزودن، ویرایش درجا، حذف با modal تأیید و رأی برای نظر و پاسخ کار کند.',
            'همهٔ به‌روزرسانی‌ها immutable باشند و پاسخ‌های تودرتو با useReducer مدیریت شوند.',
            'state با hook اختصاصی useLocalStorage ذخیره شود و idهای پایدار به‌عنوان key استفاده شوند.',
          ],
          en: [
            'Add, edit in place, delete with a confirmation modal, and vote on comments and replies.',
            'Every update is immutable, including nested replies, managed with useReducer.',
            'State is saved with your own useLocalStorage hook and stable ids are used as keys.',
          ],
        },
        terms: [
          ['useReducer', 'قلاب React برای state پیچیده با action و reducer.'],
          ['immutable update', 'ساخت ساختار تازه به‌جای تغییر مستقیم شیء یا آرایه.'],
          ['stable id', 'شناسهٔ یکتا و ثابت که به‌عنوان key استفاده می‌شود.'],
          ['custom hook', 'تابع React با نام use... برای بازاستفاده از منطق state.'],
        ],
        steps: {
          fa: [
            'شکل state و actionهای reducer را بنویس و اولین commit را بفرست.',
            'reducer را برای افزودن، ویرایش، حذف و رأی به‌صورت immutable بنویس.',
            'کامپوننت Comment را بساز که خودش و پاسخ‌هایش را رندر کند.',
            'useLocalStorage را بنویس و modal حذف را با صفحه‌کلید پیاده کن.',
          ],
          en: [
            'Write the state shape and the reducer actions, then send the first commit.',
            'Write the reducer for add, edit, delete, and vote with immutable updates.',
            'Build a Comment component that renders itself and its replies.',
            'Write useLocalStorage and implement the delete modal with keyboard support.',
          ],
        },
        example: {
          code: 'case "edit":\n  return state.map((c) => c.id === action.id ? { ...c, content: action.content } : c);',
          explanation: {
            fa: 'map و spread شیء تازه می‌سازند؛ هیچ شیء قبلی تغییر نمی‌کند.',
            en: 'map and spread create new objects; no previous object is mutated.',
          },
        },
        practice: {
          fa: 'بخش نظرات را کامل کن، بعد از refresh بررسی کن و modal را با keyboard آزمایش کن.',
          en: 'Finish the comments section, check after refresh, and test the modal with the keyboard.',
        },
        quiz: {
          question: {
            fa: 'چرا به‌روزرسانی‌ها immutable هستند؟',
            en: 'Why are updates immutable?',
          },
          options: {
            fa: [
              'تا React تغییر را تشخیص دهد و state قبلی خراب نشود',
              'تا کد کوتاه‌تر شود',
              'تا localStorage لازم نباشد',
            ],
            en: [
              'So React detects the change and previous state is not corrupted',
              'So the code is shorter',
              'So localStorage is unnecessary',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'React با مقایسهٔ مرجع تغییر را می‌فهمد؛ تغییر مستقیم آن را پنهان می‌کند.',
            en: 'React detects changes by reference; direct mutation hides them.',
          },
        },
      },
      {
        id: 'w8-skill',
        day: '۴',
        title: {
          fa: 'آزمایشگاه AI: نوشتن skill دسترس‌پذیری',
          en: 'AI Lab: Write an Accessibility Skill',
        },
        summary: {
          fa: 'چهارشنبه ۱۶ دسامبر · یک SKILL.md با چک‌لیست بنویس و روی بخش نظرات اجرا کن.',
          en: 'Wed 16 Dec · Write a SKILL.md with a checklist and run it on the comments section.',
        },
        duration: 45,
        goals: {
          fa: [
            'یک skill در .opencode/skills/a11y-check/SKILL.md با نام، توضیح و چک‌لیست بسازی.',
            'skill را روی بخش نظرات اجرا کنی و یافته‌های واقعی را خودت اصلاح کنی.',
            'توضیح را طوری بنویسی که agent خودش skill را بارگذاری کند.',
          ],
          en: [
            'Create a skill at .opencode/skills/a11y-check/SKILL.md with a name, description, and checklist.',
            'Run it on the comments section and fix the real findings yourself.',
            'Write the description so the agent loads the skill on its own.',
          ],
        },
        terms: [
          ['skill', 'پوشه‌ای با SKILL.md شامل نام، توضیح و دستورها.'],
          ['description', 'توضیح کوتاهی که agent از آن تصمیم می‌گیرد skill را بارگذاری کند.'],
          ['checklist', 'فهرست بررسی تکرارشدنی مثل keyboard، focus و labels.'],
          ['community skill', 'skill نوشته‌شده توسط دیگران که باید کامل خوانده شود.'],
        ],
        steps: {
          fa: [
            'پوشهٔ skill را بساز و نام و توضیح روشن بنویس.',
            'چک‌لیست keyboard، focus، labels، ARIA و contrast را اضافه کن.',
            'skill را روی بخش نظرات اجرا کن و یافته‌ها را ثبت کن.',
            'یافته‌های واقعی را خودت اصلاح کن و یک skill اجتماعی را کامل بخوان.',
          ],
          en: [
            'Create the skill folder and write a clear name and description.',
            'Add a checklist for keyboard, focus, labels, ARIA, and contrast.',
            'Run the skill on the comments section and record the findings.',
            'Fix the real findings yourself and read one community skill in full.',
          ],
        },
        example: {
          code: '---\nname: a11y-check\ndescription: Check a component for keyboard, focus, labels, ARIA, and contrast issues.\n---\n- [ ] Every control reachable by Tab',
          explanation: {
            fa: 'توضیح دقیق باعث می‌شود agent بدون یادآوری skill را پیدا کند.',
            en: 'A precise description lets the agent find the skill without being reminded.',
          },
        },
        practice: {
          fa: 'skill را commit کن و ریسک‌های skill اجتماعی را در ai-log.md بنویس.',
          en: 'Commit the skill and write the risks of the community skill in ai-log.md.',
        },
        quiz: {
          question: {
            fa: 'agent از کدام بخش skill تصمیم می‌گیرد آن را بارگذاری کند؟',
            en: 'Which part of a skill helps the agent decide to load it?',
          },
          options: {
            fa: ['توضیح (description)', 'تعداد خطوط', 'نام فایل CSS'],
            en: ['The description', 'The number of lines', 'The CSS filename'],
          },
          answer: 0,
          explanation: {
            fa: 'agent ابتدا فقط توضیح را می‌بیند و در صورت relevance کل skill را می‌خواند.',
            en: 'The agent sees only the description first and loads the full skill when relevant.',
          },
        },
      },
    ],
  },
];
