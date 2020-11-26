import './video.css'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { Link } from 'react-router-dom'

import { isLoggedIn } from '../../_user/selectors'
import Video from './Video'
import { IMG_URL } from '../../_app/constants'

class VideoWrap extends React.Component {
  renderThumb = (thumbnail, title) => {
    if (!thumbnail) return null
    return (
      <img
        loading="lazy"
        style={{ maxWidth: 300, maxHeight: 169 }}
        className="mb-1 rounded"
        src={`${IMG_URL}${thumbnail}`}
        alt={title}
      />
    )
  }

  render() {
    const {
      thumbnail,
      title,
      videoSource,
      isLoggedIn,
      callMarkAsComplete,
    } = this.props

    if (videoSource === 'none') return null

    return (
      <div>
        {
          (!isEmpty(videoSource))
            ? (
              <Video
                callMarkAsComplete={callMarkAsComplete}
                videoSource={videoSource}
              />
            )
            : (
              <div className="flex flex-column card card-warning ">
                {this.renderThumb(thumbnail, title)}
                <div>
                  <div className="h3 font-weight-light">
                    You do not have access to this lesson!
                  </div>
                  {
                    (isLoggedIn)
                      ? (
                        <p>
                          <Link to="/pricing" className="btn-link p-0 b-0">Upgrade your membership</Link>
                          {' '}
                          to get access to this lesson along with hundreds of other lessons and complete courses.
                        </p>
                      )
                      : (
                        <div>
                          <p>
                            <Link to="/pricing" className="btn-link p-0 b-0">Enroll in the training</Link>
                            {' '}
                            to get access to this lesson along with hundreds of other lessons and complete courses.
                          </p>
                          <p>
                            Already enrolled?
                            {' '}
                            <Link to="/login" className="btn-link p-0 b-0">Login</Link>
                          </p>
                        </div>
                      )
                  }
                </div>
              </div>
            )
          }
      </div>
    )
  }
}

VideoWrap.propTypes = {
  callMarkAsComplete: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  thumbnail: PropTypes.string,
  videoSource: PropTypes.string,
}

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
  }
}

export default connect(mapStateToProps)(VideoWrap)
