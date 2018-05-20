import './cardStyle.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { IMG_URL } from '../_app/constants'
import { Access, Level, Duration } from './'

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
        const isFree = (access)? false : true
        return (
            <div
                className="d-flex flex-column flex-md-row mb-5 card"
            >
                <div>
                    {thumbnail? <img 
                    className="mr-md-3 mb-md-0 mb-3 rounded"
                    src={`${IMG_URL}${thumbnail}`} /> : null}
                </div>
                <div>
                    <h3><Link to={`/${of}/${slug}`}>{title}</Link></h3>
                    <div className="mb-2">
                        <Access isFree={isFree}/>
                        <Level level={level}/>
                        <Duration duration={ courseTotalDuration || duration} />
                    </div>
                    <p>{subTitle}</p>
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