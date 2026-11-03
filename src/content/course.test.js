import { describe, expect, it } from 'vitest';
import { conceptExamples } from './concept-examples.js';
import { coursePhases, courseWeeks, programFacts } from './course.js';

function lessonEntries() {
  return courseWeeks.flatMap((week) => week.lessons.map((lesson) => ({ week, lesson })));
}

describe('course content', () => {
  it('has sixteen weeks and sixty-nine lessons', () => {
    expect(courseWeeks).toHaveLength(16);
    expect(lessonEntries()).toHaveLength(69);
    expect(programFacts.weeks).toBe(courseWeeks.length);
  });

  it('covers every week in exactly one phase', () => {
    const phaseWeekIds = coursePhases.flatMap((phase) => phase.weekIds);
    expect(coursePhases).toHaveLength(programFacts.phases);
    expect(new Set(phaseWeekIds).size).toBe(phaseWeekIds.length);
    expect(new Set(phaseWeekIds)).toEqual(new Set(courseWeeks.map((week) => week.id)));
  });

  it('uses unique week and lesson ids', () => {
    const weekIds = courseWeeks.map((week) => week.id);
    const lessonIds = lessonEntries().map(({ lesson }) => lesson.id);
    expect(new Set(weekIds).size).toBe(weekIds.length);
    expect(new Set(lessonIds).size).toBe(lessonIds.length);
  });

  it('gives every lesson both languages, goals, steps, and a quiz', () => {
    for (const { lesson } of lessonEntries()) {
      expect(lesson.title.fa.length).toBeGreaterThan(0);
      expect(lesson.title.en.length).toBeGreaterThan(0);
      expect(lesson.summary.fa.length).toBeGreaterThan(0);
      expect(lesson.summary.en.length).toBeGreaterThan(0);
      expect(lesson.goals.fa.length).toBeGreaterThanOrEqual(3);
      expect(lesson.goals.en.length).toBe(lesson.goals.fa.length);
      expect(lesson.steps.fa.length).toBeGreaterThanOrEqual(3);
      expect(lesson.steps.en.length).toBe(lesson.steps.fa.length);
      if (lesson.deepDive) {
        expect(lesson.deepDive.fa.length).toBeGreaterThanOrEqual(2);
        expect(lesson.deepDive.en).toHaveLength(lesson.deepDive.fa.length);
      }
      expect(lesson.terms.length).toBeGreaterThanOrEqual(4);
      expect(lesson.example.code.length).toBeGreaterThan(0);
      expect(lesson.practice.fa.length).toBeGreaterThan(0);
      expect(lesson.practice.en.length).toBeGreaterThan(0);
      expect(lesson.quiz.answer).toBeGreaterThanOrEqual(0);
      expect(lesson.quiz.answer).toBeLessThan(lesson.quiz.options.fa.length);
    }
  });

  it('keeps quiz options aligned across languages', () => {
    for (const { lesson } of lessonEntries()) {
      expect(lesson.quiz.options.en).toHaveLength(lesson.quiz.options.fa.length);
      expect(lesson.quiz.explanation.fa.length).toBeGreaterThan(0);
      expect(lesson.quiz.explanation.en.length).toBeGreaterThan(0);
    }
  });

  it('gives every week at least four complete lessons', () => {
    for (const week of courseWeeks) {
      expect(week.lessons.length).toBeGreaterThanOrEqual(4);
      for (const lesson of week.lessons) {
        expect(lesson.duration).toBeGreaterThan(0);
      }
    }
  });

  it('gives every week precise bilingual goals', () => {
    for (const week of courseWeeks) {
      expect(week.goals.fa.length).toBeGreaterThanOrEqual(5);
      expect(week.goals.en).toHaveLength(week.goals.fa.length);
      expect(week.goals.fa.every((goal) => goal.length > 0)).toBe(true);
      expect(week.goals.en.every((goal) => goal.length > 0)).toBe(true);
    }
  });

  it('gives every concept note an example in both languages', () => {
    for (const { lesson } of lessonEntries()) {
      if (!lesson.deepDive) continue;
      const examples = conceptExamples[lesson.id];
      expect(examples, `${lesson.id} needs concept examples`).toBeTruthy();
      expect(examples.fa).toHaveLength(lesson.deepDive.fa.length);
      expect(examples.en).toHaveLength(lesson.deepDive.fa.length);
    }
  });
});
