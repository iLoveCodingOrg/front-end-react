import React from 'react'
import { Link } from 'react-router-dom'
import homePageImage from '../../_app/images/home-page-people.jpg'

function Hero() {
  return (
    <div
      className="container flex flex-wrap my-2"
    >
        <div className="flex-2" style={{ flexBasis: '300px' }}>
          <p className="h3">Learn to Code with Confidence</p>
          <h1 className="strong">Complete Video Training + Mentor Support</h1>
          <h3 className="f-300 mb-3">
            Get everything you need to become a
            {' '}
            <u>job-ready</u>
            ,
            {' '}
            <u>interview-ready</u>
            ,
            {' '}
            <u>portfolio-ready</u>
            , and
            {' '}
            <u>launch-your-idea-ready</u>
            {' '}
            Front-End and/or Full-Stack JavaScript Developer.
          </h3>
          <Link to="/pricing" className="btn btn-lg btn-primary">Get Started Now</Link>
          <Link to="/pages/how-it-works" className="btn-link btn-lg">Or see How it works</Link>
        </div>
        <div className="flex-1" style={{ flexBasis: '250px' }}>
          <img className="w-100" src={homePageImage} alt="People" />
        </div>
    </div>
  )
}

export default Hero
