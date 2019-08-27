import React from 'react'
import { Link } from 'react-router-dom'
import HomeForm from './HomeForm'

import homePageImage from '../../_app/images/home-page-people.jpg'
import homePageImage2 from '../../_app/images/skill-path.png'
import { Video } from '../../Video'

function Hero() {
  return (
    <div className="container my-2 mt-md-5">
      <div className="row flex-md-row-reverse">
        <div>
          <Video videoSource="308929498" />
        </div>
        <div className="justify-content-center">
          {/* <h1>Let me guide you!</h1> */}
          {/* <h1>Want to become a developer?</h1> */}
          {/* <h1>Let me guide you!</h1> */}
          {/* <h1 className="strong">Sick of cheap courses and expensive bootcamps?</h1> */}
          <h1 className="strong">Skip the cheap courses and the expensive bootcamps.</h1>
          <h3 className="f-300 mt-2">
            Let me give you a complete step-by-step guide to becoming a confident, job-ready Front-End and/or Full-Stack JavaScript Developer.
          </h3>
        </div>
        <div>
          <h3 className="f-300">
            <strong>Get started with my FREE course:</strong>
          </h3>
          <HomeForm />
        </div>
      </div>
      {/* <div className="row flex-lg-row-reverse">
        <div>
          <img className="w-100" src={homePageImage} alt="People"/>
        </div>
        <div>
          <h1>
            Become a skilled JavaScript developer.
          </h1>
          <p className="h3 font-weight-light text-muted mb-2">
            Learn to build real world apps and think like a software engineer - Yup finally!
          </p>

          <Link className="btn btn-lg btn-primary" to="/pricing">Become a member</Link>
          &nbsp;
          <Link className="btn btn-lg u" to="/pages/how-it-works">or See How it Works</Link>
          <h3 className="f-300 mt-2">
            I get it! Learning how to code can be a confusing process. With dozens of expensive coding bootcamps and thousands of cheap courses, its tough to make a decision on <u>what to learn</u>, <u>where to learn it from</u>, and <u>how to go about it all</u>.
          </h3>
          <h3 className="f-300">
            The good news? <Link to="/pages/how-it-works" className="u">iLoveCoding is different</Link>
          </h3>
        </div>
      </div> */}
    </div>
  )
}


export default Hero
