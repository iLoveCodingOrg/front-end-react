import React from 'react'

export default function ({ data, height }) {
  return (
    <div className="flex flex-wrap space-around">
      {data.map(({
        imgSrc, altText, margin, padding,
      }) => (
        <div key={imgSrc} className="mx-1 mb-1">
          <img
            loading="lazy"
            src={imgSrc}
            alt={altText}
            style={{
              height,
              margin,
              padding,
            }}
          />
        </div>
      ))}
    </div>
  )
}
