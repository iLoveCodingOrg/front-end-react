import PropTypes from 'prop-types'
import React from 'react'
import YouTube from 'react-youtube'
import './video.css'

function Video({ videoSource, callMarkAsComplete, ...props }) {
  return (
    <YouTube
      className="video"
      videoId={videoSource}
      opts={{
        playerVars: {
          autoplay: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 1,
          controls: 1,
          playsinline: 0,
        },
      }}
      onEnd={() => callMarkAsComplete()}
      {...props}
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
