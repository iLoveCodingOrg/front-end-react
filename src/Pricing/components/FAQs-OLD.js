import React from 'react'
import PrintFAQ from './PrintFAQ'

const data = [
  {
    question: 'How is iLoveCoding different?',
    Answer() {
      return (
        <div>
          <p>
                        iLoveCoding is more than just a video training program. It has three distinct and critical components which maximize your chances of success.
          </p>
          <p>
            <strong>
                        iLoveCoding =
                        Right Training + Learning Methodology + Mentorship
            </strong>
          </p>
          <p>
                        Other training provide you too much or too little information. This can cause overwhelm or confusion. iLoveCoding is different. iLoveCoding provides a linear, structured and proven path to incrementally build your fundamental knowledge of web development. With every lesson you learn small but critical skills that make you a better developer.
          </p>
          <p>
                        You have access to me (your mentor) via email, group calls and office hours. Bring your questions to me and I'll resolve your code issues, and point you in the right direction.
          </p>
        </div>
      )
    },
  },
  {
    question: 'Is this program going to work for me?',
    Answer() {
      return (
        <div>
          <p>
                        Everyone learns differently. That is why I have implemented subliminal learning techniques within my training so no matter what your learning style, you will be able to capture the new skills and remember it.
          </p>
          <p>
                        People who have tried and failed at other courses, books and bootcamps, repeatedly join iLoveCoding training program and find success.
          </p>
          <strong>iLoveCoding is for you if:</strong>
          <ul>
            <li>You want to get started on the most optimal path to learn how to code</li>
            <li>You want to start a new career in Website Design, Web Development or Front-End Development</li>
            <li>You can follow instructions</li>
            <li>Are willing to put in 40 - 90 minutes a day 4 days a week</li>
            <li>You are curious and will ask questions whenever stuck</li>
            <li>You are driven to learn this new skill</li>
            <li>You get excited about the idea of building real practical apps</li>
            <li>You want to be a freelancer and work on Client Development Projects</li>
            <li>You want to build and launch your startup app or website</li>
            <li>You have failed with other courses, bootcamps, and want to give programming another try</li>
          </ul>
          <strong>
iLoveCoding is
            <u>NOT</u>
            {' '}
for you if:
          </strong>
          <ul>
            <li>You will just buy and not apply what you are taught</li>
            <li>You are just after the money and looking for shortcuts</li>
          </ul>
        </div>
      )
    },
  },
  {
    question: 'Will I be able to get a job?',
    Answer() {
      return (
        <div>
          <p>
                        Yes absolutely! Front-End Development &amp; Front-End Development is a hot skill right now. The market is in your favor, meaning there are more jobs out there and less skilled people.
          </p>
          <p>
                        iLoveCoding will teach you the precise fundamental skills to build modern, practical websites, web apps and mobile apps. This is a skill which is highly employable. Not just that, the fundamental skills you learn here will prepare you to pickup new technology that will launch in the future.
          </p>
          <p>
                        This is where iLoveCoding is different. We prepare you for now and the future by focusing on fundamentals.
          </p>
        </div>
      )
    },
  },
]
export default function () {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mb-2">Common Questions</h2>
      <div className="col-md-10 col-lg-8">
        <PrintFAQ data={data} />
      </div>
    </div>
  )
}
