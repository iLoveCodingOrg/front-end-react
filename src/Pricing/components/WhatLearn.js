import React from 'react'
import Video from '../../Video/components/Video'
import { CheckMark } from '../../_common'

export default function () {
  return (
    <div className="container">
      <div className="grid-list-item align-items-start mb-2">
        <div><Video videoSource="311500783" /></div>
        <div>
          <h2>What will you learn?</h2>
          <h3 className="f-300">
            You will learn all the technical skills so you can call yourself a competent Front-End and Full-Stack JavaScript developer - who is job-ready and can build any kind of app.
          </h3>
          <div>
            <CheckMark />
            {' '}
            Build simple and advanced websites
            <br />
            <CheckMark />
            {' '}
            Build responsive-design websites
            <br />
            <CheckMark />
            {' '}
            Build Modern Front-End Applications
            <br />
            <CheckMark />
            {' '}
            Think like a developer
            <br />
            <CheckMark />
            {' '}
            Problem-solving
            <br />
            <CheckMark />
            {' '}
            Backend Development
            <br />
            <CheckMark />
            {' '}
            Working with databases
            <br />
            <CheckMark />
            {' '}
            Collaborate code with Git
            <br />
            <CheckMark />
            {' '}
            Breaking features down into functions
            <br />
            <CheckMark />
            {' '}
            Writing reusable code
            <br />
            <CheckMark />
            {' '}
            Build mobile apps
            <br />
            <CheckMark />
            {' '}
            Build password-protected websites
            <br />
            <CheckMark />
            {' '}
            Working with third-party APIs (Twitter, Facebook, etc.)
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}
