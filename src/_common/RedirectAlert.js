import React from 'react'

const pathsToRedirect = [
  {
    from: 'htmlcss',
    to: '/courses/htmlcss2',
  },
  {
    from: 'js',
    to: '/courses/js2',
  },
]

export default function RedirectAlert({ slug }) {
  const path = pathsToRedirect.find(({ from }) => from === slug)

  if (path) {
    return (
      <div className="card card-danger">
        <strong>IMPORTANT:</strong>
        {' '}
        <a href={path.to}>The new version of this course is available here</a>
      </div>
    )
  }
  return null
}
