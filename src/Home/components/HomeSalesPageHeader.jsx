import React from 'react'
import { CheckMark } from '../../_common'
import './home-choice-banner.css'
import PathDecisionBanner from './PathDecisionBanner'

function Header({ showPathDecisionBanner }) {
  return (
    <>
      {showPathDecisionBanner && <PathDecisionBanner />}

      <section
        id="learn-coding-hero"
        className="container container-slim flex flex-wrap home-main-hero"
      >
        <div className="mx-auto" style={{ flexBasis: '625px' }}>
          <p className="h3 f-300 t-center">Code from scratch &amp; bring your ideas to life!</p>
          <h1 className="strong t-center">Become a Professional Full-Stack Developer</h1>
          <h3 className="f-300 my-1">
            The ultimate resource to learn software development from scratch, build projects,
            and land your first software developer job. Everything you need, in one streamlined
            platform.
          </h3>
          <div className="flex h4 f-300 flex-wrap space-between">
            <div className="px-1"><CheckMark /> Mentor Support</div>
            <div className="px-1"><CheckMark /> Interview Prep</div>
            <div className="px-1"><CheckMark /> Practice Projects</div>
          </div>
        </div>
      </section>
    </>
  )
}

Header.defaultProps = {
  showPathDecisionBanner: true,
}

export default Header
