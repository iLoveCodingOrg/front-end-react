import React from 'react'
import PropTypes from 'prop-types'

import { Access, Level, Duration, LessonCount, CheckMark } from './'

function ViewHeader({ title, subTitle, isFree, level, duration, of, lessonCount, cssClass, isComplete }){
    return (
        <div className={`${cssClass} text-center`}>
            <h1>{title}</h1>
            {
                subTitle?
                <p className="lead">{subTitle}</p>
                : null
            }
            {
                of !== 'page'?
                <div className="mb-3">
                    <div className="d-inline">
                        {(isComplete)? <CheckMark /> : null}
                        <Access isFree={isFree} />
                        <Level level={level} />
                        <Duration duration={duration} />
                    </div>
                    {
                        of === 'course'?
                        <div className="d-inline">
                            <LessonCount lessonCount={lessonCount} />
                        </div>
                        : null
                    }
                </div>
                : null
            }
        </div>
    )
}

ViewHeader.propTypes = {
    cssClass: PropTypes.string,
    duration: PropTypes.string,
    isFree: PropTypes.bool.isRequired,
    isComplete: PropTypes.bool,
    lessonCount: PropTypes.number,
    level: PropTypes.oneOf([0, 1, 2]),
    of: PropTypes.oneOf(['question', 'lesson', 'course', 'courseLesson', 'page']).isRequired,
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default ViewHeader