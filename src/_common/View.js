import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import ViewHeader from './ViewHeader'
import { VideoWrap } from '../Video'
import SourceDemo from '../SourceDemo'
import Loading from '../Loading'
import ErrorBox from '../ErrorBox'
// import Comments from '../Comments'
import Cta from '../Cta'
import { contentTypeToRoute } from '../_app/constants'

export default function View({
  callMarkAsComplete,
  children,
  error,
  getView,
  isLoading,
  match,
  of,
  view,
  className,
}) {
  const {
    id,
    title,
    subTitle,
    access,
    duration,
    courseTotalDuration,
    level,
    thumbnail,
    videoSource,
    bodyContent,
    lessonCount,
    sourceUrl,
    demoUrl,
    isComplete,
  } = view
  const isFree = !(access)
  const { slug } = match.params
  const getAbsUrl = () => {
    const route = contentTypeToRoute[of]
    return `https://ilovecoding.org/${route}/${slug}`
  }

  const getVideoHeaderCss = () => {
    if (
      videoSource === 'none'
      || of === 'page'
      || of === 'blog'
      || of === 'question'
    ) {
      return 'mx-auto'
    }
    return ''
  }

  useEffect(() => {
    getView(slug)
  }, [getView, match])

  return (
    <div className={`container ${of} ${className}`}>
      { isLoading && <Loading /> }
      { !isLoading && error && <ErrorBox /> }
      { !isLoading && !error && (
        <>
          <Helmet title={`${title} - iLoveCoding`} />
          <ViewHeader
            cssClass={getVideoHeaderCss(videoSource)}
            of={of}
            title={title}
            subTitle={subTitle}
            isComplete={!!isComplete}
            isFree={!!isFree}
            duration={courseTotalDuration || duration}
            level={level}
            lessonCount={lessonCount}
          />
          <main>
            { of !== 'page' && of !== 'blog' && (
              <>
                <VideoWrap
                  callMarkAsComplete={() => {
                    // Do not mark course as complete when video complete
                    // This feature should only work for lessons
                    if (of !== 'course' && callMarkAsComplete) {
                      callMarkAsComplete(id)
                    }
                  }}
                  title={title}
                  thumbnail={thumbnail}
                  videoSource={videoSource}
                />
                <SourceDemo
                  source={sourceUrl}
                  demo={demoUrl}
                />
              </>
            )}
            {children}
            { bodyContent && (
              <div
                id="html-content"
                className="container container-slim b bt-1 pt-2 mx-auto"
                dangerouslySetInnerHTML={{ __html: bodyContent }}
              />
            )}
            <div className="pt-2 mx-auto">
              <Cta of={of} slug={slug} />
            </div>
            {/* { of !== 'page' && (
            <Comments
              of={of}
              id={id}
              title={title}
              url={getAbsUrl(of)}
            />
            )} */}
          </main>
        </>
      )
      }
    </div>
  )
}

View.defaultProps = {
  className: '',
  callMarkAsComplete: null,
  children: null,
  error: null,
}

View.propTypes = {
  callMarkAsComplete: PropTypes.func,
  getView: PropTypes.func.isRequired,
  of: PropTypes.oneOf(['question', 'lesson', 'course', 'courseLesson', 'page', 'blog']).isRequired,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  view: PropTypes.object.isRequired,
  match: PropTypes.object,
}
