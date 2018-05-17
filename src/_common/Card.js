import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { IMG_URL } from '../_app/constants'

class Card extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {
            thumbnail,
            title,
            subTitle,
            access,
            level,
            courseTotalDuration,
            duration,
            slug
        } = this.props.item
        const { of } = this.props
        return (
            <div
                className="d-flex flex-row"
            >
                <div>
                    {thumbnail? <img src={`${IMG_URL}${thumbnail}`} /> : null}
                </div>
                <div>
                    <h3><Link to={`/${of}/${slug}`}>{title}</Link></h3>
                    <p>{subTitle}</p>
                    <div>Access: {access}</div>
                    <div>Level: {level}</div>
                    <div>Duration: {courseTotalDuration || duration} mins</div>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    item: PropTypes.object.isRequired,
    of: PropTypes.oneOf(['lessons', 'courses', 'pages']).isRequired
}

export default Card