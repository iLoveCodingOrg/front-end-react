import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import ViewHeader from './ViewHeader'
import { VideoWrap } from '../Video'
import SourceDemo from '../SourceDemo'
import Loading from '../Loading'
import ErrorBox from '../ErrorBox'
import { AsyncComments as Comments } from '../Comments'
import Cta from '../Cta'
import { contentTypeToRoute } from '../_app/utils'

class View extends React.Component{
    constructor(props){
        super(props)
    }

    getVideoHeaderCss(videoSource, of){
        if(
            videoSource === 'none'
            || of === 'page'
            || of === 'blog'
            || of === 'question'
        ){
            return 'col-12 col-lg-9 mx-auto'
        }else{
            return ''
        }
    }

    componentDidUpdate(prevProps){
        const { slug } = this.props.match.params
        
        if(prevProps.match.params.slug !== slug){
            this.props.getView(slug)
        }
    }

    componentDidMount(){
      this.props.getView(this.props.match.params.slug)
    }

    render(){
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
            isComplete
        } = this.props.view
        const isFree = (access)? false : true
        const {
            of,
            isLoading,
            error,
            callMarkAsComplete
        } = this.props
        const { slug } = this.props.match.params
        const getAbsUrl = (of)=> {
            const route = contentTypeToRoute[of]
            return `https://ilovecoding.org/${route}/${slug}`
        }
        return (
            <div className={`container ${of}`}>
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
                        <ViewHeader
                            cssClass={this.getVideoHeaderCss(videoSource, of)}
                            of={of}
                            title={title}
                            subTitle={subTitle}
                            isComplete={isComplete}
                            isFree={isFree}
                            duration={ courseTotalDuration || duration }
                            level={level}
                            lessonCount={lessonCount}
                        />
                        <main>
                            {
                                (of !== 'page' && of !== 'blog')?
                                <div>
                                    <VideoWrap
                                        callMarkAsComplete={()=>{
                                            // Do not mark course as complete when video complete
                                            // This feature should only work for lessons
                                            if(of!=='course'){
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
                                </div>
                                : null
                            }
                            {this.props.children}
                            {
                                !bodyContent? null:
                                <div
                                id="html-content"
                                className="col-12 col-lg-9 border-top pt-4 mx-auto"
                                dangerouslySetInnerHTML={{ __html: bodyContent }}
                                />
                            }
                            <div className="col-12 col-lg-9 pt-4 mx-auto">
                                <Cta of={of} slug={slug} />
                            </div>
                            {
                                of !== 'page'? 
                                <Comments
                                    of={of}
                                    id={id}
                                    title={title}
                                    url={getAbsUrl(of)}
                                />
                                : null
                            }
                        </main>
                    </div>
                }
            </div>
        )
    }
}

View.propTypes = {
    callMarkAsComplete: PropTypes.func,
    clearView: PropTypes.func.isRequired,
    getView: PropTypes.func.isRequired,
    of: PropTypes.oneOf(['question', 'lesson', 'course', 'courseLesson', 'page', 'blog']).isRequired,
    view: PropTypes.object.isRequired
}

export default View