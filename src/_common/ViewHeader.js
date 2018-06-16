import React from 'react'
import PropTypes from 'prop-types'

import { Access, Level, Duration, LessonCount } from './'

function ViewHeader({ title, subTitle, isFree, level, duration, of, lessonCount }){
    return (
        <div className="d-flex flex-column align-items-center text-center">
            <h1 className="title">{title}</h1>
            <p className="lead">{subTitle}</p>
            <div className="mb-3">
            {
                of !== 'page'?
                <div className="d-inline">
                    <Access isFree={isFree} />
                    <Level level={level} />
                    <Duration duration={duration} />
                </div>
                : null
            }
            {
                of === 'course'?
                <div className="d-inline">
                    <LessonCount lessonCount={lessonCount} />
                </div>
                : null
            }
            </div>
        </div>
    )
}

ViewHeader.propTypes = {
    duration: PropTypes.string,
    isFree: PropTypes.bool.isRequired,
    lessonCount: PropTypes.number,
    level: PropTypes.oneOf([0, 1, 2]),
    of: PropTypes.oneOf(['lesson', 'course', 'courseLesson', 'page']).isRequired,
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default ViewHeader