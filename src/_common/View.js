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
            title,
            subTitle,
            access,
            duration,
            courseTotalDuration,
            level,
            thumbnail,
            videoSource,
            bodyContent
        } = this.props.view
        const isFree = (access)? false : true
        return (
            <div className="container">
                {
                    (this.props.isLoading)? <Loading />
                    :
                    (this.props.error) ? <ErrorBox />
                    :
                    <div>
                        <Helmet><title>{title}</title></Helmet>
                        <ViewHeader
                            title={title}
                            subTitle={subTitle}
                            isFree={isFree}
                            duration={ courseTotalDuration || duration }
                            level={level}
                            />
                        <main>
                            <VideoWrap
                                title={title}
                                thumbnail={thumbnail}
                                videoSource={videoSource}
                            />
                            {this.props.children}
                            <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
                        </main>
                    </div>
                }
            </div>
        )
    }
}

View.propTypes = {
    clearView: PropTypes.func.isRequired,
    getView: PropTypes.func.isRequired,
    of: PropTypes.oneOf(['lesson', 'course', 'courseLesson', 'page']).isRequired,
    view: PropTypes.object.isRequired
}

export default View