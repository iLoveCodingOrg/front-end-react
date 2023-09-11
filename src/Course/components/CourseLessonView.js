import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import isEmpty from 'lodash/isEmpty'

import { ViewHeader, RedirectAlert } from '../../_common'
import { VideoWrap } from '../../Video'
import { getCourseBySlug } from '../actions'
import { actions as lessonActions } from '../../Lesson'
import CourseNav from './CourseNav'
import SourceDemo from '../../SourceDemo'
import Loading from '../../Loading'
import ErrorBox from '../../ErrorBox'
import Cta from '../../Cta'
import Breadcrumbs from '../../Breadcrumbs'

class CourseLessonView extends React.Component {
  componentDidMount() {
    const { getLesson, getCourse, match } = this.props
    getLesson(match.params.lessonSlug)
    getCourse(match.params.courseSlug)
  }

  componentDidUpdate(prevProps) {
    const { getLesson, getCourse, match } = this.props
    const { lessonSlug, courseSlug } = match.params
    if (
      lessonSlug !== prevProps.match.params.lessonSlug
      || courseSlug !== prevProps.match.params.courseSlug
    ) {
      getLesson(lessonSlug)
      getCourse(courseSlug)
    }
  }

  getActiveLessonIndex(course, lessonSlug) {
    if (isEmpty(course.lessons)) return -1

    return course.lessons.findIndex(({ slug }) => slug === lessonSlug)
  }

  render() {
    const {
      courseView,
      callMarkAsComplete,
      isLoading,
      error,
      lessonView,
      match,
    } = this.props
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
      isComplete,
    } = lessonView

    const isFree = !(access)
    const urlToCourse = `/courses/${courseView.slug}`
    const { lessonSlug } = match.params
    const absUrlCourseLesson = `https://ilovecoding.org${urlToCourse}/lessons/${lessonSlug}`
    const activeLessonIndex = this.getActiveLessonIndex(courseView, lessonSlug)

    return (
      <div className="container">
        { isLoading && <Loading /> }
        { !isLoading && error && <ErrorBox /> }
        { !isLoading && !error && (
        <div>
          <Helmet>
            <title>
              {`${title} - iLoveCoding`}
            </title>
            <meta name="description" content={subTitle} />
          </Helmet>
          <Breadcrumbs nodes={[
            {
              label: courseView.title,
              link: urlToCourse,
            },
            {
              label: title,
            },
          ]}
          />
          <ViewHeader
            title={title}
            subTitle={subTitle}
            isFree={isFree}
            duration={duration}
            level={level}
            isComplete={isComplete}
            of="lesson"
          />
          <main>
            <RedirectAlert slug={courseView.slug} />
            <VideoWrap
              callMarkAsComplete={() => callMarkAsComplete(id)}
              title={title}
              thumbnail={thumbnail}
              videoSource={videoSource}
            />
            <SourceDemo
              source={sourceUrl}
              demo={demoUrl}
            />
            <CourseNav
              activeLessonIndex={activeLessonIndex}
              course={courseView}
            />
            {
                bodyContent && (
                <div
                  id="html-content"
                  className="container container-slim b bt-1 pt-2 mx-auto"
                  dangerouslySetInnerHTML={{ __html: bodyContent }}
                />
                )
            }
            <Cta />
            {/* <Comments
              id={id}
              title={title}
              url={absUrlCourseLesson}
            /> */}
          </main>
        </div>
        )
        }
      </div>
    )
  }
}

CourseLessonView.propTypes = {
  courseView: PropTypes.object.isRequired,
  getCourse: PropTypes.func.isRequired,
  getLesson: PropTypes.func.isRequired,
  lessonView: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  const { lessons, courses } = state
  return {
    isLoading: lessons.view.isLoading || courses.view.isLoading,
    error: lessons.view.error || courses.view.error,
    lessonView: lessons.view.data,
    courseView: courses.view.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callMarkAsComplete: (id) => {
      dispatch(lessonActions.callMarkLessonComplete(id))
    },
    getLesson: (slug) => {
      dispatch(lessonActions.getLessonBySlug(slug))
    },
    getCourse: (slug) => {
      dispatch(getCourseBySlug(slug))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseLessonView)
