import React from 'react'
import { Helmet } from 'react-helmet'
import Cta from '../../Cta'
import { Video } from '../../Video'

import Archieved from './Archieved'
import Electives from './Electives'
import Module1 from './Module1'
import Module2 from './Module2'
import Module3 from './Module3'

export default () => (
  <div className="flex flex-column">
    <Helmet>
      <title>The Full Curriculum to become a professional Full-Stack Developer - iLoveCoding</title>
      <meta name="description" content="Get the complete roadmap (from start to finish) on how to become a job-ready, competent JavaScript developer." />
    </Helmet>
    <div className="container mt-1">
      <h1 className="t-center">The Complete Full-Stack Development Curriculum</h1>
      <h3 className="f-300 t-center mb-2">
        Go from zero to a professional Full-Stack developer.
      </h3>
      <div className="b bt-1 pt-2">
        <div>
          <h3 className="f-300 card card-warning text-dark">
            <strong>Important:</strong>
            {' '}
            This curriculum will give you the complete training of the deep technical concepts, homework, cheat sheets, and practice projects, so you become a highly-skilled software developer.&nbsp;
            <strong>Watch the video to get a proper walkthrough.</strong>
          </h3>
        </div>
        <div className="t-center p-0 mb-1">
          <Video videoSource="q87DYpgqfhE" />
          <h5 className="py-1">VIDEO: How to get the most out of The Full Curriculum</h5>
        </div>
      </div>
      <p>
        By the time you are done with this curriculum you will have the complete skills to code and launch modern websites, web applications and even mobile apps from scratch. Plus you will have an impressive portfolio to land you a respectable job as a software developer.
      </p>
      <p>
        We&apos;ll do all of this while focusing on one programming language, which is JavaScript. JavaScript is currently the most popular and versatile programing language on planet internet. In fact, 99% (maybe even 100%) of all top websites use JavaScript, and all the tech giants use it to build their websites and mobile apps such as Facebook, PayPal, Google, LinkedIn, Walmart, Tesla, Apple, and even Microsoft uses it actively to build their apps.
      </p>
      <p>
        <strong>Trust the process - follow the modules:</strong>
        <br />
        Each module has core training along with a ton of practice projects. These practice projects will give you real-life training on how to think like a developer and go from a blank screen to a fully finished application.
      </p>
      <div className="my-3">
        <div className="flex flex-column card mb-2 align-items-center">
          <h3>Time to completion - 5 months</h3>
          <p className="mb-0">
            Study 15 hrs/week and complete within 5 months.
          </p>
        </div>
      </div>

      <Module1 />
      <Cta />
      <Module2 />
      <Cta />
      <Module3 />
      <Cta />
      <Electives />
      <Cta />
      <Archieved />
    </div>
  </div>
)
