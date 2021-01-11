import React from 'react'
import Video from '../../Video/components/Video'
import { CheckMark } from '../../_common'

export default function ({ id, className }) {
  return (
    <div id={id} className={className}>
      <div className="grid-list-item align-items-start mb-2">
        <div><Video videoSource="311500783" /></div>
        <div>
          <h2>What will you learn?</h2>
          <p className="h3 f-300">
            You will learn all the technical skills so you can call yourself a competent Front-End and Full-Stack JavaScript developer - who is job-ready and can build any kind of app.
          </p>
        </div>
      </div>
      <div className="flex space-around">
        <div className="w-50">
          <CheckMark />&nbsp;Build simple and advanced websites <br />
          <CheckMark />&nbsp;Build responsive-design websites <br />
          <CheckMark />&nbsp;Build Modern Front-End Applications <br />
          <CheckMark />&nbsp;Think like a developer <br />
          <CheckMark />&nbsp;Problem-solving <br />
          <CheckMark />&nbsp;Backend Development <br />
          <CheckMark />&nbsp;Working with databases <br />
        </div>
        <div className="w-50">
          <CheckMark />&nbsp;Collaborate code with Git <br />
          <CheckMark />&nbsp;Breaking features down into functions <br />
          <CheckMark />&nbsp;Writing reusable code <br />
          <CheckMark />&nbsp;Build mobile apps <br />
          <CheckMark />&nbsp;Build password-protected websites <br />
          <CheckMark />&nbsp;Working with third-party APIs (Twitter, Facebook, etc.) <br />
        </div>
      </div>
    </div>
  )
}
