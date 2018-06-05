import './video.scss'

import React from 'react'
import PropTypes from 'prop-types'
import Vimeo from '@u-wave/react-vimeo'

class Video extends React.Component{
    constructor(props){
        super(props)
    }
    getId(videoSource){
        return videoSource.split('//player.vimeo.com/video/').pop()
    }
    render(){
        return (
            <Vimeo
                className="video"
                video={this.getId(this.props.videoSource)}
                onEnd={()=>this.props.callMarkAsComplete()}
            />
        )
    }
}

Video.propTypes = {
    callMarkAsComplete: PropTypes.func.isRequired,
    videoSource: PropTypes.string.isRequired
}

export default Video