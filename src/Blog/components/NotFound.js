import React from 'react'

export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Blog post not found :-(</h1>
      <h3 className="f-300">
          Oops, you landed out of the internet! The page you are looking for does not exist
      </h3>
      <img alt="Not found" src="https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif" />
    </div>
  )
}
