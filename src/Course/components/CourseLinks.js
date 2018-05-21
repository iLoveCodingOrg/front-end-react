import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class CourseLinks extends React.Component{
    constructor(props){
        super(props)
    }

    getPreviousBtn(){
        const { activeLessonIndex, lessons, courseSlug } = this.props
        if(activeLessonIndex > 0){
            const lesson = lessons[activeLessonIndex-1]
            const urlTo = `/courses/${courseSlug}/lessons/${lesson.slug}`
            return <Link to={urlTo} className="btn btn-dark">&lt;&lt; Previous Lesson</Link>
        }
    }

    getMainCourseBtn(){
        const { isMainBtnHidden, courseSlug } = this.props
        if(!isMainBtnHidden){
            const urlTo = `/courses/${courseSlug}`
            return <Link to={urlTo} className="btn btn-secondary">Main Course Page</Link>
        }
    }

    getNextBtn(){
        const { activeLessonIndex, lessons, courseSlug } = this.props
        if(activeLessonIndex < lessons.length-1){
            const lesson = lessons[activeLessonIndex+1]
            const urlTo = `/courses/${courseSlug}/lessons/${lesson.slug}`
            return <Link to={urlTo} className="btn btn-dark">Next Lesson &gt;&gt;</Link>
        }else {
            return null
        }
    }

    render(){
        return (
          <div className="btn-group " role="group" aria-label="Basic example">
              {this.getPreviousBtn()}
              {this.getMainCourseBtn()}
              {this.getNextBtn()}
          </div>
        )
    }
}

CourseLinks.propTypes = {
    activeLessonIndex: PropTypes.number.isRequired,
    courseSlug: PropTypes.string.isRequired,
    isMainBtnHidden: PropTypes.bool.isRequired,
    lessons: PropTypes.array.isRequired
}

export default CourseLinks