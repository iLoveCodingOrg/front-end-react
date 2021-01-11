import React from 'react'
import { CheckMark } from '../../_common'

export default function ({ id, className }) {
  return (
    <div id={id} className={className}>
      <h2>Technologies You Will Learn</h2>
      <div className="h4 f-300 flex flex-wrap">
        <div className="px-1">
          <div><CheckMark />&nbsp;<strong>JavaScript</strong>: Beginner to Advanced</div>
          <div><CheckMark />&nbsp;<strong>ES6+</strong>: Modern JavaScript features</div>
          <div><CheckMark />&nbsp;<strong>HTML5</strong> : Basic HTML and modern HTML Features</div>
          <div><CheckMark />&nbsp;<strong>CSS3</strong>: CSS basics to modern CSS features</div>
          <div><CheckMark />&nbsp;<strong>Node.js</strong>: Using JavaScript in the backend</div>
          <div><CheckMark />&nbsp;<strong>Express.js</strong>: Backend robust RESTful API</div>
          <div><CheckMark />&nbsp;<strong>MongoDB</strong>: The noSQL database</div>
          <div><CheckMark />&nbsp;<strong>React</strong>: Build modern web UI applications</div>
          <div><CheckMark />&nbsp;<strong>Redux</strong>: State management for modern apps</div>
        </div>
        <div className="px-1">
          <div><CheckMark />&nbsp;<strong>DOM</strong>: Tame the browser with vanilla JavaScript</div>
          <div><CheckMark />&nbsp;<strong>jQuery</strong>: The defacto library for DOM manipulation</div>
          <div><CheckMark />&nbsp;<strong>NPM</strong>: Use third-party libraries</div>
          <div><CheckMark />&nbsp;<strong>Webpack/Parcel</strong>: Module bundlers for todays developer</div>
          <div><CheckMark />&nbsp;<strong>Babel</strong>: Write cross-browser compatible code</div>
          <div><CheckMark />&nbsp;<strong>ESLint</strong>: Improve code quality</div>
          <div><CheckMark />&nbsp;<strong>OAuth2</strong>: Standard protocol to secure applications</div>
          <div><CheckMark />&nbsp;<strong>RESTful</strong>: Standard protocol to structure web API</div>
        </div>
      </div>

    </div>
  )
}
