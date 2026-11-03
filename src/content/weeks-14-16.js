export const weeks14to16 = [
  {
    id: 'week-14',
    number: '14',
    title: { fa: 'Next.js و متادیتای SEO', en: 'Next.js and SEO Metadata' },
    subtitle: {
      fa: 'فاز ۳ · به‌صورت پیش‌فرض Server Component، مسیر پویا و متادیتای یکتا برای هر صفحه.',
      en: 'Phase 3 · Server Components by default, a dynamic route, and unique metadata for every page.',
    },
    outcome: {
      fa: 'در پایان هفته سایت سیارات را با مسیر پویا، نبود صفحه، متادیتای یکتا و Open Graph روی Vercel داری.',
      en: 'Finish with a planets site on Vercel using a dynamic route, not-found page, unique metadata, and Open Graph.',
    },
    lessons: [
      {
        id: 'w14-planets',
        day: '۱',
        title: { fa: 'سایت اطلاعات سیارات', en: 'Planets Fact Site' },
        summary: {
          fa: 'چهارشنبه ۲۷ ژانویه · یک پروژهٔ بزرگ با مسیر [planet]، generateMetadata و تب‌های کلاینتی.',
          en: 'Wed 27 Jan · One major project with a [planet] route, generateMetadata, and client tabs.',
        },
        duration: 300,
        goals: {
          fa: [
            'هر هشت سیاره را از یک مسیر پویا با URL خوانا مثل ‎/mars رندر کنی.',
            'برای سیارهٔ ناشناخته not-found و برای هر سیاره title و description یکتا بسازی.',
            'تب‌های Overview، Structure و Geology را به‌صورت کامپوننت کلاینتی با دادهٔ ساده بسازی.',
            'از next/image استفاده کنی، loading و error بسازی و متادیتا را در view-source ببینی.',
          ],
          en: [
            'Render all eight planets from one dynamic route with readable URLs such as /mars.',
            'Add not-found for unknown planets and unique title and description for each planet.',
            'Build Overview, Structure, and Geology tabs as a client component that receives plain data.',
            'Use next/image, add loading and error states, and confirm metadata in view-source.',
          ],
        },
        terms: [
          ['App Router', 'مسیریابی Next.js بر پایهٔ پوشه‌ها و Server Components.'],
          ['Dynamic route', 'مسیر پویا مثل [planet] که برای هر مقدار یک صفحه می‌سازد.'],
          ['generateStaticParams', 'ساخت صفحه‌های پویا در زمان build برای مسیرهای شناخته‌شده.'],
          ['generateMetadata', 'تولید title، description و Open Graph برای هر مسیر پویا.'],
          [
            'Server vs Client Component',
            'کامپوننت سرور پیش‌فرض است؛ use client فقط برای تعامل و API مرورگر.',
          ],
        ],
        steps: {
          fa: [
            'دادهٔ سیارات را از فایل بخوان و ساختار مسیر [planet] را بساز.',
            'generateStaticParams را برای هشت سیاره اضافه کن و not-found را برای سیارهٔ ناشناخته بساز.',
            'generateMetadata را با title الگوی «Mars — Planets Facts» و description حدود ۱۵۰ کاراکتر بنویس.',
            'تب‌ها را کلاینتی کن و فقط دادهٔ ساده به آن‌ها بده.',
            'تصویرها را با next/image بسازی و loading.tsx و error.tsx را اضافه کن.',
          ],
          en: [
            'Read planet data from the file and create the [planet] route structure.',
            'Add generateStaticParams for the eight planets and not-found for unknown ones.',
            'Write generateMetadata with a Mars — Planets Facts title pattern and a roughly 150 character description.',
            'Make the tabs client-side and pass only plain data to them.',
            'Use next/image and add loading.tsx and error.tsx.',
          ],
        },
        example: {
          code: 'export function generateStaticParams() {\n  return planets.map((planet) => ({ planet: planet.slug }));\n}\n\nexport async function generateMetadata({ params }) {\n  const planet = getPlanet(params.planet);\n  return { title: `${planet.name} — Planets Facts`, description: planet.summary };\n}',
          explanation: {
            fa: 'صفحه‌های شناخته‌شده در build ساخته می‌شوند و متادیتا برای هر سیاره جداگانه تولید می‌شود.',
            en: 'Known pages are built ahead of time and metadata is generated separately for each planet.',
          },
        },
        practice: {
          fa: 'یک URL ناشناخته مثل ‎/pluto را باز کن و view-source یک سیاره را برای دیدن متادیتا بررسی کن.',
          en: 'Open an unknown URL such as /pluto and inspect view-source for a planet metadata.',
        },
        quiz: {
          question: {
            fa: 'برای مسیر پویای [planet] متادیتای یکتا را چه چیزی می‌سازد؟',
            en: 'What creates unique metadata for the [planet] dynamic route?',
          },
          options: {
            fa: ['generateMetadata', 'generateStaticParams', 'useParams'],
            en: ['generateMetadata', 'generateStaticParams', 'useParams'],
          },
          answer: 0,
          explanation: {
            fa: 'generateStaticParams فهرست مسیرها را می‌دهد؛ generateMetadata محتوای متادیتای هر مسیر را می‌سازد.',
            en: 'generateStaticParams lists routes; generateMetadata builds each route metadata.',
          },
        },
      },
      {
        id: 'w14-rendering',
        day: '۲',
        title: {
          fa: 'راهبردهای رندر: SSG، SSR، ISR و streaming',
          en: 'Rendering Strategies: SSG, SSR, ISR & Streaming',
        },
        summary: {
          fa: 'پنجشنبه ۲۸ ژانویه · انتخاب کن هر صفحه کجا و کِی ساخته شود و تفاوت کش و تازگی داده را ببین.',
          en: 'Thu 28 Jan · Choose where and when each page is built, and see the difference between caching and data freshness.',
        },
        duration: 120,
        goals: {
          fa: [
            'تفاوت SSG، SSR و ISR را با یک مثال توضیح بدهی.',
            'برای مسیرهای App Router رندر استاتیک یا داینامیک را انتخاب کنی.',
            'revalidate و cache را برای دادهٔ متغیر تنظیم کنی.',
            'streaming و Suspense را برای بخش‌های کند به کار ببری.',
          ],
          en: [
            'Explain SSG, SSR, and ISR with one example each.',
            'Choose static or dynamic rendering for App Router routes.',
            'Configure revalidate and cache for changing data.',
            'Use streaming and Suspense for slow sections.',
          ],
        },
        terms: [
          ['SSG', 'ساخت صفحه در زمان build؛ سریع و مناسب محتوای کم‌تغییر.'],
          ['SSR', 'ساخت صفحه در هر درخواست روی سرور؛ مناسب دادهٔ شخصی یا لحظه‌ای.'],
          ['ISR', 'ساخت استاتیک با تازه‌سازی دوره‌ای پس از مدتی مشخص.'],
          ['dynamic rendering', 'رندر در زمان درخواست وقتی داده یا تنظیمات داینامیک است.'],
          ['revalidate', 'مدت زمان معتبر بودن دادهٔ کش‌شده پیش از تازه‌سازی.'],
          ['streaming', 'ارسال تدریجی HTML و نمایش بخش‌های آماده پیش از پایان کل صفحه.'],
          ['Suspense', 'مرز نمایش حالت انتظار برای بخشی از درخت کامپوننت.'],
        ],
        steps: {
          fa: [
            'برای صفحهٔ سیارات مشخص کن کدام بخش ثابت و کدام بخش وابسته به درخواست است.',
            'مسیر [planet] را استاتیک نگه دار و برای صفحهٔ فهرست یک revalidate کوتاه تنظیم کن.',
            'fetch دادهٔ متغیر را با گزینهٔ revalidate یا no-store بررسی کن و دلیل انتخاب را بنویس.',
            'یک بخش کند را داخل Suspense بگذار و fallback اسکلتی بساز.',
            'زمان build، پاسخ اول و تازگی داده را پیش و پس ثبت کن.',
          ],
          en: [
            'For the planets page, identify which parts are static and which depend on the request.',
            'Keep the [planet] route static and set a short revalidate for the list page.',
            'Check a changing fetch with revalidate or no-store and write why you chose it.',
            'Wrap one slow section in Suspense with a skeleton fallback.',
            'Record build time, first response, and data freshness before and after.',
          ],
        },
        example: {
          code: 'export const revalidate = 3600;\n\nconst res = await fetch(url, { next: { revalidate: 60 } });\n\n<Suspense fallback={<PlanetsSkeleton />}>\n  <PlanetList />\n</Suspense>',
          explanation: {
            fa: 'صفحه و داده هر کدام دورهٔ تازه‌سازی خود را دارند؛ Suspense بخش کند را از نمایش کل صفحه جدا می‌کند.',
            en: 'The page and the data each have their own freshness period, and Suspense keeps a slow section from blocking the whole page.',
          },
        },
        practice: {
          fa: 'برای دو مسیر یک انتخاب رندر بنویس و با تغییر revalidate تفاوت زمان پاسخ و تازگی داده را ثبت کن.',
          en: 'Write a rendering choice for two routes and record the difference in response time and data freshness when you change revalidate.',
        },
        quiz: {
          question: {
            fa: 'کدام راهبرد صفحه را در زمان build می‌سازد و بعد دوره‌ای تازه می‌کند؟',
            en: 'Which strategy builds a page at build time and refreshes it periodically?',
          },
          options: {
            fa: ['ISR', 'CSR در هر تعامل', 'SSR در هر درخواست'],
            en: ['ISR', 'CSR on every interaction', 'SSR on every request'],
          },
          answer: 0,
          explanation: {
            fa: 'ISR نتیجهٔ استاتیک را نگه می‌دارد و پس از بازهٔ تعیین‌شده دوباره می‌سازد؛ نه هر درخواست و نه فقط یک‌بار.',
            en: 'ISR keeps the static result and rebuilds after the configured interval, neither on every request nor only once.',
          },
        },
      },
      {
        id: 'w14-web-vitals',
        day: '۳',
        title: {
          fa: 'کارایی Next.js: تصویر، فونت و Core Web Vitals',
          en: 'Next.js Performance: Images, Fonts & Core Web Vitals',
        },
        summary: {
          fa: 'پنجشنبه ۲۸ ژانویه · LCP، CLS و INP را اندازه بگیر و با next/image، next/font و کد کمتر بهبود بده.',
          en: 'Thu 28 Jan · Measure LCP, CLS, and INP, then improve them with next/image, next/font, and less code.',
        },
        duration: 120,
        goals: {
          fa: [
            'LCP، CLS و INP را در Lighthouse و DevTools اندازه بگیری.',
            'next/image را با width و height، sizes و priority درست به کار ببری.',
            'فونت را با next/font بارگذاری کنی تا layout shift کم شود.',
            'یک رگرسیون کارایی را با عدد قبل و بعد ثبت کنی.',
          ],
          en: [
            'Measure LCP, CLS, and INP in Lighthouse and DevTools.',
            'Use next/image with correct width, height, sizes, and priority.',
            'Load fonts with next/font to reduce layout shift.',
            'Record a performance regression with before and after numbers.',
          ],
        },
        terms: [
          ['LCP', 'زمان نمایش بزرگ‌ترین عنصر محتوا؛ معیار اصلی سرعت بارگذاری.'],
          ['CLS', 'میزان جابه‌جایی ناخواستهٔ چیدمان هنگام بارگذاری؛ باید کم باشد.'],
          ['INP', 'زمان پاسخ تعامل کاربر؛ معیار روانی و واکنش‌گرایی.'],
          [
            'next/image',
            'کامپوننت تصویر Next.js با بهینه‌سازی، اندازه‌های واکنش‌گرا و lazy loading.',
          ],
          ['next/font', 'بارگذاری خودکار فونت با کاهش درخواست و جلوگیری از layout shift.'],
          ['layout shift', 'جابه‌جایی ناگهانی محتوا وقتی منبعی مثل تصویر یا فونت دیر می‌رسد.'],
          ['priority', 'نشانهٔ بارگذاری فوری تصویر اصلی صفحه برای بهبود LCP.'],
        ],
        steps: {
          fa: [
            'با Lighthouse یک گزارش پایه بگیر و LCP، CLS و INP را ثبت کن.',
            'تصویر اصلی را با next/image و priority بگذار و width، height و sizes را کامل کن.',
            'فونت را با next/font جایگزین لینک CSS کن و دوباره اندازه بگیر.',
            'کد کلاینتی غیرضروری را جدا کن و بستهٔ اولیه را کوچک‌تر کن.',
            'گزارش دوم را بگیر و تفاوت هر معیار را در README بنویس.',
          ],
          en: [
            'Run Lighthouse for a baseline and record LCP, CLS, and INP.',
            'Use next/image with priority for the main image and complete width, height, and sizes.',
            'Replace the CSS font link with next/font and measure again.',
            'Separate unnecessary client code and reduce the initial bundle.',
            'Run the second report and write each metric difference in the README.',
          ],
        },
        example: {
          code: 'import Image from "next/image";\n\n<Image\n  src="/mars.jpg"\n  width={800}\n  height={600}\n  alt="Mars surface"\n  priority\n/>',
          explanation: {
            fa: 'عرض و ارتفاع از layout shift جلوگیری می‌کند و priority تصویر اصلی را زودتر بارگذاری می‌کند.',
            en: 'Width and height prevent layout shift, and priority loads the main image sooner.',
          },
        },
        practice: {
          fa: 'گزارش Lighthouse قبل و بعد را بگیر، سه معیار را مقایسه کن و یک تغییر را که بیشترین اثر داشت توضیح بده.',
          en: 'Take before and after Lighthouse reports, compare the three metrics, and explain the change with the biggest effect.',
        },
        quiz: {
          question: {
            fa: 'کدام معیار سرعت نمایش بزرگ‌ترین عنصر محتوا را می‌سنجد؟',
            en: 'Which metric measures how fast the largest content element appears?',
          },
          options: {
            fa: ['LCP', 'CLS', 'INP'],
            en: ['LCP', 'CLS', 'INP'],
          },
          answer: 0,
          explanation: {
            fa: 'LCP زمان نمایش بزرگ‌ترین عنصر محتواست؛ CLS جابه‌جایی چیدمان و INP زمان پاسخ تعامل را می‌سنجد.',
            en: 'LCP measures the largest content element, CLS measures layout shift, and INP measures interaction response.',
          },
        },
      },
      {
        id: 'w14-seo-subagent',
        day: '۴',
        title: { fa: 'آزمایشگاه AI: subagent بازبین SEO', en: 'AI Lab: An SEO Reviewer Subagent' },
        summary: {
          fa: 'چهارشنبه ۲۷ ژانویه · یک subagent فقط‌خواندنی برای بررسی title، description، h1 و Open Graph بساز.',
          en: 'Wed 27 Jan · Create a read-only subagent that checks title, description, h1, and Open Graph.',
        },
        duration: 60,
        goals: {
          fa: [
            'subagent بازبین SEO را بدون اجازهٔ ویرایش و با مدل ارزان یا رایگان بسازی.',
            'هر مسیر سیارات را برای title و description یکتا، یک h1 و تگ‌های Open Graph بررسی کنی.',
            'توضیح بدهی subagent چگونه context نشست اصلی را تمیز نگه می‌دارد.',
            'هزینه یا توکن بررسی را با مدل کوچک و بزرگ مقایسه کنی.',
          ],
          en: [
            'Create an SEO reviewer subagent with no edit permission and a cheap or free model.',
            'Check every planets route for a unique title and description, one h1, and Open Graph tags.',
            'Explain how the subagent keeps the main session context clean.',
            'Compare the token or cost of the check with a small and a large model.',
          ],
        },
        terms: [
          ['Subagent', 'agent مستقل با پرامپت، مدل و دسترسی‌های خودش.'],
          ['Read-only permission', 'دسترسی مرور بدون امکان ویرایش فایل.'],
          ['Context isolation', 'کار در context جدا و برگرداندن فقط نتیجهٔ کوتاه.'],
          ['Cheap model', 'مدل سریع‌تر و ارزان‌تر برای بررسی‌های ساده.'],
          ['SEO audit', 'بررسی نظام‌مند title، description، ساختار heading و Open Graph.'],
        ],
        steps: {
          fa: [
            'فایل subagent را با توضیح روشن و دسترسی فقط‌خواندنی بساز.',
            'چک‌لیست را بنویس: title یکتا، description حدود ۱۵۰ کاراکتر، یک h1، Open Graph.',
            'subagent را روی همهٔ مسیرها اجرا کن و یافته‌ها را خودت اصلاح کن.',
            'همان بررسی را با مدل کوچک و بزرگ مقایسه کن و تفاوت توکن یا هزینه را ثبت کن.',
          ],
          en: [
            'Create the subagent file with a clear description and read-only permissions.',
            'Write the checklist: unique title, roughly 150 character description, one h1, Open Graph.',
            'Run it across every route and fix the findings yourself.',
            'Repeat the check with a small and a large model and record the token or cost difference.',
          ],
        },
        example: {
          code: 'Check every planets route.\nFor each page report: unique title, description length, h1 count, og:title, og:description, og:image.\nDo not edit files.',
          explanation: {
            fa: 'subagent فقط گزارش می‌دهد؛ تصمیم و اصلاح در نشست اصلی و با مالکیت خودت انجام می‌شود.',
            en: 'The subagent only reports; decisions and fixes stay in the main session under your ownership.',
          },
        },
        practice: {
          fa: 'یک نقص متادیتا عمدی بساز، اجرای subagent را ببین و سپس خودت اصلاح کن.',
          en: 'Introduce a deliberate metadata flaw, run the subagent, then fix it yourself.',
        },
        quiz: {
          question: {
            fa: 'چرا subagent به context اصلی کمک می‌کند؟',
            en: 'Why does a subagent help the main context?',
          },
          options: {
            fa: [
              'در context جدا کار می‌کند و نتیجهٔ کوتاه می‌دهد',
              'فایل‌ها را خودکار ویرایش می‌کند',
              'همیشه رایگان است',
            ],
            en: [
              'It works in a separate context and returns a short result',
              'It edits files automatically',
              'It is always free',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'جزئیات بررسی در context فرعی می‌ماند و نشست اصلی فقط جمع‌بندی را می‌بیند.',
            en: 'Audit details stay in the child context and the main session sees only the summary.',
          },
        },
      },
    ],
  },
  {
    id: 'week-15',
    number: '15',
    title: { fa: 'اسپرینت ۱ کپ‌استون و امنیت', en: 'Capstone Sprint 1 and Security' },
    subtitle: {
      fa: 'فاز ۳ · XSS را درست کن و خوانندهٔ RSS را با ticket، PR و CI بساز.',
      en: 'Phase 3 · Fix XSS and build the RSS reader through tickets, pull requests, and CI.',
    },
    outcome: {
      fa: 'در پایان هفته XSS و افشای secret را بسته‌ای و کپ‌استون با route handler، فید و تایم‌لاین روی Vercel است.',
      en: 'Finish with the XSS and secret leak closed and a capstone on Vercel with a route handler, feeds, and a timeline.',
    },
    lessons: [
      {
        id: 'w15-xss',
        day: '۱',
        title: { fa: 'پیدا و رفع XSS', en: 'Find and Fix the XSS' },
        summary: {
          fa: 'یکشنبه ۳۱ ژانویه · dangerouslySetInnerHTML ناامن و secret لو‌رفته را بدون شکستن قابلیت اصلاح کن.',
          en: 'Sun 31 Jan · Fix unsafe dangerouslySetInnerHTML and a leaked secret without breaking the feature.',
        },
        duration: 120,
        goals: {
          fa: [
            'dangerouslySetInnerHTML را بدون شکستن قابلیت امن کنی.',
            'secret را به کد فقط‌سرور منتقل کنی و ثابت کنی در bundle نهایی نیست.',
            'چالش DOM XSS و یک چالش یک‌ستارهٔ دیگر را در OWASP Juice Shop حل کنی.',
            'توضیح بدهی چرا بقیهٔ برنامهٔ React از پیش امن بود.',
          ],
          en: [
            'Make dangerouslySetInnerHTML safe without breaking the feature.',
            'Move the secret to server-only code and prove it is gone from the final bundle.',
            'Solve the DOM XSS and one more one-star challenge in OWASP Juice Shop.',
            'Explain why the rest of the React app was already safe.',
          ],
        },
        terms: [
          ['XSS', 'تزریق اسکریپت به محتوای صفحه که در مرورگر اجرا می‌شود.'],
          ['dangerouslySetInnerHTML', 'درج HTML خام در React؛ بدون پاک‌سازی خطرناک است.'],
          ['Sanitization', 'پاک‌سازی ورودی از تگ‌ها و ویژگی‌های خطرناک.'],
          ['Secret leak', 'قرار گرفتن کلید در کدی که به مرورگر می‌رود.'],
          ['OWASP Juice Shop', 'اپ آزمایشی آسیب‌پذیر برای تمرین امنیت.'],
        ],
        steps: {
          fa: [
            'مسیر دادهٔ HTML خام را پیدا کن و ورودی را قبل از درج پاک‌سازی کن.',
            'secret را از کد کلاینت بردار و به route handler یا متغیر فقط‌سرور ببر.',
            'build بگیر و جست‌وجو کن که رشتهٔ secret در خروجی نیست.',
            'Juice Shop را اجرا کن و دو چالش یک‌ستارهٔ XSS را با توضیح علت حل کن.',
          ],
          en: [
            'Find the raw HTML data path and sanitize input before insertion.',
            'Remove the secret from client code and move it to a route handler or server-only variable.',
            'Run the build and search the output to confirm the secret string is absent.',
            'Run Juice Shop and solve two one-star XSS challenges, explaining each cause.',
          ],
        },
        example: {
          code: 'const safeHtml = DOMPurify.sanitize(userHtml);\nreturn <div dangerouslySetInnerHTML={{ __html: safeHtml }} />;',
          explanation: {
            fa: 'پاک‌سازی ورودی خطر تزریق را می‌بندد؛ نگذاشتن secret در کلاینت اصل دوم است.',
            en: 'Sanitizing input closes the injection path; keeping secrets out of the client is the second rule.',
          },
        },
        practice: {
          fa: 'پیش و پس از اصلاح، با یک payload ساده آزمایش کن و تفاوت را ثبت کن.',
          en: 'Test with a simple payload before and after the fix and record the difference.',
        },
        quiz: {
          question: {
            fa: 'چرا React به‌طور پیش‌فرض در برابر XSS امن‌تر است؟',
            en: 'Why is React safer against XSS by default?',
          },
          options: {
            fa: [
              'متن را escape می‌کند و HTML خام را اجرا نمی‌کند',
              'از HTTPS استفاده می‌کند',
              'secretها را مخفی می‌کند',
            ],
            en: [
              'It escapes text instead of executing raw HTML',
              'It uses HTTPS',
              'It hides secrets',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'خطر وقتی شروع می‌شود که HTML خام را آگاهانه وارد کنیم.',
            en: 'The risk starts when raw HTML is inserted deliberately.',
          },
        },
      },
      {
        id: 'w15-security-headers',
        day: '۲',
        title: {
          fa: 'هدرهای امنیتی، CSRF و وابستگی‌های امن',
          en: 'Security Headers, CSRF & Safe Dependencies',
        },
        summary: {
          fa: 'پنجشنبه ۴ فوریه · مرورگر را با هدرهای درست محدود کن، درخواست بین‌سایتی را ببند و وابستگی‌ها را بررسی کن.',
          en: 'Thu 4 Feb · Constrain the browser with correct headers, block cross-site requests, and audit dependencies.',
        },
        duration: 120,
        goals: {
          fa: [
            'CSP، HSTS، X-Content-Type-Options و Referrer-Policy را تنظیم کنی.',
            'تفاوت CSRF و XSS را توضیح بدهی و کوکی را امن کنی.',
            'نشتی راز را در کد کلاینت و مخزن بررسی کنی.',
            'وابستگی‌های آسیب‌پذیر را با npm audit پیدا و مدیریت کنی.',
          ],
          en: [
            'Configure CSP, HSTS, X-Content-Type-Options, and Referrer-Policy.',
            'Explain CSRF versus XSS and secure cookies.',
            'Check for secret leaks in client code and the repository.',
            'Find and manage vulnerable dependencies with npm audit.',
          ],
        },
        terms: [
          ['CSP', 'Content Security Policy؛ فهرست منابع مجاز برای اسکریپت، تصویر و اتصال.'],
          ['HSTS', 'اجبار مرورگر به استفاده از HTTPS برای همهٔ درخواست‌های بعدی.'],
          ['X-Content-Type-Options', 'جلوگیری از حدس نوع فایل توسط مرورگر با مقدار nosniff.'],
          ['CSRF', 'سوءاستفاده از کوکی یا نشست کاربر برای ارسال درخواست ناخواسته از سایت دیگر.'],
          ['SameSite cookie', 'تنظیم کوکی که ارسال آن را در درخواست‌های بین‌سایتی محدود می‌کند.'],
          ['npm audit', 'ابزار بررسی وابستگی‌ها برای آسیب‌پذیری‌های شناخته‌شده.'],
          ['least privilege', 'دادن کمترین دسترسی لازم به کاربر، توکن و سرویس.'],
        ],
        steps: {
          fa: [
            'هدرهای امنیتی را در تنظیمات Next.js یا هاست اضافه کن و پاسخ را در DevTools ببین.',
            'CSP را با کمترین منبع لازم شروع کن و فقط دامنه‌های واقعی تصویر و اسکریپت را مجاز کن.',
            'کوکی نشست را با HttpOnly، Secure و SameSite تنظیم کن.',
            'مخزن و باندل کلاینت را برای کلید یا راز جست‌وجو کن و هر یافته را بچرخان.',
            'npm audit را اجرا کن، آسیب‌پذیری‌ها را دسته‌بندی کن و فقط اصلاح امن را انجام بده.',
          ],
          en: [
            'Add the security headers in Next.js or the host settings and inspect the response in DevTools.',
            'Start CSP with the minimum sources and allow only the real image and script domains.',
            'Set the session cookie with HttpOnly, Secure, and SameSite.',
            'Search the repository and client bundle for keys or secrets, and rotate any finding.',
            'Run npm audit, group the findings, and apply only safe fixes.',
          ],
        },
        example: {
          code: "const securityHeaders = [\n  { key: 'X-Content-Type-Options', value: 'nosniff' },\n  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },\n  { key: 'Content-Security-Policy', value: \"default-src 'self'; img-src 'self' data: https:;\" },\n];",
          explanation: {
            fa: 'هدرها قواعد مرورگر را سخت‌تر می‌کنند؛ CSP اجازهٔ اجرای اسکریپت ناشناس را می‌گیرد و nosniff جلوی حدس نوع را می‌گیرد.',
            en: 'Headers tighten browser rules; CSP blocks unknown scripts and nosniff stops type guessing.',
          },
        },
        practice: {
          fa: 'هدرها را اضافه کن، یک منبع غیرمجاز را در CSP تست کن و گزارش npm audit را با تصمیم هر مورد بنویس.',
          en: 'Add the headers, test a blocked source in CSP, and write the npm audit report with a decision for each finding.',
        },
        quiz: {
          question: {
            fa: 'CSRF از چه چیزی سوءاستفاده می‌کند؟',
            en: 'What does CSRF exploit?',
          },
          options: {
            fa: ['اعتماد مرورگر به کوکی‌های همان سایت', 'حافظهٔ سرور', 'قاعده‌های CSS'],
            en: ['The browser’s trust in cookies for that site', 'The server memory', 'CSS rules'],
          },
          answer: 0,
          explanation: {
            fa: 'مرورگر کوکی سایت را با درخواست سایت دیگر می‌فرستد؛ SameSite، توکن CSRF و بررسی Origin این مسیر را می‌بندند.',
            en: 'The browser sends the site cookie with another site’s request; SameSite, a CSRF token, and Origin checks close that path.',
          },
        },
      },
      {
        id: 'w15-capstone',
        day: '۳',
        title: { fa: 'اسپرینت ۱ کپ‌استون', en: 'Capstone Sprint 1' },
        summary: {
          fa: 'چهارشنبه ۳ فوریه · خوانندهٔ RSS را با route handler، فید، تایم‌لاین و PRهای کوچک شروع کن.',
          en: 'Wed 3 Feb · Start the RSS reader with a route handler, feeds, a timeline, and small pull requests.',
        },
        duration: 300,
        goals: {
          fa: [
            'پروژه را روی Vercel با CI وصل کنی و هر ticket را با PR merge کنی.',
            'یک route handler بسازی که فید را در سرور واکشی و parse کند.',
            'امکان افزودن فید و نمایش مقاله‌ها به ترتیب تاریخ در تایم‌لاین را پیاده کنی.',
            'برای صفحهٔ هر فید حالت loading، error و not-found بسازی.',
          ],
          en: [
            'Connect the project to Vercel with CI and merge every ticket through a pull request.',
            'Build a route handler that fetches and parses feeds on the server.',
            'Implement adding a feed and a timeline of articles sorted by date.',
            'Add loading, error, and not-found states for each feed page.',
          ],
        },
        terms: [
          ['Route handler', 'تابع سروری Next.js برای پاسخ به درخواست HTTP.'],
          ['RSS / Atom', 'قالب‌های XML برای انتشار فهرست مقاله‌های یک سایت.'],
          ['Server-only', 'کدی که فقط در سرور اجرا می‌شود و به مرورگر نمی‌رسد.'],
          ['CI check', 'اجرای خودکار lint و تست پیش از merge.'],
          ['Ticket', 'واحد کوچک کار با تعریف روشن از «تمام‌شده».'],
        ],
        steps: {
          fa: [
            'مخزن را به Vercel وصل کن و CI را برای lint و تست تنظیم کن.',
            'route handler فید را با fetch و parser بنویس و خطاهای شبکه را مدل کن.',
            'افزودن فید و ذخیرهٔ آن را پیاده کن و تایم‌لاین مرتب‌شده بساز.',
            'صفحهٔ هر فید را با حالت‌های loading، error و not-found بساز.',
            'دسته‌بندی، خوانده/نخوانده و next/font را به‌عنوان گام‌های بعدی اضافه کن.',
          ],
          en: [
            'Connect the repository to Vercel and configure CI for lint and tests.',
            'Write the feed route handler with fetch and a parser, modeling network errors.',
            'Implement adding and saving feeds, then build the sorted timeline.',
            'Build each feed page with loading, error, and not-found states.',
            'Add categories, read/unread state, and next/font as the next steps.',
          ],
        },
        example: {
          code: 'export async function GET(request: Request) {\n  const feedUrl = new URL(request.url).searchParams.get("url");\n  if (!feedUrl) return Response.json({ error: "Missing url" }, { status: 400 });\n  const xml = await fetch(feedUrl).then((res) => res.text());\n  return Response.json({ items: parseFeed(xml) });\n}',
          explanation: {
            fa: 'واکشی در سرور انجام می‌شود؛ مرورگر فقط نتیجهٔ parseشده را می‌گیرد.',
            en: 'Fetching happens on the server; the browser only receives the parsed result.',
          },
        },
        practice: {
          fa: 'یک فید واقعی اضافه کن، تاریخ‌ها را بررسی کن و با قطع شبکه حالت خطا را ببین.',
          en: 'Add a real feed, verify the dates, and cut the network to inspect the error state.',
        },
        quiz: {
          question: {
            fa: 'فید باید کجا واکشی شود؟',
            en: 'Where should the feed be fetched?',
          },
          options: {
            fa: ['در route handler سرور', 'در کامپوننت کلاینتی', 'در localStorage'],
            en: ['In a server route handler', 'In a client component', 'In localStorage'],
          },
          answer: 0,
          explanation: {
            fa: 'واکشی سمت سرور از محدودیت CORS و افشای کلید جلوگیری می‌کند.',
            en: 'Server fetching avoids CORS limits and key exposure.',
          },
        },
      },
      {
        id: 'w15-agent-ticket',
        day: '۴',
        title: { fa: 'آزمایشگاه AI: ticket برای agent', en: 'AI Lab: Agent Ticket' },
        summary: {
          fa: 'چهارشنبه ۳ فوریه · یک ticket کوچک را با AGENTS.md، مرز فایل‌ها و بررسی خط‌به‌خط به agent بسپار.',
          en: 'Wed 3 Feb · Hand one small ticket to the agent with AGENTS.md, file boundaries, and line-by-line review.',
        },
        duration: 60,
        goals: {
          fa: [
            'AGENTS.md کپ‌استون را با stack، قراردادها، ساختار پوشه و skillها و commandها بنویسی.',
            'برای یک ticket مشخص کنی «تمام‌شده» چیست، کدام فایل‌ها مجازند و چه چیزی نباید تغییر کند.',
            'diff کامل agent را قبل از هر کار دیگری مرور کنی و تست‌های جاافتاده را اضافه کنی.',
            'در ai-log.md یک مورد ردشده یا اصلاح‌شده و در PR یک AI note بنویسی.',
          ],
          en: [
            'Write the capstone AGENTS.md with stack, conventions, folder structure, skills, and commands.',
            'Define done, allowed files, and off-limits areas for one ticket.',
            'Review the full agent diff before anything else and add missing tests.',
            'Log one rejected or corrected item in ai-log.md and add an AI note to the PR.',
          ],
        },
        terms: [
          ['Agent ticket', 'کار کوچک با دامنهٔ روشن که به agent سپرده می‌شود.'],
          ['AGENTS.md', 'فایل قواعد پروژه که هر نشست خوانده می‌شود.'],
          ['Diff review', 'مرور خط‌به‌خط تغییرها پیش از commit.'],
          ['AI note', 'توضیح در PR دربارهٔ ابزار، مدل، کار انجام‌شده و بررسی انسان.'],
          ['Scope boundary', 'مرز روشن فایل‌ها و رفتارهایی که agent اجازهٔ تغییرشان را ندارد.'],
        ],
        steps: {
          fa: [
            'AGENTS.md را با stack، فرمان‌ها، پوشه‌ها و قواعد کپ‌استون کامل کن.',
            'ticket را با تعریف done، فایل‌های مجاز و موارد ممنوع بنویس.',
            'agent را اجرا کن و diff را خط‌به‌خط قبل از commit بخوان.',
            'تست‌های جاافتاده را خودت اضافه کن و AI note را در PR بنویس.',
          ],
          en: [
            'Complete AGENTS.md with the stack, commands, folders, and capstone rules.',
            'Write the ticket with done criteria, allowed files, and explicit no-touch areas.',
            'Run the agent and read the diff line by line before committing.',
            'Add the missing tests yourself and write the AI note in the PR.',
          ],
        },
        example: {
          code: 'Ticket: add a feed URL form.\nDone: validates URL, shows an error, saves the feed, and has one test.\nAllowed: src/components/AddFeed.tsx, src/lib/feeds.ts.\nDo not touch: auth, database schema, or deployment config.',
          explanation: {
            fa: 'مرز روشن، diff کوچک و قابل‌مرور می‌سازد و از تغییر ناخواسته جلوگیری می‌کند.',
            en: 'A clear boundary keeps the diff small and reviewable and prevents unintended changes.',
          },
        },
        practice: {
          fa: 'یک ticket واقعی را با agent انجام بده و زمان مرور diff را اندازه بگیر.',
          en: 'Complete one real ticket with the agent and time your diff review.',
        },
        quiz: {
          question: {
            fa: 'پیش از commit تغییرهای agent چه باید کرد؟',
            en: 'What must happen before committing agent changes?',
          },
          options: {
            fa: ['مرور کامل diff', 'commit فوری', 'حذف تست‌ها'],
            en: ['Review the full diff', 'Commit immediately', 'Delete the tests'],
          },
          answer: 0,
          explanation: {
            fa: 'مالکیت کد یعنی هر خط را دیده و فهمیده باشی؛ diff مرور نشده قابل‌اعتماد نیست.',
            en: 'Code ownership means you saw and understood every line; an unreviewed diff is not trustworthy.',
          },
        },
      },
    ],
  },
  {
    id: 'week-16',
    number: '16',
    title: { fa: 'اسپرینت ۲، کیفیت و دروازهٔ ۳', en: 'Capstone Sprint 2, Quality, and Gate 3' },
    subtitle: {
      fa: 'فاز ۳ · SEO، حلقهٔ Lighthouse، نسخهٔ نهایی کپ‌استون و دفاع زنده.',
      en: 'Phase 3 · SEO, the Lighthouse loop, the final capstone, and the live defense.',
    },
    outcome: {
      fa: 'در پایان هفته کپ‌استون زنده با SEO 90+، کارایی 80+، دسترس‌پذیری 90+، ویدیوی دمو و دروازهٔ ۳ را داری.',
      en: 'Finish with a live capstone at SEO 90+, performance 80+, accessibility 90+, a demo video, and Gate 3.',
    },
    lessons: [
      {
        id: 'w16-seo',
        day: '۱',
        title: { fa: 'بازبینی SEO', en: 'SEO Pass' },
        summary: {
          fa: 'یکشنبه ۷ فوریه · title و description یکتا، یک h1، Open Graph و sitemap و robots برای همهٔ صفحه‌ها.',
          en: 'Sun 7 Feb · Unique title and description, one h1, Open Graph, and sitemap and robots for every page.',
        },
        duration: 120,
        goals: {
          fa: [
            'برای هر صفحهٔ عمومی title و description یکتا با metadata یا generateMetadata بگذاری.',
            'در هر صفحه یک h1 و URL خوانا داشته باشی و همهٔ ناوبری با لینک واقعی باشد.',
            'Open Graph را در یک ابزار پیش‌نمایش لینک درست ببینی.',
            'sitemap.ts و robots.ts را بسازی و Lighthouse SEO را ۹۰+ کنی.',
          ],
          en: [
            'Set a unique title and description for every public page with metadata or generateMetadata.',
            'Keep one h1 per page, readable URLs, and real links for all navigation.',
            'Verify Open Graph in a link-preview tool.',
            'Create sitemap.ts and robots.ts and reach Lighthouse SEO 90+.',
          ],
        },
        terms: [
          ['Metadata API', 'رابط Next.js برای تعریف title، description و Open Graph.'],
          ['generateMetadata', 'متادیتای پویا برای مسیرهایی که دادهٔ متغیر دارند.'],
          ['Open Graph', 'تگ‌هایی که کارت اشتراک‌گذاری لینک را می‌سازند.'],
          ['sitemap.ts', 'تولید فهرست صفحه‌ها برای موتور جست‌وجو.'],
          ['robots.txt', 'قاعدهٔ دسترسی خزنده‌ها به بخش‌های سایت.'],
        ],
        steps: {
          fa: [
            'همهٔ صفحه‌ها را فهرست کن و برای هرکدام title الگوی «Page — Site» و description بنویس.',
            'h1 و ساختار heading را بررسی کن و لینک‌های واقعی جاافتاده را اضافه کن.',
            'Open Graph را برای صفحهٔ خانه و یک صفحهٔ فید تنظیم و پیش‌نمایش را بررسی کن.',
            'sitemap.ts و robots.ts را بساز و Lighthouse SEO را اجرا کن.',
          ],
          en: [
            'List every page and write a Page — Site title pattern and description for each.',
            'Check h1 and heading structure and add any missing real links.',
            'Set Open Graph for the home page and one feed page and check the preview.',
            'Create sitemap.ts and robots.ts and run the Lighthouse SEO audit.',
          ],
        },
        example: {
          code: 'export const metadata = {\n  title: "Home — RSS Reader",\n  description: "Follow feeds and read every article in one calm timeline.",\n  openGraph: { title: "Home — RSS Reader", images: ["/og.png"] },\n};',
          explanation: {
            fa: 'متادیتای یکتا و توصیف دقیق، نتیجهٔ جست‌وجو و کارت اشتراک را هم‌زمان بهتر می‌کند.',
            en: 'Unique metadata and an accurate description improve both search results and share cards.',
          },
        },
        practice: {
          fa: 'source صفحه را ببین و مطمئن شو تگ‌ها در HTML سرور رندر شده‌اند، نه با JavaScript.',
          en: 'View the page source and confirm the tags are rendered in server HTML, not by JavaScript.',
        },
        quiz: {
          question: {
            fa: 'برای صفحه‌های پویا از چه چیزی برای متادیتا استفاده می‌کنیم؟',
            en: 'What do we use for metadata on dynamic pages?',
          },
          options: {
            fa: ['generateMetadata', 'useEffect', 'localStorage'],
            en: ['generateMetadata', 'useEffect', 'localStorage'],
          },
          answer: 0,
          explanation: {
            fa: 'generateMetadata با پارامترهای مسیر کار می‌کند و تگ‌ها را در سرور می‌سازد.',
            en: 'generateMetadata works with route params and builds tags on the server.',
          },
        },
      },
      {
        id: 'w16-lighthouse',
        day: '۲',
        title: {
          fa: 'حلقهٔ Lighthouse و ممیزی دسترس‌پذیری',
          en: 'Lighthouse Fix Loop and Accessibility Audit',
        },
        summary: {
          fa: 'سه‌شنبه ۹ فوریه · اندازه بگیر، سه مشکل بزرگ را یکی‌یکی رفع کن و ممیزی A/AA را کامل کن.',
          en: 'Tue 9 Feb · Measure, fix the three biggest issues one at a time, and complete the A/AA audit.',
        },
        duration: 120,
        goals: {
          fa: [
            'گزارش اولیهٔ Lighthouse را بسازی و برای هر اصلاح دوباره اندازه‌گیری کنی.',
            'کارایی را به ۸۰+ و دسترس‌پذیری را به ۹۰+ برسانی.',
            'در هر اصلاح نام متریک (LCP، CLS یا TBT) یا مورد چک‌لیست را بنویسی.',
            'همهٔ جریان‌های کاربری را فقط با کیبورد کامل کنی.',
          ],
          en: [
            'Create the first Lighthouse report and re-measure after every fix.',
            'Reach performance 80+ and accessibility 90+.',
            'Name the metric (LCP, CLS, or TBT) or checklist item in every fix.',
            'Complete every user flow with the keyboard only.',
          ],
        },
        terms: [
          ['Lighthouse', 'ابزار اندازه‌گیری کارایی، دسترس‌پذیری و SEO.'],
          ['LCP', 'زمان نمایش بزرگ‌ترین عنصر قابل‌مشاهدهٔ صفحه.'],
          ['CLS', 'میزان جابه‌جایی ناخواستهٔ چیدمان هنگام بارگذاری.'],
          ['TBT', 'مدت زمان مسدودبودن رشتهٔ اصلی توسط کارهای سنگین.'],
          ['axe', 'ابزار خودکار بررسی نقص‌های دسترس‌پذیری.'],
        ],
        steps: {
          fa: [
            'گزارش اولیه را روی URL زنده بگیر و commit کن.',
            'سه مشکل بزرگ را به ترتیب رفع کن و بعد از هرکدام دوباره اندازه بگیر.',
            'موردهای A و AA چک‌لیست را در a11y-audit.md با pass یا fail ثبت کن.',
            'با کیبورد همهٔ جریان‌ها را آزمایش کن و axe را روی همهٔ مسیرها اجرا کن.',
            'یک پیشنهاد Lighthouse را که آگاهانه رفع نمی‌کنی با دلیل بنویس.',
          ],
          en: [
            'Take the first report on the live URL and commit it.',
            'Fix the three biggest issues in order and re-measure after each one.',
            'Record the A and AA checklist items as pass or fail in a11y-audit.md.',
            'Test every flow by keyboard and run axe on every route.',
            'Write one Lighthouse suggestion you deliberately do not fix, with the reason.',
          ],
        },
        example: {
          code: 'Performance: 82 -> 88 after image sizing (LCP -0.4s)\nAccessibility: 91 -> 96 after the missing label on search (A/AA 1.3.1)',
          explanation: {
            fa: 'هر اصلاح باید به یک متریک یا مورد چک‌لیست وصل باشد؛ وگرنه معلوم نیست چه چیزی بهتر شد.',
            en: 'Every fix should map to a metric or checklist item, otherwise there is no proof of improvement.',
          },
        },
        practice: {
          fa: 'اصلاح‌ها را جداگانه commit کن و در پیام هر commit متریک یا مورد چک‌لیست را بنویس.',
          en: 'Commit each fix separately and name the metric or checklist item in its message.',
        },
        quiz: {
          question: {
            fa: 'در پیام هر اصلاح کارایی چه چیزی باید بیاید؟',
            en: 'What should each performance fix message include?',
          },
          options: {
            fa: ['متریک تغییرکرده و مقدار آن', 'نام کتابخانه', 'شمارهٔ PR قبلی'],
            en: [
              'The metric that moved and by how much',
              'A library name',
              'The previous PR number',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'اتصال اصلاح به متریک، تصمیم را قابل‌بازبینی و قابل‌اندازه‌گیری می‌کند.',
            en: 'Tying a fix to a metric makes the decision reviewable and measurable.',
          },
        },
      },
      {
        id: 'w16-capstone-final',
        day: '۳',
        title: { fa: 'نسخهٔ نهایی کپ‌استون و ویدیوی دمو', en: 'Capstone Final and Demo Video' },
        summary: {
          fa: 'چهارشنبه ۱۰ فوریه · همهٔ شرط‌های کپ‌استون روی URL زنده، ویدیوی پنج‌دقیقه‌ای و README کامل.',
          en: 'Wed 10 Feb · All capstone requirements on the live URL, a five-minute video, and a complete README.',
        },
        duration: 240,
        goals: {
          fa: [
            'همهٔ شرط‌های کپ‌استون را روی URL زنده و با CI سبز ثابت کنی.',
            'ویدیوی پنج‌دقیقه‌ای با کارکرد اپ، یک تصمیم فنی و یک بهبود آینده بسازی.',
            'README را با لینک زنده، تصویرها، اجرا، متغیرها، تست و ai-log کامل کنی.',
            'از هر merge یک PR مرور‌شده با حداقل شش تست باقی بماند.',
          ],
          en: [
            'Prove every capstone requirement on the live URL with green CI.',
            'Record a five-minute video covering the app, one technical decision, and one improvement.',
            'Complete the README with the live link, screenshots, setup, variables, tests, and ai-log.',
            'Leave a reviewed pull request for every merge with at least six tests.',
          ],
        },
        terms: [
          ['Demo video', 'ارائهٔ کوتاه کارکرد، تصمیم فنی و بهبود آینده.'],
          ['Acceptance criteria', 'شرط‌های روشنی که «تمام‌شده» را تعریف می‌کنند.'],
          ['Preview URL', 'نسخهٔ موقت هر pull request برای بررسی.'],
          ['Secret management', 'نگهداری کلیدها فقط در متغیرهای محیطی سرور.'],
          ['Release checklist', 'فهرست بررسی نهایی پیش از تحویل محصول.'],
        ],
        steps: {
          fa: [
            'شرط‌های کپ‌استون را یکی‌یکی روی URL زنده آزمایش و تیک بزن.',
            'CI را روی آخرین PR اجرا کن و از سبزبودن lint و تست مطمئن شو.',
            'READM را با لینک، اسکرین‌شات، اجرا، متغیرها و تست کامل کن.',
            'ویدیوی پنج‌دقیقه‌ای را ضبط کن و یک تصمیم فنی و یک بهبود را توضیح بده.',
          ],
          en: [
            'Test and tick every capstone requirement on the live URL.',
            'Run CI on the latest pull request and confirm lint and tests are green.',
            'Complete the README with the link, screenshots, setup, variables, and tests.',
            'Record the five-minute video and explain one technical decision and one improvement.',
          ],
        },
        example: {
          code: 'Live URL -> open in a private window\nLighthouse -> performance 80+, accessibility 90+\nTests -> 6 or more, CI green\nREADME -> link, screenshots, env names, test command, ai-log',
          explanation: {
            fa: 'تحویل با شاهد انجام می‌شود؛ ادعا بدون لینک و گزارش قابل‌قبول نیست.',
            en: 'Delivery is evidence-based; a claim without a link and report is not accepted.',
          },
        },
        practice: {
          fa: 'یک بازبینی کامل با چشم کاربر جدید انجام بده و همهٔ شکاف‌های README را پر کن.',
          en: 'Do one full review as a new user and fill every README gap.',
        },
        quiz: {
          question: {
            fa: 'کپ‌استون چه زمانی قابل‌تحویل است؟',
            en: 'When is the capstone ready to submit?',
          },
          options: {
            fa: [
              'وقتی همهٔ شرط‌ها روی URL زنده و CI سبز باشند',
              'وقتی ویدیو ضبط شود',
              'وقتی README شروع شود',
            ],
            en: [
              'When every requirement is true on the live URL with green CI',
              'When the video is recorded',
              'When the README is started',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'ویدیو و README بخشی از تحویل‌اند، اما اثبات اصلی رفتار زندهٔ محصول است.',
            en: 'The video and README are part of delivery, but the main proof is the live product behavior.',
          },
        },
      },
      {
        id: 'w16-ai-report',
        day: '۴',
        title: { fa: 'آزمایشگاه AI: گزارش هوش مصنوعی', en: 'AI Lab: Your AI Report' },
        summary: {
          fa: 'چهارشنبه ۱۰ فوریه · گزارش AI را در README بنویس و تنظیمات روز اول کار را مشخص کن.',
          en: 'Wed 10 Feb · Write the AI report in the README and define the setup you would request on day one.',
        },
        duration: 60,
        goals: {
          fa: [
            'بخش AI report را با ابزارها، مدل‌ها و تخمین توکن یا هزینه بنویسی.',
            'مفیدترین کار AI و بدترین اشتباهش را با شاهد ثبت کنی.',
            'تنظیمات پیشنهادی روز اول کار را با rules، skillها، commandها، MCP و permissionها بنویسی.',
            'opencode را با یک harness دیگر روی یک کار مقایسه کنی.',
          ],
          en: [
            'Write the AI report with tools, models, and a token or cost estimate.',
            'Record the most useful AI contribution and its worst mistake with evidence.',
            'Write the day-one setup with rules, skills, commands, MCP servers, and permissions.',
            'Compare opencode with another harness on one task.',
          ],
        },
        terms: [
          ['AI report', 'بخش README دربارهٔ ابزارها، هزینه، فایده و خطای AI.'],
          ['Token estimate', 'تخمین مصرف توکن بر اساس ورودی و خروجی نشست‌ها.'],
          ['Harness comparison', 'مقایسهٔ کیفیت، سرعت و هزینهٔ دو harness روی یک کار.'],
          ['Data policy', 'قواعد نگهداری و آموزش مدل با دادهٔ ارسالی.'],
          ['Day-one setup', 'تنظیمات پیشنهادی برای شروع کار در یک تیم.'],
        ],
        steps: {
          fa: [
            'از ai-log.md فهرست ابزارها و مدل‌ها را جمع کن و هزینه یا توکن را تخمین بزن.',
            'بهترین کمک و بدترین خطا را با یک نمونهٔ مشخص بنویس.',
            'تنظیمات روز اول را با دلیل هر انتخاب فهرست کن.',
            'یک کار یکسان را در دو harness اجرا کن و کیفیت، سرعت و هزینه را مقایسه کن.',
          ],
          en: [
            'Collect tools and models from ai-log.md and estimate tokens or cost.',
            'Write the best contribution and the worst mistake with one concrete example.',
            'List the day-one setup with a reason for each choice.',
            'Run the same task in two harnesses and compare quality, speed, and cost.',
          ],
        },
        example: {
          code: '## AI report\nTools: opencode with a free model\nCost: about 120k tokens across the capstone\nThe best help: generated types from JSON\nThe worst mistake: invented a package that does not exist',
          explanation: {
            fa: 'گزارش صادقانه با نمونه، ارزش بیشتری از فهرست تعریف‌ها دارد.',
            en: 'An honest report with examples is worth more than a list of definitions.',
          },
        },
        practice: {
          fa: 'گزارش را با داده‌های واقعی ai-log.md بنویس و کاری که AI انجام نداد را هم ذکر کن.',
          en: 'Write the report from real ai-log.md data and mention work AI did not do.',
        },
        quiz: {
          question: {
            fa: 'گزارش AI باید چه چیزی را هم شامل شود؟',
            en: 'What should the AI report also include?',
          },
          options: {
            fa: ['بدترین اشتباه AI و شاهد آن', 'فقط فهرست مدل‌ها', 'فقط هزینه'],
            en: ['The worst AI mistake and its evidence', 'Only a model list', 'Only the cost'],
          },
          answer: 0,
          explanation: {
            fa: 'اعتراف به خطا و بررسی آن، نشانهٔ بلوغ در استفاده از ابزار است.',
            en: 'Acknowledging and examining mistakes shows maturity in tool use.',
          },
        },
      },
      {
        id: 'w16-gate3',
        day: '۵',
        title: { fa: 'دروازهٔ ۳: دموی زنده', en: 'Gate 3: Live Demo and Live Change' },
        summary: {
          fa: 'پنجشنبه ۱۱ فوریه · کپ‌استون را زنده نشان بده، تغییری کوچک اعمال کن و آستانه‌های Lighthouse را ثابت کن.',
          en: 'Thu 11 Feb · Demo the capstone live, apply a small change, and prove the Lighthouse thresholds.',
        },
        duration: 240,
        goals: {
          fa: [
            'کپ‌استون را زنده و بدون کمک AI نمایش بدهی.',
            'تغییری کوچک را در حضور گروه اعمال کنی و هر خط آن را توضیح بدهی.',
            'کارایی ۸۰+ و دسترس‌پذیری ۹۰+ را روی URL زنده ثابت کنی.',
            'دروازهٔ ۳ را با ۷۵+ و تغییر زندهٔ موفق پاس کنی.',
          ],
          en: [
            'Demo the capstone live without AI assistance.',
            'Apply a small change in front of the group and explain every line.',
            'Prove performance 80+ and accessibility 90+ on the live URL.',
            'Pass Gate 3 with 75+ and a successful live change.',
          ],
        },
        terms: [
          ['Gate 3', 'دروازهٔ پایانی با دموی زنده و تغییر کد در حضور گروه.'],
          ['Live demo', 'نمایش کارکرد واقعی محصول روی URL زنده.'],
          ['Live change', 'تغییر کوچک در زمان محدود برای اثبات مالکیت کد.'],
          ['Ownership', 'توانایی توضیح و تغییر هر خط از کدی که تحویل داده‌ای.'],
          ['Threshold', 'حداقل امتیاز یا متریک لازم برای عبور.'],
        ],
        steps: {
          fa: [
            'دمو را با مسیر اصلی محصول و یک حالت خطا تمرین کن.',
            'یک تغییر کوچک را از پیش انتخاب کن و در حین دمو آن را اعمال کن.',
            'گزارش Lighthouse را روی URL زنده نشان بده.',
            'هر خط تغییر را توضیح بده و اگر پرسشی بود با شاهد پاسخ بده.',
          ],
          en: [
            'Rehearse the demo with the main product path and one error state.',
            'Choose a small change in advance and apply it during the demo.',
            'Show the Lighthouse report on the live URL.',
            'Explain every changed line and answer questions with evidence.',
          ],
        },
        example: {
          code: 'Live demo -> main flow -> one error state\nLive change -> small component text or behavior edit\nLighthouse -> performance 80+, accessibility 90+\nExplain -> why this change is safe',
          explanation: {
            fa: 'هدف اثبات مالکیت است؛ تغییر کوچک و توضیح روشن از تغییر بزرگ و بی‌توضیح ارزشمندتر است.',
            en: 'The goal is proof of ownership; a small change with a clear explanation beats a big unexplained one.',
          },
        },
        practice: {
          fa: 'یک دموی تمرینی با زمان‌سنج انجام بده و مسیر تغییر زنده را دو بار تکرار کن.',
          en: 'Do one timed practice demo and repeat the live change path twice.',
        },
        quiz: {
          question: {
            fa: 'اگر تغییر زنده در دروازهٔ ۳ شکست بخورد چه می‌شود؟',
            en: 'What happens if the live change fails in Gate 3?',
          },
          options: {
            fa: [
              'دروازه پاس نمی‌شود، حتی اگر پروژه کار کند',
              'فقط نمرهٔ پروژه کم می‌شود',
              'دوباره خودکار پاس می‌شود',
            ],
            en: [
              'The gate is not passed, even if the project works',
              'Only the project score drops',
              'It passes again automatically',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'تغییر زنده ثابت می‌کند کد مال توست؛ بدون آن، کارکرد پروژه کافی نیست.',
            en: 'The live change proves the code is yours; without it, a working project is not enough.',
          },
        },
      },
    ],
  },
];
