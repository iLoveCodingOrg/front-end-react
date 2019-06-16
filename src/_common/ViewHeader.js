import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Access from './Access'
import Level from './Level'
import Duration from './Duration'
import LessonCount from './LessonCount'
import CheckMark from './CheckMark'

export default function ViewHeader({
  cssClass,
  duration,
  isFree,
  isComplete,
  lessonCount,
  level,
  of,
  subTitle,
  title,
}) {
  const renderBlogHeader = () => {
    if (of === 'blog') {
      return <Link className="lead mb-4 d-block" to="/blog">&lt; iLoveCoding Blog &gt;</Link>
    }
    return null
  }

  const renderCourseLessonMeta = () => {
    if (of !== 'page' && of !== 'blog') {
      return (
        <div className="mb-3">
          <div className="d-inline">
            {(isComplete) && <CheckMark />}
            <Access of={of} isFree={isFree} />
            <Level level={level} />
            <Duration duration={duration} />
            { of === 'course' && <LessonCount lessonCount={lessonCount} /> }
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className={`${cssClass} view-header`}>
      {renderBlogHeader()}
      <h1>{title}</h1>
      <p className="lead">{subTitle}</p>
      {renderCourseLessonMeta()}
    </div>
  )
}

ViewHeader.propTypes = {
  cssClass: PropTypes.string,
  duration: PropTypes.string,
  isFree: PropTypes.bool,
  isComplete: PropTypes.bool,
  lessonCount: PropTypes.number,
  level: PropTypes.oneOf([0, 1, 2]),
  of: PropTypes.oneOf(['question', 'lesson', 'course', 'courseLesson', 'page', 'blog']),
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

ViewHeader.defaultProps = {
  cssClass: '',
  duration: '',
  isFree: true,
  isComplete: false,
  lessonCount: 0,
  level: 0,
  of: 'lesson',
  subTitle: '',
}
