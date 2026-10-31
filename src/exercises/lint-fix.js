export function formatLessonSummary(lesson) {
  if (!lesson || typeof lesson !== 'object') {
    throw new TypeError('A lesson object is required.');
  }

  const title = typeof lesson.title === 'string' ? lesson.title.trim() : 'Untitled lesson';
  const minutes = Number.isFinite(lesson.duration) ? lesson.duration : 0;
  const finished = lesson.completed === true;

  return `${title} — ${minutes} min — ${finished ? 'complete' : 'in progress'}`;
}

export function averageDuration(lessons) {
  if (!Array.isArray(lessons) || lessons.length === 0) return 0;

  const total = lessons.reduce((sum, lesson) => {
    const duration = Number.isFinite(lesson?.duration) ? lesson.duration : 0;
    return sum + duration;
  }, 0);

  return Math.round(total / lessons.length);
}
