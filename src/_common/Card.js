import './cardStyle.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { IMG_URL } from '../_app/constants'
import { Access, Level, Duration, LessonCount } from './'
import { contentTypeToRoute } from '../_app/utils'

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
            slug,
            lessonCount
        } = this.props.item
        const { of } = this.props
        const route = contentTypeToRoute[of]
        const isFree = (access)? false : true
        const urlTo = `/${route}/${slug}`
 
        return (
            <div
                className="d-flex flex-column flex-md-row mb-5 card border-0"
            >
                <div>
                    {
                        (thumbnail)?
                        <Link to={urlTo}>
                            <img
                                className="mr-md-3 mb-md-0 mb-3 rounded"
                                src={`${IMG_URL}${thumbnail}`} />
                        </Link>
                        :
                        null
                    }
                </div>
                <div>
                    <h3><Link to={urlTo}>{title}</Link></h3>
                    <div className="mb-2">
                        <Access of={of} isFree={isFree}/>
                        { level ? <Level level={level}/> : null}
                        { (courseTotalDuration || duration) ? <Duration duration={ courseTotalDuration || duration} /> : null }
                        {
                            of === 'courses'?
                            <LessonCount lessonCount={lessonCount} />
                            : null
                        }
                    </div>
                    <p>{subTitle}</p>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    item: PropTypes.object.isRequired,
    of: PropTypes.oneOf(['question', 'lesson', 'course', 'page', 'blog']).isRequired
}

export default Card