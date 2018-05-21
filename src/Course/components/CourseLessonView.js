import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
        if(
            this.props.match.params.lessonSlug !== nextProps.match.params.lessonSlug ||
            this.props.match.params.courseSlug !== nextProps.match.params.courseSlug
        ){
            this.props.getLesson(this.props.match.params.lessonSlug)
            this.props.getCourse(this.props.match.params.courseSlug)
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
        return (
            <div className="container">
                {
                    !title ?
                    <div>
                        Loading...
                    </div>
                    :
                    <div>
                        <h3>{this.props.courseView.title}</h3>
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
                                course={this.props.courseView}
                                lessons={this.props.courseView.lessons || []}
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
    getLesson: PropTypes.func.isRequired,
    getCourse: PropTypes.func.isRequired,
    lessonView: PropTypes.object.isRequired,
    courseView: PropTypes.object.isRequired
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
