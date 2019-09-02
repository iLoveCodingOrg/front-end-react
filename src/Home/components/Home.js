import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import { selectors } from '../../_user'

import Hero from './Hero'
import UsedBy from '../../LogoList/UsedBy'
import SocialProof from './SocialProof'

function Home({ isLoggedIn }) {
  if (isLoggedIn) return <Redirect to="/dashboard" />
  return (
    <div className="flex flex-column">
      <Helmet>
        <title>iLoveCoding: Master JavaScript, Learn via Video Screencasts</title>
        <meta name="description" content="iLoveCoding teaches you how to think and build like a software developer focusing on Full-Stack JavaScript development." />
      </Helmet>
      <Hero />
      <div className="my-3 bg-gray-lightest p-3 b bt-1">
        <SocialProof />
      </div>
      <div className="mt-2 container">
        <div>
          <h3 className="h2 t-center mb-2">Skip the cheap courses and the expensive bootcamps!</h3>
          <h3 className="f-300 mb-3">
            I get it! Learning how to code can be a confusing process. With dozens of expensive coding bootcamps and thousands of cheap courses, its tough to make a decision on
            {' '}
            <u>what to learn</u>
            ,
            {' '}
            <u>where to learn it from</u>
            , and
            {' '}
            <u>how to go about it all</u>
            .
          </h3>
          <h3 className="f-300 mb-3">
            <Link to="/pages/how-it-works">iLoveCoding is different!</Link>
            {' '}
            we give you a complete roadmap, complete video training and mentor support every step of the way till you achieve your goal.
          </h3>
          <h3 className="f-300 mb-3">
            Whether you want to become job-ready, start your freelancing business or launch your tech startup, iLoveCoding will give you the
            {' '}
            <strong>complete technical skills</strong>
            {' '}
            to make that possible.
          </h3>
          <h3 className="f-300 mb-3">
            Programming has a lot of "big words"! These words look and sound complicated on the surface, but if understood correctly, they are very simple. In my training, I explain these big words and new concepts in a simple manner so you not only
            {' '}
            <strong>think like a developer, but you also talk like one.</strong>
          </h3>
          <h3 className="f-300 mb-3">
            Every time I teach something new, I show you how to use that new concept to build something practical; This way you know the theory and the
            {' '}
            <strong>practical use-case</strong>
            {' '}
            of each new concept.
          </h3>
          <h3 className="f-300 mb-3">
            iLoveCoding makes you a
            {' '}
            <strong>highly-skilled</strong>
            {' '}
            Front-End and Full-Stack JavaScript developer, who can build websites, web apps, mobile apps and even desktop apps. Yes our curriculum is that solid.
            {' '}
            <Link to="/curriculum">See the Full Curriculum</Link>
          </h3>
          <h3 className="f-300 mb-3">
            <strong>Have more questions?</strong>
            {' '}
            email
            {' '}
            <a href="mailto:support@ilovecoding.org">support@ilovecoding.org</a>
            , and we'd be happy to answer them.
          </h3>
          <h3 className="f-300 b bt-1 pt-3 mb-2">
            Learn to code
            {' '}
            <strong>so well</strong>
            {' '}
            , that you can confidently build real-world apps, build an impressive portfolio and pass that tricky interview!
          </h3>
          <p className="t-center">
            <Link to="/pricing" className="btn btn-lg btn-primary">Get Started Now</Link>
          </p>
        </div>
      </div>
      <UsedBy />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isLoggedIn: selectors.isLoggedIn(state),
  }
}

export default connect(mapStateToProps)(Home)
