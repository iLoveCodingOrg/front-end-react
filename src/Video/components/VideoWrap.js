import './video.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import { isLoggedIn } from '../../_user/selectors'
import { Video } from '../'

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
                    <div>
                        You dont have access <br/>
                        {
                            (this.props.isLoggedIn)?
                            <p>
                                I am logged in so should upgrade plan <br/>
                            </p>:
                            <p>
                                Buy, or if you already have it, login <br/>
                            </p>
                        }
                    </div>
                }
            </div>
        )
    }
}

VideoWrap.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    videoSource: PropTypes.string
}

function mapStateToProps(state){
    return {
        isLoggedIn: isLoggedIn(state)
    }
}

export default connect(mapStateToProps)(VideoWrap)