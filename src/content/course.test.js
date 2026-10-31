import { describe, expect, it } from 'vitest';
import { courseWeeks } from './course.js';

function lessonEntries() {
  return courseWeeks.flatMap((week) => week.lessons.map((lesson) => ({ week, lesson })));
}

describe('course content', () => {
  it('has eight weeks and forty-two lessons', () => {
    expect(courseWeeks).toHaveLength(8);
    expect(lessonEntries()).toHaveLength(42);
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

  it('starts each week with a positive duration', () => {
    for (const week of courseWeeks) {
      for (const lesson of week.lessons) {
        expect(lesson.duration).toBeGreaterThan(0);
      }
      expect(week.lessons.length).toBeGreaterThanOrEqual(5);
    }
  });
});
