import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import  { get } from 'lodash'

import { CourseLinks, CourseContent } from '../index'

class CourseNav extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            activeLessonIndex: 0
        }
        
        this.setActiveLesson = this.setActiveLesson.bind(this)
    }
    
    componentWillReceiveProps(nextProps){
        this.setActiveLesson(nextProps)
    }

    componentWillMount(){
        this.setActiveLesson(this.props)
    }

    setActiveLesson(props){
        const lessons = get(props.course, 'lessons')

        if(lessons){
            const index = props.course.lessons.findIndex((item)=>{
                return item.slug === props.match.params.lessonSlug
            })
    
            this.setState({
                activeLessonIndex: index
            })
        }
    }

    render(){
        const lessons = get(this.props.course, 'lessons')
        const lessonCount = get(this.props.course, 'lessonCount')
        const lessonCompletedCount = get(this.props.course, 'lessonCompletedCount')
        const courseSlug = get(this.props.course, 'slug')

        return (
            <div>
                <div className="d-flex my-2 justify-content-center">
                    <CourseLinks
                        isMainBtnHidden={this.state.activeLessonIndex < 0}
                        activeLessonIndex={this.state.activeLessonIndex}
                        courseSlug={courseSlug}
                        lessons={lessons}
                    />
                </div>

                <CourseContent
                    activeLessonIndex={this.state.activeLessonIndex}
                    courseSlug={courseSlug}
                    lessons={lessons}
                    lessonCount={lessonCount}
                    lessonCompletedCount={lessonCompletedCount}
                />
            </div>
        )
    }
}

CourseNav.propTypes = {
    course: PropTypes.object.isRequired
}

export default withRouter(CourseNav)