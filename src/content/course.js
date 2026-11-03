import { weekGoals } from './week-goals.js';
import { weekOne } from './week-01.js';
import { weeks02to04 } from './weeks-02-04.js';
import { weeks05to08 } from './weeks-05-08.js';
import { weeks09to13 } from './weeks-09-13.js';
import { weeks14to16 } from './weeks-14-16.js';

export const courseWeeks = [
  weekOne,
  ...weeks02to04,
  ...weeks05to08,
  ...weeks09to13,
  ...weeks14to16,
].map((week) => ({
  ...week,
  goals: weekGoals[week.id] ?? { fa: [], en: [] },
}));

export const coursePhases = [
  {
    id: 'phase-1',
    number: '01',
    title: { fa: 'ابزارها و TypeScript', en: 'Tools and TypeScript' },
    weeks: '1–5',
    weekIds: ['week-1', 'week-2', 'week-3', 'week-4', 'week-5'],
    aiStage: { fa: 'بازبین', en: 'Reviewer' },
    gate: {
      fa: 'دروازهٔ ۱ · سه‌شنبه ۲۴ نوامبر، تغییر زنده پنجشنبه ۲۶ نوامبر',
      en: 'Gate 1 · Tue 24 Nov, live change Thu 26 Nov',
    },
    summary: {
      fa: 'ابزارها، TypeScript سخت‌گیرانه و fetch واقعی. در دروازهٔ ۱ هیچ AI استفاده نمی‌کنی.',
      en: 'Tools, strict TypeScript, and real fetching. Gate 1 is completed with no AI at all.',
    },
  },
  {
    id: 'phase-2',
    number: '02',
    title: { fa: 'React و کتابخانه‌هایش', en: 'React and Its Libraries' },
    weeks: '6–13',
    weekIds: ['week-6', 'week-7', 'week-8', 'week-9', 'week-10', 'week-11', 'week-12', 'week-13'],
    aiStage: { fa: 'دستیار', en: 'Assistant' },
    gate: {
      fa: 'دروازهٔ ۲ · چهارشنبه ۲۰ ژانویه، تغییر زنده پنجشنبه ۲۱ ژانویه',
      en: 'Gate 2 · Wed 20 Jan, live change Thu 21 Jan',
    },
    summary: {
      fa: 'React، Router، Query و فرم‌ها. AI فقط قطعه‌های کوچک و مکانیکی می‌نویسد و تو هر خط را بررسی می‌کنی.',
      en: 'React, Router, Query, and forms. AI writes only small mechanical parts that you check line by line.',
    },
  },
  {
    id: 'phase-3',
    number: '03',
    title: { fa: 'Next.js و کپ‌استون', en: 'Next.js and the Capstone' },
    weeks: '14–16',
    weekIds: ['week-14', 'week-15', 'week-16'],
    aiStage: { fa: 'عامل', en: 'Agent' },
    gate: {
      fa: 'دروازهٔ ۳ · پنجشنبه ۱۱ فوریه، دموی زنده و تغییر زنده',
      en: 'Gate 3 · Thu 11 Feb, live demo and live change',
    },
    summary: {
      fa: 'Next.js، SEO و کپ‌استون. AI روی ticketهای کوچک کار می‌کند و تو کل diff را مرور می‌کنی.',
      en: 'Next.js, SEO, and the capstone. AI works on small tickets and you review every diff.',
    },
  },
];

export const programRules = {
  submission: {
    fa: 'تحویل فقط وقتی شمارش می‌شود که PR باز، لینک زنده سالم، lint و typecheck سبز و README کامل باشد. هر تمرین ۱، پروژه ۲ و پروژهٔ بزرگ ۳ بار در میانگین حساب می‌شود.',
    en: 'A submission counts only when the PR is open, the live link works, lint and typecheck pass, and the README is complete. Exercises count once, projects twice, and major projects three times.',
  },
  scoring: [
    {
      part: { fa: 'پروژه‌ها و تمرین‌ها', en: 'Projects and exercises' },
      weight: '60%',
      detail: {
        fa: 'میانگین همهٔ نمره‌ها با وزن تمرین ۱، پروژه ۲ و پروژهٔ بزرگ ۳.',
        en: 'Average of all scores, weighting exercises 1, projects 2, and major projects 3.',
      },
    },
    {
      part: { fa: 'دروازه‌ها', en: 'Gates' },
      weight: '30%',
      detail: {
        fa: 'دروازهٔ ۱: ۸٪، دروازهٔ ۲: ۱۰٪، دروازهٔ ۳: ۱۲٪. دروازه قابل ارسال دوباره نیست.',
        en: 'Gate 1: 8%, Gate 2: 10%, Gate 3: 12%. Gates cannot be resubmitted.',
      },
    },
    {
      part: { fa: 'مشارکت', en: 'Participation' },
      weight: '10%',
      detail: {
        fa: 'نصف برای check-in سه‌شنبه و نصف برای حضور در جلسهٔ پنجشنبه.',
        en: 'Half for the Tuesday check-in and half for Thursday attendance.',
      },
    },
  ],
  penalties: [
    {
      label: { fa: 'تا ۲۴ ساعت تأخیر', en: 'Up to 24 hours late' },
      value: { fa: '−۱۰ امتیاز', en: 'Minus 10 points' },
    },
    {
      label: { fa: '۲۴ تا ۷۲ ساعت تأخیر', en: '24 to 72 hours late' },
      value: { fa: '−۲۵ امتیاز', en: 'Minus 25 points' },
    },
    {
      label: { fa: 'بیش از ۷۲ ساعت یا تحویل‌نشده', en: 'Over 72 hours late or never submitted' },
      value: { fa: 'نمرهٔ صفر', en: 'Zero score' },
    },
    {
      label: { fa: 'جاافتادن یک شرط Core', en: 'A missing Core requirement' },
      value: { fa: 'سقف ۴۹ (پاس نمی‌شود)', en: 'Capped at 49 (not passed)' },
    },
    {
      label: { fa: 'کدی که نمی‌توانی زنده توضیح بدهی', en: 'Code you cannot explain live' },
      value: {
        fa: 'صفر برای همان پروژه و اخطار کتبی',
        en: 'Zero for that project and a written warning',
      },
    },
  ],
};

export const programFacts = {
  weeks: 16,
  phases: 3,
  start: { fa: 'شنبه ۲۴ اکتبر ۲۰۲۶', en: 'Sat 24 Oct 2026' },
  end: { fa: 'پنجشنبه ۱۱ فوریه ۲۰۲۷', en: 'Thu 11 Feb 2027' },
  study: {
    fa: 'شنبه تا چهارشنبه، روزی حدود ۴ ساعت؛ جلسهٔ زنده پنجشنبه.',
    en: 'Saturday to Wednesday, about 4 hours a day; live session every Thursday.',
  },
  submission: {
    fa: 'همهٔ تحویل‌ها تا ۲۳:۵۹ به وقت کابل.',
    en: 'Every submission is due at 23:59 Kabul time.',
  },
};
