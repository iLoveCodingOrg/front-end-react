import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Access } from '../../_common'

class CourseNav extends React.Component{
    constructor(props){
        super(props)
    }

    renderItem(item, index, courseSlug){
        const { title, slug, duration, access } = item
        const isFree = (access)? false : true
        const urlTo = `/courses/${courseSlug}/lessons/${slug}`

        return (<Link key={index} to={urlTo}
            className="clearfix list-group-item list-group-item-">
            <div className="float-left">
                <span className="text-muted">
                    Lessons #{index}:&nbsp;
                </span>
                {title}&nbsp;
                <Access isFree={isFree} />
            </div>
            <div className="float-right">{duration} mins</div>
        </Link>)
    }

    render(){
        const { slug: courseSlug } = this.props.course
        return (
            <div className="list-group mt-5">
                <div className="list-group-item list-group-item-dark">
                    <span className="h5">Course content</span>
                </div>
                {this.props.lessons.map((item, index)=>{
                    return (
                        this.renderItem(item, index+1, courseSlug)
                    )
                })}
            </div>
        )
    }
}

CourseNav.propTypes = {
    course: PropTypes.object.isRequired,
    lessons: PropTypes.array.isRequired
}

export default CourseNav