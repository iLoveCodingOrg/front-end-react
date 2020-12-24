import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Redirect, withRouter } from 'react-router-dom'


import { isLoggedIn, isPaid } from '../../_user/selectors'
import Header from './Header'
import StudentCompanies from '../../LogoList/StudentCompanies'
import SocialProof from '../../Home/components/SocialProof'
import UsedBy from '../../LogoList/UsedBy'

import Price from './Price'
import AboutAziz from '../../AboutAziz'

import {
  Guarantee,
  FAQs,
  Testimonials,
  WhatYouGet,
  WhatDifferent,
  WhatBuild,
  WhatLearn,
  WhoFor,
} from '../../SalesCopy'

function Pricing({
  location, isLoggedIn, isPaid,
}) {
  if (isLoggedIn && isPaid) return <Redirect to="/dashboard" />

  const { hash } = location
  useEffect(() => {
    if (hash && document.getElementById(hash.substr(1))) {
      // Check if there is a hash and if an element with that id exists
      document.getElementById(hash.substr(1)).scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash]) // Fires every time hash changes

  return (
    <div id="pricing-page" className="flex flex-column">
      <Helmet>
        <title>
          iLoveCoding - Complete Front-End & Full-Stack JavaScript Training
        </title>
      </Helmet>
      <Header />
      <div className="pb-3 t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>
      <div className="mt-3 bg-gray-lightest p-3 b bt-1">
        <SocialProof />
        <StudentCompanies />
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
      <div className="container-fluid p-3">
        <div className="container container-slim">
          <Testimonials itemNum="4" />
        </div>
      </div>
      <div className="pb-3 t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>
      <div className="py-3 bg-gray-lighter">
        <div className="mr-auto ml-auto">
          <AboutAziz />
        </div>
      </div>
      <div className="container container-slim p-3"><Testimonials itemNum="5" /></div>
      <div id="payment" className="py-3 bg-gray-lighter">
        {/* <div className="t-center mb-1">
          <span className="h2">
          Current Price:
          </span>
          <br />
          (These prices increase at the end of this week)
        </div> */}
        <Price />
        <div className="container container-slim">
          <Testimonials itemNum="1" />
        </div>
      </div>
      <div className="py-3 bg-gray-lightest"><Guarantee /></div>
      <div className="pb-2 t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>
      <div className="pt-3"><FAQs /></div>
      <div className="pb-3 t-center">
        <a className="mt-2 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
      </div>
      <UsedBy />
    </div>
  )
}

Pricing.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isPaid: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
  }).isRequired,
}

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
    isPaid: isPaid(state),
  }
}

export default withRouter(connect(
  mapStateToProps,
)(Pricing))
