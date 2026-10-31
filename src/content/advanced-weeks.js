export const advancedWeeks = [
  {
    id: 'week-3',
    number: '03',
    title: {
      fa: 'JavaScript عمیق‌تر: تابع، داده و پیمانه',
      en: 'Deeper JavaScript: Functions, Data & Modules',
    },
    subtitle: {
      fa: 'کد را به بخش‌های کوچک، قابل‌آزمون و قابل‌استفادهٔ دوباره تقسیم کن.',
      en: 'Split code into small, testable, reusable parts.',
    },
    outcome: {
      fa: 'در پایان هفته می‌توانی منطق را به تابع‌های خالص و پیمانه‌های روشن بشکنی و داده را بدون تغییر ناخواسته پردازش کنی.',
      en: 'Finish able to break logic into pure functions and clear modules, and process data without accidental mutation.',
    },
    lessons: [
      {
        id: 'w3-functions',
        day: '۱',
        title: { fa: 'تابع، دامنه و closure', en: 'Functions, Scope & Closures' },
        summary: {
          fa: 'تابع خوب یک کار انجام می‌دهد، ورودی می‌گیرد و خروجی برمی‌گرداند.',
          en: 'A good function does one job, takes input, and returns output.',
        },
        duration: 55,
        goals: {
          fa: [
            'تابع با پارامتر و مقدار بازگشتی بنویس.',
            'تفاوت دامنهٔ جهانی، تابعی و بلوکی را تشخیص بده.',
            'از closure برای نگه‌داشتن حالت خصوصی استفاده کن.',
          ],
          en: [
            'Write functions with parameters and return values.',
            'Tell global, function, and block scope apart.',
            'Use a closure to keep private state.',
          ],
        },
        terms: [
          ['Function', 'بلوک نام‌دار و قابل‌فراخوانی که ورودی می‌گیرد و کاری انجام می‌دهد.'],
          [
            'Parameter / argument',
            'parameter نام ورودی در تعریف و argument مقدار واقعی هنگام فراخوانی است.',
          ],
          ['Scope', 'محدوده‌ای که یک متغیر در آن قابل‌دسترسی است.'],
          [
            'Closure',
            'تابعی که به متغیرهای دامنهٔ بیرونی خود دسترسی نگه می‌دارد، حتی پس از پایان آن دامنه.',
          ],
          ['Pure function', 'تابعی که فقط از ورودی استفاده می‌کند و اثر جانبی ندارد.'],
        ],
        steps: {
          fa: [
            'یک تابع کوچک برای محاسبهٔ مجموع زمان درس‌ها بنویس.',
            'به‌جای تغییر متغیر جهانی، نتیجه را با return برگردان.',
            'یک شمارنده با closure بساز که شمارش را خصوصی نگه دارد.',
            'تابع را با ورودی خالی، عدد و رشتهٔ نامعتبر آزمایش کن.',
            'نام تابع را طوری انتخاب کن که کار آن را روشن کند.',
          ],
          en: [
            'Write a small function that totals lesson minutes.',
            'Return the result instead of changing a global variable.',
            'Build a counter with a closure that keeps its count private.',
            'Test it with empty input, numbers, and invalid strings.',
            'Choose a name that makes the function purpose obvious.',
          ],
        },
        example: {
          code: 'function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\n\nconst next = makeCounter();\nnext(); // 1\nnext(); // 2',
          explanation: {
            fa: 'count بیرون از تابع قابل‌دسترسی نیست؛ فقط تابع برگشتی آن را می‌بیند. این همان closure است.',
            en: 'count is not reachable from outside; only the returned function sees it. That is a closure.',
          },
        },
        practice: {
          fa: 'یک شمارندهٔ خصوصی بساز و در یک پاراگراف توضیح بده چرا متغیر شمارش از بیرون قابل‌تغییر نیست.',
          en: 'Build a private counter and explain in one paragraph why the count cannot be changed from outside.',
        },
        quiz: {
          question: {
            fa: 'closure به چه چیزی دسترسی نگه می‌دارد؟',
            en: 'What does a closure keep access to?',
          },
          options: {
            fa: ['متغیرهای دامنهٔ بیرونی خود', 'همهٔ متغیرهای مرورگر', 'فقط متغیرهای global'],
            en: ['Variables in its outer scope', 'Every browser variable', 'Only global variables'],
          },
          answer: 0,
          explanation: {
            fa: 'تابع درونی به دامنه‌ای که در آن ساخته شده دسترسی نگه می‌دارد.',
            en: 'The inner function retains access to the scope where it was created.',
          },
        },
      },
      {
        id: 'w3-arrays',
        day: '۲',
        title: {
          fa: 'آرایه‌ها و شیءها با map، filter و reduce',
          en: 'Arrays & Objects with map, filter, reduce',
        },
        summary: {
          fa: 'داده را توصیف کن و با تابع‌های آرایه‌ای گزارش بساز، بدون حلقه‌های پیچیده.',
          en: 'Describe data and build reports with array methods instead of tangled loops.',
        },
        duration: 60,
        goals: {
          fa: [
            'با map یک آرایه را به شکل تازه تبدیل کن.',
            'با filter زیرمجموعهٔ موردنیاز را بساز.',
            'با reduce جمع، گروه‌بندی یا گزارش بساز.',
          ],
          en: [
            'Transform an array into a new shape with map.',
            'Select a subset with filter.',
            'Build totals, groups, or reports with reduce.',
          ],
        },
        terms: [
          ['Callback', 'تابعی که به تابع دیگری داده می‌شود تا بعداً اجرا شود.'],
          ['map', 'آرایه‌ای هم‌اندازه می‌سازد که هر عضو آن نتیجهٔ تبدیل عضو اصلی است.'],
          ['filter', 'آرایه‌ای تازه با عضوهایی می‌سازد که شرط را قبول کنند.'],
          ['reduce', 'آرایه را به یک مقدار نهایی، مانند جمع یا شیء گزارش، تبدیل می‌کند.'],
          ['Immutability', 'تغییرندادن دادهٔ اصلی و ساختن نسخهٔ تازه به‌جای تغییر درجا.'],
        ],
        steps: {
          fa: [
            'آرایه‌ای از درس‌ها با title، week و duration بساز.',
            'با filter درس‌های یک هفته را جدا کن.',
            'با map فقط عنوان‌ها را استخراج کن.',
            'با reduce مجموع دقیقه‌ها را حساب کن.',
            'آرایهٔ اصلی را پیش و پس از عملیات مقایسه کن تا مطمئن شوی تغییر نکرده است.',
          ],
          en: [
            'Create an array of lessons with title, week, and duration.',
            'Select one week with filter.',
            'Extract only titles with map.',
            'Calculate total minutes with reduce.',
            'Compare the original array before and after to confirm it was not mutated.',
          ],
        },
        example: {
          code: 'const total = lessons\n  .filter((lesson) => lesson.week === 1)\n  .reduce((sum, lesson) => sum + lesson.duration, 0);',
          explanation: {
            fa: 'filter اول زیرمجموعه را می‌سازد و reduce مجموع زمان همان زیرمجموعه را برمی‌گرداند.',
            en: 'filter first creates a subset; reduce then totals the duration of that subset.',
          },
        },
        practice: {
          fa: 'گزارشی بساز که تعداد درس‌ها، مجموع دقیقه‌ها و بلندترین درس هر هفته را نشان بدهد.',
          en: 'Build a report that shows lesson count, total minutes, and the longest lesson for each week.',
        },
        quiz: {
          question: {
            fa: 'کدام متد آرایهٔ هم‌اندازه با آرایهٔ اصلی برمی‌گرداند؟',
            en: 'Which array method returns an array of the same length?',
          },
          options: { fa: ['map', 'filter', 'reduce'], en: ['map', 'filter', 'reduce'] },
          answer: 0,
          explanation: {
            fa: 'map هر عضو را تبدیل می‌کند و آرایه‌ای هم‌اندازه می‌سازد.',
            en: 'map transforms each item and returns an array of the same length.',
          },
        },
      },
      {
        id: 'w3-modules',
        day: '۳',
        title: { fa: 'پیمانه‌های ES و مرزهای کد', en: 'ES Modules & Code Boundaries' },
        summary: {
          fa: 'هر پیمانه یک مسئولیت روشن داشته باشد تا تغییر یک بخش، بخش‌های دیگر را نشکند.',
          en: 'Give each module one clear responsibility so a change does not break the rest.',
        },
        duration: 55,
        goals: {
          fa: [
            'با export و import کد را تقسیم کن.',
            'تفاوت export نام‌دار و default را توضیح بده.',
            'داده را از نمایش جدا کن.',
          ],
          en: [
            'Split code with export and import.',
            'Explain named versus default exports.',
            'Separate data from presentation.',
          ],
        },
        terms: [
          ['Module', 'فایل مستقلی با دامنهٔ خودش که فقط بخش‌های صادرشده را به بیرون می‌دهد.'],
          ['Named export', 'صادرکردن یک یا چند نام مشخص که با آکولاد import می‌شوند.'],
          ['Default export', 'یک خروجی اصلی برای پیمانه که هنگام import نام دلخواه می‌گیرد.'],
          ['Module scope', 'متغیرهای پیمانه به‌طور خودکار global نمی‌شوند.'],
          ['Dependency graph', 'نقشهٔ وابستگی پیمانه‌ها که ابزار ساخت آن را می‌سازد.'],
        ],
        steps: {
          fa: [
            'دادهٔ درس‌ها را به یک فایل مستقل منتقل کن.',
            'تابع‌های محاسبه را در پیمانهٔ جدا بگذار.',
            'فایل ورودی فقط import و هماهنگی را انجام بدهد.',
            'از export نام‌دار استفاده کن تا نام‌ها روشن بمانند.',
            'دور وابستگی حلقه‌ای را بررسی کن و بشکن.',
          ],
          en: [
            'Move lesson data into its own file.',
            'Put calculation functions in a separate module.',
            'Keep the entry file for imports and wiring only.',
            'Prefer named exports so names stay explicit.',
            'Check for circular dependencies and break them.',
          ],
        },
        example: {
          code: "// data.js\nexport const lessons = [{ title: 'npm', duration: 50 }];\n\n// stats.js\nimport { lessons } from './data.js';\nexport const total = lessons.reduce((sum, item) => sum + item.duration, 0);",
          explanation: {
            fa: 'data.js داده را نگه می‌دارد و stats.js فقط محاسبه را انجام می‌دهد؛ هر فایل یک مسئولیت دارد.',
            en: 'data.js holds data and stats.js only calculates; each file has one responsibility.',
          },
        },
        practice: {
          fa: 'پروژه را به سه پیمانه تقسیم کن: داده، منطق و نمایش. هر پیمانه باید بدون دیگری قابل‌خواندن باشد.',
          en: 'Split the project into three modules: data, logic, and presentation. Each should be readable on its own.',
        },
        quiz: {
          question: {
            fa: 'چرا پیمانه‌ها متغیرهای خود را global نمی‌کنند؟',
            en: 'Why do modules not leak their variables globally?',
          },
          options: {
            fa: [
              'هر پیمانه دامنهٔ مستقل دارد',
              'مرورگر همه را پاک می‌کند',
              'import آن‌ها را مخفی می‌کند',
            ],
            en: ['Each module has its own scope', 'The browser deletes them', 'import hides them'],
          },
          answer: 0,
          explanation: {
            fa: 'دامنهٔ پیمانه از آلودگی global جلوگیری می‌کند و مرزهای کد را روشن نگه می‌دارد.',
            en: 'Module scope prevents global pollution and keeps code boundaries clear.',
          },
        },
      },
      {
        id: 'w3-errors',
        day: '۴',
        title: { fa: 'خطا، اعتبارسنجی و شکست امن', en: 'Errors, Validation & Failing Safely' },
        summary: {
          fa: 'خطا را زودتر و روشن‌تر بگیر تا کاربر پیام مفید ببیند و برنامه از کار نیفتد.',
          en: 'Catch errors earlier and clearer so users see useful messages and the app keeps running.',
        },
        duration: 55,
        goals: {
          fa: [
            'با throw و try/catch خطا را مدیریت کن.',
            'ورودی را در مرز برنامه اعتبارسنجی کن.',
            'پیام خطای کاربرپسند از خطای فنی جدا بساز.',
          ],
          en: [
            'Handle errors with throw and try/catch.',
            'Validate input at the application boundary.',
            'Separate user-facing messages from technical errors.',
          ],
        },
        terms: [
          ['throw', 'ایجاد یک خطای عمدی وقتی شرط لازم برقرار نیست.'],
          ['try / catch', 'اجرای کد پرخطر و گرفتن خطا برای مدیریت به‌جای توقف برنامه.'],
          ['Validation', 'بررسی شکل و مقدار ورودی پیش از استفاده.'],
          ['Fail fast', 'توقف زودهنگام با پیام روشن به‌جای ادامه با دادهٔ خراب.'],
          ['Fallback', 'رفتار جایگزین امن وقتی داده یا سرویس در دسترس نیست.'],
        ],
        steps: {
          fa: [
            'برای دادهٔ JSON خراب یک try/catch بنویس.',
            'تابع parse را طوری بساز که مقدار پیش‌فرض امن برگرداند.',
            'ورودی فرم را برای خالی‌بودن و طول بررسی کن.',
            'خطای فنی را در کنسول ثبت کن و پیام ساده به کاربر نشان بده.',
            'حالت خطا را در رابط کاربری قابل‌دیدن و قابل‌بازیابی کن.',
          ],
          en: [
            'Write try/catch for malformed JSON data.',
            'Make the parse function return a safe default.',
            'Validate form input for emptiness and length.',
            'Log technical detail to the console and show a simple message to the user.',
            'Make the error state visible and recoverable in the interface.',
          ],
        },
        example: {
          code: 'function readNotes(raw) {\n  try {\n    const value = JSON.parse(raw);\n    return Array.isArray(value) ? value : [];\n  } catch {\n    return [];\n  }\n}',
          explanation: {
            fa: 'اگر داده خراب باشد برنامه نمی‌شکند؛ یک آرایهٔ خالی به‌عنوان مقدار امن برمی‌گردد.',
            en: 'Bad data does not crash the app; an empty array is returned as the safe value.',
          },
        },
        practice: {
          fa: 'ذخیره‌سازی یادداشت‌ها را به‌گونه‌ای بساز که دادهٔ خراب، خطای ذخیره و نبود داده هر سه حالت روشن داشته باشند.',
          en: 'Build note storage so malformed data, save failure, and missing data each have a clear state.',
        },
        quiz: {
          question: {
            fa: 'اعتبارسنجی ورودی کجا باید انجام شود؟',
            en: 'Where should input validation happen?',
          },
          options: {
            fa: [
              'در مرز ورود داده به برنامه',
              'فقط پس از ذخیره‌سازی',
              'هیچ‌جا؛ مرورگر همه را بررسی می‌کند',
            ],
            en: [
              'At the boundary where data enters',
              'Only after saving',
              'Nowhere; the browser checks everything',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'داده در نزدیک‌ترین نقطه به ورود باید بررسی شود تا خطا زودتر و ارزان‌تر پیدا شود.',
            en: 'Data should be checked as close to entry as possible so errors are found earlier and cheaper.',
          },
        },
      },
      {
        id: 'w3-project',
        day: '۵',
        title: { fa: 'مینی‌پروژه: گزارش داده', en: 'Mini Project: A Data Report' },
        summary: {
          fa: 'مهارت‌های هفته را در یک گزارش زنده از درس‌ها کنار هم بگذار.',
          en: 'Combine the week skills into a live lesson report.',
        },
        duration: 65,
        goals: {
          fa: [
            'داده را در پیمانهٔ جدا نگه دار.',
            'تابع‌های خالص برای آمار بنویس.',
            'نتیجه را در HTML بساز و خطا را مدیریت کن.',
          ],
          en: [
            'Keep data in a separate module.',
            'Write pure functions for statistics.',
            'Build the result in HTML and handle errors.',
          ],
        },
        terms: [
          ['Acceptance criteria', 'شرط‌های روشنی که نشان می‌دهد کار تمام شده است.'],
          ['Side effect', 'تغییری بیرون از تابع، مانند نوشتن در DOM یا localStorage.'],
          ['Refactor', 'بهبود ساختار کد بدون تغییر رفتار بیرونی آن.'],
          ['Empty state', 'نمایش راهنما وقتی داده‌ای برای نشان‌دادن نیست.'],
        ],
        steps: {
          fa: [
            'معیارهای پذیرش را در سه خط بنویس.',
            'داده و آمار را به پیمانه‌های جدا منتقل کن.',
            'تابع‌های خالص را جدا از کد DOM آزمایش کن.',
            'حالت خالی و دادهٔ نامعتبر را نمایش بده.',
            'پیش از تحویل lint و build را اجرا کن.',
          ],
          en: [
            'Write acceptance criteria in three lines.',
            'Move data and statistics into separate modules.',
            'Test pure functions apart from DOM code.',
            'Show empty and invalid-data states.',
            'Run lint and build before submitting.',
          ],
        },
        example: {
          code: 'const stats = {\n  count: lessons.length,\n  minutes: lessons.reduce((sum, item) => sum + item.duration, 0),\n  longest: lessons.reduce((a, b) => (a.duration > b.duration ? a : b)),\n};',
          explanation: {
            fa: 'آمار از داده مشتق می‌شود؛ لازم نیست مقدارها را دستی تکرار کنی.',
            en: 'Statistics are derived from data; you do not need to repeat values by hand.',
          },
        },
        practice: {
          fa: 'گزارش را بساز و هر سه معیار پذیرش را با نتیجهٔ واقعی در README ثبت کن.',
          en: 'Build the report and record how each of the three acceptance criteria was met in the README.',
        },
        quiz: {
          question: {
            fa: 'تابع خالص چه ویژگی دارد؟',
            en: 'What defines a pure function?',
          },
          options: {
            fa: [
              'فقط به ورودی وابسته است و اثر جانبی ندارد',
              'همیشه سریع‌تر است',
              'فقط در مرورگر اجرا می‌شود',
            ],
            en: [
              'It depends only on input and has no side effects',
              'It is always faster',
              'It only runs in the browser',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'تابع خالص برای ورودی یکسان همیشه نتیجهٔ یکسان می‌دهد و چیزی را بیرون تغییر نمی‌دهد.',
            en: 'A pure function always returns the same result for the same input and mutates nothing outside.',
          },
        },
      },
    ],
  },
  {
    id: 'week-4',
    number: '04',
    title: { fa: 'دادهٔ زنده و APIها', en: 'Live Data & APIs' },
    subtitle: {
      fa: 'داده را از شبکه بگیر، حالت‌های انتظار و خطا را نشان بده و رابط را سریع نگه دار.',
      en: 'Fetch data from the network, show loading and error states, and keep the interface fast.',
    },
    outcome: {
      fa: 'در پایان هفته می‌توانی دادهٔ یک API واقعی را با async/await بخوانی، فیلتر کنی و حالت‌های شبکه را درست نمایش بدهی.',
      en: 'Finish able to read real API data with async/await, filter it, and represent network states correctly.',
    },
    lessons: [
      {
        id: 'w4-http',
        day: '۱',
        title: { fa: 'HTTP، JSON و قرارداد داده', en: 'HTTP, JSON & Data Contracts' },
        summary: {
          fa: 'هر درخواست یک قرارداد دارد: روش، نشانی، سرآیند و پاسخ.',
          en: 'Every request is a contract: method, address, headers, and response.',
        },
        duration: 50,
        goals: {
          fa: [
            'روش‌های GET، POST و PUT را تشخیص بده.',
            'کد وضعیت موفق و ناموفق را بخوان.',
            'شکل JSON پاسخ را پیش از استفاده بررسی کن.',
          ],
          en: [
            'Distinguish GET, POST, and PUT.',
            'Read successful and failing status codes.',
            'Inspect the JSON response shape before using it.',
          ],
        },
        terms: [
          ['HTTP', 'قرارداد درخواست و پاسخ میان مرورگر و سرور.'],
          ['Endpoint', 'نشانی مشخصی که یک منبع یا عمل را ارائه می‌دهد.'],
          ['Status code', 'عدد سه‌رقمی نتیجهٔ درخواست؛ 200 موفق و 404 پیدا‌نشده.'],
          ['JSON', 'قالب متنی سبک برای مبادلهٔ دادهٔ ساخت‌یافته.'],
          ['CORS', 'قاعده‌ای که مشخص می‌کند صفحهٔ یک دامنه به پاسخ دامنهٔ دیگر دسترسی دارد یا نه.'],
        ],
        steps: {
          fa: [
            'یک endpoint عمومی انتخاب کن و پاسخ آن را در Network ببین.',
            'روش درخواست، کد وضعیت و زمان پاسخ را ثبت کن.',
            'بدنهٔ JSON را باز کن و کلیدهای اصلی را فهرست کن.',
            'پاسخ موفق و خطا را از هم تفکیک کن.',
            'محدودیت‌های استفاده و نیاز به کلید را بخوان.',
          ],
          en: [
            'Choose a public endpoint and inspect its response in Network.',
            'Record the method, status code, and response time.',
            'Open the JSON body and list its top-level keys.',
            'Separate successful responses from errors.',
            'Read usage limits and whether a key is required.',
          ],
        },
        example: {
          code: "fetch('https://api.example.com/items')\n  .then((response) => {\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return response.json();\n  })\n  .then((data) => console.log(data));",
          explanation: {
            fa: 'وضعیت پاسخ را پیش از خواندن JSON بررسی می‌کنیم؛ پاسخ 404 دادهٔ معتبر نیست.',
            en: 'Check the response status before reading JSON; a 404 response is not valid data.',
          },
        },
        practice: {
          fa: 'یک API عمومی را در Network بررسی کن و قرارداد آن را در پنج خط بنویس.',
          en: 'Inspect a public API in Network and document its contract in five lines.',
        },
        quiz: {
          question: {
            fa: 'کد وضعیت 404 چه معنایی دارد؟',
            en: 'What does status code 404 mean?',
          },
          options: {
            fa: ['منبع پیدا نشد', 'سرور خطا داد', 'درخواست موفق بود'],
            en: ['The resource was not found', 'The server failed', 'The request succeeded'],
          },
          answer: 0,
          explanation: {
            fa: '404 یعنی نشانی درخواست‌شده در سرور وجود ندارد.',
            en: '404 means the requested address does not exist on the server.',
          },
        },
      },
      {
        id: 'w4-async',
        day: '۲',
        title: { fa: 'Promise و async/await', en: 'Promises & async/await' },
        summary: {
          fa: 'کد ناهمگام را مثل داستان خطی بخوان، اما خطا را فراموش نکن.',
          en: 'Read asynchronous code like a linear story, but never forget the errors.',
        },
        duration: 60,
        goals: {
          fa: [
            'Promise را با then و catch مدیریت کن.',
            'تابع async بنویس و await را درست به‌کار ببر.',
            'درخواست‌های مستقل را موازی اجرا کن.',
          ],
          en: [
            'Handle a promise with then and catch.',
            'Write an async function and use await correctly.',
            'Run independent requests in parallel.',
          ],
        },
        terms: [
          ['Promise', 'شیئی که نتیجهٔ آیندهٔ یک عملیات ناهمگام را نمایندگی می‌کند.'],
          ['async', 'تابع را طوری اعلام می‌کند که همیشه Promise برگرداند.'],
          ['await', 'اجرای تابع async را تا حل‌شدن Promise متوقف می‌کند.'],
          ['Parallel', 'اجرای هم‌زمان کارهای مستقل برای صرفه‌جویی در زمان.'],
          ['Race condition', 'وابستگی نتیجه به ترتیب رسیدن عملیات‌های هم‌زمان.'],
        ],
        steps: {
          fa: [
            'یک تابع async بساز و پاسخ fetch را await کن.',
            'خطای شبکه و خطای وضعیت را با try/catch بگیر.',
            'دو درخواست مستقل را با Promise.all موازی کن.',
            'ترتیب و زمان اجرا را در کنسول مقایسه کن.',
            'حالت بارگذاری را پیش از رسیدن پاسخ نشان بده.',
          ],
          en: [
            'Create an async function and await the fetch response.',
            'Catch network and status errors with try/catch.',
            'Run two independent requests in parallel with Promise.all.',
            'Compare order and timing in the console.',
            'Show a loading state before the response arrives.',
          ],
        },
        example: {
          code: "async function load() {\n  const response = await fetch('/data.json');\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json();\n}\n\nconst [a, b] = await Promise.all([load('/a.json'), load('/b.json')]);",
          explanation: {
            fa: 'Promise.all دو کار مستقل را هم‌زمان شروع می‌کند و وقتی هر دو تمام شدند نتیجه می‌دهد.',
            en: 'Promise.all starts two independent jobs together and resolves when both finish.',
          },
        },
        practice: {
          fa: 'دو منبع داده را موازی بخوان و زمان کل را با اجرای پشت‌سرهم مقایسه کن.',
          en: 'Load two data sources in parallel and compare total time with sequential loading.',
        },
        quiz: {
          question: {
            fa: 'await چه کاری می‌کند؟',
            en: 'What does await do?',
          },
          options: {
            fa: [
              'تا حل‌شدن Promise صبر می‌کند',
              'درخواست را لغو می‌کند',
              'کد را سریع‌تر اجرا می‌کند',
            ],
            en: ['Waits for the promise to settle', 'Cancels the request', 'Makes code run faster'],
          },
          answer: 0,
          explanation: {
            fa: 'await اجرای تابع async را تا مشخص‌شدن نتیجهٔ Promise متوقف می‌کند.',
            en: 'await pauses the async function until the promise settles.',
          },
        },
      },
      {
        id: 'w4-fetch',
        day: '۳',
        title: { fa: 'حالت‌های بارگذاری، خطا و خالی', en: 'Loading, Error & Empty States' },
        summary: {
          fa: 'رابط کاربری باید در هر لحظه بداند چه اتفاقی می‌افتد و کاربر چه کاری می‌تواند بکند.',
          en: 'The interface must always show what is happening and what the user can do next.',
        },
        duration: 55,
        goals: {
          fa: [
            'حالت بارگذاری را با متن یا نشانگر نمایش بده.',
            'خطا را با راه تلاش دوباره نشان بده.',
            'نتیجهٔ خالی را از خطا جدا کن.',
          ],
          en: [
            'Show a loading state with text or an indicator.',
            'Show errors with a retry path.',
            'Distinguish an empty result from an error.',
          ],
        },
        terms: [
          ['Loading state', 'نمایش روشن اینکه داده هنوز در راه است.'],
          ['Error state', 'نمایش شکست عملیات با پیام و راه بازیابی.'],
          ['Empty state', 'نبود نتیجهٔ معتبر، نه شکست فنی.'],
          ['Retry', 'تلاش دوباره برای عملیات ناموفق.'],
          ['AbortController', 'ابزاری برای لغو درخواست ناهمگام که دیگر لازم نیست.'],
        ],
        steps: {
          fa: [
            'سه حالت loading، error و empty را در کد جدا نگه دار.',
            'پیش از درخواست حالت بارگذاری را فعال کن.',
            'پس از پاسخ موفق، داده را نمایش بده و حالت را پاک کن.',
            'برای خطا دکمهٔ تلاش دوباره بگذار.',
            'درخواست تکراری یا قدیمی را با AbortController لغو کن.',
          ],
          en: [
            'Keep loading, error, and empty states separate in code.',
            'Enable loading before the request starts.',
            'Render data on success and clear the state.',
            'Provide a retry button for errors.',
            'Cancel stale or duplicate requests with AbortController.',
          ],
        },
        example: {
          code: "try {\n  setState({ status: 'loading' });\n  const data = await load();\n  setState({ status: data.length ? 'ready' : 'empty', data });\n} catch (error) {\n  setState({ status: 'error', message: error.message });\n}",
          explanation: {
            fa: 'حالت یکی از loading، ready، empty یا error است؛ همین کار نمایش شرطی را ساده می‌کند.',
            en: 'State is one of loading, ready, empty, or error; that makes conditional rendering simple.',
          },
        },
        practice: {
          fa: 'یک فهرست داده بساز و هر چهار حالت را با شبکهٔ کند، پاسخ خالی و خطای عمدی آزمایش کن.',
          en: 'Build a data list and test all four states with a slow network, empty response, and forced error.',
        },
        quiz: {
          question: {
            fa: 'نتیجهٔ خالی با خطا چه تفاوتی دارد؟',
            en: 'How is an empty result different from an error?',
          },
          options: {
            fa: [
              'خالی یعنی درخواست موفق بود اما داده‌ای نبود',
              'هیچ تفاوتی ندارند',
              'خالی فقط برای تصویرهاست',
            ],
            en: [
              'Empty means success with no data',
              'They are identical',
              'Empty only applies to images',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'در حالت خالی درخواست موفق بوده اما نتیجه‌ای وجود ندارد؛ خطا یعنی عملیات شکست خورده است.',
            en: 'Empty means the request succeeded with no results; an error means the operation failed.',
          },
        },
      },
      {
        id: 'w4-api',
        day: '۴',
        title: { fa: 'کار با API واقعی و محدودیت‌ها', en: 'Working with Real APIs & Limits' },
        summary: {
          fa: 'به سرویس بیرونی وابسته‌ای؛ محدودیت، کش و تغییر شکل داده را پیش‌بینی کن.',
          en: 'You depend on an external service; plan for limits, caching, and changing data shapes.',
        },
        duration: 55,
        goals: {
          fa: [
            'کلید API را از کد عمومی جدا نگه دار.',
            'پاسخ را پیش از استفاده به شکل داخلی تبدیل کن.',
            'محدودیت نرخ و کش را مدیریت کن.',
          ],
          en: [
            'Keep API keys out of public code.',
            'Normalize responses into an internal shape before use.',
            'Handle rate limits and caching.',
          ],
        },
        terms: [
          ['API key', 'شناسهٔ دسترسی به سرویس؛ راز است و نباید در مرورگر عمومی قرار بگیرد.'],
          ['Rate limit', 'سقف تعداد درخواست در بازهٔ زمانی مشخص.'],
          ['Caching', 'نگه‌داشتن پاسخ برای کاهش درخواست تکراری.'],
          ['Normalization', 'تبدیل شکل دادهٔ بیرونی به شکل یکسان و ساده برای برنامه.'],
          ['Mock data', 'دادهٔ ساختگی برای توسعه و آزمون بدون وابستگی به شبکه.'],
        ],
        steps: {
          fa: [
            'یک لایهٔ کوچک برای درخواست بساز تا تغییر سرویس آسان باشد.',
            'پاسخ خام را به شکل داخلی خودت تبدیل کن.',
            'برای توسعه از دادهٔ نمونه استفاده کن.',
            'درخواست‌های تکراری را کش کن.',
            'خطای 429 و پیام محدودیت را مدیریت کن.',
          ],
          en: [
            'Build a small request layer so switching services is easy.',
            'Map the raw response into your own internal shape.',
            'Use mock data during development.',
            'Cache repeated requests.',
            'Handle 429 responses and rate-limit messages.',
          ],
        },
        example: {
          code: "function normalizeUser(raw) {\n  return { id: raw.id, name: raw.name ?? 'Unknown', avatar: raw.avatar_url ?? '' };\n}",
          explanation: {
            fa: 'لایهٔ تبدیل، رابط برنامه را از تغییر نام کلیدهای API بیرونی محافظت می‌کند.',
            en: 'The mapping layer protects the app from changes in external API key names.',
          },
        },
        practice: {
          fa: 'برای یک endpoint یک لایهٔ نرمال‌سازی و کش کوچک بساز و با دادهٔ نمونه آزمون کن.',
          en: 'Build a small normalization and cache layer for one endpoint and test it with mock data.',
        },
        quiz: {
          question: {
            fa: 'کلید API کجا امن است؟',
            en: 'Where is an API key safe?',
          },
          options: {
            fa: ['در سرور یا تابع واسط', 'در فایل JavaScript عمومی', 'در HTML'],
            en: ['On a server or proxy function', 'In public JavaScript', 'In HTML'],
          },
          answer: 0,
          explanation: {
            fa: 'هر چیزی که به مرورگر می‌رسد عمومی است؛ کلید باید پشت سرور بماند.',
            en: 'Anything delivered to the browser is public; the key must stay behind a server.',
          },
        },
      },
      {
        id: 'w4-project',
        day: '۵',
        title: { fa: 'مینی‌پروژه: داشبورد جست‌وجو', en: 'Mini Project: Search Dashboard' },
        summary: {
          fa: 'دادهٔ زنده را جست‌وجو، فیلتر و مرتب کن و همهٔ حالت‌ها را نشان بده.',
          en: 'Search, filter, and sort live data while showing every state.',
        },
        duration: 70,
        goals: {
          fa: [
            'داده را از یک منبع بخوان و نرمال کن.',
            'جست‌وجو و فیلتر را با هم ترکیب کن.',
            'حالت‌های شبکه و نتیجهٔ خالی را نمایش بده.',
          ],
          en: [
            'Load and normalize data from a source.',
            'Combine search and filtering.',
            'Show network states and empty results.',
          ],
        },
        terms: [
          ['Debounce', 'تأخیر کوتاه پس از تایپ تا درخواست‌های اضافی ارسال نشوند.'],
          ['Derived data', 'داده‌ای که از دادهٔ اصلی محاسبه می‌شود، نه ذخیرهٔ جدا.'],
          ['Pagination', 'تقسیم نتیجه به صفحه‌های کوچک‌تر.'],
          [
            'Accessible search',
            'جست‌وجویی با label، پیام وضعیت و نتیجهٔ قابل‌پیمایش با صفحه‌کلید.',
          ],
        ],
        steps: {
          fa: [
            'داده را یک بار بخوان و در حالت نگه دار.',
            'جست‌وجو و فیلتر را از داده مشتق کن.',
            'برای تایپ، debounce کوتاه بگذار.',
            'حالت نتیجهٔ خالی و خطا را با پیام روشن نشان بده.',
            'با صفحه‌کلید کل مسیر جست‌وجو را آزمایش کن.',
          ],
          en: [
            'Load data once and keep it in state.',
            'Derive search and filter results from that data.',
            'Add a short debounce for typing.',
            'Show clear empty and error messages.',
            'Test the full search flow with a keyboard.',
          ],
        },
        example: {
          code: "const visible = items\n  .filter((item) => item.title.toLowerCase().includes(query.trim().toLowerCase()))\n  .filter((item) => (category === 'all' ? true : item.category === category));",
          explanation: {
            fa: 'نتیجه از دادهٔ اصلی مشتق می‌شود؛ دادهٔ اصلی دست‌نخورده می‌ماند و فیلترها قابل‌ترکیب‌اند.',
            en: 'Results are derived from the source data; the source stays untouched and filters compose.',
          },
        },
        practice: {
          fa: 'داشبورد را بساز و برای هر حالت اسکرین‌شات یا یادداشت نتیجه در README بگذار.',
          en: 'Build the dashboard and record each state with a screenshot or result note in the README.',
        },
        quiz: {
          question: {
            fa: 'چرا نتیجهٔ جست‌وجو را جداگانه ذخیره نمی‌کنیم؟',
            en: 'Why not store search results as separate state?',
          },
          options: {
            fa: [
              'چون از دادهٔ اصلی مشتق می‌شود',
              'چون مرورگر اجازه نمی‌دهد',
              'چون جست‌وجو همیشه خالی است',
            ],
            en: [
              'Because it is derived from source data',
              'Because browsers forbid it',
              'Because search is always empty',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'دادهٔ مشتق با تغییر منبع خودکار به‌روز می‌شود و دو منبع حقیقت نمی‌سازد.',
            en: 'Derived data updates with the source and avoids two sources of truth.',
          },
        },
      },
    ],
  },
  {
    id: 'week-5',
    number: '05',
    title: { fa: 'کامپوننت، حالت و تجربهٔ کاربر', en: 'Components, State & User Experience' },
    subtitle: {
      fa: 'رابط را به قطعه‌های کوچک بشکن و حالت را طوری مدیریت کن که رفتار قابل‌پیش‌بینی بماند.',
      en: 'Break the interface into small pieces and manage state so behavior stays predictable.',
    },
    outcome: {
      fa: 'در پایان هفته یک رابط کامپوننتی، دسترس‌پذیر و قابل‌استفادهٔ دوباره با حالت روشن و فرم‌های امن داری.',
      en: 'Finish with a component-based, accessible, reusable interface with clear state and safe forms.',
    },
    lessons: [
      {
        id: 'w5-components',
        day: '۱',
        title: { fa: 'تفکر کامپوننتی و الگوهای رندر', en: 'Component Thinking & Render Patterns' },
        summary: {
          fa: 'هر بخش رابط را با ورودی روشن و مسئولیت محدود بساز.',
          en: 'Build each interface piece with clear input and limited responsibility.',
        },
        duration: 55,
        goals: {
          fa: [
            'یک بخش تکراری را به کامپوننت تبدیل کن.',
            'ورودی کامپوننت را از دادهٔ درونی جدا کن.',
            'تابع ساخت HTML را از تابع داده جدا نگه دار.',
          ],
          en: [
            'Turn a repeated section into a component.',
            'Separate component input from internal data.',
            'Keep HTML-building functions apart from data functions.',
          ],
        },
        terms: [
          ['Component', 'واحد کوچک رابط با ورودی، ظاهر و رفتار مشخص.'],
          ['Props', 'ورودی‌هایی که از بیرون به کامپوننت داده می‌شوند.'],
          ['Render', 'ساختن خروجی قابل‌نمایش از داده و حالت.'],
          ['Composition', 'ساختن رابط بزرگ از کامپوننت‌های کوچک.'],
          ['Single responsibility', 'هر واحد فقط یک دلیل برای تغییر داشته باشد.'],
        ],
        steps: {
          fa: [
            'سه بخش تکراری صفحه را پیدا کن.',
            'برای هر بخش ورودی‌های لازم را فهرست کن.',
            'تابع render کارت را با پارامتر بساز.',
            'کارت‌ها را با map از داده بساز.',
            'کامپوننت را با دادهٔ خالی و ناقص آزمایش کن.',
          ],
          en: [
            'Find three repeated interface sections.',
            'List the inputs each section needs.',
            'Create a card render function with parameters.',
            'Build cards with map from data.',
            'Test the component with empty and partial data.',
          ],
        },
        example: {
          code: "function renderCard({ title, minutes, done }) {\n  return `<article class=\"card\"><h3>${escapeHtml(title)}</h3><p>${minutes} min</p><p>${done ? 'Done' : 'Open'}</p></article>`;\n}",
          explanation: {
            fa: 'کامپوننت فقط داده‌ای را که گرفته نمایش می‌دهد و متن را پیش از درج امن می‌کند.',
            en: 'The component renders only the data it receives and escapes text before insertion.',
          },
        },
        practice: {
          fa: 'یک کامپوننت کارت درس بساز که در فهرست، جست‌وجو و خلاصهٔ هفته بدون تکرار کد استفاده شود.',
          en: 'Build a lesson card component reused in the list, search, and week summary without duplicated code.',
        },
        quiz: {
          question: {
            fa: 'props در کامپوننت چه هستند؟',
            en: 'What are props in a component?',
          },
          options: {
            fa: ['ورودی‌های بیرونی کامپوننت', 'متغیرهای global', 'فایل‌های CSS'],
            en: ['External inputs to the component', 'Global variables', 'CSS files'],
          },
          answer: 0,
          explanation: {
            fa: 'props داده‌ای است که والد به کامپوننت می‌دهد تا آن را نمایش دهد.',
            en: 'Props are data the parent gives a component to render.',
          },
        },
      },
      {
        id: 'w5-state',
        day: '۲',
        title: {
          fa: 'حالت، منبع حقیقت و دادهٔ مشتق',
          en: 'State, Single Source of Truth & Derived Data',
        },
        summary: {
          fa: 'کمترین حالت لازم را نگه دار و بقیه را از آن محاسبه کن.',
          en: 'Keep the minimum state and compute the rest from it.',
        },
        duration: 55,
        goals: {
          fa: [
            'حالت اصلی را از دادهٔ مشتق جدا کن.',
            'تغییر حالت را در یک تابع متمرکز کن.',
            'از دو منبع حقیقت پرهیز کن.',
          ],
          en: [
            'Separate primary state from derived data.',
            'Centralize state changes in one function.',
            'Avoid two sources of truth.',
          ],
        },
        terms: [
          ['State', 'دادهٔ متغیری که نمایش و رفتار بعدی را تعیین می‌کند.'],
          ['Single source of truth', 'یک منبع رسمی برای هر بخش داده.'],
          ['Derived state', 'مقداری که از حالت اصلی محاسبه می‌شود و جدا ذخیره نمی‌شود.'],
          ['Reducer', 'تابعی که حالت قبلی و عمل را می‌گیرد و حالت تازه برمی‌گرداند.'],
          ['Side effect', 'تغییر بیرونی مانند ذخیره در localStorage که باید کنترل‌شده باشد.'],
        ],
        steps: {
          fa: [
            'فهرست حالت‌های واقعی برنامه را بنویس.',
            'هر مقداری را که از دیگری محاسبه می‌شود حذف کن.',
            'یک تابع setState کوچک بساز که تغییر و ذخیره را هماهنگ کند.',
            'حالت را یک‌طرفه جریان بده: رویداد، تغییر، رندر.',
            'دو بار کلیک هم‌زمان را آزمایش کن و ناسازگاری را رفع کن.',
          ],
          en: [
            'List the real state of the app.',
            'Remove any value that can be computed from another.',
            'Build a small setState that coordinates update and persistence.',
            'Flow state one way: event, update, render.',
            'Test rapid double clicks and fix inconsistency.',
          ],
        },
        example: {
          code: "const state = { items: [], filter: 'all', query: '' };\n\nconst visibleItems = state.items.filter((item) => {\n  const matchesFilter = state.filter === 'all' || item.category === state.filter;\n  const matchesQuery = item.title.includes(state.query);\n  return matchesFilter && matchesQuery;\n});",
          explanation: {
            fa: 'visibleItems حالت نیست؛ از items، filter و query محاسبه می‌شود و هرگز کهنه نمی‌شود.',
            en: 'visibleItems is not state; it is computed from items, filter, and query and never goes stale.',
          },
        },
        practice: {
          fa: 'حالت صفحه را بازبینی کن، دادهٔ مشتق را حذف کن و یک مسیر یک‌طرفه برای تغییر حالت بنویس.',
          en: 'Audit page state, remove derived duplicates, and write one one-way path for state changes.',
        },
        quiz: {
          question: {
            fa: 'دادهٔ مشتق چه زمانی باید ذخیره شود؟',
            en: 'When should derived data be stored?',
          },
          options: {
            fa: ['نباید؛ از حالت اصلی محاسبه می‌شود', 'همیشه در localStorage', 'فقط در CSS'],
            en: [
              'Never; it is computed from primary state',
              'Always in localStorage',
              'Only in CSS',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'ذخیرهٔ دادهٔ مشتق دو منبع حقیقت می‌سازد که می‌توانند ناسازگار شوند.',
            en: 'Storing derived data creates two sources of truth that can disagree.',
          },
        },
      },
      {
        id: 'w5-forms',
        day: '۳',
        title: { fa: 'الگوهای فرم و اعتبارسنجی', en: 'Form Patterns & Validation' },
        summary: {
          fa: 'فرم خوب راهنما می‌دهد، خطا را کنار فیلد نشان می‌دهد و داده را پیش از ذخیره بررسی می‌کند.',
          en: 'A good form guides, shows errors beside fields, and validates before saving.',
        },
        duration: 60,
        goals: {
          fa: [
            'برای هر فیلد label و راهنمای روشن بگذار.',
            'اعتبارسنجی فوری و هنگام ارسال را ترکیب کن.',
            'خطا را به فیلد و پیام کلی وصل کن.',
          ],
          en: [
            'Give every field a label and clear hint.',
            'Combine instant and submit-time validation.',
            'Connect field errors to an overall message.',
          ],
        },
        terms: [
          ['Label', 'نام قابل‌کلیک فیلد که برای صفحه‌خوان و کاربر ضروری است.'],
          ['aria-invalid', 'نشانهٔ وضعیت نامعتبر برای فناوری‌های کمکی.'],
          ['aria-describedby', 'پیوند فیلد به متن راهنما یا خطای آن.'],
          ['Native validation', 'بررسی‌های آمادهٔ مرورگر مانند required و type.'],
          ['Progressive enhancement', 'کارکرد پایه بدون JavaScript و بهبود با آن.'],
        ],
        steps: {
          fa: [
            'فرم را با fieldset و legend گروه‌بندی کن.',
            'برای هر ورودی label و در صورت نیاز hint بگذار.',
            'با required و type اعتبارسنجی پایه را فعال کن.',
            'پیام خطا را کنار همان فیلد نمایش بده.',
            'پس از اصلاح، حالت خطا را پاک کن.',
          ],
          en: [
            'Group the form with fieldset and legend.',
            'Add a label and hint for each input.',
            'Enable baseline validation with required and type.',
            'Show each error beside its field.',
            'Clear the error state after correction.',
          ],
        },
        example: {
          code: '<label for="title">عنوان</label>\n<input id="title" name="title" required maxlength="60" aria-describedby="title-error" />\n<p id="title-error" role="alert">عنوان نمی‌تواند خالی باشد.</p>',
          explanation: {
            fa: 'label فیلد را نام‌دار می‌کند و aria-describedby پیام خطا را به آن وصل می‌کند.',
            en: 'The label names the field and aria-describedby connects the error message.',
          },
        },
        practice: {
          fa: 'فرم افزودن درس را با label، اعتبارسنجی و پیام خطای کنار فیلد بساز و با صفحه‌کلید آزمایش کن.',
          en: 'Build an add-lesson form with labels, validation, and field-level errors, then test it with a keyboard.',
        },
        quiz: {
          question: {
            fa: 'چرا placeholder جای label را نمی‌گیرد؟',
            en: 'Why does a placeholder not replace a label?',
          },
          options: {
            fa: [
              'پس از تایپ ناپدید می‌شود و برای همه قابل‌درک نیست',
              'رنگ آن اشتباه است',
              'فقط برای پسورد است',
            ],
            en: [
              'It disappears after typing and is not accessible to everyone',
              'Its color is wrong',
              'It is only for passwords',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'placeholder راهنمای موقت است؛ label نام پایدار و قابل‌دسترسی فیلد را می‌دهد.',
            en: 'A placeholder is a temporary hint; a label gives the field a stable accessible name.',
          },
        },
      },
      {
        id: 'w5-a11y',
        day: '۴',
        title: { fa: 'دسترس‌پذیری و تجربهٔ صفحه‌کلید', en: 'Accessibility & Keyboard Experience' },
        summary: {
          fa: 'صفحه‌ای بساز که با صفحه‌کلید، صفحه‌خوان و صفحهٔ کوچک هم قابل‌استفاده باشد.',
          en: 'Build a page usable with a keyboard, a screen reader, and a small screen.',
        },
        duration: 55,
        goals: {
          fa: [
            'ترتیب عنوان‌ها و فوکوس را درست کن.',
            'برای عنصرهای تعاملی نام قابل‌دسترسی بگذار.',
            'حرکت و رنگ را با prefers-reduced-motion و کنتراست بررسی کن.',
          ],
          en: [
            'Fix heading order and focus flow.',
            'Give interactive elements accessible names.',
            'Respect prefers-reduced-motion and check contrast.',
          ],
        },
        terms: [
          ['Accessible name', 'نامی که فناوری کمکی برای یک کنترل می‌خواند.'],
          ['Focus order', 'ترتیبی که صفحه‌کلید میان کنترل‌ها حرکت می‌کند.'],
          ['Contrast ratio', 'نسبت روشنایی متن و پس‌زمینه برای خوانایی.'],
          ['Screen reader', 'نرم‌افزاری که محتوا را برای کاربر نابینا می‌خواند.'],
          ['Landmark', 'ناحیهٔ معنایی صفحه مانند main و nav.'],
        ],
        steps: {
          fa: [
            'کل صفحه را فقط با Tab بپیمای.',
            'نشانگر فوکوس را روی پس‌زمینهٔ روشن و تیره بررسی کن.',
            'برای دکمه‌های آیکونی aria-label بگذار.',
            'ترتیب h1 تا h3 را بازبینی کن.',
            'با Lighthouse یا axe مشکلات را فهرست کن.',
          ],
          en: [
            'Traverse the whole page with Tab only.',
            'Check the focus indicator on light and dark backgrounds.',
            'Add aria-label to icon-only buttons.',
            'Review heading order from h1 to h3.',
            'List issues with Lighthouse or axe.',
          ],
        },
        example: {
          code: '<button type="button" aria-label="بستن اعلان">×</button>\n<a class="skip-link" href="#main">پرش به محتوا</a>',
          explanation: {
            fa: 'دکمهٔ آیکونی بدون متن به نام قابل‌دسترسی نیاز دارد و skip-link پیمایش صفحه‌کلید را سریع می‌کند.',
            en: 'An icon-only button needs an accessible name, and a skip link speeds up keyboard navigation.',
          },
        },
        practice: {
          fa: 'یک بازبینی دسترس‌پذیری انجام بده و سه مشکل واقعی را با دلیل و اصلاح ثبت کن.',
          en: 'Run an accessibility review and record three real issues with cause and fix.',
        },
        quiz: {
          question: {
            fa: 'کدام عنصر برای اقدام مناسب است؟',
            en: 'Which element is appropriate for an action?',
          },
          options: {
            fa: ['button', 'div با onclick', 'span'],
            en: ['button', 'div with onclick', 'span'],
          },
          answer: 0,
          explanation: {
            fa: 'button رفتار، فوکوس و معنای دسترس‌پذیر را به‌طور پیش‌فرض دارد.',
            en: 'button provides behavior, focus, and accessible semantics by default.',
          },
        },
      },
      {
        id: 'w5-project',
        day: '۵',
        title: { fa: 'مینی‌پروژه: سیستم کارت', en: 'Mini Project: A Card System' },
        summary: {
          fa: 'یک سیستم کارت قابل‌استفادهٔ دوباره با حالت، فرم و دسترس‌پذیری بساز.',
          en: 'Build a reusable card system with state, forms, and accessibility.',
        },
        duration: 70,
        goals: {
          fa: [
            'کامپوننت کارت را با props روشن بساز.',
            'حالت فیلتر و تکمیل را مدیریت کن.',
            'تجربهٔ صفحه‌کلید و موبایل را بررسی کن.',
          ],
          en: [
            'Build a card component with clear props.',
            'Manage filter and completion state.',
            'Verify keyboard and mobile experience.',
          ],
        },
        terms: [
          ['Design system', 'مجموعهٔ قواعد و کامپوننت‌های مشترک برای هماهنگی رابط.'],
          ['Token', 'مقدار مشترک طراحی مانند رنگ یا فاصله.'],
          ['Variant', 'نسخهٔ ظاهری متفاوت یک کامپوننت با رفتار پایهٔ یکسان.'],
          ['Regression test', 'آزمونی که مطمئن می‌شود رفتار قبلی نشکسته است.'],
        ],
        steps: {
          fa: [
            'سه variant برای کارت تعریف کن.',
            'همهٔ کارت‌ها را با یک تابع بساز.',
            'فیلتر و تکمیل را به حالت اصلی وصل کن.',
            'با صفحه‌کلید و صفحهٔ باریک آزمایش کن.',
            'یک regression test ساده برای شمارش کارت‌ها بنویس.',
          ],
          en: [
            'Define three card variants.',
            'Render every card with one function.',
            'Connect filtering and completion to primary state.',
            'Test with a keyboard and a narrow screen.',
            'Write a simple regression test for the card count.',
          ],
        },
        example: {
          code: "cards.map((card) => renderCard({ ...card, variant: card.done ? 'success' : 'default' }))",
          explanation: {
            fa: 'variant از حالت هر کارت مشتق می‌شود؛ کامپوننت از منطق وضعیت جدا می‌ماند.',
            en: 'The variant is derived from each card state; the component stays separate from state logic.',
          },
        },
        practice: {
          fa: 'سیستم کارت را بساز و در README توضیح بده کدام بخش‌ها مشترک‌اند و کدام مخصوص هر کارت است.',
          en: 'Build the card system and explain in the README which parts are shared and which are card-specific.',
        },
        quiz: {
          question: {
            fa: 'variant چه چیزی را تغییر می‌دهد؟',
            en: 'What does a variant change?',
          },
          options: {
            fa: ['ظاهر را، بدون تغییر قرارداد پایه', 'نام کامپوننت را', 'نوع دادهٔ ورودی را'],
            en: [
              'Appearance without changing the base contract',
              'The component name',
              'The input data type',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'variant ظاهر را عوض می‌کند اما ورودی و رفتار اصلی کامپوننت ثابت می‌ماند.',
            en: 'A variant changes appearance while the component input and core behavior stay the same.',
          },
        },
      },
    ],
  },
  {
    id: 'week-6',
    number: '06',
    title: { fa: 'کیفیت، آزمون و کارایی', en: 'Quality, Testing & Performance' },
    subtitle: {
      fa: 'با شاهد پیدا کن، با آزمون محافظت کن و صفحه را سریع نگه دار.',
      en: 'Find problems with evidence, protect them with tests, and keep the page fast.',
    },
    outcome: {
      fa: 'در پایان هفته می‌توانی خطا را با DevTools پیدا کنی، آزمون بنویسی، کارایی را بسنجی و CI راه بیندازی.',
      en: 'Finish able to find bugs with DevTools, write tests, measure performance, and set up CI.',
    },
    lessons: [
      {
        id: 'w6-debug',
        day: '۱',
        title: {
          fa: 'اشکال‌زدایی با شاهد و breakpoint',
          en: 'Debugging with Evidence & Breakpoints',
        },
        summary: {
          fa: 'حدس نزن؛ متغیرها را در لحظهٔ درست متوقف کن و مقدار واقعی را ببین.',
          en: 'Do not guess; pause at the right moment and inspect real values.',
        },
        duration: 60,
        goals: {
          fa: [
            'در Sources یک breakpoint شرطی بگذار.',
            'پشتهٔ فراخوانی و دامنهٔ متغیرها را بخوان.',
            'خطا را در کوچک‌ترین بازتولید ممکن جدا کن.',
          ],
          en: [
            'Set a conditional breakpoint in Sources.',
            'Read the call stack and variable scope.',
            'Isolate the bug in the smallest reproduction.',
          ],
        },
        terms: [
          ['Breakpoint', 'نقطه‌ای که اجرای کد پیش از آن خط متوقف می‌شود.'],
          ['Conditional breakpoint', 'توقف فقط وقتی شرط مشخص برقرار باشد.'],
          ['Call stack', 'فهرست فراخوانی‌هایی که به نقطهٔ فعلی رسیده‌اند.'],
          ['Watch expression', 'عبارتی که مقدارش هنگام توقف نمایش داده می‌شود.'],
          ['Minimal reproduction', 'کوچک‌ترین مثال مستقل که مشکل را نشان می‌دهد.'],
        ],
        steps: {
          fa: [
            'خطای واقعی را کامل بخوان و پیام و خط را ثبت کن.',
            'در خط مشکوک breakpoint بگذار و برنامه را دوباره اجرا کن.',
            'مقدار ورودی و متغیرهای میانی را در Scope ببین.',
            'با Step over و Step into مسیر اجرا را دنبال کن.',
            'پس از اصلاح، همان مسیر را دوباره بیازما.',
          ],
          en: [
            'Read the full error and record message and line.',
            'Set a breakpoint on the suspect line and rerun.',
            'Inspect input and intermediate values in Scope.',
            'Follow execution with Step over and Step into.',
            'Re-run the same path after the fix.',
          ],
        },
        example: {
          code: '// شرط را در Breakpoint بنویس تا فقط برای مقدار نامعتبر متوقف شوی\n// typeof price !== "number"',
          explanation: {
            fa: 'breakpoint شرطی از توقف‌های بی‌فایده در حلقه‌های طولانی جلوگیری می‌کند.',
            en: 'A conditional breakpoint avoids useless stops inside long loops.',
          },
        },
        practice: {
          fa: 'سه باگ کوچک را فقط با breakpoint پیدا کن و برای هرکدام علت واقعی را در یک خط بنویس.',
          en: 'Find three small bugs using only breakpoints and write the real cause of each in one line.',
        },
        quiz: {
          question: {
            fa: 'چرا خواندن کامل پیام خطا مهم است؟',
            en: 'Why is reading the full error message important?',
          },
          options: {
            fa: [
              'نام فایل، خط و علت را می‌دهد',
              'فقط رنگ خطا را نشان می‌دهد',
              'کد را خودکار اصلاح می‌کند',
            ],
            en: [
              'It gives file, line, and cause',
              'It only shows the error color',
              'It fixes the code automatically',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'پیام کامل مسیر جست‌وجو را کوتاه می‌کند و از اصلاح اشتباه جلوگیری می‌کند.',
            en: 'The full message shortens the search and prevents fixing the wrong thing.',
          },
        },
      },
      {
        id: 'w6-unit',
        day: '۲',
        title: { fa: 'آزمون واحد با Vitest', en: 'Unit Testing with Vitest' },
        summary: {
          fa: 'تابع خالص را جدا آزمون کن تا تغییرهای بعدی با اطمینان انجام شوند.',
          en: 'Test pure functions in isolation so later changes are safe.',
        },
        duration: 60,
        goals: {
          fa: [
            'Vitest را به پروژه اضافه کن.',
            'برای تابع خالص آزمون موفق و ناموفق بنویس.',
            'موردهای مرزی را پوشش بده.',
          ],
          en: [
            'Add Vitest to the project.',
            'Write passing and failing tests for a pure function.',
            'Cover edge cases.',
          ],
        },
        terms: [
          ['Unit test', 'آزمون یک واحد کوچک مانند تابع، جدا از بقیه.'],
          ['Assertion', 'ادعای نتیجهٔ موردانتظار که آزمون بررسی می‌کند.'],
          ['Test runner', 'ابزاری که فایل‌های آزمون را پیدا و اجرا می‌کند.'],
          ['Edge case', 'ورودی مرزی مانند صفر، خالی یا مقدار بسیار بزرگ.'],
          ['Coverage', 'میزان کدی که آزمون‌ها اجرا می‌کنند؛ کیفیت را تضمین نمی‌کند.'],
        ],
        steps: {
          fa: [
            'Vitest را نصب کن و script آزمون اضافه کن.',
            'تابع محاسبه را به پیمانهٔ مستقل منتقل کن.',
            'برای حالت عادی، خالی و نامعتبر آزمون بنویس.',
            'آزمون را عمداً بشکن تا مطمئن شوی واقعاً بررسی می‌کند.',
            'خروجی آزمون را در README ثبت کن.',
          ],
          en: [
            'Install Vitest and add a test script.',
            'Move the calculation into a separate module.',
            'Write tests for normal, empty, and invalid input.',
            'Break a test on purpose to confirm it catches failure.',
            'Record test output in the README.',
          ],
        },
        example: {
          code: "import { describe, expect, it } from 'vitest';\nimport { totalMinutes } from './stats.js';\n\ndescribe('totalMinutes', () => {\n  it('adds durations', () => {\n    expect(totalMinutes([{ duration: 30 }, { duration: 20 }])).toBe(50);\n  });\n  it('returns zero for an empty list', () => {\n    expect(totalMinutes([])).toBe(0);\n  });\n});",
          explanation: {
            fa: 'آزمون رفتار بیرونی تابع را ثابت می‌کند؛ اگر بعداً منطق بشکند، آزمون شکست می‌خورد.',
            en: 'The test locks in the observable behavior; if logic breaks later, the test fails.',
          },
        },
        practice: {
          fa: 'برای سه تابع پروژه آزمون بنویس و یک آزمون را عمداً بشکن و سپس درست کن.',
          en: 'Write tests for three project functions, break one on purpose, then fix it.',
        },
        quiz: {
          question: {
            fa: 'پوشش بالا چه چیزی را تضمین می‌کند؟',
            en: 'What does high coverage guarantee?',
          },
          options: {
            fa: ['فقط اینکه خطوط اجرا شده‌اند، نه درستی', 'درستی کامل', 'سرعت بیشتر'],
            en: ['Only that lines ran, not correctness', 'Complete correctness', 'More speed'],
          },
          answer: 0,
          explanation: {
            fa: 'coverage نشان می‌دهد کد اجرا شده؛ ممکن است آزمون ضعیف باشد و خطا را نگیرد.',
            en: 'Coverage shows code ran; a weak test may still miss the bug.',
          },
        },
      },
      {
        id: 'w6-dom',
        day: '۳',
        title: { fa: 'آزمون DOM و یکپارچه', en: 'DOM & Integration Testing' },
        summary: {
          fa: 'رفتار کاربر را از دید رابط آزمایش کن، نه جزئیات پیاده‌سازی.',
          en: 'Test user behavior through the interface, not implementation details.',
        },
        duration: 60,
        goals: {
          fa: [
            'برای رویداد کلیک و فرم آزمون بنویس.',
            'عنصرها را با نقش و نام پیدا کن.',
            'حالت خالی و خطا را آزمون کن.',
          ],
          en: [
            'Test click and form events.',
            'Find elements by role and name.',
            'Test empty and error states.',
          ],
        },
        terms: [
          ['Integration test', 'آزمون چند بخش کنار هم، مانند فرم و فهرست.'],
          ['Testing Library', 'ابزاری که عنصرها را مانند کاربر پیدا می‌کند.'],
          ['Accessible query', 'پیداکردن عنصر با نقش و نام قابل‌دسترسی.'],
          ['Arrange / Act / Assert', 'ساخت وضعیت، انجام عمل و بررسی نتیجه.'],
          ['Flaky test', 'آزمونی که گاهی موفق و گاهی ناموفق است.'],
        ],
        steps: {
          fa: [
            'برای فرم آزمون بساز و ورودی را پر کن.',
            'رویداد submit را اجرا کن.',
            'وجود مورد تازه در فهرست را بررسی کن.',
            'ورودی خالی را بیازما و پیام خطا را ببین.',
            'از query بر اساس role استفاده کن تا دسترس‌پذیری هم بررسی شود.',
          ],
          en: [
            'Set up a form test and fill the input.',
            'Trigger the submit event.',
            'Assert that the new item appears in the list.',
            'Test empty input and check the error message.',
            'Use role-based queries so accessibility is also covered.',
          ],
        },
        example: {
          code: "const input = screen.getByRole('textbox', { name: /عنوان/ });\nawait userEvent.type(input, 'درس تازه');\nawait userEvent.click(screen.getByRole('button', { name: /افزودن/ }));\nexpect(screen.getByText('درس تازه')).toBeInTheDocument();",
          explanation: {
            fa: 'آزمون همان کاری را می‌کند که کاربر می‌کند و به نام قابل‌دسترسی تکیه دارد.',
            en: 'The test does what the user does and relies on accessible names.',
          },
        },
        practice: {
          fa: 'یک آزمون یکپارچه برای فرم و فهرست بنویس و آن را با تغییر عمدی کد بشکن.',
          en: 'Write one integration test for the form and list, then break it with an intentional code change.',
        },
        quiz: {
          question: {
            fa: 'چرا query بر اساس role بهتر است؟',
            en: 'Why are role-based queries better?',
          },
          options: {
            fa: ['رفتار کاربر و دسترس‌پذیری را می‌سنجد', 'سریع‌تر از CSS است', 'به کلاس نیاز دارد'],
            en: [
              'They reflect user behavior and accessibility',
              'They are faster than CSS',
              'They require classes',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'نقش و نام همان چیزی است که فناوری کمکی و کاربر می‌بینند.',
            en: 'Role and name are what users and assistive technology perceive.',
          },
        },
      },
      {
        id: 'w6-perf',
        day: '۴',
        title: { fa: 'کارایی و Core Web Vitals', en: 'Performance & Core Web Vitals' },
        summary: {
          fa: 'سرعت را بسنج، بزرگ‌ترین مانع را پیدا کن و فقط همان را بهینه کن.',
          en: 'Measure speed, find the biggest blocker, and optimize only that.',
        },
        duration: 55,
        goals: {
          fa: [
            'LCP، CLS و INP را از Lighthouse بخوان.',
            'منابع سنگین را پیدا کن.',
            'تصویر و فونت را بهینه کن.',
          ],
          en: [
            'Read LCP, CLS, and INP from Lighthouse.',
            'Find heavy resources.',
            'Optimize images and fonts.',
          ],
        },
        terms: [
          ['LCP', 'زمان نمایش بزرگ‌ترین عنصر محتوایی صفحه.'],
          ['CLS', 'میزان جابه‌جایی ناخواستهٔ چیدمان هنگام بارگذاری.'],
          ['INP', 'زمان پاسخ رابط به تعامل کاربر.'],
          ['Lazy loading', 'بارگذاری منبع فقط وقتی لازم می‌شود.'],
          ['Layout shift', 'تغییر جای عنصرها پس از نمایش اولیه.'],
        ],
        steps: {
          fa: [
            'Lighthouse را در حالت موبایل اجرا کن.',
            'بزرگ‌ترین تصویر یا فونت را در Network پیدا کن.',
            'ابعاد تصویر را ثابت کن تا layout shift کم شود.',
            'بارگذاری غیرضروری را به تعویق بینداز.',
            'پیش و پس از تغییر را با عدد مقایسه کن.',
          ],
          en: [
            'Run Lighthouse in mobile mode.',
            'Find the largest image or font in Network.',
            'Set fixed image dimensions to reduce layout shift.',
            'Defer non-critical loading.',
            'Compare before and after with numbers.',
          ],
        },
        example: {
          code: '<img src="cover.webp" width="800" height="450" loading="lazy" alt="نمای دوره" />',
          explanation: {
            fa: 'ابعاد ثابت از پرش چیدمان جلوگیری می‌کند و lazy loading بار اولیه را سبک می‌کند.',
            en: 'Fixed dimensions prevent layout shift and lazy loading lightens the initial load.',
          },
        },
        practice: {
          fa: 'یک گزارش کارایی پیش و پس از بهینه‌سازی بساز و سه عدد را مقایسه کن.',
          en: 'Create a before-and-after performance report and compare three numbers.',
        },
        quiz: {
          question: {
            fa: 'ابعاد ثابت تصویر چه مشکلی را کم می‌کند؟',
            en: 'What problem do fixed image dimensions reduce?',
          },
          options: {
            fa: ['جابه‌جایی چیدمان (CLS)', 'خطای شبکه', 'حجم CSS'],
            en: ['Layout shift (CLS)', 'Network errors', 'CSS size'],
          },
          answer: 0,
          explanation: {
            fa: 'وقتی مرورگر ابعاد را از قبل بداند، محتوا هنگام بارگذاری تصویر جابه‌جا نمی‌شود.',
            en: 'When the browser knows dimensions in advance, content does not jump as the image loads.',
          },
        },
      },
      {
        id: 'w6-ci',
        day: '۵',
        title: { fa: 'CI با GitHub Actions', en: 'Continuous Integration with GitHub Actions' },
        summary: {
          fa: 'هر push باید خودکار lint، آزمون و build شود تا خطا پیش از ادغام پیدا شود.',
          en: 'Every push should automatically lint, test, and build so errors are found before merge.',
        },
        duration: 55,
        goals: {
          fa: [
            'یک workflow برای push و pull request بساز.',
            'ترتیب نصب، lint، آزمون و build را درست بچین.',
            'خروجی ناموفق را بازتولید و رفع کن.',
          ],
          en: [
            'Create a workflow for push and pull request.',
            'Order install, lint, test, and build correctly.',
            'Reproduce and fix a failing run.',
          ],
        },
        terms: [
          ['CI', 'ادغام پیوسته؛ بررسی خودکار هر تغییر پیش از ادغام.'],
          ['Workflow', 'فایل تعریف‌شدهٔ مراحل خودکار در GitHub Actions.'],
          ['Job / step', 'واحدهای اجرا در workflow که به ترتیب اجرا می‌شوند.'],
          ['Cache', 'نگه‌داشتن وابستگی‌ها برای اجرای سریع‌تر.'],
          ['Required check', 'بررسی‌ای که ادغام pull request بدون موفقیت آن ممکن نیست.'],
        ],
        steps: {
          fa: [
            'فایل workflow را در .github/workflows بساز.',
            'نسخهٔ Node را با setup-node تنظیم کن.',
            'npm ci را برای نصب قطعی اجرا کن.',
            'lint، test و build را مرحله‌به‌مرحله اضافه کن.',
            'یک خطای عمدی بساز و شکست CI را ببین، سپس رفع کن.',
          ],
          en: [
            'Create a workflow file under .github/workflows.',
            'Set the Node version with setup-node.',
            'Run npm ci for reproducible installs.',
            'Add lint, test, and build as separate steps.',
            'Introduce a deliberate error, watch CI fail, then fix it.',
          ],
        },
        example: {
          code: 'on: [push, pull_request]\njobs:\n  check:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: 22, cache: npm }\n      - run: npm ci\n      - run: npm run lint\n      - run: npm run build',
          explanation: {
            fa: 'npm ci از lockfile نصب قطعی می‌کند و هر مرحله پیش از مرحلهٔ بعد باید موفق شود.',
            en: 'npm ci installs exactly from the lockfile, and each step must pass before the next.',
          },
        },
        practice: {
          fa: 'workflow را بساز، یک اجرای موفق و یک اجرای ناموفق را با لینک در README ثبت کن.',
          en: 'Create the workflow and record one successful and one failed run with links in the README.',
        },
        quiz: {
          question: {
            fa: 'چرا در CI از npm ci استفاده می‌شود؟',
            en: 'Why use npm ci in CI?',
          },
          options: {
            fa: [
              'نصب دقیق و تکرارپذیر از lockfile',
              'سریع‌تر از npm install است همیشه',
              'بسته‌ها را به‌روز می‌کند',
            ],
            en: [
              'Exact reproducible install from the lockfile',
              'It is always faster than install',
              'It updates packages',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'npm ci بر اساس lockfile نصب می‌کند و نتیجه در هر اجرا یکسان است.',
            en: 'npm ci installs from the lockfile so every run is identical.',
          },
        },
      },
    ],
  },
  {
    id: 'week-7',
    number: '07',
    title: { fa: 'TypeScript و ابزار حرفه‌ای', en: 'TypeScript & Professional Tooling' },
    subtitle: {
      fa: 'نوع‌ها را به‌عنوان مستندات زنده و شبکهٔ ایمنی به پروژه اضافه کن.',
      en: 'Add types as living documentation and a safety net.',
    },
    outcome: {
      fa: 'در پایان هفته پروژهٔ Vite تو TypeScript سخت‌گیرانه دارد و می‌توانی نوع‌های داده و رویداد را روشن تعریف کنی.',
      en: 'Finish with a strict TypeScript Vite project and clear types for data and events.',
    },
    lessons: [
      {
        id: 'w7-types',
        day: '۱',
        title: { fa: 'نوع، استنتاج و union', en: 'Types, Inference & Unions' },
        summary: {
          fa: 'نوع بگو داده چه شکلی دارد تا خطا پیش از اجرا پیدا شود.',
          en: 'Describe the shape of data so errors appear before runtime.',
        },
        duration: 60,
        goals: {
          fa: [
            'برای دادهٔ درس type تعریف کن.',
            'از استنتاج TypeScript استفاده کن.',
            'union بساز و مقدار نامعتبر را رد کن.',
          ],
          en: [
            'Define a type for lesson data.',
            'Use TypeScript inference.',
            'Build a union and reject invalid values.',
          ],
        },
        terms: [
          ['Type', 'توصیف شکل و نوع مقدار که ابزار آن را بررسی می‌کند.'],
          ['Inference', 'نتیجه‌گیری خودکار نوع از مقدار اولیه.'],
          ['Union', 'مقداری که یکی از چند نوع مشخص است.'],
          ['Literal type', 'نوع محدود به مقدارهای دقیق مانند loading و ready.'],
          ['Type narrowing', 'باریک‌کردن union با بررسی شرط.'],
        ],
        steps: {
          fa: [
            'فایل type برای درس و هفته بساز.',
            'برای حالت‌های رابط union تعریف کن.',
            'تابع را با پارامتر نوع‌دار بنویس.',
            'مقدار نامعتبر را آزمایش کن و خطای ابزار را ببین.',
            'type را از منطق جدا و قابل‌استفادهٔ دوباره نگه دار.',
          ],
          en: [
            'Create a type file for lessons and weeks.',
            'Define a union for interface states.',
            'Write a typed function parameter.',
            'Test an invalid value and read the tool error.',
            'Keep types separate and reusable.',
          ],
        },
        example: {
          code: "type Status = 'loading' | 'ready' | 'error';\n\ntype Lesson = {\n  id: string;\n  title: string;\n  duration: number;\n  status: Status;\n};",
          explanation: {
            fa: 'Status فقط سه مقدار مجاز دارد؛ نوشتن مقدار دیگر خطای نوع می‌دهد.',
            en: 'Status allows only three values; any other value is a type error.',
          },
        },
        practice: {
          fa: 'برای داده و حالت‌های پروژه type بنویس و یک مقدار نامعتبر را عمداً امتحان کن.',
          en: 'Write types for the project data and states, then deliberately try an invalid value.',
        },
        quiz: {
          question: {
            fa: 'union چه چیزی را محدود می‌کند؟',
            en: 'What does a union restrict?',
          },
          options: {
            fa: ['مقدار را به چند نوع مشخص', 'تعداد فایل‌ها را', 'سرعت اجرا را'],
            en: ['A value to a set of allowed types', 'The number of files', 'Runtime speed'],
          },
          answer: 0,
          explanation: {
            fa: 'union مجموعهٔ نوع‌های مجاز را روشن می‌کند و مقدار بیرونی را رد می‌کند.',
            en: 'A union defines the allowed set and rejects outside values.',
          },
        },
      },
      {
        id: 'w7-narrowing',
        day: '۲',
        title: { fa: 'interface، generic و narrowing', en: 'Interfaces, Generics & Narrowing' },
        summary: {
          fa: 'نوع را طوری بنویس که دوباره استفاده شود، بدون از دست‌دادن دقت.',
          en: 'Write types that are reusable without losing precision.',
        },
        duration: 60,
        goals: {
          fa: [
            'interface برای قرارداد شیء بنویس.',
            'تابع generic برای آرایه بساز.',
            'با بررسی شرط، نوع را باریک کن.',
          ],
          en: [
            'Write an interface for an object contract.',
            'Build a generic array function.',
            'Narrow a type with a condition.',
          ],
        },
        terms: [
          ['interface', 'قرارداد نام‌دار برای شکل یک شیء.'],
          ['generic', 'نوع پارامتری که با نوع ورودی هماهنگ می‌شود.'],
          ['optional property', 'ویژگی‌ای که ممکن است وجود نداشته باشد.'],
          ['type guard', 'تابع یا شرطی که نوع را در یک شاخه باریک می‌کند.'],
          ['readonly', 'نشانه‌ای که تغییر ویژگی را در TypeScript ممنوع می‌کند.'],
        ],
        steps: {
          fa: [
            'برای پاسخ API یک interface بنویس.',
            'تابع first را generic بساز.',
            'برای مقدار نبود، نوع undefined را در نظر بگیر.',
            'با if نوع را باریک کن.',
            'پاسخ خام را با تابع type guard بررسی کن.',
          ],
          en: [
            'Write an interface for an API response.',
            'Make a first function generic.',
            'Allow undefined for missing values.',
            'Narrow the type with an if.',
            'Validate the raw response with a type guard.',
          ],
        },
        example: {
          code: "function first<T>(items: readonly T[]): T | undefined {\n  return items[0];\n}\n\nfunction isLesson(value: unknown): value is Lesson {\n  return typeof value === 'object' && value !== null && 'title' in value;\n}",
          explanation: {
            fa: 'generic نوع خروجی را با ورودی هماهنگ می‌کند و type guard دادهٔ بیرونی را قابل‌اعتماد می‌کند.',
            en: 'A generic aligns output with input, and a type guard makes external data trustworthy.',
          },
        },
        practice: {
          fa: 'برای پاسخ API interface و type guard بنویس و پاسخ ناقص را رد کن.',
          en: 'Write an interface and type guard for an API response and reject incomplete payloads.',
        },
        quiz: {
          question: {
            fa: 'type guard چه کاری می‌کند؟',
            en: 'What does a type guard do?',
          },
          options: {
            fa: ['نوع را در یک شرط باریک می‌کند', 'کد را سریع‌تر اجرا می‌کند', 'فایل را می‌سازد'],
            en: ['Narrows the type inside a condition', 'Makes code run faster', 'Builds the file'],
          },
          answer: 0,
          explanation: {
            fa: 'type guard به TypeScript می‌گوید در آن شاخه داده چه نوعی دارد.',
            en: 'A type guard tells TypeScript what type the data has in that branch.',
          },
        },
      },
      {
        id: 'w7-domtypes',
        day: '۳',
        title: { fa: 'نوع‌دهی به DOM و رویدادها', en: 'Typing the DOM & Events' },
        summary: {
          fa: 'عنصر و رویداد را دقیق type کن تا null و target اشتباه دردسر نسازد.',
          en: 'Type elements and events precisely so null and wrong targets do not cause trouble.',
        },
        duration: 55,
        goals: {
          fa: [
            'نتیجهٔ querySelector را با null مدیریت کن.',
            'نوع رویداد فرم و ورودی را مشخص کن.',
            'از non-null assertion فقط با دلیل استفاده کن.',
          ],
          en: [
            'Handle a nullable querySelector result.',
            'Type form and input events.',
            'Use non-null assertion only with a reason.',
          ],
        },
        terms: [
          ['HTMLElement', 'نوع پایهٔ عنصرهای HTML در TypeScript.'],
          ['EventTarget', 'نوع عمومی هدف رویداد که باید باریک شود.'],
          ['null safety', 'مدیریت آگاهانهٔ مقدارهای احتمالاً خالی.'],
          ['Type assertion', 'گفتن نوع به ابزار؛ باید با شاهد همراه باشد.'],
          ['Generic event type', 'نوع رویداد متناسب با عنصر، مانند HTMLInputElement.'],
        ],
        steps: {
          fa: [
            'تابع کمکی برای گرفتن عنصر با خطای روشن بساز.',
            'رویداد submit را با SubmitEvent type کن.',
            'currentTarget را به HTMLFormElement تبدیل کن.',
            'ورودی را با HTMLInputElement type کن.',
            'از as و ! کم استفاده کن و دلیل بنویس.',
          ],
          en: [
            'Create a helper that returns an element or throws clearly.',
            'Type submit with SubmitEvent.',
            'Treat currentTarget as HTMLFormElement.',
            'Type the input as HTMLInputElement.',
            'Use as and ! sparingly and explain why.',
          ],
        },
        example: {
          code: "const form = document.querySelector<HTMLFormElement>('#lesson-form');\nif (!form) throw new Error('Lesson form is missing');\n\nform.addEventListener('submit', (event: SubmitEvent) => {\n  event.preventDefault();\n  const input = form.elements.namedItem('title') as HTMLInputElement;\n  console.log(input.value.trim());\n});",
          explanation: {
            fa: 'نبود فرم با خطای روشن متوقف می‌شود و رویداد نوع دقیق دارد؛ دیگر null پنهان نمی‌ماند.',
            en: 'A missing form stops with a clear error and the event has an exact type; null cannot hide.',
          },
        },
        practice: {
          fa: 'سه querySelector پروژه را type کن و هر null احتمالی را با پیام روشن مدیریت کن.',
          en: 'Type three project querySelector calls and handle every possible null with a clear message.',
        },
        quiz: {
          question: {
            fa: 'چرا ! خطرناک است؟',
            en: 'Why is ! risky?',
          },
          options: {
            fa: [
              'null بودن را پنهان می‌کند و خطای زمان اجرا می‌سازد',
              'کد را کند می‌کند',
              'فایل را حذف می‌کند',
            ],
            en: ['It hides null and can cause runtime errors', 'It slows code', 'It deletes files'],
          },
          answer: 0,
          explanation: {
            fa: 'non-null assertion بررسی را حذف می‌کند؛ اگر مقدار واقعاً null باشد برنامه می‌شکند.',
            en: 'The non-null assertion removes the check; if the value is null, the app crashes.',
          },
        },
      },
      {
        id: 'w7-migrate',
        day: '۴',
        title: {
          fa: 'مهاجرت پروژهٔ Vite به TypeScript',
          en: 'Migrating a Vite Project to TypeScript',
        },
        summary: {
          fa: 'مهاجرت را کوچک و قابل‌بازگشت انجام بده: ابزار، تنظیمات، سپس فایل‌ها.',
          en: 'Migrate in small reversible steps: tooling, config, then files.',
        },
        duration: 65,
        goals: {
          fa: [
            'وابستگی‌های TypeScript را نصب کن.',
            'tsconfig سخت‌گیرانه بساز.',
            'فایل‌ها را مرحله‌به‌مرحله تبدیل کن.',
          ],
          en: [
            'Install TypeScript dependencies.',
            'Create a strict tsconfig.',
            'Convert files step by step.',
          ],
        },
        terms: [
          ['tsconfig.json', 'فایل تنظیمات کامپایلر TypeScript.'],
          ['strict mode', 'مجموعهٔ بررسی‌های سخت‌گیرانه برای ایمنی بیشتر.'],
          ['Declaration file', 'فایل .d.ts که نوع کتابخانه یا ماژول را توصیف می‌کند.'],
          ['Incremental migration', 'تبدیل تدریجی فایل‌ها بدون شکستن کل پروژه.'],
          ['allowJs', 'اجازهٔ کنار هم بودن فایل‌های JavaScript و TypeScript.'],
        ],
        steps: {
          fa: [
            'typescript و @types لازم را نصب کن.',
            'tsconfig را با strict و noUncheckedIndexedAccess بساز.',
            'allowJs را موقتاً روشن کن.',
            'یک پیمانه را تبدیل و build را بررسی کن.',
            'پس از پایان، allowJs را خاموش کن.',
          ],
          en: [
            'Install typescript and needed @types packages.',
            'Create tsconfig with strict and noUncheckedIndexedAccess.',
            'Enable allowJs temporarily.',
            'Convert one module and verify the build.',
            'Turn allowJs off when done.',
          ],
        },
        example: {
          code: '{\n  "compilerOptions": {\n    "target": "ES2022",\n    "module": "ESNext",\n    "strict": true,\n    "noUncheckedIndexedAccess": true,\n    "moduleResolution": "bundler"\n  }\n}',
          explanation: {
            fa: 'strict بررسی‌های اصلی را روشن می‌کند و noUncheckedIndexedAccess دسترسی به اندیس نامطمئن را بررسی می‌کند.',
            en: 'strict enables core checks and noUncheckedIndexedAccess checks uncertain index access.',
          },
        },
        practice: {
          fa: 'یک پیمانه را به TypeScript تبدیل کن و پیش و پس از آن خروجی build را ثبت کن.',
          en: 'Convert one module to TypeScript and record the build output before and after.',
        },
        quiz: {
          question: {
            fa: 'چرا مهاجرت تدریجی بهتر است؟',
            en: 'Why is incremental migration better?',
          },
          options: {
            fa: ['پروژه در هر مرحله قابل‌اجراست', 'همیشه سریع‌تر است', 'نیاز به tsconfig ندارد'],
            en: ['The project runs at every step', 'It is always faster', 'It needs no tsconfig'],
          },
          answer: 0,
          explanation: {
            fa: 'تبدیل مرحله‌ای اجازه می‌دهد در هر گام build و رفتار را بررسی کنی.',
            en: 'Step-by-step conversion lets you verify build and behavior at each stage.',
          },
        },
      },
      {
        id: 'w7-strict',
        day: '۵',
        title: { fa: 'حالت سخت‌گیرانه و دروازه‌های کیفیت', en: 'Strict Mode & Quality Gates' },
        summary: {
          fa: 'قواعد سخت را در CI بگذار تا کیفیت به عادت شخصی وابسته نباشد.',
          en: 'Put strict rules in CI so quality does not depend on personal habit.',
        },
        duration: 55,
        goals: {
          fa: [
            'typecheck را به scriptها اضافه کن.',
            'lint و typecheck را در CI اجرا کن.',
            'هر خطای نوع را با اصلاح واقعی رفع کن.',
          ],
          en: [
            'Add typecheck to the scripts.',
            'Run lint and typecheck in CI.',
            'Fix every type error with a real correction.',
          ],
        },
        terms: [
          ['Typecheck', 'اجرای کامپایلر بدون تولید فایل برای بررسی نوع‌ها.'],
          ['Quality gate', 'شرطی که تا موفق نشود ادغام یا انتشار انجام نمی‌شود.'],
          ['Suppression', 'پنهان‌کردن خطا با any یا ignore؛ بدهی فنی می‌سازد.'],
          ['Technical debt', 'هزینهٔ آیندهٔ میان‌برهای امروز.'],
          ['Refactor safely', 'بهبود ساختار با پشتوانهٔ آزمون و typecheck.'],
        ],
        steps: {
          fa: [
            'script typecheck با tsc --noEmit اضافه کن.',
            'lint، typecheck، test و build را در CI بگذار.',
            'همهٔ anyهای ناخواسته را پیدا کن.',
            'به‌جای any، نوع دقیق یا unknown بنویس.',
            'پس از هر اصلاح، دوباره کل دروازه را اجرا کن.',
          ],
          en: [
            'Add a typecheck script with tsc --noEmit.',
            'Put lint, typecheck, test, and build in CI.',
            'Find every unintended any.',
            'Replace any with a precise type or unknown.',
            'Re-run the whole gate after each fix.',
          ],
        },
        example: {
          code: '"scripts": {\n  "typecheck": "tsc --noEmit",\n  "check": "npm run lint && npm run typecheck && npm run build"\n}',
          explanation: {
            fa: 'یک فرمان check همهٔ بررسی‌ها را پشت‌سرهم اجرا می‌کند و در CI هم استفاده می‌شود.',
            en: 'A single check command runs every verification and is reused in CI.',
          },
        },
        practice: {
          fa: 'فرمان check را بساز، در CI بگذار و یک بار عمداً بشکن تا شکست را ببینی.',
          en: 'Create the check command, add it to CI, and break it once to see the failure.',
        },
        quiz: {
          question: {
            fa: 'چرا any راه‌حل خوبی نیست؟',
            en: 'Why is any not a good solution?',
          },
          options: {
            fa: [
              'بررسی نوع را خاموش می‌کند و خطا را پنهان می‌سازد',
              'کد را طولانی می‌کند',
              'فقط برای آرایه است',
            ],
            en: [
              'It disables type checking and hides errors',
              'It makes code longer',
              'It is only for arrays',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'any شبکهٔ ایمنی را سوراخ می‌کند؛ نوع دقیق یا unknown همراه بررسی بهتر است.',
            en: 'any punches a hole in the safety net; a precise type or checked unknown is better.',
          },
        },
      },
    ],
  },
  {
    id: 'week-8',
    number: '08',
    title: { fa: 'پروژهٔ پایانی و انتشار', en: 'Capstone & Launch' },
    subtitle: {
      fa: 'یک محصول کوچک واقعی را برنامه‌ریزی، امن، سریع و منتشر کن.',
      en: 'Plan, secure, speed up, and ship a real small product.',
    },
    outcome: {
      fa: 'در پایان دوره یک پروژهٔ کامل و منتشرشده با مستندات، آزمون، دسترس‌پذیری و لینک زنده داری.',
      en: 'Finish the course with a complete deployed project with docs, tests, accessibility, and a live link.',
    },
    lessons: [
      {
        id: 'w8-plan',
        day: '۱',
        title: { fa: 'برنامه‌ریزی محصول و محدوده', en: 'Product Planning & Scope' },
        summary: {
          fa: 'کوچک شروع کن: یک کاربر، یک مشکل، سه ویژگی قابل‌تحویل.',
          en: 'Start small: one user, one problem, three shippable features.',
        },
        duration: 55,
        goals: {
          fa: [
            'کاربر و مشکل را در یک جمله بنویس.',
            'سه ویژگی اصلی و سه ویژگی بعدی را جدا کن.',
            'معیار پذیرش هر ویژگی را تعریف کن.',
          ],
          en: [
            'State the user and problem in one sentence.',
            'Separate three core features from later ones.',
            'Define acceptance criteria for each feature.',
          ],
        },
        terms: [
          ['User story', 'جمله‌ای از دید کاربر: من می‌خواهم... تا ...'],
          ['MVP', 'کمترین محصول قابل‌استفاده که مشکل اصلی را حل می‌کند.'],
          ['Scope creep', 'بزرگ‌شدن بی‌کنترل محدوده و دیرشدن تحویل.'],
          ['Acceptance criteria', 'شرط‌های عینی برای پذیرش یک ویژگی.'],
          ['Out of scope', 'کارهایی که آگاهانه در این نسخه انجام نمی‌شوند.'],
        ],
        steps: {
          fa: [
            'یک جملهٔ کاربر و مشکل بنویس.',
            'فهرست ویژگی‌ها را بساز و همه را اولویت‌بندی کن.',
            'سه ویژگی MVP را انتخاب کن.',
            'برای هر ویژگی معیار پذیرش عینی بنویس.',
            'فهرست out of scope را روشن ثبت کن.',
          ],
          en: [
            'Write one user-and-problem sentence.',
            'List features and prioritize all of them.',
            'Choose three MVP features.',
            'Write objective acceptance criteria for each.',
            'Record a clear out-of-scope list.',
          ],
        },
        example: {
          code: 'User: a learner tracking weekly lessons.\nProblem: progress is lost between sessions.\nMVP: add lessons, mark complete, persist progress.\nOut of scope: accounts, sharing, notifications.',
          explanation: {
            fa: 'محدودهٔ روشن از اضافه‌شدن ویژگی‌های ناگهانی و دیرشدن پروژه جلوگیری می‌کند.',
            en: 'A clear scope prevents sudden features and late delivery.',
          },
        },
        practice: {
          fa: 'یک صفحهٔ یک‌صفحه‌ای برنامهٔ پروژه با کاربر، مشکل، MVP و خارج از محدوده بنویس.',
          en: 'Write a one-page project brief with user, problem, MVP, and out of scope.',
        },
        quiz: {
          question: {
            fa: 'MVP چیست؟',
            en: 'What is an MVP?',
          },
          options: {
            fa: [
              'کمترین نسخهٔ قابل‌استفاده که مشکل اصلی را حل می‌کند',
              'نسخهٔ کامل با همهٔ ویژگی‌ها',
              'فقط طراحی ظاهری',
            ],
            en: [
              'The smallest usable version that solves the core problem',
              'The full version with every feature',
              'Only visual design',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'MVP برای یادگیری سریع و تحویل ارزش اصلی است، نه حذف کیفیت.',
            en: 'An MVP is for fast learning and delivering core value, not for cutting quality.',
          },
        },
      },
      {
        id: 'w8-arch',
        day: '۲',
        title: { fa: 'معماری، داده و مرزها', en: 'Architecture, Data & Boundaries' },
        summary: {
          fa: 'ساختار پوشه‌ها و جریان داده را پیش از کدنویسی روشن کن.',
          en: 'Clarify folder structure and data flow before coding.',
        },
        duration: 60,
        goals: {
          fa: [
            'ساختار پوشه‌ها را بر اساس مسئولیت بچین.',
            'مدل داده را با type توصیف کن.',
            'مرز بین داده، منطق و رابط را حفظ کن.',
          ],
          en: [
            'Arrange folders by responsibility.',
            'Describe the data model with types.',
            'Keep data, logic, and interface boundaries.',
          ],
        },
        terms: [
          ['Architecture', 'ساختار کلی بخش‌ها و نحوهٔ ارتباط آن‌ها.'],
          ['Data model', 'شکل و رابطهٔ موجودیت‌های اصلی برنامه.'],
          ['Layer', 'لایهٔ مسئولیت مانند داده، منطق و نمایش.'],
          ['Adapter', 'لایهٔ واسط که شکل بیرونی را به شکل داخلی تبدیل می‌کند.'],
          ['Coupling', 'میزان وابستگی بخش‌ها به جزئیات یکدیگر.'],
        ],
        steps: {
          fa: [
            'پوشه‌های data، logic، ui و styles را بساز.',
            'مدل داده را با type یا interface بنویس.',
            'تابع‌های منطقی را خالص نگه دار.',
            'لایهٔ نمایش را فقط به خروجی منطق وصل کن.',
            'وابستگی حلقه‌ای و coupling اضافی را حذف کن.',
          ],
          en: [
            'Create data, logic, ui, and styles folders.',
            'Write the data model with type or interface.',
            'Keep logic functions pure.',
            'Connect the presentation layer only to logic output.',
            'Remove circular dependencies and extra coupling.',
          ],
        },
        example: {
          code: 'src/\n  data/lessons.js\n  logic/stats.js\n  logic/storage.js\n  ui/cards.js\n  ui/app.js\n  styles/main.css',
          explanation: {
            fa: 'هر پوشه یک مسئولیت دارد؛ پیدا کردن و آزمودن هر بخش ساده‌تر می‌شود.',
            en: 'Each folder has one responsibility, making every part easier to find and test.',
          },
        },
        practice: {
          fa: 'نقشهٔ پوشه‌ها و جریان دادهٔ پروژه را در README رسم کن و یک وابستگی اضافی را حذف کن.',
          en: 'Draw the folder and data-flow map in the README and remove one extra dependency.',
        },
        quiz: {
          question: {
            fa: 'coupling کم چه فایده‌ای دارد؟',
            en: 'What is the benefit of low coupling?',
          },
          options: {
            fa: [
              'تغییر یک بخش بخش‌های کمتر را می‌شکند',
              'کد همیشه کوتاه‌تر می‌شود',
              'نیاز به آزمون را حذف می‌کند',
            ],
            en: [
              'Changing one part breaks fewer others',
              'Code is always shorter',
              'It removes the need for tests',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'وابستگی کم یعنی تغییرات محلی‌تر می‌مانند و نگهداری آسان‌تر است.',
            en: 'Low coupling keeps changes local and maintenance easier.',
          },
        },
      },
      {
        id: 'w8-security',
        day: '۳',
        title: { fa: 'امنیت، حریم خصوصی و اعتماد', en: 'Security, Privacy & Trust' },
        summary: {
          fa: 'دادهٔ کاربر امانت است؛ کم جمع کن، امن نمایش بده و شفاف باش.',
          en: 'User data is a trust; collect little, display safely, and be transparent.',
        },
        duration: 55,
        goals: {
          fa: [
            'خطر XSS را با textContent کاهش بده.',
            'هیچ رازی را در کد عمومی نگذار.',
            'سیاست دادهٔ ساده و روشن بنویس.',
          ],
          en: [
            'Reduce XSS risk with textContent.',
            'Never place secrets in public code.',
            'Write a simple clear data policy.',
          ],
        },
        terms: [
          ['XSS', 'تزریق HTML یا اسکریپت از دادهٔ کنترل‌نشده به صفحه.'],
          ['Sanitization', 'پاک‌سازی ورودی از محتوای خطرناک پیش از استفاده.'],
          ['Secret', 'اطلاعاتی مانند کلید که نباید عمومی شود.'],
          ['Least privilege', 'دسترسی فقط به اندازهٔ لازم برای انجام کار.'],
          ['Privacy policy', 'توضیح روشن اینکه چه داده‌ای جمع می‌شود و چرا.'],
        ],
        steps: {
          fa: [
            'همهٔ innerHTMLها را با دادهٔ کاربر بازبینی کن.',
            'برای متن از textContent استفاده کن.',
            'متغیرهای محیطی عمومی و خصوصی را جدا کن.',
            'دادهٔ ذخیره‌شده را به حداقل برسان.',
            'یک بخش کوتاه حریم خصوصی در README بنویس.',
          ],
          en: [
            'Review every innerHTML with user data.',
            'Use textContent for text.',
            'Separate public and private environment variables.',
            'Minimize stored data.',
            'Add a short privacy section to the README.',
          ],
        },
        example: {
          code: '// ناامن\nlist.innerHTML = `<li>${userInput}</li>`;\n\n// امن\nconst item = document.createElement("li");\nitem.textContent = userInput;\nlist.append(item);',
          explanation: {
            fa: 'textContent ورودی را متن می‌بیند، نه HTML؛ بنابراین اسکریپت تزریقی اجرا نمی‌شود.',
            en: 'textContent treats input as text, not HTML, so injected script does not run.',
          },
        },
        practice: {
          fa: 'سه نقطهٔ نمایش ورودی کاربر را بازبینی و امن کن و سیاست دادهٔ پروژه را در پنج خط بنویس.',
          en: 'Review and secure three user-input display points, and write the project data policy in five lines.',
        },
        quiz: {
          question: {
            fa: 'کدام روش نمایش ورودی امن‌تر است؟',
            en: 'Which way of displaying input is safer?',
          },
          options: {
            fa: ['textContent', 'innerHTML خام', 'document.write'],
            en: ['textContent', 'Raw innerHTML', 'document.write'],
          },
          answer: 0,
          explanation: {
            fa: 'textContent محتوا را متن ساده می‌کند و از تفسیر HTML خطرناک جلوگیری می‌کند.',
            en: 'textContent makes content plain text and prevents dangerous HTML parsing.',
          },
        },
      },
      {
        id: 'w8-seo',
        day: '۴',
        title: { fa: 'SEO، متادیتا و بازبینی نهایی', en: 'SEO, Metadata & Final Audit' },
        summary: {
          fa: 'صفحه را برای انسان و موتور جست‌وجو روشن و قابل‌فهم کن، سپس همه‌چیز را بازبینی کن.',
          en: 'Make the page clear for people and search engines, then audit everything.',
        },
        duration: 55,
        goals: {
          fa: [
            'title و description یگانه و معنادار بنویس.',
            'ساختار عنوان و لینک‌ها را بررسی کن.',
            'دسترس‌پذیری، کارایی و لینک‌ها را نهایی بازبینی کن.',
          ],
          en: [
            'Write unique meaningful title and description.',
            'Review heading structure and links.',
            'Do a final accessibility, performance, and link audit.',
          ],
        },
        terms: [
          ['Title tag', 'عنوان صفحه در تب مرورگر و نتیجهٔ جست‌وجو.'],
          ['Meta description', 'خلاصهٔ صفحه در نتایج جست‌وجو.'],
          ['Open Graph', 'متادیتای اشتراک‌گذاری در شبکه‌های اجتماعی.'],
          ['Canonical URL', 'نشانی رسمی صفحه برای جلوگیری از محتوای تکراری.'],
          ['Audit', 'بازبینی نظام‌مند فهرست مشخصی از معیارها.'],
        ],
        steps: {
          fa: [
            'برای هر صفحه title و description یکتا بنویس.',
            'Open Graph و favicon را اضافه کن.',
            'ترتیب عنوان‌ها و متن لینک‌ها را بررسی کن.',
            'با Lighthouse و axe بازبینی کن.',
            'همهٔ لینک‌های داخلی و خارجی را آزمایش کن.',
          ],
          en: [
            'Write a unique title and description for each page.',
            'Add Open Graph and a favicon.',
            'Review heading order and link text.',
            'Audit with Lighthouse and axe.',
            'Test every internal and external link.',
          ],
        },
        example: {
          code: '<title>Code Workshop | مسیر کامل وب</title>\n<meta name="description" content="دورهٔ عملی هشت‌هفته‌ای ساخت وب با HTML، Tailwind و JavaScript." />\n<meta property="og:title" content="Code Workshop" />',
          explanation: {
            fa: 'عنوان و توضیح یکتا به کاربر و موتور جست‌وجو می‌گوید صفحه دربارهٔ چیست.',
            en: 'A unique title and description tell users and search engines what the page is about.',
          },
        },
        practice: {
          fa: 'بازبینی نهایی را با فهرست حداقل ده مورد انجام بده و نتیجهٔ هر مورد را ثبت کن.',
          en: 'Run a final audit with at least ten checks and record the result of each.',
        },
        quiz: {
          question: {
            fa: 'چرا title یکتا مهم است؟',
            en: 'Why is a unique title important?',
          },
          options: {
            fa: [
              'صفحه را در نتایج جست‌وجو و تب مرورگر متمایز می‌کند',
              'رنگ صفحه را تغییر می‌دهد',
              'فایل CSS را کم می‌کند',
            ],
            en: [
              'It distinguishes the page in search and browser tabs',
              'It changes page color',
              'It reduces CSS size',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'عنوان یکتا زمینهٔ صفحه را روشن می‌کند و از سردرگمی کاربر جلوگیری می‌کند.',
            en: 'A unique title clarifies page context and prevents user confusion.',
          },
        },
      },
      {
        id: 'w8-ship',
        day: '۵',
        title: { fa: 'انتشار، پایش و ارائه', en: 'Ship, Monitor & Present' },
        summary: {
          fa: 'انتشار پایان کار نیست؛ بررسی پس از انتشار و ارائهٔ روشن بخشی از محصول است.',
          en: 'Launch is not the end; post-launch checks and a clear presentation are part of the product.',
        },
        duration: 70,
        goals: {
          fa: [
            'نسخهٔ نهایی را build و deploy کن.',
            'مسیرهای اصلی را در پنجرهٔ خصوصی آزمایش کن.',
            'پروژه را با یک README و توضیح کوتاه ارائه بده.',
          ],
          en: [
            'Build and deploy the final version.',
            'Test main flows in a private window.',
            'Present the project with a README and short explanation.',
          ],
        },
        terms: [
          ['Deployment', 'انتشار خروجی build روی میزبان عمومی.'],
          ['Environment variable', 'تنظیم بیرونی برنامه که در محیط‌ها متفاوت است.'],
          ['Smoke test', 'بررسی سریع مسیرهای اصلی پس از انتشار.'],
          ['Rollback', 'بازگشت به نسخهٔ سالم پیشین در صورت مشکل.'],
          ['Portfolio', 'مجموعهٔ کارهای منتشرشده برای نشان‌دادن مهارت.'],
        ],
        steps: {
          fa: [
            'README را با تصویر، روش اجرا و تصمیم‌ها کامل کن.',
            'lint، typecheck، test و build را نهایی اجرا کن.',
            'روی Netlify یا Vercel منتشر کن و متغیر محیطی لازم را تنظیم کن.',
            'در پنجرهٔ خصوصی CSS، JavaScript، تصویر و فرم را آزمایش کن.',
            'لینک زنده، تصویر و توضیح سه‌خطی را در PR بگذار.',
          ],
          en: [
            'Complete the README with a screenshot, setup, and decisions.',
            'Run lint, typecheck, test, and build one final time.',
            'Deploy to Netlify or Vercel and set required environment variables.',
            'Test CSS, JavaScript, images, and forms in a private window.',
            'Put the live link, screenshot, and a three-line summary in the PR.',
          ],
        },
        example: {
          code: 'npm run check\nnpm run build\n# deploy dist/ or connect the repository to Netlify/Vercel',
          explanation: {
            fa: 'check همهٔ دروازه‌ها را اجرا می‌کند و build خروجی قابل‌انتشار می‌سازد.',
            en: 'check runs every gate and build produces the deployable output.',
          },
        },
        practice: {
          fa: 'پروژه را منتشر کن، در پنجرهٔ خصوصی بیازما و لینک زنده را در README و PR ثبت کن.',
          en: 'Deploy the project, test it in a private window, and record the live link in the README and PR.',
        },
        quiz: {
          question: {
            fa: 'پس از انتشار چه کاری لازم است؟',
            en: 'What is required after deployment?',
          },
          options: {
            fa: ['آزمایش مسیرهای اصلی در نسخهٔ زنده', 'حذف lockfile', 'خاموش‌کردن lint'],
            en: ['Test the main flows on the live version', 'Delete the lockfile', 'Disable lint'],
          },
          answer: 0,
          explanation: {
            fa: 'نسخهٔ زنده محیط متفاوتی دارد؛ آزمایش پس از انتشار مشکلات مسیر و متغیرها را پیدا می‌کند.',
            en: 'The live environment differs; post-deploy testing finds path and variable issues.',
          },
        },
      },
    ],
  },
];
