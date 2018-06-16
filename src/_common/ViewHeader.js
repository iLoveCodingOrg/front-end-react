import React from 'react'
import PropTypes from 'prop-types'

import { Access, Level, Duration } from './'

function ViewHeader({ title, subTitle, isFree, level, duration, of }){
    return (
        <div className="d-flex flex-column align-items-center text-center">
            <h1 className="title">{title}</h1>
            <p className="lead">{subTitle}</p>
            {
                of !== 'page'?
                <div className="mb-3">
                    <Access isFree={isFree} />
                    <Level level={level} />
                    <Duration duration={duration} />
                </div>
                : null
            }
        </div>
    )
}

ViewHeader.propTypes = {
    duration: PropTypes.string,
    isFree: PropTypes.bool.isRequired,
    level: PropTypes.oneOf([0, 1, 2]),
    of: PropTypes.oneOf(['lesson', 'course', 'courseLesson', 'page']).isRequired,
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default ViewHeader