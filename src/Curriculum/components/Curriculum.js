import React from 'react'
import { Helmet } from 'react-helmet'
import Cta from '../../Cta'
import { Video } from '../../Video'

import Module1 from './Module1'
import Module2 from './Module2'
import Module3 from './Module3'
import Module4 from './Module4'
import Electives from './Electives'

export default () => (
  <div className="d-flex flex-column">
    <Helmet>
      <title>The Perfect Curriculum to become a Front-End/Full-Stack JavaScript Developer - iLoveCoding</title>
      <meta name="description" content="Get the complete roadmap (from start to finish) on how to become a job-ready, competent JavaScript developer." />
    </Helmet>
    <div className="container mt-3">
      <h1 className="text-center">The Perfect Curriculum</h1>
      <p className="lead text-center mb-4">
        Go from zero to a professional Front-End and/or Full-Stack JavaScript developer.
      </p>
      <div className="row border-top pt-4">
        <div className="col-md-4">
          <p className="lead alert alert-warning text-dark">
            <strong>Important:</strong>
            {' '}
            This curriculum will give you the complete training of the deep technical concepts, homework, cheatsheets and practice projects so become a highly-skilled software developer.&nbsp;
            <strong>Watch the video to get a proper walk through.</strong>
          </p>
        </div>
        <div className="col-md-8 text-center p-0 mb-3">
          <Video videoSource="315031967" />
          <h5 className="py-3">VIDEO: How to get the most out of The Perfect Curriculum</h5>
        </div>
      </div>
      <p className="">
        By the time you are done with this curriculum you will have the complete skills to code and launch modern websites, web applications and even mobile apps from scratch. Plus you will have an impressive portfolio to land you a respectable job as a software developer.
      </p>
      <p className="">
        We'll do all of this while focusing on one programming language, which is JavaScript. JavaScript is currently the most popular and versatile programing language on planet internet. In fact 99% (maybe even 100%) of all top websites use JavaScript, and all the tech giants use it to build their websites and mobile apps: Facebook, PayPal, Google, LinkedIn, Walmart, Tesla, Apple, and even Microsoft uses it actively to build their apps.
      </p>
      <p className="">
        <strong>Trust the process - follow the modules:</strong>
        <br />
        Each module has core training along with a ton of practice projects. These practice projects will give you real life training on how to think like a developer and go from a blank screen to a fully finished application.
      </p>
      <div className="row my-5">
        <div className="col-sm-12 d-flex mb-4 mb-sm-0">
          <div className="alert bg-gray-lightest py-4 border text-center mb-0 w-100">
            <h5>Time to completion - 5 months</h5>
            <p className="mb-0">
              Study 15 hrs/week and complete within 5 months.
            </p>
          </div>
        </div>
      </div>

      <Module1 />
      <Cta />
      <Module2 />
      <Cta />
      <Module3 />
      <Cta />
      <Module4 />
      <Cta />
      <Electives />
      <Cta />
    </div>
  </div>
)
