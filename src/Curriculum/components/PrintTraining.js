import React from 'react'
import { Link } from 'react-router-dom'

export default function PrintTraining({
  data,
  maxWidth = '261px',
  title = 'Training List',
}) {
  return (
    <div>
      <h4>{title}</h4>
      <div className="flex flex-wrap">
        {data.map(({ name, link, thumbSrc }, index) => (
          <div
            key={index}
            style={{ maxWidth }}
            className="mb-1 mr-1 t-center"
          >
            <Link className="d-block" to={link}>
              <img
                loading="lazy"
                style={{ maxWidth }}
                className="rounded border"
                src={thumbSrc}
                alt={name}
              />
            </Link>
            <Link className="d-block" to={link}>{name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
