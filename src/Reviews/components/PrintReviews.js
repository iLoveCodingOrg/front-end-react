import React from 'react'

export default function ({ data, containerClasses, itemClasses }) {
  return (
    <div className={`flex flex-wrap justify-content-center ${containerClasses}`}>
      {data.map(({
        title, body, thumbSrc, credit1, credit2,
      }, index) => (
        <div
          key={index}
          className={`p-1 bg-white border rounded ${itemClasses}`}
        >
          {
                    !thumbSrc ? null
                      : <img className="rounded-circle mr-1 float-left" src={thumbSrc} alt={title} width="100" height="100" />

                }
          <p><strong>{title}</strong></p>
          <p>
            <em>
"
              {body}
"
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
