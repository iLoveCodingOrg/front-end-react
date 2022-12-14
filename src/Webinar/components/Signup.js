import React, { useState } from 'react'
import { Copyrights } from '../../Footer'
import img from './aziz-pic-2.jpg'
import SignupModal from './SignupModal'

export default function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="container">
      <div className="header my-3">
        <p className="h4 color-blue t-center">NO COST TRAINING SESSION FOR ASPIRING SOFTWARE/WEB DEVELOPERS</p>
        <h1 className="t-center mt--5 strong">
          &ldquo;How I went from a complete beginner to a highly-paid software developer in 5 months&rdquo;
        </h1>
        <h3 className="t-center em color-gray mb-3">Without having a CS degree, without attending a coding bootcamp or without using cheap courses.</h3>
      </div>
      <div className="flex flex-wrap">
        <div className="flex-3" style={{ flexBasis: '250px' }}>
          <img
            loading="lazy"
            className="w-100"
            src={img}
            alt="Aziz"
          />
          <p className="mt-1 p-1 border">
            <strong>Presenter: Aziz Ali is the founder of iLoveCoding.org.</strong>
            {/* {' '}
            He has worked for United Airlines, CVS Health and a few other companies as a Senior Software Engineer. Aziz is routinely invited by big firms to the likes of Starbucks, Intuit and SalesForce.com to teach their employees modern software development. Aziz has also taught software development to dozens of students around the world who now work at Citibank, Twitter, Sony, and the like. Some have established their own startups and freelancing businesses. */}
          </p>
        </div>
        <div className="flex-2 px-3" style={{ flexBasis: '330px' }}>
          <h3 className="color-blue t-center mb-1">
            Here is What&apos;s Covered...
          </h3>
          <ul className="checkmark">
            <li className="mb-2">
              <strong>The new technology stack</strong>
              {' '}
              that doesn&apos;t require you to learn Java, Python, SQL, and other outdated technologies.
            </li>
            <li className="mb-2">
              <strong>How to use this 100 year old learning technique</strong>
              , used by experts, to quickly learn the fundamentals of programming and understand it deeply.
            </li>
            <li className="mb-2">
              <strong>The Reverse Resume Hack</strong>
              {' '}
              I used to attract dozens of recruiters calling me with job openings, without me having to apply to any of them.
            </li>
          </ul>
          <button
            onClick={handleOpenModal}
            type="button"
            className="btn btn-primary btn-lg btn-block py-1"
          >
            Yes! Reserve My Seat Now!
          </button>

          <div className="t-center strong small">100% No Cost - Seating is limited</div>
        </div>
      </div>
      <div className="small color-gray b bt-1 pt-3" style={{ marginTop: '20em' }}>
        <p>
          DISCLAIMER: Aziz Ali can not and does not make any guarantees about your ability to get results or earn any money with our ideas, information, tools, or strategies.
        </p>
        <p>
          Nothing on this page, any of our websites, or any of our content or curriculum is a promise or guarantee of results or future earnings, and we do not offer any legal, medical, tax or other professional advice. Any financial numbers and results referenced here, or on any of our sites, are illustrative of concepts only and should not be considered average earnings, exact earnings, or promises for actual or future performance. Use caution and always consult your accountant, lawyer or professional advisor before acting on this or any information related to a lifestyle change or your business or finances. You alone are responsible and accountable for your decisions, actions and results in life, and by your registration here you agree not to attempt to hold us liable for your decisions, actions or results, at any time, under any circumstance.
        </p>
        <p>
          This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </div>
      <Copyrights />
      {isModalOpen && (
      <SignupModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      )}
    </div>
  )
}
