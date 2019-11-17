import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function Wistia({ sourceId }) {
  useEffect(() => {
    // Add wistia
    const id = 'wistia'
    let script
    if (!document.getElementById(id)) {
      script = document.createElement('script')
      script.id = id
      script.src = `https://fast.wistia.com/embed/medias/${sourceId}.jsonp`
      script.async = true
      document.body.appendChild(script)
    }
    return () => {
      if (script) { document.body.removeChild(script) }
    }
  }, [])

  useEffect(() => {
    // Add wistia-ev1
    const id = 'wistia-ev1'
    let script
    if (!document.getElementById(id)) {
      script = document.createElement('script')
      script.id = id
      script.src = 'https://fast.wistia.com/assets/external/E-v1.js'
      script.async = true
      document.body.appendChild(script)
    }
    return () => {
      if (script) { document.body.removeChild(script) }
    }
  }, [])

  return (
    <div
      className="wistia_responsive_padding"
      style={{
        padding: '56.25% 0 0 0',
        position: 'relative',
      }}
    >
      <div
        className="wistia_responsive_wrapper"
        style={{
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%',
        }}
      >
        <div
          className={`wistia_embed wistia_async_${sourceId} seo=false videoFoam=true`}
          style={{
            height: '100%',
            position: 'relative',
            width: '100%',
          }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  )
}

Wistia.propTypes = {
  sourceId: PropTypes.string.isRequired,
}

export default Wistia
