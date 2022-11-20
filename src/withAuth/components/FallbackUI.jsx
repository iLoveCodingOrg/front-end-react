import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className="container flex justify-content-center pb-4">
      <div className="card card-info">
          You must be logged in to view this page!
        {' '}
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}
