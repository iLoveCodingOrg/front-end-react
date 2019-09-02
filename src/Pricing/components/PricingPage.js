import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Header from './Header'
import Price from './Price'
import Guarantee from './Guarantee'
import FAQs from './FAQs'
import AboutAziz from '../../AboutAziz/AboutAziz'

import Testimonials from './Testimonials'
import WhatYouGet from './WhatYouGet'
import WhatDifferent from './WhatDifferent'
import WhatBuild from './WhatBuild'
import WhatLearn from './WhatLearn'
import WhoFor from './WhoFor'

function Pricing() {
  return (
    <div id="pricing-page" className="flex flex-column">
      <Helmet>
        <title>Pricing - iLoveCoding</title>
      </Helmet>

      <h3 className="f-300 card card-warning t-center">
        <strong>Let’s be honest </strong>
        - Coding bootcamps are charging an arm and a leg - We give you
        {' '}
        <span className="strike">same</span>
        {' '}
        <Link to="/q/how-better" className="u">better training</Link>
        {' '}
        for 2% of the cost.
      </h3>

      {/* <h3 className="f-300 card card-warning t-center">
        <strong>Join Today and Lock in Your Low Price for Life!</strong>
        {' '}
        - We are doubling our membership price this week, but if you join today, your membership price will remain the same. Any new content we add to iLoveCoding
        {' '}
        <u>will be made available to you for no additional cost</u>
        {' '}
        . As long as you remain a member, you will always have your current price.
      </h3> */}
      <div className="py-3"><Header /></div>
      <div id="payment" className="py-3 bg-gray-lighter">
        {/* <div className="t-center mb-1">
          <span className="h2">
            Current Price:
          </span>
          <br />
          (These prices increase at the end of this week)
        </div> */}
        <Price />
      </div>
      <div className="p-3"><Testimonials itemNum="1" /></div>
      <div className="pb-2 t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>

      <div className="py-3 bg-gray-lighter"><WhatYouGet /></div>
      <div className="p-3"><Testimonials itemNum="0" /></div>
      <div className="t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>

      <div className="py-3"><WhatDifferent /></div>
      <div className="p-3"><Testimonials itemNum="3" /></div>

      <div className="pb-3 t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>

      <div className="py-3"><WhatBuild /></div>
      <div className="py-3"><WhatLearn /></div>
      <div className="py-3"><WhoFor /></div>
      <div className="p-3"><Testimonials itemNum="4" /></div>
      <div className="pb-3 t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>
      <div className="py-3 bg-gray-lightest"><Guarantee /></div>
      <div className="py-3 bg-gray-lighter">
        <div className="mr-auto ml-auto">
          <AboutAziz />
        </div>
      </div>
      <div className="p-3"><Testimonials itemNum="5" /></div>
      <div className="t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>
      <div className="pt-3"><FAQs /></div>
      <div className="pb-3 t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>
    </div>
  )
}

export default Pricing
