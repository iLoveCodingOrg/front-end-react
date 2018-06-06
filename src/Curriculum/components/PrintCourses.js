import React from 'react'
import { Link } from 'react-router-dom'

export default function ({ courses }){
  return <div className="d-flex flex-wrap">
      {courses.map(({ name, link, thumbSrc }, index)=>{
          return (
              <div key={index}
              style={{ maxWidth: '300px' }}
              className="mb-3 mr-3 text-center">
                  <Link className="d-block" to={link}>
                      <img className="rounded border" src={thumbSrc} alt={name} />
                  </Link>
                  <Link className="d-block" to={link}>{name}</Link>
              </div>
          )
      })}
  </div>
}