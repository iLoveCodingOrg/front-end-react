import React from 'react'

export default function ({ data, containerClasses='', itemClasses='' }) {
  return (
    <div className={`grid grid-equal-wrap ${containerClasses}`}>
      {data.map(({
        title, body, thumbSrc, credit1, credit2,
      }, index) => (
        <div
          key={index}
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
