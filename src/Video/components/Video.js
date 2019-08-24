import './video.css'

import React from 'react'
import PropTypes from 'prop-types'
import Vimeo from '@u-wave/react-vimeo'

function Video({ videoSource, callMarkAsComplete }) {
  const getId = () => videoSource.split('//player.vimeo.com/video/').pop()

  return (
    <Vimeo
      className="video"
      video={getId()}
      onEnd={() => callMarkAsComplete()}
    />
  )
}

Video.propTypes = {
  callMarkAsComplete: PropTypes.func.isRequired,
  videoSource: PropTypes.string.isRequired,
}

Video.defaultProps = {
  callMarkAsComplete: () => {},
}

export default Video
