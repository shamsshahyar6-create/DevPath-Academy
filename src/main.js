import { courseWeeks } from './content/course.js';
import { dailyCheck, pullRequestGroups, submissionCheck } from './content/checklists.js';
import './styles.css';

const app = document.querySelector('#app');
const progressKey = 'code-workshop-progress';
const checklistKey = 'code-workshop-checklists';
const themeKey = 'code-workshop-theme';
const courseTitle = import.meta.env.VITE_APP_TITLE || 'کارگاه کدنویسی';

const totalLessons = courseWeeks.reduce((sum, week) => sum + week.lessons.length, 0);
const totalMinutes = courseWeeks.reduce(
  (sum, week) => sum + week.lessons.reduce((weekSum, lesson) => weekSum + lesson.duration, 0),
  0,
);
const totalHours = Math.round(totalMinutes / 60);

function readTheme() {
  try {
    const stored = localStorage.getItem(themeKey);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

const state = {
  language: 'fa',
  theme: readTheme(),
  weekId: courseWeeks[0].id,
  lessonId: courseWeeks[0].lessons[0].id,
  selectedAnswer: null,
  quizMessage: '',
  checklist: {},
  progress: {},
  glossaryQuery: '',
  alert: '',
  status: '',
  confirmReset: false,
};

function readStoredObject(key, label, validate) {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return {};
    const value = JSON.parse(stored);
    if (!value || Array.isArray(value) || typeof value !== 'object') {
      throw new Error('Stored value must be an object.');
    }
    if (!Object.values(value).every(validate)) {
      throw new Error('Stored data has an invalid value.');
    }
    return value;
  } catch (error) {
    state.alert = `${label} خوانده نشد: ${error.message}`;
    return {};
  }
}

state.progress = readStoredObject(
  progressKey,
  'پیشرفت درس',
  (value) => value && typeof value.practice === 'boolean' && typeof value.quiz === 'boolean',
);
state.checklist = readStoredObject(
  checklistKey,
  'وضعیت چک‌لیست',
  (value) => typeof value === 'boolean',
);

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[character],
  );
}

function t(value) {
  return value[state.language];
}

function isEnglish() {
  return state.language === 'en';
}

function currentWeek() {
  return courseWeeks.find((week) => week.id === state.weekId) ?? courseWeeks[0];
}

function currentLesson() {
  return (
    currentWeek().lessons.find((lesson) => lesson.id === state.lessonId) ?? currentWeek().lessons[0]
  );
}

function getLessonProgress(lessonId) {
  return state.progress[lessonId] ?? { practice: false, quiz: false };
}

function completeLessonCount(week) {
  return week.lessons.filter((lesson) => {
    const status = getLessonProgress(lesson.id);
    return status.practice && status.quiz;
  }).length;
}

function allCompleteLessonCount() {
  return courseWeeks.reduce((sum, week) => sum + completeLessonCount(week), 0);
}

function overallPercent() {
  if (!totalLessons) return 0;
  return Math.round((allCompleteLessonCount() / totalLessons) * 100);
}

function saveStorage(key, value, label) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    state.alert = '';
  } catch (error) {
    state.alert = `${label} ذخیره نشد: ${error.message}`;
  }
}

function progressForItems(groupItems) {
  const completed = groupItems.filter((item) => state.checklist[item.id]).length;
  return `${completed}/${groupItems.length}`;
}

function lessonPosition(lesson) {
  const week = currentWeek();
  return week.lessons.findIndex((item) => item.id === lesson.id);
}

function renderHeader() {
  const english = isEnglish();
  return `
    <a class="skip-link" href="#main">${english ? 'Skip to content' : 'پرش به محتوا'}</a>
    <header class="site-header sticky top-0 z-20">
      <a class="brand" href="#" aria-label="${english ? 'Course home' : 'صفحهٔ اصلی دوره'}">
        <span class="brand-mark">W</span>
        <span class="brand-copy"><strong>${escapeHtml(courseTitle)}</strong><small>${english ? 'LEARN BY BUILDING' : 'با ساختن یاد بگیر'}</small></span>
      </a>
      <nav class="header-nav" aria-label="${english ? 'Main navigation' : 'پیمایش اصلی'}">
        <a href="#course">${english ? 'Lessons' : 'درس‌ها'}</a>
        <a href="#roadmap">${english ? 'Roadmap' : 'نقشهٔ راه'}</a>
        <a href="#checklists">${english ? 'Checklists' : 'چک‌لیست‌ها'}</a>
      </nav>
      <div class="header-actions">
        <button class="theme-switch" type="button" data-action="toggle-theme" aria-label="${english ? 'Switch theme' : 'تغییر پوسته'}" title="${english ? 'Switch theme' : 'تغییر پوسته'}">
          ${state.theme === 'dark' ? '◐' : '◑'}
        </button>
        <button class="language-switch" type="button" data-action="toggle-language" aria-label="${english ? 'Switch to Persian' : 'تغییر زبان به انگلیسی'}">
          <span class="${english ? '' : 'language-active'}">فا</span><span class="${english ? 'language-active' : ''}">EN</span>
        </button>
      </div>
    </header>
  `;
}

function renderHero() {
  const english = isEnglish();
  return `
    <section class="hero-panel grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]">
      <div class="hero-copy">
        <span class="hero-kicker"><i></i>${english ? 'THE COMPLETE EIGHT-WEEK COURSE' : 'دورهٔ کامل هشت هفته‌ای'}</span>
        <h1>${english ? 'From your first command to a website you can ship.' : 'از اولین فرمان تا وب‌سایتی که می‌توانی منتشر کنی.'}</h1>
        <p>${
          english
            ? 'A practical, evidence-based path: set up your tools, master HTML, Tailwind, and JavaScript, then add APIs, testing, TypeScript, and a deployed capstone.'
            : 'مسیری عملی و مبتنی بر شاهد: ابزارها را آماده کن، HTML، Tailwind و JavaScript را یاد بگیر، سپس API، آزمون، TypeScript و پروژهٔ پایانی منتشرشده را اضافه کن.'
        }</p>
        <div class="hero-actions">
          <a class="hero-cta" href="#course">${english ? 'Start learning' : 'شروع یادگیری'} <span>←</span></a>
          <span class="hero-meta">${totalLessons} ${english ? 'hands-on lessons' : 'درس عملی'} · ${courseWeeks.length} ${english ? 'weeks' : 'هفته'}</span>
        </div>
        <div class="hero-stats" aria-label="${english ? 'Course at a glance' : 'نمای کلی دوره'}">
          <div><strong>${courseWeeks.length}</strong><span>${english ? 'weeks' : 'هفته'}</span></div>
          <div><strong>${totalLessons}</strong><span>${english ? 'lessons' : 'درس'}</span></div>
          <div><strong>${totalHours}</strong><span>${english ? 'hours' : 'ساعت'}</span></div>
          <div><strong>${overallPercent()}%</strong><span>${english ? 'complete' : 'تکمیل'}</span></div>
        </div>
        <div class="course-rule"><strong>${english ? 'Course rule' : 'قانون دوره'}</strong><span>${english ? 'AI may review and explain; it may not write or edit your project code.' : 'هوش مصنوعی می‌تواند توضیح بدهد و بازبینی کند؛ اما نباید کد پروژه را بنویسد یا ویرایش کند.'}</span></div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
        <div class="art-window">
          <div class="window-bar"><i></i><i></i><i></i><span>my-first-site</span></div>
          <div class="window-code"><span>&lt;html&gt;</span><br />&nbsp;&nbsp;&lt;h1&gt;${english ? 'Hello, world!' : 'سلام، دنیا!'}&lt;/h1&gt;<br /><span>&lt;/html&gt;</span></div>
          <div class="window-status">● ${english ? 'Ready to build' : 'آمادهٔ ساخت'}</div>
        </div>
        <span class="art-tag tag-html">HTML</span><span class="art-tag tag-css">Tailwind</span><span class="art-tag tag-js">JavaScript</span>
      </div>
    </section>
  `;
}

function renderWeekTabs() {
  const english = isEnglish();
  return courseWeeks
    .map((week) => {
      const selected = week.id === state.weekId;
      const complete = completeLessonCount(week);
      const percent = Math.round((complete / week.lessons.length) * 100);
      return `
      <button class="week-tab ${selected ? 'week-tab-active' : ''}" type="button"
        data-action="select-week" data-week-id="${week.id}" aria-pressed="${selected}">
        <span class="week-tab-top">
          <span class="week-tab-index">${english ? `WEEK ${week.number}` : `هفتهٔ ${week.number}`}</span>
          <span class="week-tab-state">${complete}/${week.lessons.length}</span>
        </span>
        <strong>${escapeHtml(t(week.title))}</strong>
        <span class="week-tab-subtitle">${escapeHtml(t(week.subtitle))}</span>
        <span class="week-tab-track"><i style="width:${percent}%"></i></span>
      </button>
    `;
    })
    .join('');
}

function renderLessonNavigation(week) {
  return week.lessons
    .map((lesson, index) => {
      const selected = lesson.id === state.lessonId;
      const progress = getLessonProgress(lesson.id);
      const complete = progress.practice && progress.quiz;
      return `
      <button class="lesson-nav-item ${selected ? 'lesson-nav-active' : ''}" type="button"
        data-action="select-lesson" data-lesson-id="${lesson.id}" aria-current="${selected ? 'step' : 'false'}">
        <span class="lesson-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="lesson-nav-copy">
          <small>${isEnglish() ? 'DAY' : 'روز'} ${lesson.day} · ${lesson.duration} ${isEnglish() ? 'min' : 'دقیقه'}</small>
          <strong>${escapeHtml(t(lesson.title))}</strong>
        </span>
        <span class="lesson-nav-status">${complete ? '✓' : '○'}</span>
      </button>
    `;
    })
    .join('');
}

function renderConcepts(lesson) {
  return lesson.terms
    .map(
      ([term, definition]) => `
    <article class="concept-card">
      <h4 dir="auto">${escapeHtml(term)}</h4>
      <p>${escapeHtml(definition)}</p>
    </article>
  `,
    )
    .join('');
}

function renderLessonPager(lesson) {
  const week = currentWeek();
  const index = lessonPosition(lesson);
  const previous = week.lessons[index - 1];
  const next = week.lessons[index + 1];
  const english = isEnglish();
  if (!previous && !next) return '';
  return `
    <nav class="lesson-pager" aria-label="${english ? 'Lesson navigation' : 'پیمایش درس‌ها'}">
      ${
        previous
          ? `<button type="button" class="pager-button" data-action="select-lesson" data-lesson-id="${previous.id}"><small>${english ? 'Previous' : 'درس قبل'}</small><strong>${escapeHtml(t(previous.title))}</strong></button>`
          : '<span></span>'
      }
      ${
        next
          ? `<button type="button" class="pager-button pager-next" data-action="select-lesson" data-lesson-id="${next.id}"><small>${english ? 'Next' : 'درس بعد'}</small><strong>${escapeHtml(t(next.title))}</strong></button>`
          : '<span></span>'
      }
    </nav>
  `;
}

function renderLesson(lesson) {
  const progress = getLessonProgress(lesson.id);
  const english = isEnglish();
  return `
    <article class="lesson-card" aria-labelledby="lesson-title">
      <div class="lesson-meta">
        <span class="lesson-kicker">${english ? 'DAY' : 'روز'} ${lesson.day} · ${lesson.duration} ${english ? 'minutes' : 'دقیقه'}</span>
        <span class="hands-on-label">${english ? 'HANDS-ON' : 'یادگیری عملی'}</span>
      </div>
      <h2 id="lesson-title">${escapeHtml(t(lesson.title))}</h2>
      <p class="lesson-summary">${escapeHtml(t(lesson.summary))}</p>

      <section class="lesson-section">
        <h3><span class="section-icon icon-blue">◎</span>${english ? 'What you will learn' : 'هدف‌های یادگیری'}</h3>
        <ul class="lesson-list">${t(lesson.goals)
          .map((goal) => `<li>${escapeHtml(goal)}</li>`)
          .join('')}</ul>
      </section>

      <section class="lesson-section">
        <div class="section-heading">
          <h3><span class="section-icon icon-purple">Aa</span>${english ? 'Important terms — explained in Persian' : 'اصطلاح‌های مهم با تعریف فارسی'}</h3>
          <p>${english ? 'Persian meanings are included so you can learn the technical vocabulary.' : 'اصطلاح انگلیسی را با تعریف کوتاه فارسی یاد بگیر.'}</p>
        </div>
        <div class="concept-grid">${renderConcepts(lesson)}</div>
      </section>

      <section class="lesson-section">
        <h3><span class="section-icon icon-amber">↗</span>${english ? 'Do it step by step' : 'گام‌به‌گام انجام بده'}</h3>
        <ol class="step-list">${t(lesson.steps)
          .map((step) => `<li>${escapeHtml(step)}</li>`)
          .join('')}</ol>
      </section>

      <section class="example-card">
        <h3><span class="section-icon icon-green">{ }</span>${english ? 'A small example' : 'نمونهٔ کوچک'}</h3>
        <pre dir="ltr"><code>${escapeHtml(lesson.example.code)}</code></pre>
        <p>${escapeHtml(t(lesson.example.explanation))}</p>
      </section>

      <section class="practice-card" id="practice">
        <h3><span class="section-icon icon-orange">✦</span>${english ? 'Your practical task' : 'تمرین عملی تو'}</h3>
        <p>${escapeHtml(t(lesson.practice))}</p>
        <label class="practice-check">
          <input type="checkbox" data-action="lesson-practice" ${progress.practice ? 'checked' : ''} />
          <span>${english ? 'I completed and reviewed this practice.' : 'تمرین را انجام دادم و نتیجه‌ام را بررسی کردم.'}</span>
        </label>
      </section>

      <section class="quiz-card">
        <h3><span class="section-icon icon-blue">?</span>${english ? 'Quick knowledge check' : 'آزمون کوتاه درک مطلب'}</h3>
        <p class="quiz-question">${escapeHtml(t(lesson.quiz.question))}</p>
        <div class="quiz-options">
          ${t(lesson.quiz.options)
            .map(
              (option, index) => `
            <button type="button" class="quiz-option ${state.selectedAnswer === index ? 'quiz-option-selected' : ''}"
              data-action="select-answer" data-answer="${index}" ${progress.quiz ? 'disabled' : ''}>
              ${escapeHtml(option)}
            </button>
          `,
            )
            .join('')}
        </div>
        ${
          progress.quiz
            ? `<p class="quiz-feedback correct" role="status">${english ? 'Correct!' : 'درست است!'} ${escapeHtml(t(lesson.quiz.explanation))}</p>`
            : `<button class="check-answer" type="button" data-action="check-answer" ${state.selectedAnswer === null ? 'disabled' : ''}>${english ? 'Check answer' : 'بررسی پاسخ'}</button>
             ${state.quizMessage ? `<p class="quiz-feedback ${state.quizMessage.correct ? 'correct' : 'incorrect'}" role="status">${escapeHtml(state.quizMessage.text)}</p>` : ''}`
        }
      </section>

      ${renderLessonPager(lesson)}
    </article>
  `;
}

function renderGlossary(lesson) {
  const english = isEnglish();
  const query = state.glossaryQuery.trim().toLocaleLowerCase();
  const matches = lesson.terms.filter(([term, definition]) =>
    `${term} ${definition}`.toLocaleLowerCase().includes(query),
  );
  return `
    <aside class="glossary-panel" id="glossary" aria-label="${english ? 'Lesson glossary' : 'واژه‌نامهٔ درس'}">
      <h3><span class="section-icon icon-purple">Aa</span>${english ? 'Lesson glossary' : 'واژه‌نامهٔ همین درس'}</h3>
      <p>${english ? 'Review each English term with its Persian definition.' : 'اصطلاح انگلیسی را با تعریف فارسی به یاد بسپار.'}</p>
      <label class="search-label" for="glossary-search">${english ? 'Search terms' : 'جست‌وجوی اصطلاح'}</label>
      <input id="glossary-search" type="search" value="${escapeHtml(state.glossaryQuery)}"
        placeholder="${english ? 'For example: package' : 'مثلاً: package'}" />
      <div id="glossary-results" class="glossary-results" tabindex="0" aria-label="${english ? 'Glossary results' : 'نتایج واژه‌نامه'}">
        ${
          matches.length
            ? matches
                .map(
                  ([term, definition]) => `
          <article class="glossary-entry"><h4 dir="auto">${escapeHtml(term)}</h4><p>${escapeHtml(definition)}</p></article>
        `,
                )
                .join('')
            : `<p class="no-results">${english ? 'No matching terms.' : 'اصطلاحی پیدا نشد.'}</p>`
        }
      </div>
      <div class="learning-tip"><strong>✦</strong><p>${english ? 'Read the term, explain it in your own words, and then do the practice.' : 'اصطلاح را بخوان، تعریفش را با زبان خودت بگو و سپس تمرین را انجام بده.'}</p></div>
      ${renderProgressTools()}
    </aside>
  `;
}

function renderProgressTools() {
  const english = isEnglish();
  return `
    <div class="progress-tools">
      <h4>${english ? 'Your data' : 'داده‌های تو'}</h4>
      <p>${english ? 'Progress lives only in this browser. Export it if you change devices.' : 'پیشرفت فقط در همین مرورگر است. برای تغییر دستگاه آن را خروجی بگیر.'}</p>
      <div class="tool-buttons">
        <button type="button" class="tool-button" data-action="export-progress">${english ? 'Export' : 'خروجی'}</button>
        <label class="tool-button tool-file">${english ? 'Import' : 'ورود'}<input type="file" accept="application/json" data-action="import-progress" /></label>
        <button type="button" class="tool-button tool-danger" data-action="reset-progress">${state.confirmReset ? (english ? 'Confirm reset' : 'تأیید پاک‌سازی') : english ? 'Reset' : 'پاک‌سازی'}</button>
      </div>
      ${state.status ? `<p class="tool-status" role="status">${escapeHtml(state.status)}</p>` : ''}
    </div>
  `;
}

function renderCheckGroup(group) {
  const groupItems = group.sections.flatMap((section) => section.items);
  return `
    <details class="checklist-group">
      <summary>
        <span class="group-title">${isEnglish() ? group.title : group.fa}</span>
        <span class="group-counter">${progressForItems(groupItems)} ${isEnglish() ? 'items' : 'مورد'}</span>
      </summary>
      ${group.sections
        .map(
          (section) => `
        <section class="checklist-subsection">
          <h4>${isEnglish() ? section.title : section.fa}</h4>
          ${section.items
            .map(
              (item) => `
            <label class="checklist-row">
              <input type="checkbox" data-action="checklist" data-check-id="${item.id}" ${state.checklist[item.id] ? 'checked' : ''} />
              <span>${isEnglish() ? item.en : item.fa}</span>
            </label>
          `,
            )
            .join('')}
        </section>
      `,
        )
        .join('')}
    </details>
  `;
}

function allRequirementItems() {
  return [
    ...dailyCheck,
    ...pullRequestGroups.flatMap((group) => group.sections.flatMap((section) => section.items)),
    ...submissionCheck,
  ];
}

function buildPullRequestTemplate() {
  const lines = [
    '## Week 01: Your Tools — <your full name>',
    '',
    '**Live link:** <Netlify or Vercel URL>',
    '',
    '![Screenshot](<drag your screenshot here>)',
    '',
  ];
  for (const group of pullRequestGroups) {
    lines.push(`### ${group.title}`, '');
    for (const section of group.sections) {
      lines.push(section.title);
      for (const item of section.items) lines.push(`- [ ] ${item.en}`);
      lines.push('');
    }
  }
  lines.push('### Before I submit', '');
  for (const item of submissionCheck) lines.push(`- [ ] ${item.en}`);
  lines.push(
    '',
    '### Why anything starting with VITE_ is public',
    '',
    '<your answer>',
    '',
    '### What I built and how',
    '',
    '<a few lines>',
    '',
    '### Hardest problem and how I solved it',
    '',
    '1. <the problem>',
    '2. <what I tried>',
    '3. <what worked, and why>',
  );
  return lines.join('\n');
}

function renderMilestones() {
  const english = isEnglish();
  return `
    <div class="milestones-card">
      <div class="check-section-title"><span class="section-icon icon-green">★</span><div>
        <h3>${english ? 'Full-course milestones' : 'نقاط عطف کل دوره'}</h3>
        <p>${english ? 'One outcome per week. Check it only when the week project is truly done.' : 'یک نتیجه برای هر هفته. فقط وقتی پروژهٔ آن هفته واقعاً تمام شد تیک بزن.'}</p>
      </div></div>
      <div class="milestone-grid">
        ${courseWeeks
          .map((week) => {
            const id = `milestone-${week.id}`;
            return `
              <label class="milestone-item">
                <input type="checkbox" data-action="checklist" data-check-id="${id}" ${state.checklist[id] ? 'checked' : ''} />
                <span class="milestone-copy">
                  <strong>${english ? `Week ${week.number}` : `هفتهٔ ${week.number}`} · ${escapeHtml(t(week.title))}</strong>
                  <small>${escapeHtml(t(week.outcome))}</small>
                </span>
              </label>
            `;
          })
          .join('')}
      </div>
    </div>
  `;
}

function renderWeekOneRequirements() {
  const english = isEnglish();
  const allItems = allRequirementItems();
  return `
    <div class="daily-check-card">
      <div class="check-section-title"><span class="section-icon icon-blue">✓</span><div>
        <h3>${english ? 'Every day, before you push' : 'هر روز، پیش از push'}</h3>
        <p>${progressForItems(dailyCheck)} ${english ? 'daily checks' : 'بررسی روزانه'}</p>
      </div></div>
      ${dailyCheck
        .map(
          (item) => `
        <label class="checklist-row"><input type="checkbox" data-action="checklist" data-check-id="${item.id}" ${state.checklist[item.id] ? 'checked' : ''} />
        <span>${english ? item.en : item.fa}</span></label>
      `,
        )
        .join('')}
    </div>

    <div class="pr-checklist-card">
      <div class="check-section-title"><span class="section-icon icon-purple">☷</span><div>
        <h3>${english ? 'Week 1 pull request checklist' : 'چک‌لیست Pull Request هفتهٔ اول'}</h3>
        <p>${english ? 'Core, intermediate, and advanced requirements for submission review' : 'موارد اصلی، میانی و پیشرفته؛ برای مرور پیش از تحویل'}</p>
      </div></div>
      <p class="checklist-note">${english ? 'These checkboxes record your selections; they do not verify that work was actually done.' : 'این شمارنده فقط وضعیت انتخابی تو را نگه می‌دارد؛ انجام واقعی کار را تأیید نمی‌کند.'}</p>
      ${pullRequestGroups.map(renderCheckGroup).join('')}
      <details class="pr-template">
        <summary>${english ? 'Show copyable PR description template' : 'نمایش متن قابل‌کپی برای توضیحات PR'}</summary>
        <p>${english ? 'Copy the template, check only completed work, and fill in your own details.' : 'قالب را کپی کن؛ فقط مواردی را که واقعاً انجام داده‌ای تیک بزن و جای‌خالی‌ها را با اطلاعات خودت پُر کن.'}</p>
        <button class="copy-template" type="button" data-action="copy-template">${english ? 'Copy Markdown template' : 'کپی قالب Markdown'}</button>
        <span class="copy-status" role="status"></span>
      </details>
      <pre class="template-preview" dir="ltr" tabindex="0" aria-label="${english ? 'Pull request description template' : 'قالب توضیحات Pull Request'}">${escapeHtml(buildPullRequestTemplate())}</pre>
    </div>

    <div class="daily-check-card submit-check-card">
      <div class="check-section-title"><span class="section-icon icon-green">↗</span><div>
        <h3>${english ? 'Before I submit' : 'پیش از تحویل نهایی'}</h3>
        <p>${progressForItems(submissionCheck)} ${english ? 'final checks' : 'بررسی نهایی'}</p>
      </div></div>
      ${submissionCheck
        .map(
          (item) => `
        <label class="checklist-row"><input type="checkbox" data-action="checklist" data-check-id="${item.id}" ${state.checklist[item.id] ? 'checked' : ''} />
        <span>${english ? item.en : item.fa}</span></label>
      `,
        )
        .join('')}
    </div>
    <p class="requirements-total">${
      english
        ? `Selected checklist progress: ${progressForItems(allItems)}. No item is marked complete automatically.`
        : `پیشرفت انتخابی چک‌لیست: ${progressForItems(allItems)} مورد. هیچ موردی خودکار انجام‌شده علامت نمی‌خورد.`
    }</p>
  `;
}

function renderChecklists() {
  const english = isEnglish();
  return `
    <section class="requirements-section" id="checklists">
      <div class="requirements-heading">
        <span class="eyebrow">${english ? 'THE COURSE CHECKLISTS' : 'چک‌لیست واقعی دوره'}</span>
        <h2>${english ? 'Track the whole course, honestly.' : 'کل دوره را صادقانه پیگیری کن.'}</h2>
        <p>${
          english
            ? 'Milestones cover all eight weeks. The detailed Week 1 requirements are kept below as the original submission reference.'
            : 'نقاط عطف همهٔ هشت هفته را پوشش می‌دهند. شرط‌های تفصیلی هفتهٔ اول در پایین به‌عنوان مرجع اصلی تحویل نگه داشته شده‌اند.'
        }</p>
      </div>
      ${renderMilestones()}
      <details class="week-one-reference" ${state.weekId === 'week-1' ? 'open' : ''}>
        <summary>${english ? 'Week 1: detailed submission requirements' : 'هفتهٔ اول: شرط‌های تفصیلی تحویل'}</summary>
        ${renderWeekOneRequirements()}
      </details>
    </section>
  `;
}

function renderCompletionBanner() {
  if (overallPercent() < 100) return '';
  return `
    <div class="completion-banner" role="status">
      <span class="completion-mark">★</span>
      <div>
        <h3>${isEnglish() ? 'Course complete' : 'دوره کامل شد'}</h3>
        <p>${isEnglish() ? 'Every lesson practice and quiz is done. Now polish your capstone, deploy it, and present it.' : 'همهٔ تمرین‌ها و آزمون‌ها انجام شده‌اند. حالا پروژهٔ پایانی را کامل، منتشر و ارائه کن.'}</p>
      </div>
    </div>
  `;
}

function render() {
  const week = currentWeek();
  const lesson = currentLesson();
  const complete = completeLessonCount(week);
  const progress = Math.round((complete / week.lessons.length) * 100);
  const english = isEnglish();

  document.documentElement.lang = state.language;
  document.documentElement.dir = english ? 'ltr' : 'rtl';
  document.documentElement.dataset.theme = state.theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', state.theme === 'dark' ? '#0a1020' : '#f5f7fb');
  document.title = `${courseTitle} | ${english ? 'A complete eight-week web course' : 'دورهٔ کامل هشت‌هفته‌ای وب'}`;

  app.innerHTML = `
    <div class="site-shell">
      ${renderHeader()}
      <main id="main">
        ${renderHero()}

        <section class="course-section" id="course">
          <div class="section-intro">
            <div>
              <span class="eyebrow">${english ? 'YOUR LEARNING PATH' : 'مسیر یادگیری تو'}</span>
              <h2>${english ? 'Eight weeks. One shipped product.' : 'هشت هفته؛ یک محصول منتشرشده.'}</h2>
              <p>${english ? 'Choose a week, open a lesson, and learn the technical terms in Persian.' : 'هفته را انتخاب کن، درس را باز کن و اصطلاح‌های فنی را با تعریف فارسی یاد بگیر.'}</p>
            </div>
            <div class="lesson-total"><strong>${overallPercent()}%</strong><span>${english ? 'course complete' : 'تکمیل دوره'}</span></div>
          </div>
          <div class="week-picker" id="roadmap" role="group" aria-label="${english ? 'Choose a week' : 'انتخاب هفته'}">${renderWeekTabs()}</div>
          <section class="week-overview">
            <span class="week-number">${week.number}</span>
            <div class="week-description"><small>${english ? `WEEK ${week.number}` : `هفتهٔ ${week.number}`}</small><h3>${escapeHtml(t(week.title))}</h3><p>${escapeHtml(t(week.subtitle))}</p></div>
            <div class="week-progress">
              <div><span>${english ? 'Your progress' : 'پیشرفت هفته'}</span><strong>${complete}/${week.lessons.length}</strong></div>
              <div class="progress-track" role="progressbar" aria-label="${english ? 'Week progress' : 'پیشرفت هفته'}" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"><span style="width:${progress}%"></span></div>
              <p>${escapeHtml(t(week.outcome))}</p>
            </div>
          </section>
          ${state.alert ? `<div class="storage-alert" role="alert">${escapeHtml(state.alert)}</div>` : ''}
          ${renderCompletionBanner()}
          <div class="learning-layout grid grid-cols-1 lg:grid-cols-[minmax(210px,0.72fr)_minmax(0,1.7fr)_minmax(220px,0.78fr)]">
            <aside class="lesson-sidebar" aria-label="${english ? 'Week lessons' : 'درس‌های هفته'}">
              <div class="sidebar-title"><h3>${english ? 'This week’s lessons' : 'درس‌های این هفته'}</h3><span>${week.lessons.length} ${english ? 'lessons' : 'درس'}</span></div>
              <div class="lesson-nav">${renderLessonNavigation(week)}</div>
              <div class="sidebar-tip">✦ ${english ? 'Go at your own pace. Progress stays in this browser.' : 'با سرعت خودت پیش برو؛ پیشرفت در همین مرورگر می‌ماند.'}</div>
            </aside>
            ${renderLesson(lesson)}
            ${renderGlossary(lesson)}
          </div>
        </section>
        ${renderChecklists()}
      </main>
      <footer class="site-footer">
        <span class="footer-mark">W</span>
        <p>${english ? 'A small step every day becomes a skill you can build with.' : 'یک گام کوچک در هر روز، به مهارتی تبدیل می‌شود که با آن می‌توانی بسازی.'}</p>
        <span>HTML · Tailwind CSS · JavaScript · TypeScript</span>
      </footer>
    </div>
  `;
  bindEvents();
}

function validateProgressPayload(payload) {
  if (!payload || typeof payload !== 'object') throw new Error('Invalid file.');
  const { progress, checklist } = payload;
  if (!progress || typeof progress !== 'object' || Array.isArray(progress)) {
    throw new Error('Progress data is missing.');
  }
  if (!checklist || typeof checklist !== 'object' || Array.isArray(checklist)) {
    throw new Error('Checklist data is missing.');
  }
  const progressValid = Object.values(progress).every(
    (value) => value && typeof value.practice === 'boolean' && typeof value.quiz === 'boolean',
  );
  const checklistValid = Object.values(checklist).every((value) => typeof value === 'boolean');
  if (!progressValid || !checklistValid) throw new Error('Imported data has invalid values.');
  return { progress, checklist };
}

function downloadProgress() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    progress: state.progress,
    checklist: state.checklist,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'code-workshop-progress.json';
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  state.status = isEnglish() ? 'Progress exported.' : 'پیشرفت خروجی گرفته شد.';
}

function bindEvents() {
  app.querySelector('[data-action="toggle-language"]')?.addEventListener('click', () => {
    state.language = isEnglish() ? 'fa' : 'en';
    state.status = '';
    render();
  });

  app.querySelector('[data-action="toggle-theme"]')?.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(themeKey, state.theme);
    } catch {
      state.alert = 'Theme could not be saved.';
    }
    render();
  });

  app.querySelectorAll('[data-action="select-week"]').forEach((button) => {
    button.addEventListener('click', () => {
      const week = courseWeeks.find((item) => item.id === button.dataset.weekId);
      if (!week) return;
      state.weekId = week.id;
      state.lessonId = week.lessons[0].id;
      state.selectedAnswer = null;
      state.quizMessage = '';
      state.glossaryQuery = '';
      state.status = '';
      state.confirmReset = false;
      render();
      document.querySelector('#course')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  app.querySelectorAll('[data-action="select-lesson"]').forEach((button) => {
    button.addEventListener('click', () => {
      const week = currentWeek();
      if (!week.lessons.some((lesson) => lesson.id === button.dataset.lessonId)) return;
      state.lessonId = button.dataset.lessonId;
      state.selectedAnswer = null;
      state.quizMessage = '';
      state.glossaryQuery = '';
      state.status = '';
      state.confirmReset = false;
      render();
      document
        .querySelector('.lesson-card')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  app.querySelectorAll('[data-action="checklist"]').forEach((input) => {
    input.addEventListener('change', () => {
      state.checklist = { ...state.checklist, [input.dataset.checkId]: input.checked };
      saveStorage(checklistKey, state.checklist, 'چک‌لیست');
      state.status = '';
      render();
    });
  });

  app.querySelector('[data-action="lesson-practice"]')?.addEventListener('change', (event) => {
    state.progress = {
      ...state.progress,
      [state.lessonId]: {
        ...getLessonProgress(state.lessonId),
        practice: event.currentTarget.checked,
      },
    };
    saveStorage(progressKey, state.progress, 'پیشرفت درس');
    render();
  });

  app.querySelectorAll('[data-action="select-answer"]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedAnswer = Number(button.dataset.answer);
      state.quizMessage = '';
      render();
    });
  });

  app.querySelector('[data-action="check-answer"]')?.addEventListener('click', () => {
    const lesson = currentLesson();
    const correct = state.selectedAnswer === lesson.quiz.answer;
    if (correct) {
      state.progress = {
        ...state.progress,
        [lesson.id]: { ...getLessonProgress(lesson.id), quiz: true },
      };
      saveStorage(progressKey, state.progress, 'پیشرفت درس');
    }
    state.quizMessage = {
      correct,
      text: correct
        ? `${isEnglish() ? 'Correct! ' : 'درست است! '}${t(lesson.quiz.explanation)}`
        : isEnglish()
          ? 'Not quite. Review the lesson and try again.'
          : 'این پاسخ درست نیست؛ درس را مرور کن و دوباره امتحان کن.',
    };
    render();
  });

  app.querySelector('#glossary-search')?.addEventListener('input', (event) => {
    state.glossaryQuery = event.currentTarget.value;
    const query = state.glossaryQuery.trim().toLocaleLowerCase();
    const matches = currentLesson().terms.filter(([term, definition]) =>
      `${term} ${definition}`.toLocaleLowerCase().includes(query),
    );
    const results = document.querySelector('#glossary-results');
    if (!results) return;
    results.innerHTML = matches.length
      ? matches
          .map(
            ([term, definition]) =>
              `<article class="glossary-entry"><h4 dir="auto">${escapeHtml(term)}</h4><p>${escapeHtml(definition)}</p></article>`,
          )
          .join('')
      : `<p class="no-results">${isEnglish() ? 'No matching terms.' : 'اصطلاحی پیدا نشد.'}</p>`;
  });

  app.querySelector('[data-action="copy-template"]')?.addEventListener('click', async (event) => {
    const status = event.currentTarget.parentElement.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(buildPullRequestTemplate());
      if (status) status.textContent = isEnglish() ? 'Template copied.' : 'قالب کپی شد.';
    } catch (error) {
      if (status) {
        status.textContent = `${
          isEnglish()
            ? 'Copy failed; select the preview text manually.'
            : 'کپی خودکار انجام نشد؛ متن را دستی از پیش‌نمایش انتخاب کن.'
        } (${error.message})`;
      }
    }
  });

  app.querySelector('[data-action="export-progress"]')?.addEventListener('click', () => {
    downloadProgress();
    render();
  });

  app
    .querySelector('[data-action="import-progress"]')
    ?.addEventListener('change', async (event) => {
      const file = event.currentTarget.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const { progress, checklist } = validateProgressPayload(JSON.parse(text));
        state.progress = progress;
        state.checklist = checklist;
        saveStorage(progressKey, state.progress, 'پیشرفت درس');
        saveStorage(checklistKey, state.checklist, 'چک‌لیست');
        state.status = isEnglish() ? 'Progress imported.' : 'پیشرفت وارد شد.';
        state.alert = '';
      } catch (error) {
        state.alert = `${isEnglish() ? 'Import failed' : 'ورود انجام نشد'}: ${error.message}`;
      }
      render();
    });

  app.querySelector('[data-action="reset-progress"]')?.addEventListener('click', () => {
    if (!state.confirmReset) {
      state.confirmReset = true;
      state.status = isEnglish()
        ? 'Press reset again to erase local progress.'
        : 'برای پاک‌کردن پیشرفت محلی دوباره دکمهٔ پاک‌سازی را بزن.';
      render();
      return;
    }
    state.progress = {};
    state.checklist = {};
    state.confirmReset = false;
    state.status = isEnglish() ? 'Local progress was reset.' : 'پیشرفت محلی پاک شد.';
    try {
      localStorage.removeItem(progressKey);
      localStorage.removeItem(checklistKey);
    } catch {
      state.alert = 'Local storage could not be cleared.';
    }
    render();
  });
}

render();
