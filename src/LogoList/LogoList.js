import React from 'react'

export default function ({ data, height }) {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {data.map(({
        imgSrc, altText, margin, padding,
      }, index) => (
        <div key={index} className="mx-1 mb-1">
          <img
            className=""
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
