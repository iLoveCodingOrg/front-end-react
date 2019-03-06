import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { ViewHeader, RedirectAlert } from '../../_common/'
import { VideoWrap } from '../../Video'
import { getCourseBySlug } from '../actions'
import { actions as lessonActions } from '../../Lesson'
import CourseNav from './CourseNav'
import SourceDemo from '../../SourceDemo'
import Loading from '../../Loading'
import ErrorBox from '../../ErrorBox'
import { AsyncComments as Comments } from '../../Comments'
import Cta from '../../Cta'

class CourseLessonView extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidUpdate(prevProps){
        const { lessonSlug, courseSlug } = this.props.match.params
        if(
            lessonSlug !== prevProps.match.params.lessonSlug ||
            courseSlug !== prevProps.match.params.courseSlug
        ){
            this.props.getLesson(lessonSlug)
            this.props.getCourse(courseSlug)
        }
    }

    componentDidMount(){
        this.props.getLesson(this.props.match.params.lessonSlug)
        this.props.getCourse(this.props.match.params.courseSlug)
    }

    render(){
        const {
            id,
            title,
            subTitle,
            access,
            duration,
            level,
            videoSource,
            thumbnail,
            bodyContent,
            sourceUrl,
            demoUrl,
            isComplete
        } = this.props.lessonView
        
        const isFree = (access)? false : true
        const {
            courseView,
            callMarkAsComplete,
            isLoading,
            error
        } = this.props
        const urlToCourse = `/courses/${courseView.slug}`
        const { lessonSlug } = this.props.match.params
        const absUrlCourseLesson = `https://ilovecoding.org${urlToCourse}/lessons/${lessonSlug}`
        return (
            <div className="container">
                {
                    (isLoading)? <Loading />
                    :
                    (error) ? <ErrorBox />
                    :
                    <div>
                        <Helmet>
                            <title>{title} - iLoveCoding</title>
                            <meta name="description" content={subTitle} />
                        </Helmet>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                {/* <li className="breadcrumb-item" aria-current="page">
                                    <Link to="/courses">
                                        Courses
                                    </Link>
                                </li> */}
                                <li className="breadcrumb-item">
                                    <Link to={urlToCourse}>
                                        {courseView.title}
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                        <ViewHeader
                            title={title}
                            subTitle={subTitle}
                            isFree={isFree}
                            duration={duration}
                            level={level}
                            isComplete={isComplete}
                            of="courseLesson"
                        />
                        <main>
                            <RedirectAlert slug={courseView.slug} />
                            <VideoWrap
                                callMarkAsComplete={()=>callMarkAsComplete(id)}
                                title={title}
                                thumbnail={thumbnail}
                                videoSource={videoSource}
                            />
                            <SourceDemo
                                source={sourceUrl}
                                demo={demoUrl}
                            />
                            <CourseNav course={courseView} />
                            {
                                !bodyContent? null:
                                <div
                                id="html-content"
                                className="col-12 col-lg-9 border-top pt-4 mx-auto"
                                dangerouslySetInnerHTML={{ __html: bodyContent }}
                                />
                            }
                            <Cta />
                            <Comments
                                id={id}
                                title={title}
                                url={absUrlCourseLesson}
                            />
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
    const { lessons, courses } = state
    return {
        isLoading: lessons.view.isLoading || courses.view.isLoading,
        error: lessons.view.error || courses.view.error,
        lessonView: lessons.view.data,
        courseView: courses.view.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        callMarkAsComplete: (id)=>{
            dispatch(lessonActions.callMarkLessonComplete(id))
        },
        getLesson: (slug)=>{
            dispatch(lessonActions.getLessonBySlug(slug))
        },
        getCourse: (slug)=>{
            dispatch(getCourseBySlug(slug))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(CourseLessonView)
