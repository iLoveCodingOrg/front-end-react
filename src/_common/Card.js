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
            duration,
            slug
        } = this.props.item
        return (
            <div
                className="d-flex flex-row"
            >
                <div>
                    {thumbnail? <img src={`${IMG_URL}${thumbnail}`} /> : null}
                </div>
                <div>
                    <h3><Link to={`/lessons/${slug}`}>{title}</Link></h3>
                    <p>{subTitle}</p>
                    <div>Access: {access}</div>
                    <div>Level: {level}</div>
                    <div>Duration: {duration} mins</div>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    item: PropTypes.object.isRequired
}

export default Card