import React from 'react'
import PropTypes from 'prop-types'

export default function PrintReviews({ data, containerClasses = '', itemClasses = '' }) {
  return (
    <div className={`grid grid-equal-wrap ${containerClasses}`}>
      {data.map(({
        title, body, thumbSrc, credit1, credit2,
      }, index) => (
        <div
          key={index + title}
          className={`card ${itemClasses}`}
        >
          { thumbSrc && <img loading="lazy" className="mr-1 float-left" src={thumbSrc} alt={title} width="100" height="100" /> }
          {title && <p><strong>{title}</strong></p>}
          <p>
            <em>
              "{body}"
            </em>
          </p>
          <footer className="blockquote-footer">
            {credit1}
            <br />
            {credit2}
          </footer>
        </div>
      ))}
    </div>
  )
}

PrintReviews.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    thumbSrc: PropTypes.string,
    credit1: PropTypes.string,
    credit2: PropTypes.string,
  })).isRequired,
}
