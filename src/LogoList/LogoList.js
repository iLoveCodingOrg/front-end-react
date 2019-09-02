import React from 'react'

export default function ({ data, height }) {
  return (
    <div className="flex flex-wrap space-around">
      {data.map(({
        imgSrc, altText, margin, padding,
      }, index) => (
        <div key={index} className="mx-1 mb-1">
          <img
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
