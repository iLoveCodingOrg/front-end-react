import React from 'react'
import { Helmet } from 'react-helmet'

import Reviews from './Reviews'
// import StudentCompanies from '../../LogoList/StudentCompanies'
import Cta from '../../Cta'

function ReviewsPage() {
  return (
    <div className="flex flex-column">
      <Helmet>
        <title>Real Results - iLoveCoding</title>
        <meta name="description" content="Read what some of the successful students have to say about iLoveCoding. Read their testimonials and full reviews" />
      </Helmet>
      <div className="container t-center">
        <h1>Real Results</h1>
        <h3 className="f-300">
          I asked my students what changed for the better since learning from iLoveCoding. Here's what they had to say:
        </h3>
      </div>
      <div className="bg-gray-lighter p-2">
        <div className="container">
          <Reviews />
        </div>
      </div>
      <Cta />
      {/* // This is causing some problem when opening
      // Review pages directly
      // The problem does not happen if you navigate from Home page */}
      {/* <StudentCompanies /> */}
    </div>
  )
}

export default ReviewsPage
