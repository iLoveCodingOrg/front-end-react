import React from 'react'
import Scrollspy from 'react-scrollspy'

function TOC() {
  return (
    <div>
      <Scrollspy
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
        }}
        items={['section-1', 'section-2', 'section-3', 'section-4']}
        currentClassName="current"
      >
        <li><a href="#build-anything">Build Anything</a></li>
        <li><a href="#structured-learning">Structured Learning</a></li>
        <li><a href="#complete-curriculum">Complete Curriculum</a></li>
        <li><a href="#technology-list">Technologies you'll learn</a></li>
        <li><a href="#earn">How much will your earn</a></li>
        <li><a href="#praciticeprojects">20+ Practice Projects</a></li>
        <li><a href="#interview-prep">Interview Prep Alongside</a></li>
        <li><a href="#mentor-n-communiity">Mentor & Community Support</a></li>
        <li><a href="#certificate">Certificate of Completion</a></li>
        <li><a href="#instructor">About the Instructor</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#value">Value Proposition</a></li>
        <li><a href="#guarantee">Guarantee</a></li>
        <li><a href="#faqs">FAQs</a></li>
      </Scrollspy>
    </div>
  )
}

export default TOC
