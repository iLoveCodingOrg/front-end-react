import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import  { get } from 'lodash'

import { Access } from '../../_common'
import { CourseLinks } from '../index'

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

    renderItem(item, index, courseSlug){
        const { title, slug, duration, access } = item
        const isFree = (access)? false : true
        const urlTo = `/courses/${courseSlug}/lessons/${slug}`
        const activeClass = (this.state.activeLessonIndex === index)? 'list-group-item-success' : ''

        return (
            <Link key={index} to={urlTo}
                className={`d-flex justify-content-between list-group-item ${activeClass}`}>
                <div className="float-left">
                    <span className="text-muted">
                        Lessons #{index +1}:&nbsp;
                    </span>
                    {title}&nbsp;
                    <Access isFree={isFree} />
                </div>
                <div className="float-right small text-secondary align-self-center">{duration} mins</div>
            </Link>
        )
    }

    render(){
        const lessons = get(this.props.course, 'lessons')
        const courseSlug = get(this.props.course, 'slug')

        return (
            <div className="list-group">
                <div className="d-flex my-2 justify-content-center">
                    <CourseLinks
                        isMainBtnHidden={this.state.activeLessonIndex < 0}
                        activeLessonIndex={this.state.activeLessonIndex}
                        courseSlug={courseSlug}
                        lessons={lessons}
                    />
                </div>

                <div className="list-group-item bg-gray-200">
                    <span className="h5">Course content</span>
                </div>
                {lessons && lessons.map((item, index)=>{
                    return (this.renderItem(item, index, courseSlug))
                })}
            </div>
        )
    }
}

CourseNav.propTypes = {
    course: PropTypes.object.isRequired
}

export default withRouter(CourseNav)