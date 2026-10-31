import { advancedWeeks } from './advanced-weeks.js';

const foundationWeeks = [
  {
    id: 'week-1',
    number: '01',
    title: { fa: 'ابزارهای کار یک برنامه‌نویس', en: 'A Developer’s Toolkit' },
    subtitle: {
      fa: 'ابزار را آماده کن، خطا را با شاهد پیدا کن و تاریخچهٔ کارت را حفظ کن.',
      en: 'Set up your tools, debug with evidence, and protect your work history.',
    },
    outcome: {
      fa: 'در پایان هفته، یک پروژهٔ قابل اجرا، lint‌شده و منتشرشده داری و می‌توانی نقش هر ابزار را توضیح بدهی.',
      en: 'Finish with a runnable, linted, deployed project and an explanation of what each tool does.',
    },
    lessons: [
      {
        id: 'w1-npm',
        day: '۱',
        title: { fa: 'npm و کارآگاه بسته‌ها', en: 'npm & Package Detective' },
        summary: {
          fa: 'یک مخزن واقعی را بررسی کن و پاسخ‌هایت را به فایل‌های همان مخزن پیوند بده.',
          en: 'Investigate a real repository and support your answers with its own files.',
        },
        duration: 50,
        goals: {
          fa: [
            'فرمان‌های پروژه را از package.json پیدا کن.',
            'بستهٔ زمان اجرا را از ابزار توسعه جدا کن.',
            'محدودهٔ نسخه، lockfile و نسخهٔ Node را توضیح بده.',
          ],
          en: [
            'Find project commands in package.json.',
            'Distinguish runtime packages from development tools.',
            'Explain version ranges, the lockfile, and expected Node version.',
          ],
        },
        terms: [
          [
            'npm',
            'مدیر بستهٔ Node.js؛ برای نصب ابزارها، نگهداری نسخه‌ها و اجرای فرمان‌های پروژه استفاده می‌شود.',
          ],
          ['Package (بسته)', 'کد یا ابزاری قابل استفادهٔ دوباره که از npm به پروژه اضافه می‌شود.'],
          ['dependencies', 'بسته‌هایی که برنامه برای کارکرد اصلی خود به آن‌ها نیاز دارد.'],
          [
            'devDependencies',
            'ابزارهایی برای ساخت، آزمایش و بررسی کد؛ معمولاً برای اجرای نهایی برنامه لازم نیستند.',
          ],
          [
            'package.json',
            'شناسنامهٔ پروژه؛ نام، بسته‌ها، محدودهٔ نسخه و فرمان‌های قابل اجرا را ثبت می‌کند.',
          ],
          [
            'Lockfile (فایل قفل)',
            'نسخهٔ دقیق بسته‌ها را ثبت می‌کند تا نصب پروژه برای همه یکسان باشد.',
          ],
          [
            'Version range (محدودهٔ نسخه)',
            'قاعده‌ای مانند ^ یا ~ که می‌گوید چه نسخه‌هایی برای پروژه قابل‌قبول‌اند.',
          ],
          ['engines / .nvmrc', 'تنظیم‌هایی که نسخهٔ Node مورد انتظار پروژه را مشخص می‌کنند.'],
        ],
        steps: {
          fa: [
            'در exercises/01-npm-practice اجرا کن: npm init؛ بعد یک بستهٔ زمان اجرا با npm install و یک ابزار توسعه با npm install -D نصب کن.',
            'سه فرمان npm برای پوشهٔ تمرین تعریف کن و هر سه را اجرا کن؛ مثلاً check، list و format.',
            'یک مخزن واقعی و متن‌باز فرانت‌اند در GitHub انتخاب کن. package.json، lockfile، engines و .nvmrc آن را بررسی کن.',
            'فرمان‌های اجرا، نوع وابستگی‌ها، محدوده‌های نسخه و Node مورد انتظار را بنویس و کنار هر پاسخ نام فایل شاهد را بیاور.',
            'با npm outdated و npm view <package> versions دو پاسخ را بررسی کن؛ خروجی فرمان‌ها و پاسخ نادرست احتمالی را توضیح بده.',
            '^ و ~ را با نمونهٔ واقعی مخزن توضیح بده؛ مثلاً ^5.2.1 ممکن است به 5.9.0 برسد اما 6.0.0 نه. کار lockfile را در یک جمله ساده بنویس.',
          ],
          en: [
            'In exercises/01-npm-practice run npm init; install one runtime package with npm install and one dev tool with npm install -D.',
            'Add three scripts to that practice package and run all three, for example check, list, and format.',
            'Choose a real open-source frontend repository on GitHub. Inspect its package.json, lockfile, engines, and .nvmrc.',
            'Write its commands, dependency types, version ranges, and expected Node version. Cite the filename for every answer.',
            'Use npm outdated and npm view <package> versions to check two answers. Include output and explain any incorrect guess.',
            'Explain ^ and ~ with a real repository example. Explain the lockfile in one beginner-friendly sentence.',
          ],
        },
        example: {
          code: 'npm init\nnpm install dayjs\nnpm install -D prettier',
          explanation: {
            fa: 'dayjs در dependencies قرار می‌گیرد؛ چون برنامه از آن استفاده می‌کند. prettier در devDependencies است؛ چون ابزار توسعه است.',
            en: 'dayjs belongs in dependencies because the app uses it. prettier belongs in devDependencies because it is a development tool.',
          },
        },
        practice: {
          fa: 'گزارش Package Detective را با پیوند مخزن، پاسخ مستند، دو فرمان بررسی و توضیح اشتباه‌های خودت کامل کن.',
          en: 'Complete the Package Detective report with the repository link, evidence-based answers, two verification commands, and any corrected mistakes.',
        },
        quiz: {
          question: {
            fa: 'کدام فایل نسخه‌های دقیق نصب‌شده را ثبت می‌کند؟',
            en: 'Which file records exact installed package versions?',
          },
          options: {
            fa: ['README.md', 'فایل قفل مثل package-lock.json', '.env'],
            en: ['README.md', 'A lockfile such as package-lock.json', '.env'],
          },
          answer: 1,
          explanation: {
            fa: 'فایل قفل نسخهٔ دقیق وابستگی‌ها را ذخیره می‌کند تا نصب‌ها تکرارپذیر باشند.',
            en: 'The lockfile stores exact dependency versions so installs are reproducible.',
          },
        },
      },
      {
        id: 'w1-project',
        day: '۲',
        title: { fa: 'ساخت پروژهٔ تازه با Vite', en: 'Set Up a Fresh Vite Project' },
        summary: {
          fa: 'یک طرح HTML را در پروژهٔ Vanilla قرار بده و ابزارهای CSS، lint و قالب‌بندی را وصل کن.',
          en: 'Move an HTML design into a vanilla project and configure CSS, linting, and formatting tools.',
        },
        duration: 60,
        goals: {
          fa: [
            'Vite Vanilla و افزونهٔ Vite برای Tailwind را راه‌اندازی کن.',
            'پنج script لازم را اضافه و اجرا کن.',
            'از رازها و فایل‌های تولیدشده محافظت کن.',
          ],
          en: [
            'Set up the Vite vanilla template and Tailwind Vite plugin.',
            'Add and run the five required scripts.',
            'Protect secrets and generated files.',
          ],
        },
        terms: [
          [
            'Vite',
            'ابزار فرانت‌اند که سرور توسعه اجرا و فایل‌های منبع را برای انتشار build می‌کند.',
          ],
          [
            'Vanilla JavaScript',
            'جاوااسکریپت بدون چارچوبی مثل React یا Vue؛ هرچند Vite هم‌چنان ابزار ساخت است.',
          ],
          [
            'Tailwind CSS',
            'چارچوب CSS که ظاهر را با کلاس‌های کمکی مانند p-4 و text-blue-700 در HTML می‌سازد.',
          ],
          [
            'Vite plugin (افزونه)',
            'کدی که قابلیتی مانند پردازش Tailwind را به روند ساخت Vite اضافه می‌کند.',
          ],
          ['ESLint', 'ابزار تحلیل ایستا برای یافتن خطاها و الگوهای پرخطر در کد JavaScript.'],
          ['Prettier', 'قالب‌بند خودکار که شکل و فاصله‌گذاری کد را یک‌دست می‌کند.'],
          [
            'Environment variable',
            'مقدار وابسته به محیط اجرا؛ متغیرهای VITE_ در کد مرورگر قرار می‌گیرند و راز نیستند.',
          ],
          ['.gitignore', 'فهرست فایل‌هایی مثل node_modules و .env که نباید به Git سپرده شوند.'],
        ],
        steps: {
          fa: [
            'در ریشه با npm create vite@latest my-site -- --template vanilla پروژه بساز و npm install را اجرا کن.',
            'Tailwind و افزونه را نصب کن: npm install tailwindcss @tailwindcss/vite؛ افزونه را در vite.config.js فعال کن.',
            'ESLint را با npm init @eslint/config@latest تنظیم کن؛ خروجی ESLint 10 و eslint.config.js را بررسی کن.',
            'Prettier، فایل .prettierrc و eslint-config-prettier را اضافه کن تا ESLint و Prettier با هم تداخل نکنند.',
            'در package.json پنج فرمان dev، build، preview، lint و format بساز و تک‌تک اجرا کن.',
            'طرح HTML خودت را وارد پروژه کن. .vscode/settings.json را برای format on save و lint هنگام تایپ تنظیم کن.',
            'VITE_APP_TITLE را از import.meta.env روی صفحه نشان بده و فقط نام آن را در .env.example ثبت کن.',
            'node_modules/، dist/ و .env را از Git بیرون بگذار؛ package-lock.json باید در Git بماند.',
            'exercises/01-npm-practice را به ignores در eslint.config.js اضافه کن. یک قاعدهٔ اضافه انتخاب کن و دلیلش را بنویس.',
            'آگاهانه مسیر import را خراب کن، npm run build و npm run preview را امتحان کن، سپس علت را رفع و مشاهدات را ثبت کن.',
          ],
          en: [
            'In the repository root run npm create vite@latest my-site -- --template vanilla, then npm install.',
            'Install Tailwind and its plugin with npm install tailwindcss @tailwindcss/vite and enable the plugin in vite.config.js.',
            'Configure ESLint with npm init @eslint/config@latest; confirm ESLint 10 and eslint.config.js.',
            'Add Prettier, .prettierrc, and eslint-config-prettier so ESLint and Prettier do not conflict.',
            'Add dev, build, preview, lint, and format scripts in package.json and run every script.',
            'Move your own HTML design into the project. Set format-on-save and lint-on-type in .vscode/settings.json.',
            'Show VITE_APP_TITLE using import.meta.env and commit its name in .env.example, not a local .env.',
            'Keep node_modules/, dist/, and .env out of Git; commit package-lock.json.',
            'Ignore exercises/01-npm-practice in eslint.config.js. Explain one extra ESLint rule you choose.',
            'Intentionally break an import, try npm run build and npm run preview, fix it, and record what you observed.',
          ],
        },
        example: {
          code: '<h1 class="text-3xl font-bold text-blue-700">سلام دنیا</h1>',
          explanation: {
            fa: 'این HTML ساده است و کلاس‌های Tailwind رنگ، اندازه و ضخامت متن را تعیین می‌کنند. VITE_ محرمانه نیست؛ build مرورگر آن را به کاربر می‌رساند.',
            en: 'This is plain HTML with Tailwind utility classes. VITE_ values are public because the browser build exposes them to users.',
          },
        },
        practice: {
          fa: 'یک طرح خودت را منتقل کن، فرمان‌های پنج‌گانه را اجرا کن و آزمایش شکستن build را در دفترچه بنویس.',
          en: 'Move your own design, run all five scripts, and record the intentional build-break experiment.',
        },
        quiz: {
          question: {
            fa: 'آیا می‌توان کلید مخفی API را در VITE_API_KEY گذاشت؟',
            en: 'Can you put a secret API key in VITE_API_KEY?',
          },
          options: {
            fa: [
              'بله؛ چون .env خصوصی است',
              'خیر؛ مقدار VITE_ در کد مرورگر افشا می‌شود',
              'بله؛ فقط در Preview دیده می‌شود',
            ],
            en: [
              'Yes, because .env is private',
              'No, VITE_ values are exposed in browser code',
              'Yes, only Preview can see it',
            ],
          },
          answer: 1,
          explanation: {
            fa: 'پیشوند VITE_ یعنی Vite مقدار را در بستهٔ سمت مرورگر قرار می‌دهد؛ پس راز نیست.',
            en: 'The VITE_ prefix tells Vite to expose the value in browser assets, so it is not secret.',
          },
        },
      },
      {
        id: 'w1-lint',
        day: '۳',
        title: { fa: 'تمرین lint: خطا را خاموش نکن', en: 'Lint Fix: Don’t Hide the Error' },
        summary: {
          fa: 'پیام کامل ESLint را بخوان و علت هر مشکل را اصلاح کن، نه اینکه قاعده را خاموش کنی.',
          en: 'Read ESLint diagnostics and fix each cause instead of disabling rules.',
        },
        duration: 45,
        goals: {
          fa: [
            'محل، قاعده و علت خطا را پیدا کن.',
            'ده خطای تمرین را اصلاح کن.',
            'برای هر قاعده یک جمله دربارهٔ محافظتی که فراهم می‌کند بنویس.',
          ],
          en: [
            'Find each diagnostic location, rule, and cause.',
            'Fix all ten exercise errors.',
            'Write one sentence about what each rule protects against.',
          ],
        },
        terms: [
          ['Lint', 'بررسی کد بدون اجرای کامل برنامه برای یافتن مشکل‌ها و الگوهای نامطمئن.'],
          ['Rule (قاعده)', 'شرطی در ESLint برای تشخیص الگوی مشخص، مانند متغیر استفاده‌نشده.'],
          ['Diagnostic', 'گزارش ابزار که نام فایل، شمارهٔ خط، قاعده و شرح مشکل را نشان می‌دهد.'],
          ['Root cause (علت ریشه‌ای)', 'دلیل اصلی خطا؛ اصلاح آن درست‌تر از پنهان‌کردن پیام است.'],
          [
            'Warning / error',
            'هشدار احتمال مشکل را نشان می‌دهد؛ خطا اجرای بررسی یا build را متوقف می‌کند.',
          ],
        ],
        steps: {
          fa: [
            'فایل تمرین داده‌شده از مربی را در src/ قرار بده و npm run lint را اجرا کن.',
            'تمام خروجی را بخوان. برای هر خطا فایل، شمارهٔ خط، قاعده و علت احتمالی را یادداشت کن.',
            'هر بار یک مشکل را از ریشه حل کن؛ پس از هر تغییر lint را دوباره اجرا کن.',
            'در exercises/03-lint-fix.md برای هر خطا یک خط بنویس: قاعده از چه اشتباهی جلوگیری می‌کند؟',
            'نتیجه باید صفر خطا و صفر هشدار باشد. eslint-disable ننویس و قاعده‌ای را حذف یا خاموش نکن.',
          ],
          en: [
            'Place the mentor-provided exercise file in src/ and run npm run lint.',
            'Read all output. Record the file, line, rule, and likely cause for every error.',
            'Fix one root cause at a time; rerun lint after each change.',
            'In exercises/03-lint-fix.md, write one line per error explaining what the rule protects against.',
            'Finish with zero errors and zero warnings. Do not add eslint-disable or turn off any rule.',
          ],
        },
        example: {
          code: 'npm run lint\n# read the file, line, and rule before editing',
          explanation: {
            fa: 'قاعدهٔ no-unused-vars از باقی‌ماندن متغیر اشتباه، منطق فراموش‌شده یا کد مرده در پروژه جلوگیری می‌کند.',
            en: 'The no-unused-vars rule helps catch misspellings, forgotten logic, and dead code.',
          },
        },
        practice: {
          fa: 'ده خطای فایل تمرینی را برطرف کن و کنار هر قاعده بنویس چه اشتباهی را پیش از اجرا آشکار می‌کند.',
          en: 'Fix the ten exercise errors and note what mistake each rule can catch before runtime.',
        },
        quiz: {
          question: {
            fa: 'بهترین کار هنگام دریافت خطای ESLint چیست؟',
            en: 'What should you do when ESLint reports an error?',
          },
          options: {
            fa: ['افزودن eslint-disable', 'خواندن پیام و رفع علت کد', 'حذف قاعده'],
            en: [
              'Add eslint-disable',
              'Read the message and fix the code cause',
              'Remove the rule',
            ],
          },
          answer: 1,
          explanation: {
            fa: 'پیام lint را بررسی کن و علت را رفع کن؛ خاموش‌کردن قاعده فقط نشانه را پنهان می‌کند.',
            en: 'Fix the cause; disabling a rule only hides the symptom.',
          },
        },
      },
      {
        id: 'w1-debug',
        day: '۴',
        title: { fa: 'شکار باگ با DevTools', en: 'DevTools Bug Hunt' },
        summary: {
          fa: 'با breakpoint مقدار واقعی را ببین و Broken Build را با خواندن کل خطا تعمیر کن.',
          en: 'Inspect real values with breakpoints and repair Broken Build after reading the full error.',
        },
        duration: 55,
        goals: {
          fa: [
            'پنج باگ را با breakpoint بررسی کن.',
            'حدس، تغییر و نتیجه را ثبت کن.',
            'فرمان‌های install، dev، lint و build را سالم اجرا کن.',
          ],
          en: [
            'Investigate five bugs with breakpoints.',
            'Record guess, change, and result.',
            'Get install, dev, lint, and build working.',
          ],
        },
        terms: [
          ['DevTools', 'ابزارهای توسعهٔ مرورگر برای دیدن DOM، شبکه، خطاها و اجرای JavaScript.'],
          [
            'Breakpoint (نقطهٔ توقف)',
            'نشانگری که اجرای کد را روی خطی مشخص نگه می‌دارد تا مقدارها را بررسی کنی.',
          ],
          ['Call stack', 'فهرست تابع‌هایی که پیش از رسیدن برنامه به خط فعلی فراخوانی شده‌اند.'],
          [
            'Hypothesis (فرضیه)',
            'حدس موقت و قابل‌آزمایش دربارهٔ علت باگ که باید با شواهد بررسی شود.',
          ],
          [
            'Broken Build',
            'مخزن تمرینی عمداً خراب‌شده که باید build و بررسی‌هایش را بدون خاموش‌کردن قواعد تعمیر کنی.',
          ],
        ],
        steps: {
          fa: [
            'کل پیام خطا و stack trace را بخوان؛ فایل و خط رخداد را پیش از تغییر مشخص کن.',
            'در Chrome DevTools > Sources روی خط مشکوک breakpoint بگذار و با همان ورودی باگ را بازتولید کن.',
            'با Step over و Step into مقدار متغیر و call stack را ببین؛ فقط به console.log اکتفا نکن.',
            'برای هرکدام از پنج باگ بنویس: حدس من، چیزی که تغییر دادم، نتیجهٔ آزمایش.',
            'در Broken Build بدون --force، --legacy-peer-deps، حذف lockfile یا خاموش‌کردن قواعد، npm install، npm run dev، npm run lint و npm run build را سالم کن.',
            'پیوند fork تعمیرشده را در exercises/04-debugging-journal.md بگذار و برای هر علت یک commit جدا بساز.',
          ],
          en: [
            'Read the full error and stack trace. Identify the file and failing line before editing.',
            'Set a breakpoint in Chrome DevTools > Sources and reproduce the bug with the same input.',
            'Use Step over and Step into to inspect values and the call stack; do not rely only on console.log.',
            'For each of five bugs, record your guess, change, and result.',
            'Fix Broken Build so npm install, npm run dev, npm run lint, and npm run build work—without force flags, deleting the lockfile, or disabling rules.',
            'Link your fixed fork in exercises/04-debugging-journal.md and make one cause-focused commit per fix.',
          ],
        },
        example: {
          code: 'const total = price * quantity;\n// pause here: are these values numbers or input strings?',
          explanation: {
            fa: 'breakpoint کمک می‌کند مقدارهای واقعی را هنگام اجرای مشکل ببینی؛ پیش از تغییر کد، حدست را با شواهد بسنج.',
            en: 'A breakpoint reveals real runtime values. Check your hypothesis against evidence before editing.',
          },
        },
        practice: {
          fa: 'یک ورودی ناموفق را با breakpoint بازتولید کن و در exercises/04-debugging-journal.md نتیجهٔ پنج باگ و پیوند مخزن را ثبت کن.',
          en: 'Reproduce one failure with a breakpoint and record all five findings and the repository link in the debugging journal.',
        },
        quiz: {
          question: {
            fa: 'برای دیدن مقدار متغیر در لحظهٔ وقوع باگ از چه چیزی استفاده می‌کنی؟',
            en: 'What helps inspect a variable at the moment a bug occurs?',
          },
          options: {
            fa: ['Breakpoint در DevTools', 'حذف package-lock.json', 'پنهان‌کردن پیام خطا'],
            en: ['A DevTools breakpoint', 'Delete package-lock.json', 'Hide the error message'],
          },
          answer: 0,
          explanation: {
            fa: 'breakpoint اجرای برنامه را نگه می‌دارد تا وضعیت همان لحظه را ببینی.',
            en: 'A breakpoint pauses execution so you can inspect the current state.',
          },
        },
      },
      {
        id: 'w1-git',
        day: '۵',
        title: { fa: 'Git، بازیابی و استقرار', en: 'Git Practice & Deployment' },
        summary: {
          fa: 'برای تغییر محلی، تاریخچهٔ push‌شده و کار گمشده ابزار مناسب را انتخاب کن.',
          en: 'Choose the right tool for local edits, pushed history, and lost work.',
        },
        duration: 60,
        goals: {
          fa: [
            'پنج مسئلهٔ Git را با فرمان درست حل کن.',
            'دلیل انتخاب هر فرمان را با ابزار مشابه مقایسه کن.',
            'وب‌سایت را منتشر و پیوند زنده را بررسی کن.',
          ],
          en: [
            'Solve five Git problems with the right command.',
            'Explain each choice against a similar tool.',
            'Deploy the website and verify the live link.',
          ],
        },
        terms: [
          ['Git', 'سامانهٔ کنترل نسخه برای ثبت، مقایسه و بازیابی تغییرهای فایل در طول زمان.'],
          ['Staging area', 'مرحلهٔ میانی که تعیین می‌کند کدام تغییرها وارد commit بعدی شوند.'],
          ['Commit', 'ثبت‌نام‌گذاری‌شده و قابل‌ردیابی از مجموعه‌ای تغییر در Git.'],
          [
            'Revert',
            'commit تازه‌ای می‌سازد که اثر commit قبلی را خنثی می‌کند، بی‌آنکه تاریخچهٔ مشترک را بازنویسی کند.',
          ],
          ['Stash', 'تغییرهای commit‌نشده را موقتاً کنار می‌گذارد تا بعداً بازیابی شوند.'],
          ['Reflog', 'ثبت محلی جابه‌جایی اشاره‌گرهای Git برای پیدا کردن commit یا شاخهٔ گمشده.'],
          ['Deployment (استقرار)', 'قرار دادن خروجی سایت روی میزبانی تا با یک URL در دسترس باشد.'],
        ],
        steps: {
          fa: [
            'مقدار تمرین Learn Git Branching را کامل کن: Introduction Sequence و سطح‌های Push & Pull؛ تصویر نتیجه را نگه دار.',
            'فایل را از staging بیرون بیاور: git restore --staged <file>؛ تغییر فایل پاک نمی‌شود.',
            'پیام commit محلی را با git commit --amend -m "message" اصلاح کن؛ amend را برای تاریخچهٔ push‌شده استفاده نکن.',
            'commit منتشرشده را با git revert <commit> برگردان؛ reset تاریخچهٔ مشترک را بازنویسی می‌کند.',
            'کار نیمه‌تمام را با git stash push -m "unfinished work" کنار بگذار و بعد با git stash pop بازیابی کن.',
            'با git reflog commit گمشده را پیدا کن و شاخه را با git switch -c recovered <commit> بازیابی کن.',
            'فرمان دقیق و دلیل انتخاب ابزار را در exercises/05-git-practice.md برای هر پنج مسئله ثبت کن.',
            'از شاخهٔ خودت روی Netlify یا Vercel منتشر کن و در پنجرهٔ خصوصی CSS، JavaScript و تصویرها را بررسی کن.',
          ],
          en: [
            'Complete Learn Git Branching: Introduction Sequence and Push & Pull; save a screenshot.',
            'Unstage a file with git restore --staged <file>; this keeps working-tree changes.',
            'Fix a local commit message with git commit --amend -m "message"; do not amend published history.',
            'Undo a pushed commit with git revert <commit>; reset rewrites shared history.',
            'Shelve unfinished work with git stash push -m "unfinished work" and restore with git stash pop.',
            'Find a lost commit using git reflog and recover the branch with git switch -c recovered <commit>.',
            'Record the exact command and why you chose it for all five problems in exercises/05-git-practice.md.',
            'Deploy your branch to Netlify or Vercel; verify CSS, JavaScript, and images in a private window.',
          ],
        },
        example: {
          code: 'git status\ngit restore --staged src/app.js\ngit revert <pushed-commit>',
          explanation: {
            fa: 'restore --staged فایل را از staging بیرون می‌آورد و تغییر را نگه می‌دارد؛ revert برای اصلاح تاریخچهٔ منتشرشده است.',
            en: 'restore --staged unstages without discarding edits; revert is for reversing published history.',
          },
        },
        practice: {
          fa: 'هر پنج مسئله را حل کن، فرمان و دلیل انتخاب را در دفترچه بنویس و پیوند سایت زنده را تحویل بده.',
          en: 'Solve all five problems, document commands and reasoning, and submit your live site URL.',
        },
        quiz: {
          question: {
            fa: 'برای لغو commit که قبلاً push شده کدام بهتر است؟',
            en: 'What is safer for undoing a commit that has already been pushed?',
          },
          options: {
            fa: ['git reset --hard', 'git revert', 'پاک‌کردن .git'],
            en: ['git reset --hard', 'git revert', 'Delete .git'],
          },
          answer: 1,
          explanation: {
            fa: 'revert commit تازه‌ای می‌سازد و تاریخچهٔ مشترک را بازنویسی نمی‌کند.',
            en: 'Revert adds a new commit without rewriting shared history.',
          },
        },
      },
      {
        id: 'w1-ai',
        day: '۶',
        title: { fa: 'آزمایشگاه AI: گفت‌وگو در برابر harness', en: 'AI Lab: Chat vs. Harness' },
        summary: {
          fa: 'همان کد را با گفت‌وگو و opencode در Plan mode بررسی و یافته‌ها را با شواهد مقایسه کن.',
          en: 'Review the same code in chat and opencode Plan mode, then compare findings with evidence.',
        },
        duration: 45,
        goals: {
          fa: [
            'بفهم هر ابزار به چه فایل‌هایی دسترسی دارد.',
            'ابزار، چرخه و مجوزهای harness را نام ببر.',
            'اشتباه مدل را با کد و lint بررسی کن.',
          ],
          en: [
            'Track which files each tool can see.',
            'Name the harness tools, loop, and permissions.',
            'Verify model mistakes against code and lint.',
          ],
        },
        terms: [
          [
            'Model (مدل)',
            'سامانه‌ای که بر پایهٔ ورودی پاسخ محتمل تولید می‌کند؛ ممکن است مطمئن اما اشتباه باشد.',
          ],
          [
            'Harness',
            'لایهٔ پیرامون مدل که ابزار، چرخهٔ «اقدام، بررسی، تلاش دوباره» و مجوزها را فراهم می‌کند.',
          ],
          [
            'Context (زمینه)',
            'اطلاعاتی که هنگام پاسخ در دسترس مدل است؛ گفت‌وگو فقط متن فرستاده‌شده را می‌بیند.',
          ],
          ['Plan mode', 'حالت بررسی و پیشنهاد که پیش از اعمال تغییر، طرح ارائه می‌دهد.'],
          ['Permission (مجوز)', 'اجازهٔ روشن کاربر برای عملی مانند اجرای فرمان یا ویرایش فایل.'],
          [
            'Hallucination (توهم مدل)',
            'پاسخ نادرست یا بی‌پشتوانه‌ای که مدل مانند واقعیت ارائه می‌کند.',
          ],
        ],
        steps: {
          fa: [
            'فایل‌های اصلی و بدون راز پروژه را در یکی از ChatGPT، Gemini یا Claude بچسبان و درخواست بازبینی کن.',
            'opencode را نصب، به مدل رایگان وصل و در همان مخزن در Plan mode باز کن؛ همان کد را بازبینی بخواه.',
            'در ai-log.md بنویس هر ابزار چه چیزی را می‌توانست ببیند و نام ابزار و مدل چه بود.',
            'سه نکتهٔ مشترک، یک نکتهٔ فقط opencode و یک اشتباه یکی از دو ابزار را همراه شاهد ثبت کن.',
            'در توضیح harness، ابزارها، چرخه و مجوزها را با بیان خودت شرح بده.',
            'Advanced: از opencode بخواه npm run lint را اجرا و خروجی را توضیح دهد؛ فقط بعد از درخواست مجوز، اجازه بده و این را یادداشت کن.',
            'هیچ‌وقت .env، رمز، راز یا دادهٔ شخصی را به مدل رایگان نده. این دوره در نقش reviewer است: AI نباید کد پروژه را بنویسد یا ویرایش کند.',
          ],
          en: [
            'Paste non-secret main project files into ChatGPT, Gemini, or Claude and ask for a review.',
            'Install opencode, connect a free model, open the same repository in Plan mode, and request a review of the same code.',
            'In ai-log.md record what each tool could see and the tool and model used.',
            'Record three shared findings, one opencode-only finding, and one mistake with supporting evidence.',
            'Explain the harness in your own words: tools, loop, and permissions.',
            'Advanced: ask opencode to run npm run lint and explain the output; allow it only after it asks permission and record that.',
            'Never send .env, credentials, secrets, or personal data to a free model. AI is a reviewer in this course and must not write or edit project code.',
          ],
        },
        example: {
          code: 'مدل: یک فرضیه می‌دهد.\nHarness: فایل می‌خواند → lint اجرا می‌کند → خروجی را بررسی می‌کند.\nانسان: شواهد را می‌سنجد و مجوز می‌دهد.',
          explanation: {
            fa: 'harness توانایی استفاده از ابزار را اضافه می‌کند، نه تضمین درستی پاسخ را؛ نتیجه را همیشه خودت بررسی کن.',
            en: 'A harness adds tools, not guaranteed correctness. Always verify its results yourself.',
          },
        },
        practice: {
          fa: 'ai-log.md را با موارد خواسته‌شده بنویس؛ پاسخ‌های ابزار را با مخزن و خروجی واقعی lint مقایسه کن.',
          en: 'Write ai-log.md with every requested comparison and verify tool claims against the repository and lint output.',
        },
        quiz: {
          question: {
            fa: 'harness چه چیزی به مدل اضافه می‌کند؟',
            en: 'What does a harness add to a model?',
          },
          options: {
            fa: ['ابزار، چرخه و مجوز', 'تضمین پاسخ درست', 'دسترسی نامحدود به رازها'],
            en: [
              'Tools, a loop, and permissions',
              'Guaranteed correct answers',
              'Unrestricted access to secrets',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'harness ابزار، چرخهٔ اجرا و کنترل مجوز فراهم می‌کند؛ تضمین درستی نیست.',
            en: 'A harness provides tools, an execution loop, and permission controls, not guaranteed correctness.',
          },
        },
      },
    ],
  },
  {
    id: 'week-2',
    number: '02',
    title: {
      fa: 'ساخت وب‌سایت با HTML، Tailwind و JavaScript',
      en: 'Build a Website with HTML, Tailwind, and JavaScript',
    },
    subtitle: {
      fa: 'یک صفحهٔ دسترس‌پذیر و واکنش‌گرا را از ساختار تا تعامل بساز و آزمایش کن.',
      en: 'Build and test an accessible, responsive page from structure to interaction.',
    },
    outcome: {
      fa: 'در پایان هفته یک وب‌سایت کوچک با HTML معنایی، ظاهر واکنش‌گرا و رفتار JavaScript داری.',
      en: 'Finish with a small website using semantic HTML, responsive styling, and JavaScript interactions.',
    },
    lessons: [
      {
        id: 'w2-html',
        day: '۱',
        title: { fa: 'HTML معنایی و اسکلت صفحه', en: 'Semantic HTML & Page Structure' },
        summary: {
          fa: 'محتوا را با عنصرهای درست سازمان بده و از صفحه‌کلید آن را بررسی کن.',
          en: 'Structure content with appropriate elements and test it using a keyboard.',
        },
        duration: 50,
        goals: {
          fa: [
            'ساختار پایهٔ سند HTML را بساز.',
            'از header، nav، main و section به‌جا استفاده کن.',
            'ترتیب عنوان و تمرکز صفحه‌کلید را بررسی کن.',
          ],
          en: [
            'Create a valid HTML document.',
            'Use header, nav, main, and section appropriately.',
            'Check heading order and keyboard focus.',
          ],
        },
        terms: [
          ['HTML', 'زبان نشانه‌گذاری برای ساختار و معنای محتوای وب؛ زبان برنامه‌نویسی نیست.'],
          [
            'Semantic HTML',
            'انتخاب عنصر بر اساس نقش محتوا، مانند nav برای پیمایش و main برای محتوای اصلی.',
          ],
          ['DOM', 'نمای درختی سند که مرورگر می‌سازد و JavaScript می‌تواند بخواند یا تغییر دهد.'],
          [
            'Accessibility',
            'ساختی که افراد با توانایی‌ها و ابزارهای گوناگون بتوانند از صفحه استفاده کنند.',
          ],
        ],
        steps: {
          fa: [
            'سند را با doctype، html، head و body بساز.',
            'header، nav، main، section و footer را بر اساس نقش محتوا انتخاب کن.',
            'عنوان‌ها را منطقی از h1 به h2 و سپس h3 مرتب کن.',
            'برای جابه‌جایی از a و برای اقدام از button استفاده کن.',
            'با Tab صفحه را بگرد؛ ترتیب فوکوس و دیده‌شدن نشانگر را بررسی کن.',
          ],
          en: [
            'Create the document with doctype, html, head, and body.',
            'Choose header, nav, main, section, and footer based on content roles.',
            'Order headings from h1 to h2 and then h3.',
            'Use a for navigation and button for actions.',
            'Navigate with Tab and check focus order and visibility.',
          ],
        },
        example: {
          code: '<header><nav aria-label="اصلی">...</nav></header>\n<main><section><h1>عنوان صفحه</h1></section></main>\n<footer>...</footer>',
          explanation: {
            fa: 'عنصر معنایی ساختار را برای مرورگر و فناوری‌های کمکی روشن می‌کند.',
            en: 'Semantic elements clarify structure for browsers and assistive technology.',
          },
        },
        practice: {
          fa: 'اسکلت یک صفحهٔ دوره با سربرگ، منو، معرفی، فهرست درس‌ها و پابرگ بساز.',
          en: 'Build the skeleton of a course page with a header, navigation, introduction, lesson list, and footer.',
        },
        quiz: {
          question: {
            fa: 'کدام عنصر محتوای اصلی صفحه را مشخص می‌کند؟',
            en: 'Which element identifies the main page content?',
          },
          options: { fa: ['main', 'span', 'b'], en: ['main', 'span', 'b'] },
          answer: 0,
          explanation: {
            fa: 'main بخش محتوای اصلی صفحه را مشخص می‌کند.',
            en: 'main identifies the primary page content.',
          },
        },
      },
      {
        id: 'w2-tailwind',
        day: '۲',
        title: { fa: 'Tailwind و طراحی واکنش‌گرا', en: 'Tailwind & Responsive Design' },
        summary: {
          fa: 'چیدمان را اول برای موبایل بساز و سپس با breakpointها گسترش بده.',
          en: 'Start with mobile layout, then expand it with breakpoints.',
        },
        duration: 55,
        goals: {
          fa: [
            'کلاس‌های فاصله، رنگ و تایپوگرافی را ترکیب کن.',
            'چیدمان چندستونی واکنش‌گرا بساز.',
            'خوانایی و سرریز صفحه را بررسی کن.',
          ],
          en: [
            'Combine spacing, color, and typography utilities.',
            'Build a responsive multi-column layout.',
            'Check readability and overflow.',
          ],
        },
        terms: [
          ['Utility class', 'کلاس کوچکی که یک ویژگی CSS مانند فاصله یا رنگ اعمال می‌کند.'],
          ['Responsive design', 'چیدمانی که با فضای موجود در موبایل، تبلت و دسکتاپ سازگار می‌شود.'],
          ['Breakpoint', 'آستانهٔ عرضی که پس از آن یک سبک یا چیدمان دیگر فعال می‌شود.'],
          ['Mobile-first', 'روش ساخت که ابتدا صفحهٔ کوچک را هدف می‌گیرد و سپس بزرگ‌تر می‌شود.'],
          ['Contrast', 'تفاوت روشنایی متن و پس‌زمینه که خوانایی را بهتر می‌کند.'],
        ],
        steps: {
          fa: [
            'از چیدمان سادهٔ موبایل مثل grid-cols-1 آغاز کن.',
            'برای نمایشگر بزرگ md:grid-cols-2 و lg:grid-cols-3 اضافه کن.',
            'با max-w، mx-auto و px حاشیه و عرض خوانا بساز.',
            'پنجره را در DevTools باریک و پهن کن؛ سرریز را رفع کن.',
            'کنتراست متن، اندازهٔ قلم و فاصلهٔ دکمه‌ها را بررسی کن.',
          ],
          en: [
            'Start with a simple mobile layout such as grid-cols-1.',
            'Add md:grid-cols-2 and lg:grid-cols-3 for larger displays.',
            'Use max-w, mx-auto, and px for a readable content width.',
            'Resize the viewport in DevTools and fix overflow.',
            'Check contrast, font size, and button spacing.',
          ],
        },
        example: {
          code: '<main class="mx-auto max-w-6xl px-4 py-10">\n  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">...</div>\n</main>',
          explanation: {
            fa: 'یک ستون در موبایل، دو ستون در md و سه ستون در lg ساخته می‌شود.',
            en: 'This creates one mobile column, two at md, and three at lg.',
          },
        },
        practice: {
          fa: 'یک بخش معرفی و سه کارت دوره بساز؛ نمایش موبایل و دسکتاپ را با DevTools بررسی کن.',
          en: 'Build an intro section and three course cards; inspect mobile and desktop layouts in DevTools.',
        },
        quiz: {
          question: {
            fa: 'در روش mobile-first کدام چیدمان را اول می‌سازی؟',
            en: 'In mobile-first design, which layout do you build first?',
          },
          options: { fa: ['موبایل', 'دسکتاپ', 'چاپ'], en: ['Mobile', 'Desktop', 'Print'] },
          answer: 0,
          explanation: {
            fa: 'سبک پایه برای صفحهٔ کوچک نوشته می‌شود؛ breakpointها آن را گسترش می‌دهند.',
            en: 'Base styles target small screens; breakpoints expand the layout.',
          },
        },
      },
      {
        id: 'w2-js',
        day: '۳',
        title: {
          fa: 'داده، متغیر و تابع در JavaScript',
          en: 'JavaScript Data, Variables & Functions',
        },
        summary: {
          fa: 'اطلاعات صفحه را مدل کن و با تابع‌های کوچک دوباره استفاده کن.',
          en: 'Model page data and reuse logic with small functions.',
        },
        duration: 55,
        goals: {
          fa: [
            'const و let را به‌درستی به‌کار ببر.',
            'آرایه و شیء را برای دادهٔ درس بساز.',
            'تابعی بنویس که نتیجه برگرداند.',
          ],
          en: [
            'Use const and let appropriately.',
            'Model lessons with arrays and objects.',
            'Write a function that returns a result.',
          ],
        },
        terms: [
          [
            'Variable',
            'نامی برای دسترسی به مقدار؛ const پیوند را ثابت و let آن را قابل‌تغییر می‌کند.',
          ],
          ['Data type', 'دستهٔ مقدار مانند رشته، عدد، Boolean، آرایه یا شیء.'],
          ['Function', 'بخش نام‌گذاری‌شده و دوباره‌استفاده‌شدنی از دستورها.'],
          ['Array', 'فهرست مرتب مقدارها که اندیس نخستین عضو آن صفر است.'],
          ['Object', 'مجموعهٔ کلید و مقدار برای توصیف یک چیز مانند درس.'],
          ['Return value', 'نتیجه‌ای که تابع با return به فراخواننده برمی‌گرداند.'],
        ],
        steps: {
          fa: [
            'یک درس را به‌صورت شیء با title و duration تعریف کن.',
            'چند درس را در آرایه قرار بده.',
            'تابعی بنویس که مجموع زمان درس‌ها را برگرداند.',
            'فایل JavaScript را با type="module" وارد HTML کن.',
            'خروجی و خطاها را در کنسول مرورگر بررسی کن.',
          ],
          en: [
            'Represent a lesson as an object with title and duration.',
            'Place several lessons in an array.',
            'Write a function that returns their total duration.',
            'Load the JavaScript file with type="module".',
            'Inspect output and errors in the browser console.',
          ],
        },
        example: {
          code: 'const lessons = [{ title: "HTML", duration: 50 }];\nconst total = lessons.reduce((sum, lesson) => sum + lesson.duration, 0);',
          explanation: {
            fa: 'هر شیء یک درس است و reduce زمان همهٔ درس‌ها را جمع می‌کند.',
            en: 'Each object represents a lesson; reduce adds all lesson durations.',
          },
        },
        practice: {
          fa: 'برای شش درس آرایه بساز و مجموع دقیقه‌ها را در صفحه نشان بده.',
          en: 'Create an array for six lessons and display their total minutes.',
        },
        quiz: {
          question: {
            fa: 'اندیس اولین عضو آرایه در JavaScript چیست؟',
            en: 'What is the index of the first JavaScript array item?',
          },
          options: { fa: ['۰', '۱', '-۱'], en: ['0', '1', '-1'] },
          answer: 0,
          explanation: {
            fa: 'اندیس آرایه در JavaScript از صفر آغاز می‌شود.',
            en: 'JavaScript array indexes begin at zero.',
          },
        },
      },
      {
        id: 'w2-dom',
        day: '۴',
        title: { fa: 'DOM، رویداد و فرم تعاملی', en: 'The DOM, Events & Interactive Forms' },
        summary: {
          fa: 'به صفحه رفتار بده و ورودی کاربر را به‌صورت امن نمایش بده.',
          en: 'Add behavior to the page and display user input safely.',
        },
        duration: 55,
        goals: {
          fa: [
            'عنصرها را با querySelector پیدا کن.',
            'رویداد فرم و کلیک را مدیریت کن.',
            'ورودی را امن و متنی نمایش بده.',
          ],
          en: [
            'Select elements with querySelector.',
            'Handle form and click events.',
            'Display input safely as text.',
          ],
        },
        terms: [
          ['DOM selection', 'پیداکردن عنصر صفحه با شناسه، کلاس یا selector.'],
          ['Event', 'اتفاقی مانند کلیک یا ارسال فرم که مرورگر به کد اطلاع می‌دهد.'],
          ['Event listener', 'تابعی که هنگام وقوع رویداد مشخص اجرا می‌شود.'],
          ['textContent', 'محتوا را به‌صورت متن ساده قرار می‌دهد و آن را HTML تفسیر نمی‌کند.'],
          ['innerHTML', 'رشته را HTML تفسیر می‌کند؛ دادهٔ کنترل‌نشدهٔ کاربر را در آن قرار نده.'],
        ],
        steps: {
          fa: [
            'یک فرم با label، ورودی و دکمهٔ submit بساز.',
            'با querySelector فرم را پیدا کن و addEventListener ثبت کن.',
            'در صورت نیاز event.preventDefault() را اجرا کن.',
            'ورودی را trim و خالی‌نبودنش را بررسی کن.',
            'با createElement و textContent نتیجه را بساز، نه innerHTML.',
          ],
          en: [
            'Create a form with a label, input, and submit button.',
            'Select the form and register addEventListener.',
            'Call event.preventDefault() when appropriate.',
            'Trim and validate that the input is not empty.',
            'Build results with createElement and textContent, not innerHTML.',
          ],
        },
        example: {
          code: 'form.addEventListener("submit", (event) => {\n  event.preventDefault();\n  message.textContent = input.value.trim();\n});',
          explanation: {
            fa: 'textContent متن را ساده نمایش می‌دهد و آن را به HTML اجرایی تبدیل نمی‌کند.',
            en: 'textContent displays plain text rather than parsing it as HTML.',
          },
        },
        practice: {
          fa: 'فرم یادداشت درس بساز؛ عنوان معتبر را به فهرست بیفزا و ورودی خالی را با پیام رد کن.',
          en: 'Build a lesson-note form, add valid titles to a list, and show a message for empty input.',
        },
        quiz: {
          question: {
            fa: 'برای نشان‌دادن متن ورودی کاربر کدام امن‌تر است؟',
            en: 'Which is safer for displaying user input as text?',
          },
          options: {
            fa: ['textContent', 'innerHTML', 'eval'],
            en: ['textContent', 'innerHTML', 'eval'],
          },
          answer: 0,
          explanation: {
            fa: 'textContent داده را به‌صورت متن ساده نمایش می‌دهد.',
            en: 'textContent displays the value as plain text.',
          },
        },
      },
      {
        id: 'w2-storage',
        day: '۵',
        title: { fa: 'اعتبارسنجی و ذخیرهٔ پیشرفت', en: 'Validation & Persistent Progress' },
        summary: {
          fa: 'ورودی نامعتبر را مدیریت و وضعیت را پس از تازه‌سازی نگه‌داری کن.',
          en: 'Handle invalid input and preserve state across a page refresh.',
        },
        duration: 55,
        goals: {
          fa: [
            'ورودی را قبل از استفاده اعتبارسنجی کن.',
            'آرایه را با JSON ذخیره و بازیابی کن.',
            'حالت خالی و خطا را روشن نمایش بده.',
          ],
          en: [
            'Validate input before use.',
            'Save and restore arrays with JSON.',
            'Clearly show empty and error states.',
          ],
        },
        terms: [
          ['Validation', 'بررسی می‌کند ورودی پیش از پردازش با قواعد موردنیاز سازگار است یا نه.'],
          ['State', 'دادهٔ فعلی برنامه که بر نمایش و رفتار بعدی اثر می‌گذارد.'],
          ['Persistence', 'نگه‌داشتن داده پس از تازه‌سازی یا بستن صفحه.'],
          [
            'localStorage',
            'ذخیره‌ساز مرورگر برای رشته‌ها؛ محدود به همان مرورگر و نامناسب برای رازها.',
          ],
          ['JSON', 'قالب متنی دادهٔ ساخت‌یافته؛ stringify می‌سازد و parse می‌خواند.'],
          ['Empty state', 'نمایش راهنما وقتی هنوز داده‌ای وجود ندارد.'],
        ],
        steps: {
          fa: [
            'قواعد ورودی را روشن کن؛ مثلاً عنوان خالی نباشد و حداکثر ۶۰ نویسه باشد.',
            'ورودی را trim و اعتبارسنجی کن و خطا را کنار فرم نمایش بده.',
            'داده را با JSON.stringify و localStorage.setItem ذخیره کن.',
            'داده را با JSON.parse بخوان و نبودن یا خرابی آن را مدیریت کن.',
            'حذف و تکمیل مورد را آزمایش کن؛ صفحه را تازه‌سازی کن و نتیجه را ببین.',
          ],
          en: [
            'Define rules, such as a non-empty title up to 60 characters.',
            'Trim and validate input; show errors beside the form.',
            'Save data with JSON.stringify and localStorage.setItem.',
            'Read with JSON.parse and handle missing or malformed data.',
            'Test delete and completion, then refresh and verify persistence.',
          ],
        },
        example: {
          code: 'localStorage.setItem("notes", JSON.stringify(notes));\nconst saved = JSON.parse(localStorage.getItem("notes") || "[]");',
          explanation: {
            fa: 'localStorage رشته ذخیره می‌کند؛ دادهٔ حساس را در آن نگه ندار.',
            en: 'localStorage stores strings; never put sensitive data there.',
          },
        },
        practice: {
          fa: 'فهرست یادداشت‌ها را قابل حذف و ماندگار کن و حالت خالی، خطا و موفقیت را جدا نشان بده.',
          en: 'Make notes removable and persistent; distinguish empty, error, and success states.',
        },
        quiz: {
          question: {
            fa: 'localStorage چه چیزی را مستقیم ذخیره می‌کند؟',
            en: 'What does localStorage store directly?',
          },
          options: {
            fa: ['رشته', 'تابع', 'عنصر DOM'],
            en: ['A string', 'A function', 'A DOM element'],
          },
          answer: 0,
          explanation: {
            fa: 'برای ذخیرهٔ آرایه، اول آن را با JSON.stringify به رشته تبدیل می‌کنیم.',
            en: 'Serialize arrays to strings with JSON.stringify before saving.',
          },
        },
      },
      {
        id: 'w2-project',
        day: '۶',
        title: { fa: 'پروژهٔ نهایی، آزمون و انتشار', en: 'Final Project, Testing & Deployment' },
        summary: {
          fa: 'مهارت‌ها را در یک پروژه جمع کن، خروجی نهایی را بررسی و منتشر کن.',
          en: 'Combine your skills, inspect the production build, and deploy.',
        },
        duration: 65,
        goals: {
          fa: [
            'سه فناوری را در یک محصول کوچک ترکیب کن.',
            'سناریوهای عادی و مرزی را آزمایش کن.',
            'نسخهٔ نهایی را lint، build و deploy کن.',
          ],
          en: [
            'Combine all three technologies in a small product.',
            'Test normal and edge-case scenarios.',
            'Lint, build, and deploy the final version.',
          ],
        },
        terms: [
          ['Integration', 'ترکیب بخش‌های جدا و بررسی اینکه با هم درست کار می‌کنند.'],
          ['Test case', 'ورودی و نتیجهٔ موردانتظار برای آزمودن یک رفتار.'],
          ['Regression', 'رفتاری که قبلاً درست بود و پس از تغییر تازه خراب شده است.'],
          ['Production build', 'خروجی بهینه‌شدهٔ آمادهٔ انتشار که با npm run build ساخته می‌شود.'],
          ['Smoke test', 'بررسی سریع مسیرهای اصلی برای اطمینان از اینکه محصول بالا می‌آید.'],
          ['Deployment check', 'آزمایش نسخهٔ میزبانی‌شده و بارگیری CSS، JavaScript و تصویرها.'],
        ],
        steps: {
          fa: [
            'هدف کوچک انتخاب کن: دفترچهٔ یادگیری، جست‌وجو، فیلتر و نشان تکمیل درس.',
            'ساختار HTML، ظاهر Tailwind و رفتار JavaScript را مرحله‌ای بساز.',
            'حالت عادی، ورودی خالی، بی‌نتیجه، خطا و موبایل را آزمایش کن.',
            'npm run lint، npm run build و سپس npm run preview را اجرا کن.',
            'تغییرها را با commitهای کوچک و پیام روشن ثبت کن؛ در README روش اجرا را بنویس.',
            'روی Netlify یا Vercel منتشر کن و URL را در پنجرهٔ خصوصی آزمایش کن.',
          ],
          en: [
            'Choose a small goal: a learning journal with search, filters, and completion.',
            'Build the HTML structure, Tailwind styling, and JavaScript behavior in stages.',
            'Test normal, empty, no-results, error, and mobile states.',
            'Run npm run lint, npm run build, then npm run preview.',
            'Use small clear commits and document setup in README.',
            'Deploy to Netlify or Vercel and test the URL in a private window.',
          ],
        },
        example: {
          code: 'npm run lint\nnpm run build\nnpm run preview',
          explanation: {
            fa: 'این فرمان‌ها به‌ترتیب کد را بررسی، خروجی نهایی را تولید و همان خروجی را محلی نمایش می‌دهند.',
            en: 'These commands lint the code, create production assets, and serve those assets locally.',
          },
        },
        practice: {
          fa: 'دفترچهٔ یادگیری را بساز، منتشر کن و چک‌لیست تحویل را صادقانه تکمیل کن.',
          en: 'Build and deploy the learning journal, then honestly complete the submission checklist.',
        },
        quiz: {
          question: {
            fa: 'npm run preview برای بررسی کدام نسخه است؟',
            en: 'Which version does npm run preview help you inspect?',
          },
          options: {
            fa: ['خروجی buildشدهٔ آمادهٔ انتشار', 'فقط فاصله‌گذاری کد', 'پیام commit'],
            en: ['The built production output', 'Code formatting only', 'The commit message'],
          },
          answer: 0,
          explanation: {
            fa: 'preview خروجی نهایی build را محلی سرو می‌کند.',
            en: 'Preview serves the production build locally.',
          },
        },
      },
    ],
  },
];

export const courseWeeks = [...foundationWeeks, ...advancedWeeks];
