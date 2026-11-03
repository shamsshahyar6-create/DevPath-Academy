import { coursePhases, courseWeeks, programFacts } from './content/course.js';
import { conceptExamples } from './content/concept-examples.js';
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

let revealObserver = null;

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

function lessonPosition(lesson) {
  const week = currentWeek();
  return week.lessons.findIndex((item) => item.id === lesson.id);
}

function renderHeader() {
  const english = isEnglish();
  return `
    <a class="skip-link" href="#main">${english ? 'Skip to content' : 'پرش به محتوا'}</a>
    <header class="site-header">
      <a class="brand" href="#" aria-label="${english ? 'Course home' : 'صفحهٔ اصلی دوره'}">
        <span class="brand-mark">W</span>
        <span class="brand-copy"><strong>${escapeHtml(courseTitle)}</strong><small>${english ? 'LEARN BY BUILDING' : 'با ساختن یاد بگیر'}</small></span>
      </a>
      <nav class="header-nav" aria-label="${english ? 'Main navigation' : 'پیمایش اصلی'}">
        <a href="#phases">${english ? 'Program' : 'برنامه'}</a>
        <a href="#course">${english ? 'Lessons' : 'درس‌ها'}</a>
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
  const arrow = english ? '→' : '←';
  return `
    <section class="hero-panel" data-reveal>
      <div class="hero-glows" aria-hidden="true">
        <span class="hero-glow glow-a"></span>
        <span class="hero-glow glow-b"></span>
        <span class="hero-glow glow-c"></span>
      </div>
      <div class="hero-copy">
        <span class="hero-kicker"><i></i>${english ? 'THE COMPLETE SIXTEEN-WEEK PROGRAM' : 'برنامهٔ کامل شانزده‌هفته‌ای'}</span>
        <h1>${
          english
            ? 'From your first command to a <span class="grad-text">website you can ship.</span>'
            : 'از اولین فرمان تا <span class="grad-text">وب‌سایتی که می‌سازی.</span>'
        }</h1>
        <p class="hero-lead">${
          english
            ? 'A practical, project-based path: set up your tools, master strict TypeScript, build with React and its libraries, then ship a Next.js capstone.'
            : 'مسیری عملی و پروژه‌محور: ابزارها را آماده کن، TypeScript سخت‌گیرانه را یاد بگیر، با React کتابخانه‌هایش را بساز و در پایان یک کپ‌استون Next.js منتشر کن.'
        }</p>
        <div class="hero-actions">
          <a class="hero-cta" href="#course">${english ? 'Start learning' : 'شروع یادگیری'} <span class="cta-arrow">${arrow}</span></a>
        </div>
        <div class="hero-stats" aria-label="${english ? 'Course at a glance' : 'نمای کلی دوره'}">
          <div><strong>${courseWeeks.length}</strong><span>${english ? 'weeks' : 'هفته'}</span></div>
          <div><strong>${totalLessons}</strong><span>${english ? 'lessons' : 'درس'}</span></div>
          <div><strong>${totalHours}</strong><span>${english ? 'hours' : 'ساعت'}</span></div>
          <div><strong>${overallPercent()}%</strong><span>${english ? 'complete' : 'تکمیل'}</span></div>
        </div>
        <div class="course-rule"><strong>${english ? 'Course rule' : 'قانون دوره'}</strong><span>${english ? 'AI starts as a reviewer, becomes an assistant, then an agent. You stay the owner of every line you commit.' : 'هوش مصنوعی از بازبین شروع می‌شود، سپس دستیار و در پایان عامل می‌شود؛ مالک هر خطی که commit می‌کنی تو می‌مانی.'}</span></div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="hero-photo">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1100&q=80"
            alt=""
            loading="eager"
            fetchpriority="high"
          />
          <span class="photo-shade"></span>
          <span class="photo-caption">${english ? 'BUILD · BREAK · FIX · SHIP' : 'بساز · بشکن · درست کن · منتشر کن'}</span>
        </div>
        <div class="art-orbit orbit-one"></div>
        <div class="art-orbit orbit-two"></div>
        <div class="art-window">
          <div class="window-bar"><i></i><i></i><i></i><span>my-first-site</span></div>
          <div class="window-code"><span>&lt;html&gt;</span><br />&nbsp;&nbsp;&lt;h1&gt;${english ? 'Hello, world!' : 'سلام، دنیا!'}&lt;/h1&gt;<br /><span>&lt;/html&gt;</span></div>
          <div class="window-status">● ${english ? 'Ready to build' : 'آمادهٔ ساخت'}</div>
        </div>
        <div class="float-card float-card-a"><strong>${totalLessons}</strong><span>${english ? 'hands-on lessons' : 'درس عملی'}</span></div>
        <div class="float-card float-card-b"><span class="live-dot"></span>${english ? 'Live preview' : 'پیش‌نمایش زنده'}</div>
        <span class="art-tag tag-html">HTML</span>
        <span class="art-tag tag-css">Tailwind</span>
        <span class="art-tag tag-js">JavaScript</span>
        <span class="art-orb orb-a"></span>
        <span class="art-orb orb-b"></span>
      </div>
    </section>
  `;
}

function renderPhases() {
  const english = isEnglish();
  const icons = ['icon-purple', 'icon-green', 'icon-amber'];
  return `
    <section class="features-section" id="phases">
      <div class="section-head" data-reveal>
        <span class="eyebrow">${english ? 'THREE PHASES · THREE GATES' : 'سه فاز · سه دروازه'}</span>
        <h2>${english ? 'You move forward by passing a gate.' : 'با عبور از دروازه به فاز بعد می‌رسی.'}</h2>
        <p>${
          english
            ? `${programFacts.study.en} ${programFacts.submission.en}`
            : `${programFacts.study.fa} ${programFacts.submission.fa}`
        }</p>
      </div>
      <div class="phase-grid">
        ${coursePhases
          .map(
            (phase, index) => `
          <article class="bento-card phase-card" data-reveal>
            <span class="bento-icon ${icons[index % icons.length]}">${phase.number}</span>
            <span class="phase-weeks">${english ? 'Weeks' : 'هفته‌های'} ${phase.weeks}</span>
            <h4>${escapeHtml(t(phase.title))}</h4>
            <p>${escapeHtml(t(phase.summary))}</p>
            <dl class="phase-meta">
              <div><dt>${english ? 'AI stage' : 'مرحلهٔ AI'}</dt><dd>${escapeHtml(t(phase.aiStage))}</dd></div>
              <div><dt>${english ? 'Gate' : 'دروازه'}</dt><dd>${escapeHtml(t(phase.gate))}</dd></div>
            </dl>
          </article>
        `,
          )
          .join('')}
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

function renderWeekGoals(week) {
  const english = isEnglish();
  const goals = week.goals ? t(week.goals) : [];
  if (!goals.length) return '';
  const tones = ['blue', 'purple', 'teal', 'amber'];
  return `
    <section class="week-goals-panel" aria-labelledby="week-goals-title">
      <div class="week-goals-head">
        <div>
          <span class="week-goals-eyebrow">${english ? 'THIS WEEK’S TARGETS' : 'اهداف این هفته'}</span>
          <h3 id="week-goals-title">${english ? `By the end of Week ${week.number}, you can:` : `در پایان هفتهٔ ${week.number} باید بتوانی:`}</h3>
          <p>${english ? 'These are the exact capabilities you will prove in this week’s lessons and deliverables.' : 'این‌ها توانایی‌های دقیقی هستند که در درس‌ها و خروجی‌های همین هفته اثبات می‌کنی.'}</p>
        </div>
        <div class="week-goals-count"><strong>${String(goals.length).padStart(2, '0')}</strong><span>${english ? 'targets' : 'هدف'}</span></div>
      </div>
      <ol class="week-goals-grid">
        ${goals
          .map(
            (goal, index) => `
          <li class="week-goal-item week-goal-tone-${tones[index % tones.length]}">
            <span class="week-goal-index">${String(index + 1).padStart(2, '0')}</span>
            <p>${formatRichText(goal)}</p>
          </li>
        `,
          )
          .join('')}
      </ol>
    </section>
  `;
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

const noteTones = ['blue', 'purple', 'teal', 'amber', 'pink'];
const goalTones = ['blue', 'purple', 'teal'];

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function lessonTerms(lesson) {
  return lesson.terms
    .map(([term]) => term.split(' (')[0].trim())
    .filter((term) => /[A-Za-z]/.test(term))
    .sort((a, b) => b.length - a.length);
}

function highlightTerms(segment, terms) {
  if (!terms.length) return segment;
  const pattern = terms
    .map((term) => {
      const escaped = escapeRegExp(term);
      const left = /^[A-Za-z0-9_$]/.test(term) ? '(?<![A-Za-z0-9_$])' : '';
      const right = /[A-Za-z0-9_$]$/.test(term) ? '(?![A-Za-z0-9_$])' : '';
      return `${left}${escaped}${right}`;
    })
    .join('|');
  try {
    return segment.replace(
      new RegExp(`(${pattern})`, 'gi'),
      '<mark class="term-highlight">$1</mark>',
    );
  } catch {
    return segment;
  }
}

const codeTokenPattern =
  /&lt;\/?[A-Za-z][\s\S]*?&gt;|\b(?:npm|npx|git|tsc|vite|node)(?:\s+[A-Za-z0-9@._/<>="'-]+){1,3}|\b[\w@.-]+\.(?:js|jsx|ts|tsx|json|html|css|md|mjs|nvmrc)\b|\baria-[\w-]+|\bdata-[\w-]+|\^?\d+\.\d+\.\d+(?:-[\w.]+)?|--[\w-]+/g;

function formatRichText(value, terms = []) {
  const escaped = escapeHtml(value);
  const inlineParts = escaped.split(/(`[^`]+`)/g);
  return inlineParts
    .map((part) => {
      if (/^`[^`]+`$/.test(part)) {
        return `<code class="inline-code" dir="ltr">${part.slice(1, -1)}</code>`;
      }
      const chunks = [];
      let last = 0;
      for (const match of part.matchAll(codeTokenPattern)) {
        chunks.push(highlightTerms(part.slice(last, match.index), terms));
        chunks.push(`<code class="inline-code" dir="ltr">${match[0]}</code>`);
        last = match.index + match[0].length;
      }
      chunks.push(highlightTerms(part.slice(last), terms));
      return chunks.join('');
    })
    .join('');
}

function splitFirstSentence(note) {
  const trimmed = note.trim();
  const match = trimmed.match(/^[\s\S]*?(?:[.؛!?](?=\s|$)|[:：](?=\s|$))/);
  if (!match) return { lead: trimmed, rest: '' };
  const lead = match[0].trim();
  const rest = trimmed.slice(match[0].length).trim();
  return { lead: lead || trimmed, rest };
}

function noteKeywords(note, terms) {
  const lower = note.toLocaleLowerCase();
  return terms
    .filter((term) => term.length > 2 && lower.includes(term.toLocaleLowerCase()))
    .slice(0, 3);
}

function exampleFromNote(note) {
  const match = note.match(/(?:مثلاً|برای مثال|for example|e\.g\.)[^.!?]*[.!?]?/i);
  return match ? match[0].trim() : '';
}

function renderGoals(lesson) {
  const english = isEnglish();
  const goals = t(lesson.goals);
  const terms = lessonTerms(lesson);
  return `
    <section class="lesson-section goals-section" aria-labelledby="goals-title">
      <div class="section-heading goals-heading">
        <h3 id="goals-title"><span class="section-icon icon-blue">◎</span>${english ? 'What you will learn' : 'هدف‌های یادگیری'}</h3>
        <p>${english ? 'By the end of this lesson you can do each of these, without copying blindly.' : 'در پایان این درس باید بتوانی هر کدام را مستقل انجام بدهی؛ نه با کپی کورکورانه.'}</p>
      </div>
      <ul class="goal-grid">
        ${goals
          .map(
            (goal, index) => `
          <li class="goal-card goal-tone-${goalTones[index % goalTones.length]}">
            <span class="goal-index">${english ? 'GOAL' : 'هدف'} ${String(index + 1).padStart(2, '0')}</span>
            <p>${formatRichText(goal, terms)}</p>
            <span class="goal-check" aria-hidden="true">✓</span>
          </li>
        `,
          )
          .join('')}
      </ul>
    </section>
  `;
}

function renderDeepDive(lesson) {
  const notes = lesson.deepDive ? t(lesson.deepDive) : [];
  if (!notes.length) return '';
  const english = isEnglish();
  const terms = lessonTerms(lesson);
  const examples = conceptExamples[lesson.id]?.[state.language] ?? [];
  return `
    <section class="deep-dive-card concept-notes-card" aria-labelledby="concept-notes-title">
      <header class="concept-notes-head">
        <div class="concept-notes-copy">
          <span class="concept-eyebrow">${english ? 'CONCEPT NOTES' : 'درس‌نامهٔ مفهومی'}</span>
          <h3 id="concept-notes-title"><span class="section-icon icon-purple">§</span>${english ? 'Key ideas, one example each' : 'ایده‌های کلیدی، هر کدام با یک مثال'}</h3>
          <p>${english ? 'Read the idea, study the example, then use the terms below as your checklist.' : 'ایده را بخوان، مثال را ببین و اصطلاح‌های پایین هر کارت را به‌عنوان چک‌لیست ذهنی مرور کن.'}</p>
        </div>
        <div class="concept-notes-meta" aria-label="${english ? 'Concept notes summary' : 'خلاصهٔ درس‌نامه'}">
          <span><strong>${notes.length}</strong>${english ? 'ideas' : 'ایده'}</span>
          <span><strong>${terms.length}</strong>${english ? 'terms' : 'اصطلاح'}</span>
          <span><strong>${examples.length || notes.length}</strong>${english ? 'examples' : 'مثال'}</span>
        </div>
      </header>
      <div class="concept-notes">
        ${notes
          .map((note, index) => {
            const tone = noteTones[index % noteTones.length];
            const { lead, rest } = splitFirstSentence(note);
            const example = (examples[index] || exampleFromNote(note) || '')
              .replace(/^(?:مثال|برای مثال|Example|For example)\s*[:：-]\s*/i, '')
              .trim();
            const keywords = noteKeywords(note, terms);
            return `
            <article class="note-card note-tone-${tone}">
              <div class="note-rail" aria-hidden="true">
                <span class="note-index">${String(index + 1).padStart(2, '0')}</span>
              </div>
              <div class="note-content">
                <span class="note-kicker">${english ? 'KEY IDEA' : 'ایدهٔ کلیدی'} ${String(index + 1).padStart(2, '0')}</span>
                <p class="note-lead">${formatRichText(lead, terms)}</p>
                ${rest ? `<p class="note-text">${formatRichText(rest, terms)}</p>` : ''}
                ${
                  keywords.length
                    ? `<div class="note-keywords">${keywords
                        .map(
                          (keyword) => `<span class="note-keyword">${escapeHtml(keyword)}</span>`,
                        )
                        .join('')}</div>`
                    : ''
                }
                ${
                  example
                    ? `<div class="note-example"><span class="note-example-label">${english ? 'EXAMPLE' : 'مثال'}</span><p>${formatRichText(example, terms)}</p></div>`
                    : ''
                }
              </div>
            </article>
          `;
          })
          .join('')}
      </div>
    </section>
  `;
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

function renderSteps(lesson) {
  return `
    <ol class="step-flow">
      ${t(lesson.steps)
        .map(
          (step, index) => `
        <li class="step-node">
          <span class="step-badge">${String(index + 1).padStart(2, '0')}</span>
          <div class="step-content"><p>${escapeHtml(step)}</p></div>
        </li>
      `,
        )
        .join('')}
    </ol>
  `;
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

      ${renderGoals(lesson)}

      ${renderDeepDive(lesson)}

      <section class="lesson-section">
        <div class="section-heading">
          <h3><span class="section-icon icon-purple">Aa</span>${english ? 'Important terms — explained in Persian' : 'اصطلاح‌های مهم با تعریف فارسی'}</h3>
          <p>${english ? 'Persian meanings are included so you can learn the technical vocabulary.' : 'اصطلاح انگلیسی را با تعریف کوتاه فارسی یاد بگیر.'}</p>
        </div>
        <div class="concept-grid">${renderConcepts(lesson)}</div>
      </section>

      <section class="lesson-section">
        <div class="section-heading">
          <h3><span class="section-icon icon-amber">↗</span>${english ? 'Follow the step graph' : 'گراف گام‌ها را دنبال کن'}</h3>
          <p>${english ? 'Each node is one action. Finish them in order.' : 'هر گره یک کار است؛ به ترتیب انجام بده.'}</p>
        </div>
        ${renderSteps(lesson)}
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

function setupMotion() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = app.querySelectorAll('[data-reveal]');

  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver?.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const hero = app.querySelector('.hero-panel');
  if (!hero || reduceMotion) return;

  const setPointer = (x, y) => {
    hero.style.setProperty('--px', x.toFixed(3));
    hero.style.setProperty('--py', y.toFixed(3));
  };

  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    setPointer(
      (event.clientX - rect.left) / rect.width - 0.5,
      (event.clientY - rect.top) / rect.height - 0.5,
    );
  });
  hero.addEventListener('pointerleave', () => setPointer(0, 0));
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
    ?.setAttribute('content', state.theme === 'dark' ? '#060a14' : '#f4f6fc');
  document.title = `${courseTitle} | ${english ? 'A complete sixteen-week frontend program' : 'برنامهٔ کامل شانزده‌هفته‌ای فرانت‌اند'}`;

  app.innerHTML = `
    <div class="site-shell">
      ${renderHeader()}
      <main id="main">
        ${renderHero()}
        ${renderPhases()}

        <section class="course-section" id="course">
          <div class="course-workspace">
            <aside class="week-rail" id="roadmap" aria-label="${english ? 'Choose a week' : 'انتخاب هفته'}">
              <div class="week-rail-head">
                <h3>${english ? 'Weeks' : 'هفته‌ها'}</h3>
                <span>${courseWeeks.length} ${english ? 'weeks' : 'هفته'}</span>
              </div>
              <div class="week-picker" role="group" aria-label="${english ? 'Choose a week' : 'انتخاب هفته'}">${renderWeekTabs()}</div>
            </aside>
            <div class="course-main">
              <section class="week-overview">
                <span class="week-number">${week.number}</span>
                <div class="week-description"><small>${english ? `WEEK ${week.number}` : `هفتهٔ ${week.number}`}</small><h3>${escapeHtml(t(week.title))}</h3><p>${escapeHtml(t(week.subtitle))}</p></div>
                <div class="week-progress">
                  <div><span>${english ? 'Your progress' : 'پیشرفت هفته'}</span><strong>${complete}/${week.lessons.length}</strong></div>
                  <div class="progress-track" role="progressbar" aria-label="${english ? 'Week progress' : 'پیشرفت هفته'}" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"><span style="width:${progress}%"></span></div>
                  <p>${escapeHtml(t(week.outcome))}</p>
                </div>
              </section>
              ${renderWeekGoals(week)}
              ${state.alert ? `<div class="storage-alert" role="alert">${escapeHtml(state.alert)}</div>` : ''}
              ${renderCompletionBanner()}
              <div class="learning-layout">
                <aside class="lesson-sidebar" aria-label="${english ? 'Week lessons' : 'درس‌های هفته'}">
                  <div class="sidebar-title"><h3>${english ? 'This week’s lessons' : 'درس‌های این هفته'}</h3><span>${week.lessons.length} ${english ? 'lessons' : 'درس'}</span></div>
                  <div class="lesson-nav">${renderLessonNavigation(week)}</div>
                  <div class="sidebar-tip">✦ ${english ? 'Go at your own pace. Progress stays in this browser.' : 'با سرعت خودت پیش برو؛ پیشرفت در همین مرورگر می‌ماند.'}</div>
                </aside>
                ${renderLesson(lesson)}
                ${renderGlossary(lesson)}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="site-footer">
        <span class="footer-mark">W</span>
        <p>${english ? 'A small step every day becomes a skill you can build with.' : 'یک گام کوچک در هر روز، به مهارتی تبدیل می‌شود که با آن می‌توانی بسازی.'}</p>
        <span class="footer-stack">HTML · Tailwind CSS · JavaScript · TypeScript</span>
      </footer>
    </div>
  `;
  bindEvents();
  setupMotion();
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
