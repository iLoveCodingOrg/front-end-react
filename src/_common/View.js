import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import ViewHeader from './ViewHeader'
import { VideoWrap } from '../Video'
import Loading from '../Loading'
import ErrorBox from '../ErrorBox'

class View extends React.Component{
    constructor(props){
        super(props)
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
            lessonCount
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
                            of={of}
                            title={title}
                            subTitle={subTitle}
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
                            {this.props.children}
                            <div
                                className="d-flex flex-column align-items-center"
                                dangerouslySetInnerHTML={{ __html: bodyContent }} />
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
    of: PropTypes.oneOf(['lesson', 'course', 'courseLesson', 'page']).isRequired,
    view: PropTypes.object.isRequired
}

export default View