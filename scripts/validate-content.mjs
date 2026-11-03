import { courseWeeks } from '../src/content/course.js';
import { dailyCheck, pullRequestGroups, submissionCheck } from '../src/content/checklists.js';

const errors = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

const lessons = courseWeeks.flatMap((week) =>
  week.lessons.map((lesson) => ({ weekId: week.id, lesson })),
);

check(courseWeeks.length === 16, `Expected 16 weeks, found ${courseWeeks.length}.`);
check(lessons.length === 69, `Expected 69 lessons, found ${lessons.length}.`);

for (const week of courseWeeks) {
  check(
    week.lessons.length >= 4,
    `${week.id} needs at least four lessons, found ${week.lessons.length}.`,
  );
  check(week.goals?.fa?.length >= 5, `${week.id} needs at least five week goals.`);
  check(week.goals?.en?.length === week.goals?.fa?.length, `${week.id} week goal counts differ.`);
}

const weekIds = courseWeeks.map((week) => week.id);
check(new Set(weekIds).size === weekIds.length, 'Week ids must be unique.');

const lessonIds = lessons.map(({ lesson }) => lesson.id);
check(new Set(lessonIds).size === lessonIds.length, 'Lesson ids must be unique.');

for (const { weekId, lesson } of lessons) {
  const prefix = `${weekId}/${lesson.id}`;
  check(Boolean(lesson.title?.fa && lesson.title?.en), `${prefix} needs a bilingual title.`);
  check(Boolean(lesson.summary?.fa && lesson.summary?.en), `${prefix} needs a bilingual summary.`);
  check(lesson.goals?.fa?.length >= 3, `${prefix} needs at least three goals.`);
  check(lesson.goals?.en?.length === lesson.goals?.fa?.length, `${prefix} goal counts differ.`);
  check(lesson.steps?.fa?.length >= 3, `${prefix} needs at least three steps.`);
  check(lesson.steps?.en?.length === lesson.steps?.fa?.length, `${prefix} step counts differ.`);
  if (lesson.deepDive) {
    check(lesson.deepDive.fa?.length >= 2, `${prefix} needs at least two concept notes.`);
    check(
      lesson.deepDive.en?.length === lesson.deepDive.fa?.length,
      `${prefix} concept note counts differ.`,
    );
    check(
      [...lesson.deepDive.fa, ...lesson.deepDive.en].every(
        (note) => typeof note === 'string' && note.length > 0,
      ),
      `${prefix} has an empty concept note.`,
    );
  }
  check(lesson.terms?.length >= 4, `${prefix} needs at least four terms.`);
  check(Boolean(lesson.example?.code), `${prefix} needs an example.`);
  check(
    Boolean(lesson.practice?.fa && lesson.practice?.en),
    `${prefix} needs practice in both languages.`,
  );
  check(Boolean(lesson.quiz?.question?.fa && lesson.quiz?.question?.en), `${prefix} needs a quiz.`);
  check(
    lesson.quiz?.options?.fa?.length === lesson.quiz?.options?.en?.length,
    `${prefix} quiz option counts differ.`,
  );
  check(
    lesson.quiz?.answer >= 0 && lesson.quiz?.answer < lesson.quiz?.options?.fa?.length,
    `${prefix} quiz answer is out of range.`,
  );
  check(lesson.duration > 0, `${prefix} needs a positive duration.`);
}

const checklistItems = [
  ...dailyCheck,
  ...pullRequestGroups.flatMap((group) => group.sections.flatMap((section) => section.items)),
  ...submissionCheck,
];
const weeklyChecklistIds = courseWeeks.flatMap((week) =>
  ['lessons', 'deploy', 'checks', 'readme', 'review', 'outcome'].map(
    (suffix) => `week-submit-${week.id}-${suffix}`,
  ),
);
const milestoneIds = courseWeeks.map((week) => `milestone-${week.id}`);
const checklistIds = [
  ...checklistItems.map((item) => item.id),
  ...weeklyChecklistIds,
  ...milestoneIds,
];
check(new Set(checklistIds).size === checklistIds.length, 'Checklist ids must be unique.');
check(
  checklistItems.every((item) => item.en && item.fa),
  'Every checklist item needs English and Persian text.',
);

if (errors.length) {
  console.error(`Content validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const minutes = lessons.reduce((sum, { lesson }) => sum + lesson.duration, 0);
console.log(
  `Content OK: ${courseWeeks.length} weeks, ${lessons.length} lessons, ${minutes} minutes, ${checklistIds.length} checklist ids.`,
);
