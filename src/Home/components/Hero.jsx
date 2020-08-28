import React from 'react'
import { Link } from 'react-router-dom'
import homePageImage from '../../_app/images/home-page-people.jpg'

function Hero() {
  return (
    <div className="container flex flex-wrap my-2" style={{ maxWidth: '850px' }}>
      <div className="sm-t-center flex-2" style={{ flexBasis: '300px' }}>

        <p className="h3 f-400">
          As you watch others build apps and land jobs, you think:
        </p>
        <h1 className="f-900">"Dammit, that should be me!"</h1>
        <div className="mx-auto">
          <h3 className="f-300 mt-1 mb-2" style={{ fontSize: 'calc(1em + 0.5vw)' }}>
            Learning how to code is a winnable game. I will teach you to be good at programming so you can <u>bring your ideas to life</u>, <u>ace interviews</u>, and <u>land your first programming job</u>. Get everything you need to become a competent <strong>Front-End</strong> and <strong>Full-Stack JavaScript Developer</strong>.
          </h3>
        </div>


        {/* <h1 className="strong">Complete Training + Mentor Support</h1> */}

        {/* <h3 className="f-300 mt-1 mb-3">
          iLoveCoding breaks programming down to basic building blocks
          (like Lego) and tells you how to assemble them for success.
        </h3>
        <h3 className="f-300 mt-1 mb-3">
          Get proven processes, gain laser-like focus, join a community of
          software developers and reprogram your brain for superhuman ability.
        </h3> */}
        <div className="inline-flex flex-column">
          <Link to="/pricing" className="btn btn-lg btn-primary">Get Started Free</Link>
          {/* <Link to="/pricing" className="btn btn-lg btn-primary">Give iLoveCoding a Try</Link> */}
          <p className="mt--5">Free to start, upgrade anytime.</p>
        </div>
        {/* <Link to="/pages/how-it-works" className="btn btn-link btn-lg">Or see How it works</Link> */}
      </div>
      {/* <div className="flex-1" style={{ flexBasis: '250px' }}>
        <img className="w-100" src={homePageImage} alt="People" />
      </div> */}
    </div>
  )
}

export default Hero
