import React from 'react'

function PathDecisionBanner() {
  return (
    <section className="home-choice-hero-wrap">
      <div className="container container-slim">
        <div className="home-choice-hero">
          <p className="home-choice-eyebrow">Two separate websites</p>
          <h1 className="home-choice-title">What are you here for today?</h1>
          <p className="home-choice-subtitle">
            ilovecoding.org is for software development training. ilovecoding.ai is an AI
            agency service for businesses. Please choose one path to continue.
          </p>

          <div className="home-choice-actions">
            <a className="home-choice-btn home-choice-btn-learn" href="#learn-coding-hero">
              I want to learn coding
            </a>
            <a className="home-choice-btn home-choice-btn-consult" href="https://ilovecoding.ai">
              I need an AI agency
            </a>
          </div>

          <div className="home-choice-points">
            <span>Software development training site: ilovecoding.org</span>
            <span>AI agency site: ilovecoding.ai</span>
            <span>Choose one destination before exploring</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PathDecisionBanner