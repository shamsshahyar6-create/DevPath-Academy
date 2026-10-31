const items = (entries) => entries.map(([id, en, fa]) => ({ id, en, fa }));

export const dailyCheck = items([
  ['daily-lint', 'npm run lint passes with zero errors.', 'npm run lint با صفر خطا می‌گذرد.'],
  [
    'daily-build',
    'npm run build passes; npm run preview shows the production page.',
    'npm run build موفق است و npm run preview نسخهٔ نهایی را نشان می‌دهد.',
  ],
  [
    'daily-rules',
    'No eslint-disable comments and no ESLint rules turned off.',
    'هیچ eslint-disable یا قاعدهٔ خاموش‌شده‌ای وجود ندارد.',
  ],
  [
    'daily-gitignore',
    'node_modules/, dist/, and .env are not tracked by Git.',
    'node_modules/، dist/ و .env در Git ثبت نشده‌اند.',
  ],
  [
    'daily-commits',
    'Commits are small; each message says what changed and why.',
    'commitها کوچک‌اند و پیام هرکدام تغییر و دلیلش را می‌گوید.',
  ],
  ['daily-push', 'Changes are pushed to my own branch.', 'تغییرها به شاخهٔ خودم push شده‌اند.'],
]);

export const submissionCheck = items([
  ['submit-lint', 'npm run lint passes.', 'npm run lint موفق است.'],
  ['submit-build', 'npm run build passes.', 'npm run build موفق است.'],
  [
    'submit-live',
    'The live link works in a private browser window.',
    'پیوند زنده در پنجرهٔ خصوصی مرورگر کار می‌کند.',
  ],
  [
    'submit-explain',
    'I can explain every line I committed.',
    'می‌توانم هر خطی را که commit کرده‌ام توضیح بدهم.',
  ],
  [
    'submit-group',
    'I posted the pull request link in the group chat.',
    'پیوند pull request را در گفت‌وگوی گروه گذاشته‌ام.',
  ],
]);

export const pullRequestGroups = [
  {
    id: 'pr-npm',
    title: '1. npm basics and Package Detective (Sat 24 Oct)',
    fa: '۱. مبانی npm و کارآگاه بسته‌ها',
    sections: [
      {
        title: 'Core',
        fa: 'اصلی',
        items: items([
          [
            'pr-npm-deps',
            'Practice folder has one runtime dependency and one dev dependency in the right place.',
            'پوشهٔ تمرین یک وابستگی زمان اجرا و یک وابستگی توسعه در جای درست دارد.',
          ],
          [
            'pr-npm-scripts',
            'The practice folder has three npm scripts and I ran each one.',
            'پوشهٔ تمرین سه script دارد و هر سه را اجرا کرده‌ام.',
          ],
          [
            'pr-npm-repo',
            'I linked the open-source repository I studied.',
            'پیوند مخزن متن‌بازی را که بررسی کرده‌ام گذاشته‌ام.',
          ],
          [
            'pr-npm-commands',
            'I explained the runnable commands and what each does.',
            'فرمان‌های قابل اجرا و کاربرد هرکدام را توضیح داده‌ام.',
          ],
          [
            'pr-npm-dependency-types',
            'I explained which dependencies ship to users and which are development-only.',
            'توضیح داده‌ام کدام وابستگی به کاربر می‌رسد و کدام فقط توسعه‌ای است.',
          ],
          [
            'pr-npm-ranges',
            'I explained which version ranges could update and to what.',
            'محدوده‌های نسخه و نسخه‌های احتمالی بعدی را توضیح داده‌ام.',
          ],
          [
            'pr-npm-node',
            'I identified the expected Node version from project files.',
            'نسخهٔ Node مورد انتظار را از فایل‌های پروژه پیدا کرده‌ام.',
          ],
        ]),
      },
      {
        title: 'Intermediate',
        fa: 'میانی',
        items: items([
          [
            'pr-npm-caret',
            'I explained ^ and ~ with a real “could become” version.',
            '^ و ~ را با نمونهٔ واقعی «می‌تواند به این نسخه برسد» توضیح داده‌ام.',
          ],
          [
            'pr-npm-lockfile',
            'I explained the lockfile’s job in one beginner-friendly sentence.',
            'کار فایل قفل را در یک جملهٔ ساده برای مبتدی توضیح داده‌ام.',
          ],
        ]),
      },
      {
        title: 'Advanced',
        fa: 'پیشرفته',
        items: items([
          [
            'pr-npm-commands-output',
            'I ran two commands to check two answers and pasted their output.',
            'دو فرمان برای بررسی دو پاسخ اجرا و خروجی‌شان را ثبت کرده‌ام.',
          ],
          [
            'pr-npm-wrong-answers',
            'I explained any wrong answer and why it was wrong.',
            'پاسخ نادرست احتمالی و دلیل اشتباه‌بودنش را توضیح داده‌ام.',
          ],
        ]),
      },
    ],
  },
  {
    id: 'pr-project',
    title: '2. Set up a fresh project (Sun 25 Oct)',
    fa: '۲. راه‌اندازی پروژهٔ تازه',
    sections: [
      {
        title: 'Core',
        fa: 'اصلی',
        items: items([
          [
            'pr-project-vite',
            'The repository root uses the Vite vanilla template.',
            'ریشهٔ مخزن از الگوی Vite vanilla استفاده می‌کند.',
          ],
          [
            'pr-project-tailwind',
            'Tailwind is configured with the Vite plugin.',
            'Tailwind با افزونهٔ Vite پیکربندی شده است.',
          ],
          [
            'pr-project-eslint',
            'ESLint was set up with npm init @eslint/config@latest (ESLint 10).',
            'ESLint با npm init @eslint/config@latest راه‌اندازی شده است (ESLint 10).',
          ],
          [
            'pr-project-prettier',
            'Prettier, .prettierrc, and eslint-config-prettier are configured.',
            'Prettier، فایل .prettierrc و eslint-config-prettier تنظیم شده‌اند.',
          ],
          [
            'pr-project-scripts',
            'dev, build, preview, lint, and format all run without errors.',
            'پنج فرمان dev، build، preview، lint و format بدون خطا اجرا می‌شوند.',
          ],
          [
            'pr-project-design',
            'I moved one design I already built into the project and it still looks right.',
            'یکی از طرح‌های قبلی خودم را منتقل کرده‌ام و ظاهرش درست مانده است.',
          ],
          [
            'pr-project-git',
            'package-lock.json is committed; node_modules/, dist/, and .env are not committed.',
            'package-lock.json ثبت شده و node_modules/، dist/ و .env ثبت نشده‌اند.',
          ],
          [
            'pr-project-ignores',
            'exercises/01-npm-practice is listed in eslint.config.js ignores.',
            'مسیر exercises/01-npm-practice در ignores فایل eslint.config.js است.',
          ],
        ]),
      },
      {
        title: 'Intermediate',
        fa: 'میانی',
        items: items([
          [
            'pr-project-vscode',
            '.vscode/settings.json enables format on save and lint errors while typing.',
            'فایل .vscode/settings.json قالب‌بندی هنگام ذخیره و خطای lint هنگام تایپ را فعال می‌کند.',
          ],
          [
            'pr-project-env',
            'A VITE_ variable appears on the page; .env.example is committed instead of .env.',
            'یک متغیر VITE_ روی صفحه دیده می‌شود و .env.example ثبت شده، نه .env.',
          ],
          [
            'pr-project-public',
            'My PR explains why VITE_ variables are public.',
            'در PR توضیح داده‌ام چرا متغیرهای VITE_ عمومی‌اند.',
          ],
        ]),
      },
      {
        title: 'Advanced',
        fa: 'پیشرفته',
        items: items([
          [
            'pr-project-broken-build',
            'I intentionally broke the build, caught the problem, fixed it, and recorded what I saw.',
            'عمداً build را خراب کردم، مشکل را پیدا و رفع کردم و مشاهده‌ام را نوشتم.',
          ],
          [
            'pr-project-extra-rule',
            'I added one extra ESLint rule and explained why.',
            'یک قاعدهٔ اضافهٔ ESLint انتخاب و دلیلش را توضیح داده‌ام.',
          ],
        ]),
      },
    ],
  },
  {
    id: 'pr-lint',
    title: '3. Lint-fix exercise (Mon 26 Oct)',
    fa: '۳. تمرین اصلاح خطاهای lint',
    sections: [
      {
        title: 'Core',
        fa: 'اصلی',
        items: items([
          [
            'pr-lint-ten',
            'All ten provided errors are fixed; npm run lint has zero errors and zero warnings.',
            'هر ده خطای داده‌شده رفع شده و npm run lint بدون خطا و هشدار است.',
          ],
          ['pr-lint-rules', 'No ESLint rule was turned off.', 'هیچ قاعدهٔ ESLint خاموش نشده است.'],
        ]),
      },
      {
        title: 'Intermediate',
        fa: 'میانی',
        items: items([
          [
            'pr-lint-notes',
            '03-lint-fix.md has one line explaining what each rule protects against.',
            'در 03-lint-fix.md برای هر قاعده یک خط دربارهٔ خطری که پیشگیری می‌کند نوشته‌ام.',
          ],
        ]),
      },
    ],
  },
  {
    id: 'pr-debug',
    title: '4. DevTools bug hunt and Broken Build (Tue 27 Oct)',
    fa: '۴. شکار باگ و پروژهٔ Broken Build',
    sections: [
      {
        title: 'Core',
        fa: 'اصلی',
        items: items([
          [
            'pr-debug-five',
            'I found all five planted bugs using breakpoints in Chrome DevTools.',
            'هر پنج باگ کاشته‌شده را با breakpoint در Chrome DevTools پیدا کرده‌ام.',
          ],
          [
            'pr-debug-repo',
            'The Broken Build fork works with npm install, dev, lint, and build; its link is in the journal.',
            'fork پروژهٔ Broken Build با install، dev، lint و build کار می‌کند و پیوندش در دفترچه است.',
          ],
        ]),
      },
      {
        title: 'Intermediate',
        fa: 'میانی',
        items: items([
          [
            'pr-debug-journal',
            '04-debugging-journal.md records the guess, change, and result for each bug.',
            'در 04-debugging-journal.md حدس، تغییر و نتیجهٔ هر باگ را ثبت کرده‌ام.',
          ],
          [
            'pr-debug-commits',
            'I made one commit per fix and each message names the real cause.',
            'برای هر اصلاح یک commit دارم و پیامش علت واقعی را می‌گوید.',
          ],
        ]),
      },
    ],
  },
  {
    id: 'pr-git',
    title: '5. Git practice and deploy (Wed 28 Oct)',
    fa: '۵. تمرین Git و انتشار',
    sections: [
      {
        title: 'Core',
        fa: 'اصلی',
        items: items([
          [
            'pr-git-game',
            'Learn Git Branching Introduction Sequence and Push & Pull are complete; I included a screenshot.',
            'Introduction Sequence و Push & Pull در Learn Git Branching تمام شده و تصویرش را گذاشته‌ام.',
          ],
          ['pr-git-unstage', 'I unstaged a file.', 'یک فایل را از staging بیرون آورده‌ام.'],
          ['pr-git-message', 'I fixed a commit message.', 'پیام یک commit را اصلاح کرده‌ام.'],
          [
            'pr-git-revert',
            'I undid a pushed commit with git revert.',
            'یک commit منتشرشده را با git revert برگردانده‌ام.',
          ],
          [
            'pr-git-stash',
            'I put unfinished work aside.',
            'کار نیمه‌تمام را موقتاً کنار گذاشته‌ام.',
          ],
          [
            'pr-git-reflog',
            'I recovered a lost branch with git reflog.',
            'شاخهٔ گمشده را با git reflog بازیابی کرده‌ام.',
          ],
          [
            'pr-git-deploy',
            'The project is deployed and its live link works in a private window.',
            'پروژه منتشر شده و پیوندش در پنجرهٔ خصوصی کار می‌کند.',
          ],
        ]),
      },
      {
        title: 'Intermediate',
        fa: 'میانی',
        items: items([
          [
            'pr-git-reasons',
            'For each Git problem, I explained why I chose that tool over a similar one.',
            'برای هر مسئله توضیح داده‌ام چرا آن ابزار را به‌جای ابزار مشابه انتخاب کردم.',
          ],
        ]),
      },
    ],
  },
  {
    id: 'pr-ai',
    title: '6. AI lab: chat vs harness (Wed 28 Oct)',
    fa: '۶. آزمایشگاه AI: گفت‌وگو در برابر harness',
    sections: [
      {
        title: 'Core',
        fa: 'اصلی',
        items: items([
          [
            'pr-ai-chat',
            'I reviewed the project with an AI chat.',
            'پروژه را با یک گفت‌وگوی هوش مصنوعی بازبینی کرده‌ام.',
          ],
          [
            'pr-ai-opencode',
            'I reviewed the same repository with opencode in Plan mode.',
            'همان مخزن را با opencode در حالت Plan بازبینی کرده‌ام.',
          ],
          [
            'pr-ai-log',
            'ai-log.md records visibility, three shared points, one opencode-only point, one mistake, tool, and model.',
            'ai-log.md میزان دسترسی، سه نکتهٔ مشترک، یک نکتهٔ ویژهٔ opencode، یک اشتباه، ابزار و مدل را ثبت می‌کند.',
          ],
        ]),
      },
      {
        title: 'Intermediate',
        fa: 'میانی',
        items: items([
          [
            'pr-ai-harness',
            'I explained the harness tools, action/check/retry loop, and permissions in my own words.',
            'ابزارها، چرخهٔ اقدام/بررسی/تلاش دوباره و مجوزهای harness را با بیان خودم توضیح داده‌ام.',
          ],
        ]),
      },
      {
        title: 'Advanced',
        fa: 'پیشرفته',
        items: items([
          [
            'pr-ai-lint',
            'opencode ran npm run lint, explained the output, and I noted that it asked permission first.',
            'opencode npm run lint را اجرا و خروجی را توضیح داده و ثبت کرده‌ام که اول اجازه خواست.',
          ],
        ]),
      },
    ],
  },
];
