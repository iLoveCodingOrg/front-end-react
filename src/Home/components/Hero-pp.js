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
        <div className="col-12 col-md-5 col-lg-5">
          <Video videoSource="308929498" />
        </div>
        <div className="col-12 col-md-7 justify-content-center">
          {/* <h1 className="">Let me guide you!</h1> */}
          {/* <h1 className="">Want to become a developer?</h1> */}
          {/* <h1 className="">Let me guide you!</h1> */}
          {/* <h1 className="strong">Sick of cheap courses and expensive bootcamps?</h1> */}
          <h1 className="strong">Skip the cheap courses and the expensive bootcamps.</h1>
          <p className="mt-2 lead">
            Let me give you a complete step-by-step guide to becoming a confident, job-ready Front-End and/or Full-Stack JavaScript Developer.
          </p>
        </div>
        <div className="col-12">
          <p className="lead">
            <strong>Get started with my FREE course:</strong>
          </p>
          <HomeForm />
        </div>
      </div>
      {/* <div className="row flex-lg-row-reverse">
        <div className="col-12 col-md-7 col-lg-6">
          <img className="w-100" src={homePageImage} alt="People"/>
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="">
            Become a skilled JavaScript developer.
          </h1>
          <p className="h3 font-weight-light text-muted mb-2">
            Learn to build real world apps and think like a software engineer - Yup finally!
          </p>

          <Link className="btn btn-lg btn-primary" to="/pricing">Become a member</Link>
          &nbsp;
          <Link className="btn btn-lg u" to="/pages/how-it-works">or See How it Works</Link>
          <p className="mt-2 lead">
            I get it! Learning how to code can be a confusing process. With dozens of expensive coding bootcamps and thousands of cheap courses, its tough to make a decision on <u>what to learn</u>, <u>where to learn it from</u>, and <u>how to go about it all</u>.
          </p>
          <p className="lead">
            The good news? <Link to="/pages/how-it-works" className="u">iLoveCoding is different</Link>
          </p>
        </div>
      </div> */}
    </div>
  )
}


export default Hero
