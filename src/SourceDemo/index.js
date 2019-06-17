import React from 'react'
import PropTypes from 'prop-types'

export default function SourceDemo({ demo, source }) {
  const getFullLink = (linkString) => {
    const URL = '//a.ilovecoding.org/'

    if (linkString.substring(0, 4) === 'http') {
      return linkString
    }
    return URL + linkString
  }

  if (!demo && !source) { return null }

  return (
    <div className="my-3 btn-group">
      {
        demo && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={getFullLink(demo)}
          className="btn btn-outline-secondary btn-sm"
        >
          View demo
        </a>
        )
      }
      {
        source && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={getFullLink(source)}
          className="btn btn-outline-secondary btn-sm"
        >
          Download source code
        </a>
        )
      }
    </div>
  )
}

SourceDemo.propTypes = {
  demoUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
}
