import React from 'react'
import HomeForm from './HomeForm'

function Hero() {
  return (
    <div
      className="container container-slim flex flex-wrap my-2"
    >
      <div className="t-center mx-auto" style={{ flexBasis: '500px' }}>
        <p className="h3 f-300">Learn to Code with Confidence!</p>
        <h1 className="strong">Become a Competent Front-End Developer</h1>
        <h3 className="f-300 mb-1">
          <span role="img" aria-label="sparkle">🌟</span>&nbsp;<strong>NEW:</strong> Enroll in my Free 7-day email course where I show you the exact strategies I used to go from a struggling newbie to a professional web developer.
        </h3>
        <HomeForm />
      </div>
    </div>
  )
}

export default Hero
