import './TOC.scss'
import React from 'react'
import Scrollspy from 'react-scrollspy'

function TOC({ className, style }) {
  const toc = [
    // { name: 'build-anything', label: 'Build Anything' },
    { name: 'what-is-ilc', label: 'What is iLoveCoding?' },
    { name: 'complete-curriculum', label: 'Complete Curriculum' },
    { name: 'structured-learning', label: 'Structured Learning' },
    { name: 'technology-list', label: 'Technologies you\'ll learn' },
    // { name: 'earn', label: 'How much will your earn?' },
    { name: 'projects', label: 'Practice Projects' },
    // { name: 'interview-prep', label: 'Interview Prep Alongside' },
    // { name: 'mentor-and-community', label: 'Mentor & Community Support' },
    { name: 'certificate', label: 'Certificate of Mastery' },
    { name: 'who-is-it-for', label: 'Who is it for?' },
    // { name: 'reviews', label: 'Reviews' },
    { name: 'payment', label: 'Pricing' },
    { name: 'guarantee', label: 'Guarantee' },
    { name: 'alternatives', label: 'Alternatives' },
    { name: 'faqs', label: 'FAQs' },
    { name: 'instructor', label: 'About the Instructor' },
  ]
  return (
    <div
      className={`${className} toc`}
      style={style}
    >
      <h4 className="px-1 pt-1">Table of Content</h4>
      <Scrollspy
        className="px-1"
        offset={-10}
        items={toc.map(({ name }) => name)}
        currentClassName="current"
      >
        {toc.map(({ name, label }, i) => <li key={name}><a href={`#${name}`}>{i + 1}. {label}</a></li>)}
      </Scrollspy>
    </div>
  )
}

export default TOC
