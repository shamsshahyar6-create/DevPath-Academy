export const weeks09to13 = [
  {
    id: 'week-9',
    number: '09',
    title: { fa: 'React Router و Context', en: 'React Router and Context' },
    subtitle: {
      fa: 'فاز ۲ · مسیرها، پارامترهای URL و یک Context مشترک برای پوستهٔ سایت.',
      en: 'Phase 2 · Routes, URL parameters, and one shared Context for the site theme.',
    },
    outcome: {
      fa: 'در پایان هفته یک اپ کامل کشورها با صفحهٔ فهرست، صفحهٔ کشور، فیلترهای URL و پوستهٔ تاریک داری.',
      en: 'Finish with a complete countries app: list page, country page, URL filters, and dark mode.',
    },
    lessons: [
      {
        id: 'w9-countries',
        day: '۱',
        title: { fa: 'API کشورها با تغییر پوسته', en: 'REST Countries API with Theme Switcher' },
        summary: {
          fa: 'چهارشنبه ۲۳ دسامبر · یک پروژهٔ بزرگ با createBrowserRouter، صفحهٔ پویا و useSearchParams.',
          en: 'Wed 23 Dec · One major project with createBrowserRouter, dynamic pages, and useSearchParams.',
        },
        duration: 300,
        goals: {
          fa: [
            'همهٔ کشورها را بارگیری کنی و جست‌وجو و فیلتر منطقه را با هم به کار ببری.',
            'برای هر کشور مسیر پویا با useParams بسازی و کشورهای همسایه را لینک کنی.',
            'جست‌وجو و منطقه را در URL نگه داری تا رفرش آن‌ها را از دست ندهد.',
            'حالت بارگذاری، خالی و خطا را در صفحهٔ فهرست و صفحهٔ کشور نشان بدهی.',
          ],
          en: [
            'Load all countries and combine name search with a region filter.',
            'Build a dynamic route with useParams and link border countries.',
            'Keep search and region in the URL so a refresh preserves them.',
            'Show loading, empty, and error states on both the list and country pages.',
          ],
        },
        terms: [
          [
            'createBrowserRouter',
            'مسیریاب داده‌محور React Router که مسیرها را به‌صورت آبجکت تعریف می‌کند.',
          ],
          ['useParams', 'پارامترهای پویای مسیر، مثل کد کشور در /country/:code را می‌خواند.'],
          ['useSearchParams', 'خواندن و نوشتن query string؛ منبع حقیقت برای جست‌وجو و فیلتر.'],
          ['Outlet', 'جای رندر زیرمسیرها در یک layout مشترک با سربرگ ثابت.'],
          ['useDebounce', 'تأخیر کوتاه پیش از اجرای جست‌وجو تا با هر کلید درخواست ساخته نشود.'],
        ],
        steps: {
          fa: [
            'مسیرهای / و /country/:code و یک not-found را با createBrowserRouter تعریف کن.',
            'صفحهٔ فهرست را با کارت کشورها و حالت loading و error بساز.',
            'صفحهٔ کشور را با useParams، دادهٔ مرزی و لینک کشورهای همسایه پیاده کن.',
            'جست‌وجو و منطقه را با useSearchParams در URL بنویس و جست‌وجو را debounce کن.',
            'پوسته را با Context و localStorage نگه دار؛ شبکه را قطع کن و حالت خطا را ببین.',
          ],
          en: [
            'Define / and /country/:code plus a not-found route with createBrowserRouter.',
            'Build the list page with country cards, loading, and error states.',
            'Implement the country page with useParams, border data, and border links.',
            'Write search and region to the URL with useSearchParams and debounce search.',
            'Keep the theme in Context and localStorage, then cut the network to test errors.',
          ],
        },
        example: {
          code: 'const router = createBrowserRouter([\n  {\n    path: "/",\n    element: <Layout />,\n    children: [\n      { index: true, element: <Countries /> },\n      { path: "country/:code", element: <Country /> },\n    ],\n  },\n]);',
          explanation: {
            fa: 'Layout با Outlet زیرمسیرها را نشان می‌دهد؛ پارامتر code در صفحهٔ کشور با useParams خوانده می‌شود.',
            en: 'Layout renders children through Outlet, and the country page reads code with useParams.',
          },
        },
        practice: {
          fa: 'پروژه را کامل کن، فیلترها را در URL نگه دار و با قطع شبکه هر دو صفحه را در حالت خطا ببین.',
          en: 'Finish the project, keep filters in the URL, and cut the network to inspect both error states.',
        },
        quiz: {
          question: {
            fa: 'کدام hook جست‌وجو و فیلتر را پس از رفرش حفظ می‌کند؟',
            en: 'Which hook keeps search and filters after a refresh?',
          },
          options: {
            fa: ['useSearchParams', 'useParams', 'useRef'],
            en: ['useSearchParams', 'useParams', 'useRef'],
          },
          answer: 0,
          explanation: {
            fa: 'useSearchParams مقدارها را در URL می‌گذارد، پس رفرش و اشتراک لینک هر دو کار می‌کنند.',
            en: 'useSearchParams stores values in the URL, so refresh and link sharing both work.',
          },
        },
      },
      {
        id: 'w9-loaders-errors',
        day: '۲',
        title: {
          fa: 'loader مسیر، error boundary و صفحهٔ ۴۰۴',
          en: 'Route Loaders, Error Boundaries & 404',
        },
        summary: {
          fa: 'پنجشنبه ۲۴ دسامبر · داده را پیش از رندر با loader آماده کن و خطا و مسیر ناموجود را درست نشان بده.',
          en: 'Thu 24 Dec · Prepare data before render with a loader and handle errors and unknown routes properly.',
        },
        duration: 120,
        goals: {
          fa: [
            'دادهٔ لازم یک مسیر را با loader پیش از رندر آماده کنی.',
            'برای خطای مسیر errorElement و useRouteError بسازی.',
            'خطای ۴۰۴ و خطای شبکه را از هم جدا کنی.',
            'حالت بارگذاری و خطا را با قطع شبکه آزمایش کنی.',
          ],
          en: [
            'Prepare route data before render with a loader.',
            'Build errorElement and useRouteError for route errors.',
            'Tell a 404 apart from a network error.',
            'Test loading and error states with the network blocked.',
          ],
        },
        terms: [
          [
            'loader',
            'تابع مسیر که دادهٔ لازم را پیش از رندر آماده می‌کند و نتیجه‌اش با useLoaderData خوانده می‌شود.',
          ],
          ['errorElement', 'کامپوننتی که وقتی loader یا رندر مسیر خطا می‌دهد نمایش داده می‌شود.'],
          ['useRouteError', 'hook خواندن خطای مسیر برای نمایش پیام و دکمهٔ تلاش دوباره.'],
          ['isRouteErrorResponse', 'تشخیص خطای پاسخ مسیر مثل ۴۰۴ از خطای برنامه.'],
          ['not-found route', 'مسیر اختصاصی برای URL ناشناخته با پیام و لینک بازگشت.'],
        ],
        steps: {
          fa: [
            'برای صفحهٔ کشور یک loader بنویس که کد مسیر را بگیرد و داده را برگرداند.',
            'در کامپوننت با useLoaderData داده را بخوان و skeleton بارگذاری بساز.',
            'یک errorElement با useRouteError اضافه کن و خطای ۴۰۴ را از خطای شبکه جدا کن.',
            'یک مسیر not-found بساز و لینک بازگشت به فهرست کشورها بگذار.',
            'شبکه را قطع کن و هر دو حالت خطا و بارگذاری را ببین و ثبت کن.',
          ],
          en: [
            'Write a loader for the country page that reads the route code and returns its data.',
            'Read the data with useLoaderData and build a loading skeleton.',
            'Add an errorElement with useRouteError and separate a 404 from a network error.',
            'Create a not-found route with a link back to the country list.',
            'Block the network, inspect both the error and loading states, and record what you saw.',
          ],
        },
        example: {
          code: "{\n  path: 'country/:code',\n  loader: ({ params }) => fetchCountry(params.code),\n  element: <Country />,\n  errorElement: <CountryError />,\n}",
          explanation: {
            fa: 'loader داده را پیش از نمایش صفحه آماده می‌کند و errorElement خطای همان مسیر را در جای خودش نشان می‌دهد.',
            en: 'The loader prepares data before the page shows, and errorElement displays that route’s error in place.',
          },
        },
        practice: {
          fa: 'برای دو صفحهٔ فهرست و کشور loader و errorElement بساز و خطای ۴۰۴ و شبکه را با هم مقایسه کن.',
          en: 'Add loaders and errorElement to the list and country pages, then compare a 404 with a network failure.',
        },
        quiz: {
          question: {
            fa: 'loader مسیر چه کاری انجام می‌دهد؟',
            en: 'What does a route loader do?',
          },
          options: {
            fa: [
              'دادهٔ مسیر را پیش از رندر آماده می‌کند',
              'فایل CSS را بارگیری می‌کند',
              'برای مسیر تست خودکار می‌نویسد',
            ],
            en: [
              'It prepares route data before render',
              'It downloads the CSS file',
              'It writes automated tests for the route',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'loader داده را قبل از نمایش کامپوننت آماده می‌کند؛ کامپوننت فقط آن را با useLoaderData می‌خواند.',
            en: 'The loader prepares data before the component shows; the component only reads it with useLoaderData.',
          },
        },
      },
      {
        id: 'w9-url-state',
        day: '۳',
        title: {
          fa: 'layout تودرتو، state در URL و Context مشترک',
          en: 'Nested Layouts, URL State & Shared Context',
        },
        summary: {
          fa: 'پنجشنبه ۲۴ دسامبر · یک layout مشترک با Outlet بساز و فیلترها و پوسته را بدون state تکراری هماهنگ نگه دار.',
          en: 'Thu 24 Dec · Build a shared layout with Outlet and keep filters and theme aligned without duplicate state.',
        },
        duration: 120,
        goals: {
          fa: [
            'مسیرهای تودرتو با layout و Outlet بسازی.',
            'جست‌وجو و فیلتر را در URL نگه داری و با useSearchParams بخوانی.',
            'پوسته را با Context و localStorage به اشتراک بگذاری.',
            'تفاوت state محلی، state در URL و state سراسری را توضیح بدهی.',
          ],
          en: [
            'Build nested routes with a layout and Outlet.',
            'Keep search and filter values in the URL and read them with useSearchParams.',
            'Share the theme through Context and localStorage.',
            'Explain the difference between local state, URL state, and global state.',
          ],
        },
        terms: [
          ['nested route', 'مسیری که داخل یک مسیر والد رندر می‌شود و layout مشترک را نگه می‌دارد.'],
          ['Outlet', 'جای نمایش زیرمسیرها در کامپوننت layout.'],
          ['useSearchParams', 'خواندن و نوشتن query string برای نگه‌داشتن فیلترها در URL.'],
          ['Context provider', 'کامپوننتی که یک مقدار را بدون prop drilling به درخت پایین می‌دهد.'],
          ['custom hook', 'تابع use... که منطق مشترک مثل خواندن پوسته را جمع می‌کند.'],
          ['URL as state', 'نگه‌داشتن state قابل‌اشتراک در URL به‌جای حافظهٔ کامپوننت.'],
        ],
        steps: {
          fa: [
            'یک layout با هدر، Outlet و فوتر بساز و صفحهٔ فهرست و جزئیات را داخل آن بگذار.',
            'جست‌وجو و منطقه را با useSearchParams بخوان و با تغییر فرم در URL بنویس.',
            'Context پوسته را بساز، مقدار اولیه را از localStorage بگیر و تغییر را ذخیره کن.',
            'یک custom hook برای خواندن و تغییر پوسته بنویس تا هر کامپوننت از یک منبع بخواند.',
            'لینک یک فیلتر را کپی کن، در تب تازه باز کن و مطمئن شو همان نتیجه و پوسته را می‌بینی.',
          ],
          en: [
            'Build a layout with a header, Outlet, and footer, and place the list and detail pages inside it.',
            'Read search and region with useSearchParams and write them back to the URL when the form changes.',
            'Create the theme Context with an initial value from localStorage and save changes.',
            'Write a custom hook for reading and changing the theme so every component reads one source.',
            'Copy a filtered link, open it in a new tab, and confirm the same result and theme appear.',
          ],
        },
        example: {
          code: "const [params, setParams] = useSearchParams();\nconst query = params.get('q') ?? '';\n\nfunction updateQuery(value: string) {\n  const next = new URLSearchParams(params);\n  next.set('q', value);\n  setParams(next);\n}",
          explanation: {
            fa: 'فیلتر در URL زندگی می‌کند؛ پس رفرش، دکمهٔ back و اشتراک لینک همه همان وضعیت را نگه می‌دارند.',
            en: 'The filter lives in the URL, so refresh, the back button, and link sharing all preserve the same state.',
          },
        },
        practice: {
          fa: 'layout مشترک و Context پوسته را بساز، دو فیلتر را در URL نگه دار و با تب تازه و دکمهٔ back آزمایش کن.',
          en: 'Build the shared layout and theme Context, keep two filters in the URL, and test with a new tab and the back button.',
        },
        quiz: {
          question: {
            fa: 'چرا فیلترها را در URL نگه می‌داریم؟',
            en: 'Why keep filters in the URL?',
          },
          options: {
            fa: [
              'تا بعد از رفرش و با اشتراک لینک باقی بمانند',
              'تا درخواست شبکه سریع‌تر شود',
              'چون Context بدون URL کار نمی‌کند',
            ],
            en: [
              'So they survive refresh and link sharing',
              'To make the network request faster',
              'Because Context does not work without a URL',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'URL یک منبع state قابل‌اشتراک و قابل‌بازیابی است؛ رفرش و لینک هر دو همان نتیجه را می‌دهند.',
            en: 'The URL is a shareable, restorable state source; refresh and links both produce the same result.',
          },
        },
      },
      {
        id: 'w9-pre-pr',
        day: '۴',
        title: { fa: 'آزمایشگاه AI: فرمان ‎/pre-pr', en: 'AI Lab: A /pre-pr Command' },
        summary: {
          fa: 'چهارشنبه ۲۳ دسامبر · یک فرمان بساز که git diff را با Core و AGENTS.md بسنجد.',
          en: 'Wed 23 Dec · Build a command that checks your git diff against Core requirements and AGENTS.md.',
        },
        duration: 60,
        goals: {
          fa: [
            'یک فرمان قابل اجرا با ‎/pre-pr بسازی که تغییرهای جاری را مرور کند.',
            'یافته‌ها را به شکل file:line و بر اساس Core و قواعد پروژه بنویسی.',
            'فرمان را پیش از باز کردن PR پروژهٔ کشورها اجرا کنی.',
          ],
          en: [
            'Create a runnable /pre-pr command that reviews current changes.',
            'Report findings as file:line against Core requirements and project rules.',
            'Run it before opening the countries project pull request.',
          ],
        },
        terms: [
          ['Custom command', 'پرامپت ذخیره‌شده‌ای که با ‎/name به‌صورت دستی اجرا می‌شود.'],
          ['git diff', 'تفاوت تغییرهای جاری با آخرین commit؛ ورودی اصلی مرور پیش از PR.'],
          ['AGENTS.md', 'فایل قواعد پروژه که فرمان باید آن را بخواند و رعایت کند.'],
          ['file:line finding', 'قالب گزارش یافته: مسیر فایل، شمارهٔ خط، مشکل و پیشنهاد اصلاح.'],
        ],
        steps: {
          fa: [
            'فایل فرمان را کنار پروژه بساز و هدف و قالب گزارش را در آن بنویس.',
            'فرمان را روی git diff اجرا کن و ببین آیا Core را پوشش می‌دهد.',
            'یک آرگومان برای نام پروژه اضافه کن تا گزارش دقیق‌تر شود.',
            'در دو جمله بنویس چه زمانی فرمان می‌نویسی و چه زمانی skill.',
          ],
          en: [
            'Create the command file next to the project with its goal and report format.',
            'Run the command on git diff and check that it covers Core requirements.',
            'Add an argument for the project name so the report is more specific.',
            'Explain in two sentences when you write a command and when you write a skill.',
          ],
        },
        example: {
          code: 'Review the current git diff.\nCheck every Core requirement and every rule in AGENTS.md.\nList findings as file:line: problem -> fix.\nDo not edit files.',
          explanation: {
            fa: 'فرمان فقط مرور می‌کند؛ اصلاح را خودت انجام می‌دهی و دوباره اجرا می‌کنی.',
            en: 'The command only reviews; you make the fixes and run it again.',
          },
        },
        practice: {
          fa: 'فرمان را پیش از PR اجرا کن، یافته‌ها را اصلاح کن و خروجی پیش و پس را در ai-log.md بنویس.',
          en: 'Run the command before the PR, fix the findings, and log the before and after in ai-log.md.',
        },
        quiz: {
          question: {
            fa: 'کار اصلی فرمان pre-pr چیست؟',
            en: 'What is the main job of the pre-pr command?',
          },
          options: {
            fa: [
              'مرور تغییرها بر اساس قواعد پروژه',
              'انتشار خودکار روی Vercel',
              'نوشتن همهٔ تست‌ها',
            ],
            en: [
              'Review changes against project rules',
              'Deploy automatically to Vercel',
              'Write all tests',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'این فرمان یک مرور تکرارپذیر پیش از PR است، نه انتشار یا تولید تست.',
            en: 'It is a repeatable pre-PR review, not a deployment or test generator.',
          },
        },
      },
    ],
  },
  {
    id: 'week-10',
    number: '10',
    title: { fa: 'TanStack Query', en: 'TanStack Query' },
    subtitle: {
      fa: 'فاز ۲ · دادهٔ سرور را با useQuery و useMutation مدیریت کن و useEffect را از واکشی داده حذف کن.',
      en: 'Phase 2 · Manage server data with useQuery and useMutation, and remove data fetching from useEffect.',
    },
    outcome: {
      fa: 'در پایان هفته اپ آب‌وهوا با کش قابل‌مشاهده و صفحهٔ کوتاه‌کنندهٔ لینک با mutation و invalidation داری.',
      en: 'Finish with a weather app showing cache behavior and a link shortener built on mutations and invalidation.',
    },
    lessons: [
      {
        id: 'w10-weather',
        day: '۱',
        title: { fa: 'اپ آب‌وهوا با TanStack Query', en: 'Weather App with TanStack Query' },
        summary: {
          fa: 'دوشنبه ۲۸ دسامبر · آب‌وهوا با useQuery، کلید مکان و کش قابل‌مشاهده در Query Devtools.',
          en: 'Mon 28 Dec · Weather with useQuery, a location key, and visible caching in Query Devtools.',
        },
        duration: 210,
        goals: {
          fa: [
            'دادهٔ آب‌وهوا را با useQuery و کلید ["weather", location] بگیری.',
            'حالت بارگذاری، خطا و داده را از فلگ‌های Query بخوانی.',
            'هیچ useEffect برای واکشی داده نداشته باشی.',
            'بازگشت به شهر قبلی را فوراً از کش نشان بدهی و خطا را با retry بازیابی کنی.',
          ],
          en: [
            'Fetch weather with useQuery keyed by ["weather", location].',
            'Read loading, error, and data states from Query flags.',
            'Use zero useEffect for data fetching.',
            'Show the previous city instantly from cache and recover errors with retry.',
          ],
        },
        terms: [
          ['useQuery', 'hook خواندن دادهٔ سرور با حالت‌ها و کش خودکار.'],
          ['queryKey', 'کلید یکتا برای هر داده؛ تغییر مکان یعنی تغییر کلید.'],
          ['Cache', 'نسخهٔ ذخیره‌شدهٔ پاسخ که بازگشت به دادهٔ قبلی را فوری می‌کند.'],
          ['Query Devtools', 'پنل مشاهدهٔ وضعیت queryها، کش و refetch.'],
          ['staleTime', 'مدتی که داده تازه در نظر گرفته می‌شود و دوباره واکشی نمی‌شود.'],
        ],
        steps: {
          fa: [
            'QueryClientProvider را در ریشهٔ اپ اضافه کن و Devtools را در حالت توسعه روشن کن.',
            'تابع fetchWeather را در ماژول API بنویس و تایپ پاسخ را مشخص کن.',
            'فرم جست‌وجو را به کلید query وصل کن تا شهر جدید کلید جدید بسازد.',
            'حالت خطا را با دکمهٔ retry و حالت واحد متریک/امپریال را اضافه کن.',
          ],
          en: [
            'Add QueryClientProvider at the app root and enable Devtools in development.',
            'Write fetchWeather in an API module and type the response.',
            'Connect the search form to the query key so a new city creates a new key.',
            'Add an error state with retry and a metric/imperial unit toggle.',
          ],
        },
        example: {
          code: 'const { data, isPending, isError, refetch } = useQuery({\n  queryKey: ["weather", location],\n  queryFn: () => fetchWeather(location),\n  enabled: Boolean(location),\n});',
          explanation: {
            fa: 'کلید شامل مکان است؛ با تغییر مکان، Query دادهٔ درست را از کش یا شبکه می‌آورد.',
            en: 'The key includes the location, so a change selects the right data from cache or network.',
          },
        },
        practice: {
          fa: 'دو شهر را جست‌وجو کن، به شهر اول برگرد و در Devtools نشان بده که از کش خوانده می‌شود.',
          en: 'Search two cities, return to the first, and show in Devtools that it renders from cache.',
        },
        quiz: {
          question: {
            fa: 'چرا کلید query باید مکان را شامل شود؟',
            en: 'Why should the query key include the location?',
          },
          options: {
            fa: [
              'تا هر مکان داده و کش جدا داشته باشد',
              'تا fetch سریع‌تر شود',
              'چون Devtools آن را اجباری می‌کند',
            ],
            en: [
              'So each location has separate data and cache',
              'To make fetch faster',
              'Because Devtools requires it',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'کلید هویت داده است؛ بدون مکان، همهٔ جست‌وجوها یک کش را به اشتراک می‌گذارند.',
            en: 'The key is the data identity; without location, every search shares one cache entry.',
          },
        },
      },
      {
        id: 'w10-shortening',
        day: '۲',
        title: { fa: 'صفحهٔ کوتاه‌کنندهٔ لینک', en: 'URL Shortening Landing Page' },
        summary: {
          fa: 'چهارشنبه ۳۰ دسامبر · کوتاه‌کردن لینک با useMutation، غیرفعال‌سازی هنگام pending و invalidateQueries.',
          en: 'Wed 30 Dec · Shorten links with useMutation, disable while pending, and invalidate the list query.',
        },
        duration: 180,
        goals: {
          fa: [
            'کوتاه‌کردن لینک را با useMutation انجام بدهی و دکمه را هنگام pending غیرفعال کنی.',
            'ورودی خالی را پیش از هر درخواست رد کنی و خطا را در همان‌جا نشان بدهی.',
            'فهرست لینک‌ها را با invalidateQueries تازه کنی، نه با push دستی در state.',
            'کپی در کلیپ‌بورد را با بازخورد «Copied!» پیاده کنی.',
          ],
          en: [
            'Shorten links with useMutation and disable the button while pending.',
            'Reject empty input before any request and show inline errors.',
            'Refresh the link list with invalidateQueries instead of pushing into state by hand.',
            'Copy to clipboard with a visible Copied! feedback.',
          ],
        },
        terms: [
          ['useMutation', 'hook تغییر دادهٔ سرور؛ وضعیت pending و error را می‌دهد.'],
          ['invalidateQueries', 'اعلام که دادهٔ یک query کهنه است تا دوباره واکشی شود.'],
          ['Pending state', 'وضعیت در حال ارسال؛ دکمه باید غیرفعال باشد.'],
          ['Refetch', 'واکشی دوبارهٔ داده پس از اینکه query کهنه شد.'],
          ['Clipboard API', 'رابط مرورگر برای کپی متن؛ نیاز به اجازه و بازخورد دارد.'],
        ],
        steps: {
          fa: [
            'فرم را با اعتبارسنجی ساده بساز و URL خالی یا نامعتبر را رد کن.',
            'mutation را بنویس و در onSuccess لیست را invalidate کن.',
            'دکمه را با isPending غیرفعال و پیام خطا را زیر فرم نشان بده.',
            'کپی را با navigator.clipboard و بازخورد موقت اضافه کن.',
          ],
          en: [
            'Build the form with simple validation that rejects empty or invalid URLs.',
            'Write the mutation and invalidate the list in onSuccess.',
            'Disable the button with isPending and show errors below the form.',
            'Add copy with navigator.clipboard and temporary feedback.',
          ],
        },
        example: {
          code: 'const mutation = useMutation({\n  mutationFn: shortenLink,\n  onSuccess: () => queryClient.invalidateQueries({ queryKey: ["links"] }),\n});\n<button disabled={mutation.isPending}>Shorten it!</button>',
          explanation: {
            fa: 'پس از موفقیت، فهرست را دوباره از سرور می‌خوانیم؛ state دستی و ناهماهنگ نمی‌سازیم.',
            en: 'After success we re-read the list from the server instead of building a second, stale state.',
          },
        },
        practice: {
          fa: 'لینک را کوتاه کن، در Devtools یک refetch ببین و با خطای شبکه مطمئن شو فهرست قبلی خراب نمی‌شود.',
          en: 'Shorten a link, watch a refetch in Devtools, and confirm a network error leaves the old list intact.',
        },
        quiz: {
          question: {
            fa: 'پس از موفقیت mutation، راه درست به‌روزرسانی فهرست چیست؟',
            en: 'After a successful mutation, what is the correct way to update the list?',
          },
          options: {
            fa: ['invalidate کردن query فهرست', 'push کردن آیتم در state جدا', 'رفرش کامل صفحه'],
            en: [
              'Invalidating the list query',
              'Pushing the item into separate state',
              'A full page refresh',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'invalidate باعث می‌شود منبع حقیقت همان query بماند و state تکراری ساخته نشود.',
            en: 'Invalidation keeps the query as the source of truth and avoids duplicate state.',
          },
        },
      },
      {
        id: 'w10-optimistic',
        day: '۳',
        title: {
          fa: 'به‌روزرسانی خوش‌بینانه و invalidation کش',
          en: 'Optimistic Updates & Cache Invalidation',
        },
        summary: {
          fa: 'چهارشنبه ۳۰ دسامبر · رابط را پیش از پاسخ سرور به‌روز کن، در خطا آن را برگردان و کش را دقیق تازه کن.',
          en: 'Wed 30 Dec · Update the UI before the server responds, roll it back on error, and refresh the cache precisely.',
        },
        duration: 120,
        goals: {
          fa: [
            'یک mutation خوش‌بینانه با onMutate و snapshot از کش بنویسی.',
            'در onError تغییر خوش‌بینانه را برگردانی و خطا را نشان بدهی.',
            'در onSettled فقط queryهای مرتبط را invalidate کنی.',
            'تفاوت invalidation و setQueryData را با یک مثال توضیح بدهی.',
          ],
          en: [
            'Write an optimistic mutation with onMutate and a cache snapshot.',
            'Roll back the optimistic change in onError and show the error.',
            'Invalidate only the related queries in onSettled.',
            'Explain the difference between invalidation and setQueryData with one example.',
          ],
        },
        terms: [
          ['optimistic update', 'نمایش نتیجهٔ مورد انتظار پیش از تأیید سرور برای پاسخ فوری‌تر.'],
          ['rollback', 'برگرداندن state قبلی وقتی درخواست شکست می‌خورد.'],
          ['onMutate', 'محل آماده‌سازی تغییر خوش‌بینانه و گرفتن snapshot از کش.'],
          ['onError', 'محل برگرداندن تغییر خوش‌بینانه و نمایش خطا.'],
          ['onSettled', 'محل تازه‌کردن کش، چه درخواست موفق باشد چه ناموفق.'],
          ['setQueryData', 'نوشتن مستقیم داده در کش وقتی نتیجه را دقیق می‌دانی.'],
        ],
        steps: {
          fa: [
            'queryClient را از useQueryClient بگیر و در onMutate از query فهرست snapshot بساز.',
            'در onMutate کش را با setQueryData به‌روز کن تا UI فوراً تغییر کند.',
            'در onError snapshot را برگردان و پیام خطا را کنار فرم نشان بده.',
            'در onSettled فقط query فهرست را invalidate کن و از refetch همهٔ queryها پرهیز کن.',
            'با قطع شبکه یک mutation را شکست بده و برگشت UI را ببین و ثبت کن.',
          ],
          en: [
            'Get queryClient from useQueryClient and take a snapshot of the list query in onMutate.',
            'In onMutate, update the cache with setQueryData so the UI changes immediately.',
            'In onError, restore the snapshot and show an error next to the form.',
            'In onSettled, invalidate only the list query and avoid refetching every query.',
            'Fail a mutation with the network blocked, watch the UI roll back, and record what happened.',
          ],
        },
        example: {
          code: "useMutation({\n  mutationFn: addLink,\n  onMutate: async (link) => {\n    await queryClient.cancelQueries({ queryKey: ['links'] });\n    const previous = queryClient.getQueryData(['links']);\n    queryClient.setQueryData(['links'], (old = []) => [...old, link]);\n    return { previous };\n  },\n  onError: (_error, _link, context) => {\n    queryClient.setQueryData(['links'], context?.previous);\n  },\n  onSettled: () => queryClient.invalidateQueries({ queryKey: ['links'] }),\n});",
          explanation: {
            fa: 'snapshot قبل از تغییر گرفته می‌شود؛ اگر درخواست شکست بخورد همان snapshot برمی‌گردد و در پایان کش با سرور هماهنگ می‌شود.',
            en: 'The snapshot is taken before the change; if the request fails it is restored, and at the end the cache is reconciled with the server.',
          },
        },
        practice: {
          fa: 'افزودن لینک را خوش‌بینانه کن، با قطع شبکه خطا بساز، برگشت UI را ببین و سپس حالت موفق را آزمایش کن.',
          en: 'Make adding a link optimistic, force an error with the network blocked, watch the rollback, then test the success path.',
        },
        quiz: {
          question: {
            fa: 'اگر mutation خوش‌بینانه خطا بدهد چه باید شود؟',
            en: 'What should happen when an optimistic mutation fails?',
          },
          options: {
            fa: [
              'تغییر خوش‌بینانه باید با snapshot قبلی برگردد',
              'صفحه باید کامل رفرش شود',
              'کش باید پاک شود و هیچ پیامی نشان داده نشود',
            ],
            en: [
              'The optimistic change should roll back to the previous snapshot',
              'The page should fully refresh',
              'The cache should be cleared with no message',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'UI نباید نتیجهٔ ناموفق را نگه دارد؛ snapshot قبلی منبع درست برگشت است و پیام خطا کاربر را آگاه می‌کند.',
            en: 'The UI must not keep a failed result; the previous snapshot is the correct rollback and an error message informs the user.',
          },
        },
      },
      {
        id: 'w10-mcp-docs',
        day: '۴',
        title: {
          fa: 'آزمایشگاه AI: مستندات تازه با MCP',
          en: 'AI Lab: Up-to-Date Docs through MCP',
        },
        summary: {
          fa: 'چهارشنبه ۳۰ دسامبر · Context7 MCP را وصل کن و پاسخ با و بدون سرور را با مستندات رسمی بسنج.',
          en: 'Wed 30 Dec · Add the Context7 MCP server and compare answers with and without it against official docs.',
        },
        duration: 60,
        goals: {
          fa: [
            'سرور Context7 را به opencode اضافه کنی و از آن دربارهٔ invalidation در TanStack Query بپرسی.',
            'پاسخ با سرور روشن و خاموش را با مستندات رسمی مقایسه کنی.',
            'توضیح بدهی چرا هر MCP روشن، حتی بدون فراخوانی، توکن context مصرف می‌کند.',
          ],
          en: [
            'Add the Context7 MCP server and ask about invalidation in TanStack Query.',
            'Compare answers with the server on and off against the official docs.',
            'Explain why every enabled MCP consumes context tokens even when unused.',
          ],
        },
        terms: [
          ['MCP', 'پروتکل استاندارد اتصال ابزارها و دادهٔ بیرونی به harness.'],
          ['Context7', 'سرور MCP برای آوردن مستندات به‌روز کتابخانه‌ها.'],
          ['Tool call', 'فراخوانی ابزار سرور MCP توسط مدل برای گرفتن داده.'],
          ['Context budget', 'ظرفیت محدود context؛ ابزارهای روشن بخشی از آن را می‌گیرند.'],
          ['Trust boundary', 'هر سرور خارجی باید قابل‌اعتماد باشد؛ فقط سرور لازم را روشن کن.'],
        ],
        steps: {
          fa: [
            'سرور Context7 را در تنظیمات opencode اضافه کن و ابزارهایش را ببین.',
            'سؤال invalidation را یک‌بار بدون سرور و یک‌بار با سرور بپرس.',
            'هر دو پاسخ را با مستندات رسمی TanStack Query بررسی کن.',
            'سرور را خاموش کن و بنویس چه زمانی روشن‌کردنش ارزش دارد.',
          ],
          en: [
            'Add Context7 in opencode settings and list the tools it provides.',
            'Ask the invalidation question once without the server and once with it.',
            'Check both answers against the official TanStack Query docs.',
            'Turn the server off and write when enabling it is worth the cost.',
          ],
        },
        example: {
          code: 'Ask: How does invalidateQueries work in TanStack Query v5?\nCheck: official TanStack Query docs.\nCompare: answer without MCP vs answer with Context7.',
          explanation: {
            fa: 'هدف مقایسهٔ کیفیت پاسخ است، نه اعتماد کورکورانه به ابزار.',
            en: 'The goal is to compare answer quality, not to trust a tool blindly.',
          },
        },
        practice: {
          fa: 'یک جدول کوتاه بنویس: پاسخ بدون سرور، پاسخ با سرور، و اینکه کدام با مستندات هم‌خوان بود.',
          en: 'Write a short table: answer without the server, with it, and which matched the docs.',
        },
        quiz: {
          question: {
            fa: 'چرا MCP روشن ولی بی‌استفاده هم هزینه دارد؟',
            en: 'Why does an enabled but unused MCP still cost tokens?',
          },
          options: {
            fa: [
              'تعریف ابزارهایش بخشی از context را می‌گیرد',
              'همیشه خودش سؤال می‌پرسد',
              'کد پروژه را تغییر می‌دهد',
            ],
            en: [
              'Its tool definitions occupy part of the context',
              'It always asks questions itself',
              'It edits project code',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'توضیح ابزارها در هر نشست به مدل داده می‌شود؛ پس فقط سرورهای لازم را روشن نگه دار.',
            en: 'Tool descriptions are provided every session, so keep only the necessary servers enabled.',
          },
        },
      },
    ],
  },
  {
    id: 'week-11',
    number: '11',
    title: { fa: 'TanStack Router', en: 'TanStack Router' },
    subtitle: {
      fa: 'فاز ۲ · مسیرهای فایل‌محور تایپ‌شده، پارامترهای جست‌وجوی معتبر و loader مبتنی بر Query.',
      en: 'Phase 2 · Type-safe file routes, validated search params, and loaders backed by Query.',
    },
    outcome: {
      fa: 'در پایان هفته اپ Devjobs با مسیرهای تایپ‌شده، فیلترهای URL و صفحهٔ جزئیات مبتنی بر loader داری.',
      en: 'Finish with a Devjobs app using typed routes, URL filters, and a loader-backed detail page.',
    },
    lessons: [
      {
        id: 'w11-devjobs',
        day: '۱',
        title: { fa: 'اپ Devjobs با TanStack Router', en: 'Devjobs Web App with TanStack Router' },
        summary: {
          fa: 'چهارشنبه ۶ ژانویه · یک پروژهٔ بزرگ با مسیرهای فایل‌محور، validateSearch و Query در loader.',
          en: 'Wed 6 Jan · One major project with file routes, validateSearch, and Query in a loader.',
        },
        duration: 360,
        goals: {
          fa: [
            'مسیرهای فهرست و جزئیات شغل را با ساختار فایل‌محور بسازی.',
            'فیلترها را با validateSearch تایپ‌شده و ماندگار پس از رفرش نگه داری.',
            'دادهٔ صفحهٔ شغل را با loader و TanStack Query بیاوری.',
            'همهٔ Linkها را تایپ‌شده بسازی و حالت pending، خطا و not-found را نشان بدهی.',
          ],
          en: [
            'Build list and job detail routes with the file-based structure.',
            'Keep filters typed and persistent with validateSearch.',
            'Load job detail data through a loader backed by TanStack Query.',
            'Use type-safe Links and show pending, error, and not-found states.',
          ],
        },
        terms: [
          ['File-based routing', 'مسیرها از ساختار پوشه‌ها ساخته می‌شوند؛ نام فایل یعنی URL.'],
          ['validateSearch', 'اعتبارسنجی و تایپ پارامترهای جست‌وجو در TanStack Router.'],
          ['Loader', 'تابعی که دادهٔ لازم مسیر را پیش از رندر آماده می‌کند.'],
          ['Type-safe Link', 'لینکی که مسیر و پارامترهایش در زمان کامپایل بررسی می‌شوند.'],
          ['Search params', 'وضعیت فیلترها در URL؛ قابل اشتراک و مقاوم به رفرش.'],
        ],
        steps: {
          fa: [
            'ساختار مسیرها را بساز: فهرست، جزئیات /jobs/$jobId و not-found.',
            'صفحهٔ فهرست را با جست‌وجو، مکان و چک‌باکس تمام‌وقت پیاده کن.',
            'validateSearch را بنویس و فیلترها را در URL ذخیره کن.',
            'loader صفحهٔ شغل را به Query وصل کن و حالت‌های pending و error را بساز.',
            'Load more را به‌صورت page در URL نگه دار و پوسته را ذخیره کن.',
          ],
          en: [
            'Create the routes: list, /jobs/$jobId detail, and not-found.',
            'Implement list search, location, and full-time checkbox filters.',
            'Write validateSearch and store filters in the URL.',
            'Connect the job loader to Query and build pending and error states.',
            'Keep Load more as a page search param and persist the theme.',
          ],
        },
        example: {
          code: 'export const Route = createFileRoute("/jobs/$jobId")({\n  validateSearch: (search) => jobSearchSchema.parse(search),\n  loader: ({ params }) => queryClient.ensureQueryData(jobQuery(params.jobId)),\n  component: JobPage,\n});',
          explanation: {
            fa: 'loader تضمین می‌کند داده پیش از رندر آماده است؛ پارامترها هم اعتبارسنجی و تایپ می‌شوند.',
            en: 'The loader ensures data is ready before render, and params are validated and typed.',
          },
        },
        practice: {
          fa: 'فیلترها را در URL اعمال کن، صفحه را رفرش کن و مطمئن شو همان نتیجه باقی می‌ماند.',
          en: 'Apply filters in the URL, refresh the page, and confirm the same result remains.',
        },
        quiz: {
          question: {
            fa: 'نقش validateSearch چیست؟',
            en: 'What is the role of validateSearch?',
          },
          options: {
            fa: ['اعتبارسنجی و تایپ پارامترهای جست‌وجو', 'ساخت خودکار تست', 'انتشار روی Vercel'],
            en: [
              'Validate and type search parameters',
              'Generate tests automatically',
              'Deploy to Vercel',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'بدون اعتبارسنجی، URL دستکاری‌شده می‌تواند به state نامعتبر و خطا منجر شود.',
            en: 'Without validation, a hand-edited URL can produce invalid state and errors.',
          },
        },
      },
      {
        id: 'w11-auth-guards',
        day: '۲',
        title: {
          fa: 'محافظ مسیر، context مسیر و مسیرهای محافظت‌شده',
          en: 'Auth Guards, Route Context & Protected Routes',
        },
        summary: {
          fa: 'پنجشنبه ۷ ژانویه · مسیرهای محافظت‌شده را با beforeLoad و context تایپ‌شده بساز و ریدایرکت امن را تمرین کن.',
          en: 'Thu 7 Jan · Build protected routes with beforeLoad and typed context, then practice safe redirects.',
        },
        duration: 120,
        goals: {
          fa: [
            'دسترسی را با beforeLoad پیش از رندر مسیر بررسی کنی.',
            'context مسیر را تایپ کنی و در loader و کامپوننت بخوانی.',
            'کاربر مهمان را با redirect و مسیر بازگشت بفرستی.',
            'state احراز هویت را از state رابط کاربری جدا نگه داری.',
          ],
          en: [
            'Check access with beforeLoad before the route renders.',
            'Type the route context and read it in the loader and component.',
            'Redirect a guest with a return path.',
            'Keep authentication state separate from UI state.',
          ],
        },
        terms: [
          [
            'beforeLoad',
            'hook مسیر که پیش از loader و رندر اجرا می‌شود و می‌تواند دسترسی را رد کند.',
          ],
          ['redirect', 'فرستادن کاربر به مسیر دیگر، مثل صفحهٔ ورود، با نگه‌داشتن مسیر بازگشت.'],
          ['route context', 'دادهٔ مشترک و تایپ‌شده‌ای که از ریشه به مسیرها داده می‌شود.'],
          ['auth guard', 'بررسی متمرکز دسترسی برای جلوگیری از رندر مسیر محافظت‌شده.'],
          ['returnTo', 'مسیر اولیه‌ای که پس از ورود موفق کاربر به آن برمی‌گردد.'],
          ['stale auth', 'وضعیت ورود قدیمی که باید با سرور یا انقضای توکن دوباره بررسی شود.'],
        ],
        steps: {
          fa: [
            'context ریشه را با تایپ user و تابع ورود بساز و به روتر بده.',
            'در beforeLoad مسیر محافظت‌شده، user را بررسی کن و در نبودش redirect بده.',
            'مسیر ورود را بساز و پس از موفقیت کاربر را به returnTo بفرست.',
            'در کامپوننت از context استفاده کن و برای مهمان دکمهٔ بازگشت نشان بده.',
            'یک URL محافظت‌شده را در حالت مهمان باز کن و مسیر بازگشت را بررسی کن.',
          ],
          en: [
            'Create the root context with a typed user and sign-in function, then pass it to the router.',
            'In the protected route beforeLoad, check the user and redirect when missing.',
            'Build the sign-in route and send the user to returnTo after success.',
            'Use the context in the component and show a sign-in button for guests.',
            'Open a protected URL as a guest and verify the return path.',
          ],
        },
        example: {
          code: "export const Route = createFileRoute('/account')({\n  beforeLoad: ({ context, location }) => {\n    if (!context.user) {\n      throw redirect({ to: '/login', search: { returnTo: location.href } });\n    }\n  },\n  component: AccountPage,\n});",
          explanation: {
            fa: 'بررسی پیش از رندر انجام می‌شود؛ صفحهٔ محافظت‌شده حتی یک لحظه هم برای مهمان رندر نمی‌شود.',
            en: 'The check happens before render, so the protected page never appears for a guest even for a moment.',
          },
        },
        practice: {
          fa: 'یک صفحهٔ حساب محافظت‌شده بساز، مهمان را به ورود بفرست و پس از ورود او را به همان صفحه برگردان.',
          en: 'Build a protected account page, send a guest to sign in, and return them to the same page after sign-in.',
        },
        quiz: {
          question: {
            fa: 'جای مناسب بررسی دسترسی پیش از رندر کجاست؟',
            en: 'Where is the right place to check access before render?',
          },
          options: {
            fa: ['beforeLoad مسیر', 'داخل فایل CSS', 'در useEffect بعد از رندر'],
            en: ['The route beforeLoad', 'Inside the CSS file', 'In a useEffect after render'],
          },
          answer: 0,
          explanation: {
            fa: 'beforeLoad پیش از loader و رندر اجرا می‌شود و از نمایش موقت محتوای محافظت‌شده جلوگیری می‌کند.',
            en: 'beforeLoad runs before the loader and render, preventing a flash of protected content.',
          },
        },
      },
      {
        id: 'w11-splitting',
        day: '۳',
        title: {
          fa: 'تقسیم کد، UI در انتظار و پیش‌بارگذاری مسیر',
          en: 'Code Splitting, Pending UI & Route Preloading',
        },
        summary: {
          fa: 'پنجشنبه ۷ ژانویه · بستهٔ اولیه را کوچک نگه دار، حالت انتظار را نشان بده و مسیر بعدی را از قبل آماده کن.',
          en: 'Thu 7 Jan · Keep the initial bundle small, show a pending state, and prepare the next route early.',
        },
        duration: 120,
        goals: {
          fa: [
            'کد هر مسیر را جدا بارگذاری کنی تا بستهٔ اولیه کوچک بماند.',
            'با pendingComponent یا وضعیت روتر، UI انتظار بسازی.',
            'پیش‌بارگذاری مسیر را روی hover و focus فعال کنی.',
            'اندازهٔ بسته را پیش و پس از تقسیم مقایسه کنی.',
          ],
          en: [
            'Load each route’s code separately so the initial bundle stays small.',
            'Build pending UI with pendingComponent or router state.',
            'Enable route preloading on hover and focus.',
            'Compare bundle size before and after splitting.',
          ],
        },
        terms: [
          ['code splitting', 'تقسیم کد به بسته‌های کوچک‌تر که فقط هنگام نیاز بارگذاری می‌شوند.'],
          ['lazy route', 'مسیری که کدش با import پویا و در زمان نیاز بارگذاری می‌شود.'],
          [
            'pendingComponent',
            'کامپوننت جایگزین که هنگام آماده‌شدن داده یا کد مسیر نمایش داده می‌شود.',
          ],
          ['preload', 'شروع بارگذاری مسیر پیش از کلیک، معمولاً روی hover یا focus.'],
          [
            'bundle size',
            'حجم JavaScript ارسالی به مرورگر؛ بستهٔ اولیه کوچک‌تر یعنی نمایش سریع‌تر.',
          ],
          [
            'waterfall',
            'زنجیرهٔ درخواست‌های پشت‌سرهم که هر کدام منتظر قبلی است و بارگذاری را کند می‌کند.',
          ],
        ],
        steps: {
          fa: [
            'خروجی build را بگیر و اندازهٔ بستهٔ اولیه را ثبت کن.',
            'کد صفحهٔ جزئیات را به یک فایل جدا ببر و با import پویا بارگذاری کن.',
            'برای مسیر جزئیات pendingComponent با skeleton بساز.',
            'preload مسیر را روی hover و focus لینک فعال کن.',
            'دوباره build بگیر و اندازهٔ بسته را با عدد قبلی مقایسه کن.',
          ],
          en: [
            'Run a production build and record the initial bundle size.',
            'Move the detail page code into its own file and load it with a dynamic import.',
            'Add a skeleton pendingComponent for the detail route.',
            'Enable route preload on link hover and focus.',
            'Build again and compare the bundle size with the previous number.',
          ],
        },
        example: {
          code: "export const Route = createFileRoute('/jobs/$jobId')({\n  pendingComponent: JobSkeleton,\n  loader: ({ params }) => queryClient.ensureQueryData(jobQuery(params.jobId)),\n  component: lazyJobPage,\n});",
          explanation: {
            fa: 'کد صفحه فقط هنگام ورود به مسیر بارگذاری می‌شود و تا آماده‌شدن، skeleton جای محتوا را می‌گیرد.',
            en: 'The page code loads only when entering the route, and a skeleton holds the space until it is ready.',
          },
        },
        practice: {
          fa: 'صفحهٔ جزئیات را تقسیم کن، skeleton بساز و اندازهٔ بستهٔ اولیه را پیش و پس در README ثبت کن.',
          en: 'Split the detail page, add a skeleton, and record the initial bundle size before and after in the README.',
        },
        quiz: {
          question: {
            fa: 'چرا مسیرها را به بسته‌های جدا تقسیم می‌کنیم؟',
            en: 'Why split routes into separate bundles?',
          },
          options: {
            fa: [
              'تا بستهٔ اولیه کوچک‌تر و بارگذاری اولیه سریع‌تر شود',
              'تا کد تکراری بیشتری تولید شود',
              'تا نوشتن تست لازم نباشد',
            ],
            en: [
              'So the initial bundle is smaller and the first load is faster',
              'To produce more duplicate code',
              'So tests are no longer needed',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'کاربر فقط کد مسیری را می‌گیرد که به آن نیاز دارد؛ بستهٔ اولیه سبک‌تر و زمان تعامل کوتاه‌تر می‌شود.',
            en: 'The user downloads only the code for the route they need, so the initial bundle is lighter and interaction starts sooner.',
          },
        },
      },
      {
        id: 'w11-browser-mcp',
        day: '۴',
        title: { fa: 'آزمایشگاه AI: agent و مرورگر', en: 'AI Lab: Let the Agent Use Your App' },
        summary: {
          fa: 'چهارشنبه ۶ ژانویه · Playwright MCP یا Chrome DevTools MCP را وصل کن و اپ Devjobs را توسط agent بگردان.',
          en: 'Wed 6 Jan · Connect Playwright or Chrome DevTools MCP and let the agent explore your Devjobs app.',
        },
        duration: 60,
        goals: {
          fa: [
            'agent را وادار کنی اپ را باز کند، دو فیلتر بزند و صفحهٔ شغل را باز کند.',
            'پارامترهای URL و خطاهای console را از گزارش agent بخوانی.',
            'حالت pending و خطا را با قطع شبکه بررسی کنی و یافته را به تست خودت تبدیل کنی.',
          ],
          en: [
            'Have the agent open the app, apply two filters, and open a job page.',
            'Read the URL search params and console errors from its report.',
            'Check pending and error states with the network blocked and turn a finding into your own test.',
          ],
        },
        terms: [
          [
            'Browser MCP',
            'سروری که به agent اجازهٔ باز کردن صفحه، کلیک و خواندن console را می‌دهد.',
          ],
          ['Console output', 'پیام‌ها و خطاهای JavaScript مرورگر که agent می‌تواند بخواند.'],
          ['Network panel', 'درخواست‌ها و پاسخ‌ها؛ ابزار بررسی حالت خطا و pending.'],
          ['Untrusted output', 'محتوای صفحه و console را مانند ورودی کاربر غیرقابل‌اعتماد بدان.'],
          ['Accessibility snapshot', 'نمای ساختار صفحه برای بررسی نقش‌ها و برچسب‌ها.'],
        ],
        steps: {
          fa: [
            'سرور Playwright یا Chrome DevTools را به opencode اضافه کن.',
            'از agent بخواه اپ را باز کند، دو فیلتر بزند و صفحهٔ یک شغل را باز کند.',
            'گزارش URL، پارامترها و خطاهای console را با مشاهدهٔ خودت مقایسه کن.',
            'شبکه را در ابزار مسدود کن و رفتار pending و error را بررسی کن.',
            'یک یافته را به تستی تبدیل کن که خودت نوشته‌ای.',
          ],
          en: [
            'Add Playwright or Chrome DevTools MCP to opencode.',
            'Ask the agent to open the app, apply two filters, and open a job page.',
            'Compare its URL, params, and console report with what you observe yourself.',
            'Block the network in the tool and inspect pending and error behavior.',
            'Turn one finding into a test that you write yourself.',
          ],
        },
        example: {
          code: 'Open http://localhost:3000/jobs\nApply filters: location=Remote, fullTime=true\nOpen the first job and report the URL and console errors.',
          explanation: {
            fa: 'agent مشاهده می‌کند، اما تصمیم دربارهٔ درست‌بودن رفتار و تست نهایی با توست.',
            en: 'The agent observes, but deciding what is correct and writing the final test is your job.',
          },
        },
        practice: {
          fa: 'گزارش agent را با DevTools خودت مقایسه کن و هر اختلاف را در ai-log.md بنویس.',
          en: 'Compare the agent report with your own DevTools and note every difference in ai-log.md.',
        },
        quiz: {
          question: {
            fa: 'بعد از یافتهٔ agent چه کاری با توست؟',
            en: 'After an agent finding, what remains your job?',
          },
          options: {
            fa: ['بررسی درستی و نوشتن تست', 'پذیرش بدون بررسی', 'خاموش کردن console'],
            en: [
              'Verify it and write the test',
              'Accept it without checking',
              'Disable the console',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'ابزار مشاهده می‌کند؛ اعتبارسنجی و تست، مهارت تو را می‌سازد.',
            en: 'The tool observes; verification and testing build your skill.',
          },
        },
      },
    ],
  },
  {
    id: 'week-12',
    number: '12',
    title: { fa: 'فرم‌ها با React Hook Form و Zod', en: 'Forms with React Hook Form and Zod' },
    subtitle: {
      fa: 'فاز ۲ · اعتبارسنجی را به schema بسپار، خطاها را به فیلد وصل کن و فرم چندمرحله‌ای بساز.',
      en: 'Phase 2 · Move validation into a schema, link errors to fields, and build a multi-step form.',
    },
    outcome: {
      fa: 'در پایان هفته فرم تماس با Zod و فرم چهارمرحله‌ای با خلاصهٔ محاسبه‌شده و جریان کیبورد کامل داری.',
      en: 'Finish with a Zod contact form and a four-step form with a calculated summary and full keyboard flow.',
    },
    lessons: [
      {
        id: 'w12-contact',
        day: '۱',
        title: {
          fa: 'فرم تماس با React Hook Form و Zod',
          en: 'Contact Form with React Hook Form and Zod',
        },
        summary: {
          fa: 'یکشنبه ۱۰ ژانویه · فرم تماس با zodResolver، تایپ z.infer و خطاهای متصل به فیلد.',
          en: 'Sun 10 Jan · Contact form with zodResolver, z.infer types, and field-linked errors.',
        },
        duration: 180,
        goals: {
          fa: [
            'اعتبارسنجی فرم را فقط با schema و zodResolver انجام بدهی.',
            'مقادیر فرم را با z.infer تایپ کنی و اعتبارسنجی دستی ننویسی.',
            'خطاها را با aria-describedby و aria-invalid به فیلد وصل کنی.',
            'با submit خالی همهٔ خطاها را نشان بدهی و فوکس را به اولین فیلد نامعتبر ببری.',
          ],
          en: [
            'Validate the form only with a schema and zodResolver.',
            'Type form values with z.infer and avoid hand-written validation.',
            'Link errors to fields with aria-describedby and aria-invalid.',
            'Show every error on an empty submit and focus the first invalid field.',
          ],
        },
        terms: [
          ['React Hook Form', 'کتابخانهٔ فرم کم‌رندر با ثبت فیلدها و مدیریت خطا.'],
          ['Zod', 'کتابخانهٔ schema برای اعتبارسنجی و استنتاج تایپ.'],
          ['zodResolver', 'پل بین schema زد و React Hook Form.'],
          ['z.infer', 'استخراج تایپ TypeScript از یک schema.'],
          ['aria-invalid', 'نشانهٔ دسترس‌پذیر بودن فیلد نامعتبر برای صفحه‌خوان.'],
        ],
        steps: {
          fa: [
            'schema را با فیلدهای نام، ایمیل، پیام و گزینهٔ تماس بنویس.',
            'useForm را با resolver و تایپ z.infer بساز.',
            'هر فیلد را با label، aria-invalid و aria-describedby به پیام خطا وصل کن.',
            'در submit نامعتبر فوکس را به اولین خطا ببر و پیام موفقیت را پس از ارسال سالم نشان بده.',
          ],
          en: [
            'Write a schema for name, email, message, and contact preference fields.',
            'Create useForm with the resolver and a z.infer type.',
            'Connect every field to its error with label, aria-invalid, and aria-describedby.',
            'Focus the first error on an invalid submit and show success only after a valid one.',
          ],
        },
        example: {
          code: 'const schema = z.object({\n  name: z.string().min(2),\n  email: z.string().email(),\n  message: z.string().min(10),\n});\ntype Contact = z.infer<typeof schema>;\nconst form = useForm<Contact>({ resolver: zodResolver(schema) });',
          explanation: {
            fa: 'یک schema هم اعتبارسنجی و هم تایپ را می‌دهد؛ دو منبع جدا و ناهماهنگ نمی‌سازی.',
            en: 'One schema defines both validation and types, avoiding two sources that drift apart.',
          },
        },
        practice: {
          fa: 'فرم را با کیبورد پر کن، خطاها را پاک کن و مطمئن شو هر خطا با فیلد خودش اعلام می‌شود.',
          en: 'Fill the form by keyboard, clear errors, and confirm each error is announced with its field.',
        },
        quiz: {
          question: {
            fa: 'چرا از z.infer استفاده می‌کنیم؟',
            en: 'Why use z.infer?',
          },
          options: {
            fa: [
              'تا تایپ فرم از همان schema بیاید',
              'تا فرم سریع‌تر رندر شود',
              'تا خطاها مخفی شوند',
            ],
            en: [
              'So the form type comes from the same schema',
              'To render the form faster',
              'To hide errors',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'یک منبع حقیقت برای اعتبارسنجی و تایپ، ناهماهنگی را حذف می‌کند.',
            en: 'One source of truth for validation and types removes drift.',
          },
        },
      },
      {
        id: 'w12-multistep',
        day: '۲',
        title: { fa: 'فرم چندمرحله‌ای', en: 'Multi-step Form' },
        summary: {
          fa: 'چهارشنبه ۱۳ ژانویه · یک فرم در چهار مرحله با اعتبارسنجی هر مرحله و خلاصهٔ محاسبه‌شده.',
          en: 'Wed 13 Jan · One form across four steps with per-step validation and a calculated summary.',
        },
        duration: 300,
        goals: {
          fa: [
            'همهٔ مراحل را در یک فرم نگه داری و بازگشت را بدون از دست دادن داده پیاده کنی.',
            'هر مرحله را پیش از رفتن به بعدی با Zod اعتبارسنجی کنی.',
            'خلاصهٔ پلن، افزودنی‌ها و مجموع را از مقادیر فرم محاسبه کنی.',
            'تغییر مرحله را به صفحه‌خوان اعلام کنی و کل مسیر را با کیبورد کامل کنی.',
          ],
          en: [
            'Keep all steps in one form and return without losing data.',
            'Validate each step with Zod before allowing the next one.',
            'Calculate plan, add-ons, and total from the form values in the summary.',
            'Announce step changes to screen readers and complete the flow by keyboard.',
          ],
        },
        terms: [
          ['Multi-step form', 'فرم بلند که به چند مرحلهٔ قابل‌اعتبارسنجی تقسیم می‌شود.'],
          ['schema.pick', 'گرفتن زیرمجموعهٔ فیلدها از یک schema برای اعتبارسنجی مرحله.'],
          ['useFormContext', 'دسترسی کامپوننت‌های فرزند به فرم بدون پاس دادن prop.'],
          ['Fieldset', 'گروه‌بندی معنایی کنترل‌های مرتبط با legend.'],
          ['Derived total', 'مقداری که از داده‌های فرم محاسبه می‌شود و جدا ذخیره نمی‌شود.'],
        ],
        steps: {
          fa: [
            'schema کامل را بنویس و برای هر مرحله با pick زیرمجموعه بساز.',
            'وضعیت مرحله و دادهٔ فرم را در یک فرم مشترک نگه دار.',
            'دکمهٔ بعدی را با اعتبارسنجی همان مرحله کنترل کن و دکمهٔ برگشت را بدون پاک‌کردن داده بگذار.',
            'خلاصه را از مقادیر فرم محاسبه کن و تغییر سالانه/ماهانه را روی همهٔ قیمت‌ها اعمال کن.',
            'اعلام مرحله را با live region اضافه کن و کل مسیر را با Tab و Enter آزمایش کن.',
          ],
          en: [
            'Write the full schema and pick a subset for each step.',
            'Keep the step index and form data inside one shared form.',
            'Gate the next button with that step validation and keep Back without clearing data.',
            'Calculate the summary from form values and apply the monthly/yearly toggle to every price.',
            'Add a live region for step announcements and test the whole flow with Tab and Enter.',
          ],
        },
        example: {
          code: 'const stepOne = fullSchema.pick({ name: true, email: true });\nconst result = await trigger(["name", "email"]);\nif (!result) return;\nsetStep((step) => step + 1);',
          explanation: {
            fa: 'trigger فقط فیلدهای همان مرحله را بررسی می‌کند؛ بقیهٔ فرم دست‌نخورده می‌ماند.',
            en: 'trigger validates only that step fields while the rest of the form stays intact.',
          },
        },
        practice: {
          fa: 'مراحل را جلو و عقب برو، داده را حفظ کن و کل فرم را بدون ماوس کامل کن.',
          en: 'Move forward and back, preserve data, and complete the form without a mouse.',
        },
        quiz: {
          question: {
            fa: 'چرا مجموع را در state جدا ذخیره نمی‌کنیم؟',
            en: 'Why not store the total in separate state?',
          },
          options: {
            fa: [
              'چون از مقادیر فرم محاسبه می‌شود',
              'چون React اجازه نمی‌دهد',
              'چون Zod آن را می‌سازد',
            ],
            en: [
              'Because it is derived from form values',
              'Because React forbids it',
              'Because Zod creates it',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'هر مقدار مشتق‌شده که جدا ذخیره شود، دیر یا زود از منبع اصلی ناهماهنگ می‌شود.',
            en: 'Any derived value stored separately will eventually drift from the source.',
          },
        },
      },
      {
        id: 'w12-server-errors',
        day: '۳',
        title: {
          fa: 'اعتبارسنجی سمت سرور، خطاهای امن و idempotency',
          en: 'Server Validation, Safe Errors & Idempotency',
        },
        summary: {
          fa: 'چهارشنبه ۱۴ ژانویه · همان schema را در مرز سرور هم اجرا کن، خطای امن برگردان و ارسال تکراری را کنترل کن.',
          en: 'Wed 14 Jan · Run the same schema at the server boundary, return safe errors, and control duplicate submissions.',
        },
        duration: 120,
        goals: {
          fa: [
            'اعتبارسنجی کلاینتی را جایگزین اعتبارسنجی سروری نکنی.',
            'schema مشترک را در مرز API دوباره اجرا کنی.',
            'پیام خطای امن و قابل‌فهم برگردانی بدون افشای جزئیات داخلی.',
            'دکمهٔ ارسال را هنگام pending غیرفعال و درخواست را idempotent کنی.',
          ],
          en: [
            'Never treat client-side validation as a replacement for server validation.',
            'Run the shared schema again at the API boundary.',
            'Return safe, understandable errors without leaking internal details.',
            'Disable the submit button while pending and make the request idempotent.',
          ],
        },
        terms: [
          [
            'server validation',
            'بررسی دوبارهٔ ورودی در سرور؛ چون درخواست مرورگر قابل‌دستکاری است.',
          ],
          [
            'shared schema',
            'همان schema Zod که در کلاینت و سرور استفاده می‌شود تا قاعده یکسان بماند.',
          ],
          [
            'safe error',
            'پیام کوتاه و عمومی برای کاربر که جزئیات فنی یا دادهٔ حساس را افشا نمی‌کند.',
          ],
          ['idempotency', 'ویژگی درخواستی که اجرای دوبارهٔ آن نتیجهٔ تکراری یا نامطلوب نمی‌سازد.'],
          [
            'idempotency key',
            'شناسهٔ یکتای هر ارسال که سرور با آن درخواست تکراری را تشخیص می‌دهد.',
          ],
          ['rate limit', 'محدودکردن تعداد درخواست‌ها برای جلوگیری از سوءاستفاده و بار اضافی.'],
        ],
        steps: {
          fa: [
            'schema فرم را در فایل مشترک نگه دار و هم فرم و هم تابع API از آن استفاده کنند.',
            'در سرور body را با safeParse بررسی کن و برای ورودی نامعتبر پاسخ ۴۰۰ بده.',
            'پیام خطا را به شکل امن برگردان و جزئیات داخلی یا پیام خام کتابخانه را نمایش نده.',
            'یک idempotency key برای هر ارسال بساز و در ارسال دوباره همان را بفرست.',
            'دکمه را هنگام pending غیرفعال کن و با ارسال دوباره مطمئن شو رکورد تکراری ساخته نمی‌شود.',
          ],
          en: [
            'Keep the form schema in a shared file used by both the form and the API function.',
            'On the server, check the body with safeParse and return 400 for invalid input.',
            'Return a safe error message and never expose internal details or a raw library error.',
            'Create an idempotency key for each submission and send the same key on retry.',
            'Disable the button while pending and confirm a retry does not create a duplicate record.',
          ],
        },
        example: {
          code: "const parsed = schema.safeParse(body);\nif (!parsed.success) {\n  return Response.json(\n    { error: 'Please check the highlighted fields.' },\n    { status: 400 },\n  );\n}\nawait saveContact({ ...parsed.data, idempotencyKey });",
          explanation: {
            fa: 'سرور به schema اعتماد می‌کند، نه به مرورگر؛ پیام خطا کوتاه و امن است و کلید تکراری از ثبت دوباره جلوگیری می‌کند.',
            en: 'The server trusts the schema, not the browser; the error is short and safe, and the key prevents a duplicate save.',
          },
        },
        practice: {
          fa: 'فرم را با یک schema مشترک به API وصل کن، ورودی دستکاری‌شده بفرست و مطمئن شو سرور آن را رد می‌کند.',
          en: 'Connect the form to an API with a shared schema, send a tampered request, and confirm the server rejects it.',
        },
        quiz: {
          question: {
            fa: 'چرا اعتبارسنجی مرورگر کافی نیست؟',
            en: 'Why is browser validation not enough?',
          },
          options: {
            fa: [
              'چون کاربر می‌تواند درخواست را دستکاری کند و بررسی مرورگر را دور بزند',
              'چون Zod در مرورگر اجرا نمی‌شود',
              'چون سرور به TypeScript نیاز ندارد',
            ],
            en: [
              'Because a user can tamper with the request and bypass the browser check',
              'Because Zod does not run in the browser',
              'Because the server does not need TypeScript',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'مرورگر تحت کنترل کاربر است؛ فقط بررسی سرور می‌تواند ورودی را قبل از ذخیره یا اجرا تأیید کند.',
            en: 'The browser is under the user’s control; only a server check can validate input before saving or acting on it.',
          },
        },
      },
      {
        id: 'w12-lock-agent',
        day: '۴',
        title: { fa: 'آزمایشگاه AI: بستن دسترسی agent', en: 'AI Lab: Lock Down Your Agent' },
        summary: {
          fa: 'چهارشنبه ۱۳ ژانویه · اجازهٔ خواندن ‎.env را بگیر، shell و web را با تأیید بگذار و prompt injection را آزمایش کن.',
          en: 'Wed 13 Jan · Deny .env access, require approval for shell and web, and test prompt injection.',
        },
        duration: 60,
        goals: {
          fa: [
            'تنظیمات را طوری بچینی که agent فایل ‎.env را نخواند و برای shell و web اجازه بگیرد.',
            'در یک مخزن آزمایشی دستور پنهان در README بگذاری و رفتار agent را ثبت کنی.',
            'توضیح بدهی کدام تنظیم مانع شد و این موضوع چه نسبتی با «به ورودی کاربر اعتماد نکن» دارد.',
          ],
          en: [
            'Configure permissions so the agent cannot read .env and must ask for shell and web access.',
            'Hide an instruction in a throwaway README and record what the agent does.',
            'Explain which setting protected you and how this connects to never trusting user input.',
          ],
        },
        terms: [
          [
            'Prompt injection',
            'دستور پنهان در محتوایی که agent می‌خواند و سعی می‌کند رفتارش را عوض کند.',
          ],
          ['Permissions', 'قاعدهٔ allow، ask یا deny برای هر ابزار.'],
          ['Secret', 'کلید یا رمز که نباید در کد مرورگر یا context مدل دیده شود.'],
          ['Web fetch', 'خواندن صفحهٔ بیرونی؛ ورودی غیرقابل‌اعتماد برای agent.'],
          ['Deny rule', 'قاعده‌ای که اجرای یک ابزار یا مسیر را کامل می‌بندد.'],
        ],
        steps: {
          fa: [
            'قاعدهٔ deny برای خواندن ‎.env و قاعدهٔ ask برای shell و web fetch بگذار.',
            'در یک مخزن دورانداختنی، دستور پنهان را در کامنت README بگذار.',
            'از agent بخواه README را خلاصه کند و رفتارش را در ai-log.md ثبت کن.',
            'بنویس کدام تنظیم محافظت کرد و چرا این همان اصل اعتماد نکردن به ورودی است.',
          ],
          en: [
            'Add a deny rule for .env reads and ask rules for shell and web fetch.',
            'In a throwaway repo, place the hidden instruction in a README comment.',
            'Ask the agent to summarize the README and record its behavior in ai-log.md.',
            'Write which setting protected you and why this is the same as not trusting input.',
          ],
        },
        example: {
          code: 'permission:\n  read:\n    "**/.env": deny\n  bash: ask\n  webfetch: ask',
          explanation: {
            fa: 'این قاعده‌ها پیش از دیدن فایل حساس و پیش از اجرای فرمان، جلوی خسارت را می‌گیرند.',
            en: 'These rules stop damage before a sensitive file is read or a command runs.',
          },
        },
        practice: {
          fa: 'آزمایش را یک‌بار با تنظیم باز و یک‌بار با تنظیم بسته اجرا کن و تفاوت را ثبت کن.',
          en: 'Run the test once with open permissions and once locked down, and record the difference.',
        },
        quiz: {
          question: {
            fa: 'کدام تنظیم مانع خواندن فایل ‎.env می‌شود؟',
            en: 'Which setting prevents reading the .env file?',
          },
          options: {
            fa: ['قاعدهٔ deny برای مسیر ‎.env', 'بستن DevTools', 'حذف AGENTS.md'],
            en: ['A deny rule for the .env path', 'Closing DevTools', 'Deleting AGENTS.md'],
          },
          answer: 0,
          explanation: {
            fa: 'تنظیم deny در سطح ابزار، پیش از رسیدن محتوا به مدل جلوی دسترسی را می‌گیرد.',
            en: 'A tool-level deny rule blocks access before content reaches the model.',
          },
        },
      },
    ],
  },
  {
    id: 'week-13',
    number: '13',
    title: { fa: 'آزمون، انتشار و دروازهٔ ۲', en: 'Testing, Deployment, and Gate 2' },
    subtitle: {
      fa: 'فاز ۲ · منطق را با Vitest بسنج، بخش نظرات را با Testing Library آزمون کن و روی Vercel منتشر شو.',
      en: 'Phase 2 · Test logic with Vitest, test the comments UI with Testing Library, and ship to Vercel.',
    },
    outcome: {
      fa: 'در پایان هفته تست‌های خالص و UI، انتشار Vercel با preview و دروازهٔ ۲ را با ۷۵+ پاس کرده‌ای.',
      en: 'Finish with pure and UI tests, a Vercel deployment with previews, and Gate 2 passed with 75+.',
    },
    lessons: [
      {
        id: 'w13-test-filter',
        day: '۱',
        title: { fa: 'آزمون منطق فیلتر شغل', en: 'Test the Job-Filter Logic' },
        summary: {
          fa: 'یکشنبه ۱۷ ژانویه · filterJobs را به تابع خالص تایپ‌شده بدون React تبدیل و با Vitest آزمون کن.',
          en: 'Sun 17 Jan · Turn filterJobs into a pure typed function with no React and test it with Vitest.',
        },
        duration: 120,
        goals: {
          fa: [
            'تابع filterJobs را بدون هیچ import از React و فقط با داده و فیلتر بنویسی.',
            'موارد بدون فیلتر، یک تگ، چند تگ و نتیجهٔ خالی را آزمون کنی.',
            'ثابت کنی آرایهٔ ورودی پس از هر فراخوانی تغییر نمی‌کند.',
          ],
          en: [
            'Write filterJobs with no React imports, taking only data and filters.',
            'Test no filters, one tag, several tags, and an empty result.',
            'Prove that the input array is unchanged after every call.',
          ],
        },
        terms: [
          ['Pure function', 'تابعی که فقط از ورودی استفاده می‌کند و عوارض جانبی ندارد.'],
          ['Vitest', 'اجراکنندهٔ تست سریع برای پروژه‌های Vite.'],
          ['Immutability', 'تغییرندادن دادهٔ ورودی و ساختن مقدار تازه.'],
          ['Test case', 'ورودی مشخص با نتیجهٔ موردانتظار.'],
          ['Edge case', 'ورودی غیرمعمول یا مرزی مثل تگ ناشناخته.'],
        ],
        steps: {
          fa: [
            'تابع را از کامپوننت جدا کن و تایپ Job و فیلترها را مشخص کن.',
            'برای هر رفتار یک تست خوانا بنویس: بدون فیلتر، یک تگ، چند تگ، نتیجهٔ خالی.',
            'تگ ناشناخته و بدون‌تغییرماندن ورودی را هم تست کن.',
            'در صورت نیاز یک smoke test با Testing Library اضافه کن که ثابت کند کامپوننت از تابع استفاده می‌کند.',
          ],
          en: [
            'Extract the function from the component and type Job and its filters.',
            'Write one readable test per behavior: no filters, one tag, several tags, empty result.',
            'Also test an unknown tag and that the input array is untouched.',
            'If useful, add one Testing Library smoke test proving the component still uses the function.',
          ],
        },
        example: {
          code: 'export function filterJobs(jobs: Job[], filters: Filters): Job[] {\n  if (filters.tags.length === 0) return jobs;\n  return jobs.filter((job) => filters.tags.every((tag) => job.tags.includes(tag)));\n}',
          explanation: {
            fa: 'تابع خالص است: خروجی فقط به ورودی وابسته است و دادهٔ ورودی تغییر نمی‌کند.',
            en: 'The function is pure: output depends only on inputs and the input data is untouched.',
          },
        },
        practice: {
          fa: 'همهٔ تست‌ها را اجرا کن و نام هر تست را طوری بنویس که هم‌تیمی بدون دیدن کد بفهمد.',
          en: 'Run all tests and name each one so a teammate understands it without reading the code.',
        },
        quiz: {
          question: {
            fa: 'چرا filterJobs نباید به React وابسته باشد؟',
            en: 'Why should filterJobs not depend on React?',
          },
          options: {
            fa: [
              'تا به‌سادگی و بدون رندر تست شود',
              'چون React از تابع پشتیبانی نمی‌کند',
              'تا سریع‌تر deploy شود',
            ],
            en: [
              'So it can be tested simply without rendering',
              'Because React cannot use functions',
              'To deploy faster',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'منطق خالص جدا از UI، سریع و پایدار آزمون می‌شود و در جای دیگر هم قابل استفاده است.',
            en: 'Pure logic separate from UI is fast and stable to test and reusable elsewhere.',
          },
        },
      },
      {
        id: 'w13-test-comments',
        day: '۲',
        title: { fa: 'آزمون بخش نظرات', en: 'Put the Comments Section under Test' },
        summary: {
          fa: 'دوشنبه ۱۹ ژانویه · حداقل شش آزمون React Testing Library روی بخش نظرات هفتهٔ ۸.',
          en: 'Tue 19 Jan · At least six React Testing Library tests on the week 8 comments section.',
        },
        duration: 180,
        goals: {
          fa: [
            'افزودن، ویرایش، حذف با تأیید و انصراف، رأی و پاسخ را آزمون کنی.',
            'همهٔ queryها را با role یا label انجام بدهی، نه test id یا کلاس.',
            'همهٔ تعامل‌ها را با userEvent اجرا کنی و ورودی خالی را رد کنی.',
            'یک باگ عمدی بسازی و نشان بدهی تست آن را می‌گیرد.',
          ],
          en: [
            'Test adding, editing, deleting with confirm and cancel, voting, and replies.',
            'Query everything by role or label, not by test id or class.',
            'Drive every interaction with userEvent and reject empty input.',
            'Introduce a deliberate bug and show that a test catches it.',
          ],
        },
        terms: [
          ['React Testing Library', 'کتابخانهٔ آزمون کامپوننت از دید کاربر.'],
          ['userEvent', 'شبیه‌سازی تعامل واقعی کاربر مانند تایپ و کلیک.'],
          ['Accessible query', 'یافتن عنصر با role یا label که کاربر هم می‌بیند.'],
          ['Test id', 'شناسهٔ مخصوص تست؛ آخرین راه‌حل، نه اولین.'],
          ['Smoke test', 'آزمون کوتاه برای اطمینان از کارکرد مسیر اصلی.'],
        ],
        steps: {
          fa: [
            'کامپوننت را با propهای تایپ‌شده و دادهٔ نمونه رندر کن.',
            'برای افزودن، ویرایش، حذف، رأی و پاسخ یک تست رفتاری بنویس.',
            'از getByRole و getByLabelText استفاده کن و هیچ کلاس CSS را در تست نبند.',
            'باگ عمدی را وارد کن، شکست تست را ببین و سپس اصلاح کن.',
          ],
          en: [
            'Render the component with typed props and sample data.',
            'Write one behavior test for adding, editing, deleting, voting, and replying.',
            'Use getByRole and getByLabelText and never bind tests to CSS classes.',
            'Introduce a deliberate bug, watch the test fail, then fix it.',
          ],
        },
        example: {
          code: 'await userEvent.type(screen.getByLabelText(/add a comment/i), "First!");\nawait userEvent.click(screen.getByRole("button", { name: /post comment/i }));\nexpect(screen.getByText("First!")).toBeInTheDocument();',
          explanation: {
            fa: 'تست از زبان کاربر استفاده می‌کند؛ تغییر کلاس‌ها نباید آن را بشکند.',
            en: 'The test uses the user language, so changing classes must not break it.',
          },
        },
        practice: {
          fa: 'شش تست را اجرا کن، یک کلاس CSS را عوض کن و نشان بده هیچ تستی نمی‌شکند.',
          en: 'Run six tests, rename a CSS class, and show that no test breaks.',
        },
        quiz: {
          question: {
            fa: 'کدام query برای تست پایدارتر است؟',
            en: 'Which query makes a test more stable?',
          },
          options: {
            fa: ['getByRole با نام دسترس‌پذیر', 'querySelector با کلاس', 'getByTestId در همه‌جا'],
            en: [
              'getByRole with an accessible name',
              'querySelector with a class',
              'getByTestId everywhere',
            ],
          },
          answer: 0,
          explanation: {
            fa: 'نقش و نام دسترس‌پذیر به طراحی ظاهری وابسته نیست و تجربهٔ واقعی کاربر را می‌سنجد.',
            en: 'Role and accessible name do not depend on visual styling and test the real user experience.',
          },
        },
      },
      {
        id: 'w13-vercel',
        day: '۳',
        title: { fa: 'انتشار روی Vercel', en: 'Ship to Vercel' },
        summary: {
          fa: 'دوشنبه ۱۹ ژانویه · production از main و preview برای هر PR؛ آدرس API از متغیر محیطی.',
          en: 'Tue 19 Jan · Production from main and a preview for every PR, with the API URL from an env variable.',
        },
        duration: 90,
        goals: {
          fa: [
            'اپ آب‌وهوا را روی Vercel منتشر کنی و production را به main وصل کنی.',
            'برای هر pull request یک preview URL بگیری.',
            'آدرس API را از متغیر محیطی بخوانی، نه hard-code.',
            'متغیرها را در README فقط با نام فهرست کنی و تغییر آن‌ها را بدون ویرایش کد نشان بدهی.',
          ],
          en: [
            'Deploy the weather app to Vercel and connect production to main.',
            'Get a preview URL for every pull request.',
            'Read the API base URL from an environment variable instead of hard-coding it.',
            'List variable names in the README and show a behavior change without editing code.',
          ],
        },
        terms: [
          ['Vercel', 'سرویس میزبانی با اتصال به Git و preview خودکار.'],
          ['Production deployment', 'نسخهٔ زندهٔ سایت از شاخهٔ اصلی.'],
          ['Preview deployment', 'نسخهٔ موقت برای هر pull request.'],
          ['Environment variable', 'مقدار تنظیمات خارج از کد برای هر محیط.'],
          ['Build setting', 'فرمان و پوشهٔ خروجی که سرویس برای ساخت اجرا می‌کند.'],
        ],
        steps: {
          fa: [
            'مخزن را به Vercel وصل کن و فرمان build و پوشهٔ dist را درست تنظیم کن.',
            'متغیر محیطی آدرس API را در Vercel بساز و در کد از آن استفاده کن.',
            'یک PR باز کن و preview URL آن را آزمایش کن.',
            'مقدار متغیر را عوض کن، دوباره منتشر کن و تغییر رفتار را نشان بده.',
          ],
          en: [
            'Connect the repository to Vercel and set the build command and output directory correctly.',
            'Create the API URL environment variable in Vercel and use it in code.',
            'Open a pull request and test its preview URL.',
            'Change the variable, redeploy, and show the behavior change.',
          ],
        },
        example: {
          code: 'const baseUrl = import.meta.env.VITE_WEATHER_API_URL;\nif (!baseUrl) throw new Error("Missing VITE_WEATHER_API_URL");',
          explanation: {
            fa: 'متغیر محیطی تنظیمات محیط را از کد جدا می‌کند؛ نام VITE_ یعنی عمومی و قابل‌دیدن است.',
            en: 'The env variable separates environment settings from code; VITE_ means it is public.',
          },
        },
        practice: {
          fa: 'preview و production را هر دو باز کن و README را با نام متغیرها کامل کن.',
          en: 'Open both preview and production, and complete the README with the variable names.',
        },
        quiz: {
          question: {
            fa: 'هر pull request در Vercel چه چیزی می‌گیرد؟',
            en: 'What does every pull request get on Vercel?',
          },
          options: {
            fa: ['یک preview deployment', 'یک production جدید', 'هیچ، تا merge نشود'],
            en: ['A preview deployment', 'A new production', 'Nothing until merge'],
          },
          answer: 0,
          explanation: {
            fa: 'previewها امکان آزمایش تغییرها را پیش از merge فراهم می‌کنند.',
            en: 'Previews let you test changes before merging.',
          },
        },
      },
      {
        id: 'w13-test-plugin',
        day: '۴',
        title: { fa: 'آزمایشگاه AI: plugin اجرای تست', en: 'AI Lab: A Test-Running Plugin' },
        summary: {
          fa: 'دوشنبه ۱۹ ژانویه · pluginی بساز که پس از ویرایش agent، lint و تست را اجرا کند.',
          en: 'Tue 19 Jan · Add an opencode plugin that runs lint and tests after the agent edits files.',
        },
        duration: 60,
        goals: {
          fa: [
            'plugin را از نمونهٔ مستندات بسازی یا نصب کنی تا پس از ویرایش، lint و تست اجرا شود.',
            'یک بار نشان بدهی plugin خطای ایجادشده توسط agent را گرفته است.',
            'توضیح بدهی plugin چه کاری می‌کند که skill یا MCP نمی‌تواند.',
          ],
          en: [
            'Build or install the plugin from the docs example so lint and tests run after edits.',
            'Show one time the plugin caught a failure caused by the agent.',
            'Explain what a plugin can do that a skill or MCP server cannot.',
          ],
        },
        terms: [
          ['Plugin', 'کدی که داخل harness روی رویدادها اجرا می‌شود.'],
          ['Hook', 'نقطهٔ اتصال رویداد که plugin در آن اجرا می‌شود.'],
          ['Skill', 'دستورالعمل متنی که agent هنگام نیاز بار می‌کند.'],
          ['MCP', 'اتصال ابزار و دادهٔ بیرونی، نه تغییر رفتار harness.'],
        ],
        steps: {
          fa: [
            'plugin را با رویداد پس از ویرایش فایل تنظیم کن.',
            'آن را روی یک تغییر عمداً خراب اجرا کن و خروجی lint یا تست را ببین.',
            'ساختار فایل تست را با agent بساز، اما همهٔ assertionها را خودت بنویس.',
            'تفاوت plugin، skill و MCP را در سه خط بنویس.',
          ],
          en: [
            'Configure the plugin on the after-file-edit event.',
            'Run it on a deliberately broken change and inspect the lint or test output.',
            'Let the agent create the test file structure, but write every assertion yourself.',
            'Write the difference between a plugin, a skill, and MCP in three lines.',
          ],
        },
        example: {
          code: 'export const TestGuard = async ({ event }) => {\n  if (event.type !== "file.edited") return;\n  await run("npm run lint && npm test");\n};',
          explanation: {
            fa: 'plugin رفتار harness را تغییر می‌دهد؛ skill فقط متن راهنما و MCP فقط ابزار و داده است.',
            en: 'A plugin changes harness behavior; a skill is instructions and MCP is tools and data.',
          },
        },
        practice: {
          fa: 'یک بار ویرایش سالم و یک بار ویرایش معیوب را اجرا کن و تفاوت خروجی plugin را ثبت کن.',
          en: 'Run one clean and one broken edit and record the plugin output difference.',
        },
        quiz: {
          question: {
            fa: 'plugin چه چیزی اضافه می‌کند که skill ندارد؟',
            en: 'What does a plugin add that a skill does not?',
          },
          options: {
            fa: ['اجرای کد روی رویدادهای harness', 'متن راهنما', 'دسترسی به مستندات'],
            en: ['Code execution on harness events', 'Instruction text', 'Documentation access'],
          },
          answer: 0,
          explanation: {
            fa: 'skill دستورالعمل است؛ plugin کد اجرایی و تغییر رفتار harness است.',
            en: 'A skill is instructions; a plugin is executable code that changes harness behavior.',
          },
        },
      },
      {
        id: 'w13-gate2',
        day: '۵',
        title: { fa: 'دروازهٔ ۲: دروازهٔ React', en: 'Gate 2: The React Gate' },
        summary: {
          fa: 'چهارشنبه ۲۰ ژانویه · در چهار ساعت یک قابلیت اضافه کن، یک باگ را درست کن و یک تست بنویس.',
          en: 'Wed 20 Jan · In one four-hour sitting, add a feature, fix a bug, and write one test.',
        },
        duration: 240,
        goals: {
          fa: [
            'در یک کدبیس ناآشنا قابلیت خواسته‌شده را اضافه کنی.',
            'باگ گزارش‌شده را با شاهد پیدا و اصلاح کنی.',
            'یک کامپوننت‌تست را بدون AI خودت بنویسی.',
            'تا ۲۳:۵۹ PR را تحویل بدهی و در جلسهٔ پنجشنبه تغییر زنده انجام بدهی.',
          ],
          en: [
            'Add the requested feature in an unfamiliar codebase.',
            'Find and fix the reported bug with evidence.',
            'Write one component test yourself without AI.',
            'Submit the pull request by 23:59 and make a live change in Thursday session.',
          ],
        },
        terms: [
          ['Gate', 'پروژهٔ آزمون در چهار ساعت که عبور از فاز را تعیین می‌کند.'],
          [
            'Unfamiliar codebase',
            'کدی که پیش از این ندیده‌ای؛ خواندن ساختار پیش از ویرایش لازم است.',
          ],
          ['Component test', 'آزمونی که رفتار یک کامپوننت را از دید کاربر می‌سنجد.'],
          ['Live change', 'تغییر کوچک در حضور گروه برای اثبات مالکیت کد.'],
          ['Pull request', 'درخواست merge با توضیح تغییرها و نتیجهٔ بررسی‌ها.'],
        ],
        steps: {
          fa: [
            'ساختار پروژه را بخوان و مسیر داده و state را قبل از هر تغییر پیدا کن.',
            'قابلیت را با کوچک‌ترین تغییر ممکن اضافه کن و commit کن.',
            'باگ را بازتولید کن، علت را بنویس و سپس اصلاح کن.',
            'تست کامپوننت را خودت بنویس و lint و typecheck را اجرا کن.',
            'PR را با توضیح و شاهد تحویل بده و برای تغییر زندهٔ پنجشنبه آماده شو.',
          ],
          en: [
            'Read the project structure and find the data and state path before changing anything.',
            'Add the feature with the smallest possible change and commit it.',
            'Reproduce the bug, write down the cause, then fix it.',
            'Write the component test yourself and run lint and typecheck.',
            'Submit the PR with an explanation and evidence, and prepare for the Thursday live change.',
          ],
        },
        example: {
          code: 'npm run lint\nnpm run typecheck\nnpm test\n# Then reproduce the bug, fix it, and commit with the real cause in the message.',
          explanation: {
            fa: 'کیفیت را قبل از تحویل اندازه بگیر؛ دروازه فقط کارکرد را نمی‌سنجد، فرایند را هم می‌سنجد.',
            en: 'Measure quality before submission; the gate checks process as well as behavior.',
          },
        },
        practice: {
          fa: 'یک اجرای تمرینی کامل با زمان‌سنج انجام بده و ببین کدام مرحله بیشترین وقت را می‌گیرد.',
          en: 'Do one timed practice run and see which step consumes the most time.',
        },
        quiz: {
          question: {
            fa: 'آزمون کامپوننت در دروازهٔ ۲ چه شرطی دارد؟',
            en: 'What is required of the Gate 2 component test?',
          },
          options: {
            fa: ['باید بدون AI نوشته شود', 'باید با test id باشد', 'باید حذف شود'],
            en: ['It must be written without AI', 'It must use test ids', 'It must be removed'],
          },
          answer: 0,
          explanation: {
            fa: 'هدف دروازه اثبات مهارت خودت است، پس تست هم باید کار خودت باشد.',
            en: 'The gate proves your own skill, so the test must be your own work.',
          },
        },
      },
    ],
  },
];
