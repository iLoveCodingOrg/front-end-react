import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import ViewHeader from './ViewHeader'
import { VideoWrap } from '../Video'
import SourceDemo from '../SourceDemo'
import Loading from '../Loading'
import ErrorBox from '../ErrorBox'
import Comments from '../Comments'

class View extends React.Component{
    constructor(props){
        super(props)
    }

    getVideoHeaderCss(videoSource, of){
        if(
            videoSource === 'none'
            || of === 'page'
            || of === 'question'
        ){
            return 'col-12 col-lg-9 mx-auto'
        }else{
            return null
        }
    }

    componentWillReceiveProps(nextProps){
        const { slug } = this.props.match.params
        
        if(nextProps.match.params.slug !== slug){
            this.props.getView(nextProps.match.params.slug)
        }
    }

    componentWillMount(){
      this.props.getView(this.props.match.params.slug)
    }

    componentWillUnmount(){
        // this.props.clearView()
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
        return (
            <div className="container">
                {
                    (isLoading)? <Loading />
                    :
                    (error) ? <ErrorBox />
                    :
                    <div>
                        <Helmet><title>{title}</title></Helmet>
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
                                of !== 'page'?
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
                                />: null

                            }
                            {
                                of !== 'page'?
                                <SourceDemo
                                    source={sourceUrl}
                                    demo={demoUrl}
                                />: null
                            }
                            {this.props.children}
                            {
                                !bodyContent? null:
                                <div
                                    className="col-12 col-lg-9 border-top pt-4 mx-auto"
                                    dangerouslySetInnerHTML={{ __html: bodyContent }} />
                            }
                            {
                                of !== 'page'? <Comments />: null
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
    of: PropTypes.oneOf(['question', 'lesson', 'course', 'courseLesson', 'page']).isRequired,
    view: PropTypes.object.isRequired
}

export default View