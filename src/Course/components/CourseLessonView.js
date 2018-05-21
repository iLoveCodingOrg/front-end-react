import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { ViewHeader } from '../../_common/'
import { VideoWrap } from '../../Video'
import { actions as courseActions } from '../'
import { actions as lessonActions } from '../../Lesson'
import { CourseNav } from '../'


class CourseLessonView extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillReceiveProps(nextProps){
        const { lessonSlug, courseSlug } = this.props.match.params
        if(
            lessonSlug !== nextProps.match.params.lessonSlug ||
            courseSlug !== nextProps.match.params.courseSlug
        ){
            this.props.getLesson(nextProps.match.params.lessonSlug)
            this.props.getCourse(nextProps.match.params.courseSlug)
        }
    }

    componentWillMount(){
        this.props.getLesson(this.props.match.params.lessonSlug)
        this.props.getCourse(this.props.match.params.courseSlug)
    }

    componentWillUnmount(){
        // this.props.clearView()
    }

    render(){
        const {
            title,
            subTitle,
            access,
            duration,
            courseTotalDuration,
            level,
            videoSource,
            bodyContent
        } = this.props.lessonView
        
        const isFree = (access)? false : true
        const { courseView } = this.props
        const urlToCourse = `/courses/${courseView.slug}`
        return (
            <div className="container">
                {
                    !title ?
                    <div>
                        Loading...
                    </div>
                    :
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item" aria-current="page">Courses</li>
                                <li className="breadcrumb-item">
                                    <Link to={urlToCourse}>
                                        {courseView.title}
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                        {/* <div className="h3 text-center font-italics font-weight-light">
                            Course: {courseView.title}
                        </div> */}
                        <ViewHeader
                            title={title}
                            subTitle={subTitle}
                            isFree={isFree}
                            duration={ courseTotalDuration || duration }
                            level={level}
                            />
                        <main>
                            <VideoWrap videoSource={videoSource} />
                            <CourseNav
                                course={courseView}
                                lessons={courseView.lessons || []}
                            />
                            <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
                        </main>
                    </div>
                }
            </div>
        )
    }
}

CourseLessonView.propTypes = {
    courseView: PropTypes.object.isRequired,
    getCourse: PropTypes.func.isRequired,
    getLesson: PropTypes.func.isRequired,
    lessonView: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        lessonView: state.lessons.view,
        courseView: state.courses.view
    }
}

function mapDispatchToProps(dispatch){
    return {
        getLesson: (slug)=>{
            dispatch(lessonActions.getLessonBySlug(slug))
        },
        getCourse: (slug)=>{
            dispatch(courseActions.getCourseBySlug(slug))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(CourseLessonView)