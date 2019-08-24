import React from 'react'
import get from 'lodash/get'

import CourseLinks from './CourseLinks'
import CourseContent from './CourseContent'

export default function CourseNav({ activeLessonIndex = -1, course }) {
  const lessons = get(course, 'lessons')
  const lessonCount = get(course, 'lessonCount')
  const lessonCompletedCount = get(course, 'lessonCompletedCount')
  const courseSlug = get(course, 'slug')

  return (
    <div>
      <div className="d-flex my--5 justify-content-center">
        <CourseLinks
          isMainBtnHidden={activeLessonIndex < 0}
          activeLessonIndex={activeLessonIndex}
          courseSlug={courseSlug}
          lessons={lessons}
        />
      </div>

      <CourseContent
        activeLessonIndex={activeLessonIndex}
        courseSlug={courseSlug}
        lessons={lessons}
        lessonCount={lessonCount}
        lessonCompletedCount={lessonCompletedCount}
      />
    </div>
  )
}
