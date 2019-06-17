import React from 'react'

export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Blog post not found :-(</h1>
      <p className="lead">
          Oops, you landed out of the internet! The page you are looking for does not exist
      </p>
      <img alt="Not found" src="https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif" />
    </div>
  )
}
