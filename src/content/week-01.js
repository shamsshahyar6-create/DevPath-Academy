export const weekOne = {
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
      deepDive: {
        fa: [
          'npm مخفف Node Package Manager است و بسته‌ها را نصب، به‌روزرسانی و مدیریت می‌کند. لازم نیست هر قابلیت را از صفر بنویسی؛ مثلاً dayjs برای تاریخ، axios برای درخواست HTTP و zod برای اعتبارسنجی داده.',
          'package.json شناسنامهٔ پروژه است: نام، نسخه، scripts، dependencies و devDependencies. بسته‌های dependencies برای کارکرد اصلی برنامه‌اند و در بستهٔ نهایی به کاربر می‌رسند؛ devDependencies فقط برای توسعه، بررسی و ساخت استفاده می‌شوند.',
          'package-lock.json نسخهٔ دقیق بسته‌ها و وابستگی‌های آن‌ها را ثبت می‌کند تا نصب برای همه تکرارپذیر باشد. package.json و lockfile را در Git نگه می‌داریم، اما node_modules را نه؛ چون با npm install دوباره ساخته می‌شود.',
          'npm scriptها دستورهای طولانی را با نام کوتاه اجرا می‌کنند؛ مثلاً npm run dev. npm برای نصب و مدیریت است و npx ابزار یک بسته را بدون نصب سراسری اجرا می‌کند.',
          'نماد ^ اجازهٔ به‌روزرسانی minor و patch را می‌دهد (^5.2.1 می‌تواند به 5.9.0 برسد ولی نه 6.0.0)؛ نماد ~ فقط patch را اجازه می‌دهد. نسخهٔ Node مورد انتظار را از engines یا .nvmrc پیدا کن.',
        ],
        en: [
          'npm stands for Node Package Manager. It installs, updates, and tracks packages so you do not rebuild every feature from scratch; dayjs handles dates, axios sends HTTP requests, and zod validates data.',
          'package.json is the project identity: name, version, scripts, dependencies, and devDependencies. dependencies ship with the app and are needed at runtime; devDependencies are only for building, checking, and testing.',
          'package-lock.json records the exact version of every package and its dependencies so installs are reproducible. Commit package.json and the lockfile, but keep node_modules out of Git because npm install can rebuild it.',
          'npm scripts turn long commands into short names such as npm run dev. npm installs and manages packages; npx runs a package’s tool without a global install.',
          'The ^ range allows minor and patch updates (^5.2.1 can become 5.9.0 but not 6.0.0); ~ allows only patch updates. Read engines or .nvmrc to find the expected Node version.',
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
        [
          'npx',
          'ابزار یک بسته را اجرا می‌کند؛ برای استفادهٔ یک‌باره لازم نیست آن را سراسری نصب کنی.',
        ],
        ['npm script', 'نام کوتاه برای یک دستور طولانی در package.json؛ با npm run اجرا می‌شود.'],
        [
          'Node.js',
          'محیط اجرای JavaScript خارج از مرورگر که npm و ابزارهای پروژه روی آن کار می‌کنند.',
        ],
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
      deepDive: {
        fa: [
          'Vite یک ابزار مدرن توسعهٔ فرانت‌اند است: سرور توسعه اجرا می‌کند، هنگام تغییر کد صفحه را سریع به‌روز می‌کند (HMR) و در پایان فایل‌های بهینه برای انتشار می‌سازد.',
          'سه فرمان اصلی: npm run dev برای توسعه، npm run build برای ساخت خروجی و npm run preview برای دیدن همان خروجی روی سیستم خودت. build پوشهٔ dist را می‌سازد؛ dist قابل بازسازی است و معمولاً در Git نگه داشته نمی‌شود.',
          'فایل index.html نقطهٔ ورود برنامه است. خط <script type="module" src="/src/main.js"></script> به مرورگر می‌گوید فایل اصلی را به‌صورت ES Module بارگذاری کند.',
          'برای Tailwind نسخهٔ جدید: npm install tailwindcss @tailwindcss/vite، افزودن tailwindcss() به plugins در vite.config.js و نوشتن @import "tailwindcss" در فایل CSS. سپس کلاس‌هایی مانند text-3xl font-bold text-blue-700 استفاده می‌شوند.',
          'هر متغیری که با VITE_ شروع شود داخل بستهٔ مرورگر قرار می‌گیرد و برای همه قابل دیدن است؛ پس راز، توکن یا دادهٔ شخصی را در آن نگذار. node_modules/، dist/ و .env را در .gitignore بگذار.',
        ],
        en: [
          'Vite is a modern frontend tool: it runs a development server, updates the page quickly when code changes (HMR), and builds optimized files for release.',
          'The three core commands are npm run dev for development, npm run build for the production output, and npm run preview to view that output locally. build writes dist/, which is generated and usually kept out of Git.',
          'index.html is the entry point. The line <script type="module" src="/src/main.js"></script> tells the browser to load your main file as an ES module.',
          'For the current Tailwind setup: npm install tailwindcss @tailwindcss/vite, add tailwindcss() to the plugins in vite.config.js, and write @import "tailwindcss" in your CSS file. Then classes such as text-3xl font-bold text-blue-700 work.',
          'Any variable starting with VITE_ is embedded in the browser bundle and is public. Never put a secret, token, or personal data there. Keep node_modules/, dist/, and .env in .gitignore.',
        ],
      },
      terms: [
        ['Vite', 'ابزار فرانت‌اند که سرور توسعه اجرا و فایل‌های منبع را برای انتشار build می‌کند.'],
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
        ['dist', 'پوشهٔ خروجی build؛ فایل‌های نهایی و بهینهٔ سایت که دوباره قابل ساخت است.'],
        ['HMR', 'به‌روزرسانی سریع ماژول هنگام تغییر کد، بدون بارگذاری کامل صفحه.'],
        ['index.html', 'نقطهٔ ورود برنامه که ماژول اصلی JavaScript را بارگذاری می‌کند.'],
        ['entry point', 'فایلی که اجرای برنامه از آن شروع می‌شود؛ در Vite همان index.html است.'],
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
      deepDive: {
        fa: [
          'ESLint کد را بدون اجرای کامل برنامه بررسی می‌کند و مشکلاتی مثل متغیر تعریف‌نشده، متغیر استفاده‌نشده، الگوهای پرخطر و نقض قواعد کدنویسی را پیدا می‌کند. مثل یک بازبین کد است که پیش از اجرا هشدار می‌دهد.',
          'هر قاعده سه سطح دارد: off یا 0 (غیرفعال)، warn یا 1 (هشدار) و error یا 2 (خطا). warn معمولاً بررسی را متوقف نمی‌کند، اما error می‌تواند باعث شکست فرمان lint یا build شود.',
          'فرمان npx eslint . --fix بعضی مشکلات قابل اصلاح خودکار را درست می‌کند؛ اما نمی‌تواند منطق اشتباه یا تصمیم تجاری اشتباه را حدس بزند. پس اصلاح خودکار جای فهمیدن علت را نمی‌گیرد.',
          'افزونهٔ ESLint در VS Code خطاها را زیر کد نشان می‌دهد، هشدار می‌دهد و بعضی اصلاح‌های سریع را پیشنهاد می‌کند. با وجود افزونه هم باید بدانی پیام چه می‌گوید.',
          'تفاوت با Prettier: ESLint کیفیت و صحت کد را می‌سنجد و Prettier فقط ظاهر را مرتب می‌کند. اگر قاعده‌ای در ESLint با قالب‌بندی Prettier تعارض داشت، eslint-config-prettier را در انتهای آرایهٔ تنظیمات قرار بده تا آن قواعد خاموش شوند.',
        ],
        en: [
          'ESLint checks code without fully running it and finds undefined or unused variables, risky patterns, and broken code rules. Think of it as a code reviewer that warns you before runtime.',
          'Every rule has three levels: off or 0 (disabled), warn or 1 (warning), and error or 2 (error). A warning usually does not fail the command, while an error can fail lint or build.',
          'npx eslint . --fix repairs problems that are safe to fix automatically. It cannot guess wrong business logic, so automatic fixes never replace understanding the cause.',
          'The ESLint extension in VS Code underlines problems, shows warnings, and offers some Quick Fixes. Even with the extension, you still need to read what the message means.',
          'ESLint versus Prettier: ESLint checks quality and correctness; Prettier only changes layout. If an ESLint formatting rule conflicts with Prettier, put eslint-config-prettier at the end of the config array to turn those rules off.',
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
        ['--fix', 'گزینه‌ای که مشکلات قابل اصلاح خودکار را بدون دخالت دستی درست می‌کند.'],
        [
          'eslint.config.js',
          'فایل تنظیمات جدید ESLint؛ قواعد، زبان و پوشه‌های نادیده‌گرفته‌شده را تعیین می‌کند.',
        ],
        ['Quick Fix', 'پیشنهاد اصلاح سریع در ویرایشگر برای برخی خطاهای شناخته‌شده.'],
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
          en: ['Add eslint-disable', 'Read the message and fix the code cause', 'Remove the rule'],
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
      deepDive: {
        fa: [
          'console.log برای بررسی سریع خوب است، اما در برنامهٔ بزرگ مجبوری کد را بارها تغییر بدهی و دوباره اجرا کنی. Debugger اجرای برنامه را در نقطهٔ مشخصی متوقف می‌کند تا وضعیت واقعی همان لحظه را ببینی.',
          'Breakpoint را در Chrome DevTools، تب Sources، با کلیک روی شمارهٔ خط بگذار. برنامه را با همان ورودی مشکل‌دار دوباره اجرا کن تا اجرا روی آن خط متوقف شود.',
          'Step over خط فعلی را اجرا می‌کند و به خط بعد می‌رود، ولی وارد تابع فراخوانی‌شده نمی‌شود. Step into وارد تابع می‌شود و Step out از تابع فعلی خارج می‌شود و به محل فراخوانی برمی‌گردد.',
          'Logpoint مثل console.log است، اما بدون تغییر فایل: در DevTools پیامی تعریف می‌کنی که هنگام رسیدن به آن خط نمایش داده شود. برای بررسی سریع مقدارها بدون دست‌زدن به کد مناسب است.',
          'هنگام توقف، Scope متغیرهای محلی و سراسری را نشان می‌دهد، Watch مقادیری را که خودت انتخاب کرده‌ای، و Call Stack مسیر فراخوانی توابع تا نقطهٔ فعلی را. همیشه اول فرضیه بساز، بعد با شواهد بسنج، و در آخر تغییر بده.',
        ],
        en: [
          'console.log is fine for a quick look, but in a large app it forces repeated edits and reruns. A debugger pauses execution at one point so you can inspect the real state at that moment.',
          'Set a breakpoint in Chrome DevTools, Sources tab, by clicking the line number. Rerun the app with the same failing input so execution stops on that line.',
          'Step over runs the current line and moves on without entering the called function. Step into enters that function, and Step out leaves the current function and returns to its caller.',
          'A logpoint works like console.log without editing the file: you define a message in DevTools that prints when that line is reached. It is useful for quick inspection without touching code.',
          'While paused, Scope lists local and global variables, Watch shows values you chose, and Call Stack shows the path of function calls that led here. Form a hypothesis, test it with evidence, then change code.',
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
        [
          'Step over / into / out',
          'سه حالت حرکت در Debugger: اجرای خط بعد، ورود به تابع، یا خروج از تابع فعلی.',
        ],
        ['Logpoint', 'پیام شبیه console.log که بدون تغییر فایل در DevTools تعریف می‌شود.'],
        ['Scope / Watch', 'محل دیدن متغیرهای محلی و سراسری یا مقادیری که خودت زیر نظر گرفته‌ای.'],
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
      deepDive: {
        fa: [
          'Git تاریخچهٔ کار تو را نگه می‌دارد: staging area تعیین می‌کند چه چیزی در commit بعدی برود، و هر commit یک نقطهٔ قابل بازگشت می‌سازد. commit کوچک با پیام روشن، پیدا کردن علت تغییرها را آسان می‌کند.',
          'برای بیرون آوردن فایل از staging از git restore --staged استفاده کن؛ تغییر فایل پاک نمی‌شود. برای اصلاح پیام commit محلی git commit --amend -m "message" مناسب است، اما تاریخچهٔ push‌شده را بازنویسی نکن.',
          'برای لغو یک commit منتشرشده git revert امن‌تر است، چون commit تازه می‌سازد و تاریخچهٔ مشترک را عوض نمی‌کند. git reset --hard تاریخچه را بازنویسی می‌کند و برای شاخهٔ مشترک خطرناک است.',
          'git stash push کار نیمه‌تمام را موقتاً کنار می‌گذارد و git stash pop آن را برمی‌گرداند. git reflog جابه‌جایی اشاره‌گرها را ثبت می‌کند و برای پیدا کردن commit یا شاخهٔ گم‌شده استفاده می‌شود.',
          'انتشار یعنی قرار دادن خروجی build روی میزبانی تا با یک URL در دسترس باشد. بعد از deploy، سایت را در پنجرهٔ خصوصی باز کن و بارگذاری CSS، JavaScript و تصویرها را بررسی کن.',
        ],
        en: [
          'Git keeps the history of your work: the staging area decides what goes into the next commit, and each commit is a point you can return to. Small commits with clear messages make causes easy to find.',
          'Use git restore --staged to remove a file from staging without deleting its changes. Use git commit --amend -m "message" to fix a local commit message, never to rewrite published history.',
          'For a commit that is already pushed, git revert is safer because it adds a new commit instead of rewriting shared history. git reset --hard rewrites history and is risky on a shared branch.',
          'git stash push sets unfinished work aside temporarily, and git stash pop restores it. git reflog records pointer movement and helps you find a lost commit or branch.',
          'Deployment puts the build output on a host so it is reachable at a URL. After deploying, open the site in a private window and check that CSS, JavaScript, and images load.',
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
          'پروژه را روی GitHub Pages منتشر کن و در پنجرهٔ خصوصی CSS، JavaScript و تصویرها را بررسی کن.',
        ],
        en: [
          'Complete Learn Git Branching: Introduction Sequence and Push & Pull; save a screenshot.',
          'Unstage a file with git restore --staged <file>; this keeps working-tree changes.',
          'Fix a local commit message with git commit --amend -m "message"; do not amend published history.',
          'Undo a pushed commit with git revert <commit>; reset rewrites shared history.',
          'Shelve unfinished work with git stash push -m "unfinished work" and restore with git stash pop.',
          'Find a lost commit using git reflog and recover the branch with git switch -c recovered <commit>.',
          'Record the exact command and why you chose it for all five problems in exercises/05-git-practice.md.',
          'Deploy the project to GitHub Pages; verify CSS, JavaScript, and images in a private window.',
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
      deepDive: {
        fa: [
          'LLM یا مدل بزرگ زبانی با حجم زیادی از متن آموزش دیده است. ورودی تو را به بخش‌های کوچک به نام Token تقسیم می‌کند، الگوهای میان آن‌ها را می‌سنجد و Token بعدی را پیش‌بینی می‌کند؛ سپس همین روند را تکرار می‌کند تا پاسخ ساخته شود.',
          'چون LLM حقیقت را تشخیص نمی‌دهد و فقط محتمل‌ترین ادامه را تولید می‌کند، ممکن است مطمئن اما اشتباه باشد: کتابخانه‌ای را از خود بسازد، نسخهٔ قدیمی معرفی کند یا کدی بدهد که اجرا نمی‌شود. این را Hallucination می‌نامیم.',
          'Chat مانند ChatGPT فقط متن و فایل‌هایی را می‌بیند که خودت می‌فرستی. Harness مدل را به فایل‌های پروژه، ترمینال و ابزارها وصل می‌کند و چرخهٔ «اقدام، بررسی، تلاش دوباره» و کنترل مجوز را فراهم می‌کند.',
          'OpenCode یک AI coding agent است که می‌تواند ساختار پروژه را بررسی کند، خطا پیدا کند و کیفیت کد را تحلیل کند. در Plan mode اول تحلیل و گزارش می‌دهد و هیچ فایلی را تغییر نمی‌دهد.',
          'در این دوره AI نقش Reviewer دارد: کد را تو می‌نویسی و AI فقط اشتباه را نشان می‌دهد. برای اتصال مدل، provider را در تنظیمات انتخاب کن؛ رایگان‌بودن ابزار به معنی رایگان‌بودن همهٔ مدل‌ها نیست و نباید راز یا دادهٔ شخصی به مدل داد.',
        ],
        en: [
          'An LLM (large language model) is trained on a large amount of text. It splits your input into small pieces called tokens, processes their patterns, predicts the next token, and repeats until the answer is complete.',
          'Because an LLM does not check truth and only produces the most likely continuation, it can be confidently wrong: invent a library, cite an old version, or return code that does not run. This is called a hallucination.',
          'Chat tools such as ChatGPT see only the text and files you provide. A harness connects the model to project files, a terminal, and tools, and provides an act-check-retry loop plus permission controls.',
          'OpenCode is an AI coding agent that can inspect project structure, find errors, and review code quality. In Plan mode it analyzes and reports first and does not modify files.',
          'In this course AI is the Reviewer: you write the code and AI points out mistakes. Choose a provider in settings to connect a model; a free tool does not mean every model is free, and never send secrets or personal data to a model.',
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
        ['Token', 'واحد کوچک متن که مدل برای پردازش و پیش‌بینی پاسخ از آن استفاده می‌کند.'],
        [
          'Reviewer (بازبین)',
          'نقش AI در این دوره: فقط بررسی و توضیح می‌دهد و کد پروژه را نمی‌نویسد.',
        ],
        [
          'OpenCode',
          'عامل هوش مصنوعی ترمینالی که با مجوز به فایل‌ها و ابزارهای پروژه دسترسی دارد.',
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
};
