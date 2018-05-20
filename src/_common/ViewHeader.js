import React from 'react'
import PropTypes from 'prop-types'

import { Access, Level, Duration } from './'

function ViewHeader({ title, subTitle, isFree, level, duration }){
    return (
        <div className="d-flex flex-column align-items-center text-center">
            <h1 className="title">{title}</h1>
            <p className="lead">{subTitle}</p>
            <div className="mb-3">
                <Access isFree={isFree} />
                <Level level={level} />
                <Duration duration={duration} />
            </div>
        </div>
    )
}

ViewHeader.propTypes = {
    duration: PropTypes.string.isRequired,
    isFree: PropTypes.bool.isRequired,
    level: PropTypes.oneOf([0, 1, 2]).isRequired,
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default ViewHeader