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
      <div className="container container-slim p-3"><Testimonials itemNum="1" /></div>
      <div className="pb-2 t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>

      <div className="py-3 bg-gray-lighter"><WhatYouGet /></div>
      <div className="container container-slim p-3"><Testimonials itemNum="0" /></div>
      <div className="t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>

      <div className="py-3"><WhatDifferent /></div>
      <div className="container container-slim p-3"><Testimonials itemNum="3" /></div>

      <div className="pb-3 t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>

      <div className="py-3"><WhatBuild /></div>
      <div className="py-3"><WhatLearn /></div>
      <div className="py-3"><WhoFor /></div>
      <div className="container container-slim p-3"><Testimonials itemNum="4" /></div>
      <div className="pb-3 t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>
      <div className="py-3 bg-gray-lightest"><Guarantee /></div>
      <div className="py-3 bg-gray-lighter">
        <div className="mr-auto ml-auto">
          <AboutAziz />
        </div>
      </div>
      <div className="container container-slim p-3"><Testimonials itemNum="5" /></div>
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
