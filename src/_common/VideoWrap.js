import './video.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import { Video } from './'

class VideoWrap extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div>
                {
                    (!isEmpty(this.props.videoSource))?
                    <Video videoSource={this.props.videoSource} />:
                    <div>You dont have access</div>
                }
            </div>
        )
    }
}

VideoWrap.propTypes = {
    videoSource: PropTypes.string
}

export default VideoWrap