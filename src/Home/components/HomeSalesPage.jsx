import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Redirect, withRouter } from 'react-router-dom'

import { isLoggedIn, isPaid } from '../../_user/selectors'
import Header from './HomeSalesPageHeader'
import StudentCompanies from '../../LogoList/StudentCompanies'
import SocialProof from './SocialProof'
import UsedBy from '../../LogoList/UsedBy'
import Price from '../../Pricing/components/Price'
import AboutAziz from '../../AboutAziz'

import TOC from './TOC'
import {
  Testimonials,
  WhatYouGet,
  WhatDifferent,
  WhatBuild,
  WhatLearn,
  WhoFor,
  BuildAnything,
  StructuredLearning,
  CompleteCurriculum,
  PracticeProjects,
  InterviewPrep,
  MentorCommunitySupport,
  CertificateOfCompletion,
  ValueProposition,
  Guarantee,
  FAQs,
  TechnologiesLearn,
} from '../../SalesCopy'

function BuyCTA() {
  return (
    <div className="my-3 t-center">
      <a className="btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
    </div>
  )
}
function HomeSalesPage({
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

  // Set Scroll behavior on component load
  useEffect(() => {
    const { scrollBehavior } = document.documentElement.style
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      document.documentElement.style.scrollBehavior = scrollBehavior
    }
  })

  return (
    <div className="flex flex-column">
      <Helmet>
        <title>iLoveCoding - Complete Front-End & Full-Stack JavaScript Training</title>
      </Helmet>

      <Header />
      <BuyCTA />
      <div className="container-fluid mt-3 bg-gray-lightest p-3 b bt-1">
        <SocialProof />
        <StudentCompanies />
      </div>
      <div className="container-fluid px-0">
        <div className="flex-reverse">
          <div style={{ backgroundColor: '#e9f1ff' }}>
            <TOC style={{ width: '255px' }} />
          </div>
          <div className="w-100">
            {/* <div className="container" id="build-anything">
              <BuildAnything />
              <div className="container p-3"><Testimonials itemNum="3" /></div>
              <BuyCTA />
            </div> */}
            <div className="container-md py-4" id="what-is-ilc">
              <h2>What is iLoveCoding?</h2>
              <p className="h3 f-300">iLoveCoding is a platform that teaches you coding so well that you become a competent software engineer. The training is structured; the topics you learn are suited for todays job-market; and best of all, you get support from a mentor throughout your journey  - From zero to becoming a highly-skilled software engineer.</p>

              <WhatLearn className="mt-2" />
            </div>

            <div className="bg-gray-lighter" id="complete-curriculum">
              <div className="container-md py-4">
                <WhatYouGet className="" />
                <div className="container-slim p-3"><Testimonials itemNum={7} /></div>
                <BuyCTA />
              </div>
            </div>

            <div className="container-md py-4" id="structured-learning">
              <StructuredLearning className="mt-2" />
              <div className="container-slim p-3"><Testimonials itemNum={2} /></div>
              <BuyCTA />
            </div>

            <div className="bg-gray-lighter">
              <div className="container-md py-4" id="technology-list">
                <TechnologiesLearn />
                <div className="container-slim p-3"><Testimonials itemNum={3} /></div>
                <BuyCTA />
              </div>
            </div>

            <div className="container-md py-4" id="projects">
              {/* <PracticeProjects /> */}
              <WhatBuild />
              <div className="container-slim p-3"><Testimonials itemNum={4} /></div>
              <BuyCTA />
            </div>

            {/* <div className="container" id="earn">
              <h2>How much can you earn?</h2>
              <div className="container p-3"><Testimonials itemNum="3" /></div>
              <BuyCTA />
            </div> */}

            {/* <div className="container" id="interview-prep">
              <InterviewPrep />
              <div className="container p-3"><Testimonials itemNum="3" /></div>
              <BuyCTA />
            </div> */}

            {/* <div className="container" id="mentor-and-community">
              <MentorCommunitySupport />
              <div className="container p-3"><Testimonials itemNum="3" /></div>
              <BuyCTA />
            </div> */}

            <div className="bg-gray-lighter" id="certificate">
              <div className="container-md py-4">
                <CertificateOfCompletion />
                <div className="container p-3"><Testimonials itemNum={5} /></div>
                <BuyCTA />
              </div>
            </div>

            <div
              id="who-is-it-for"
              className="container-md py-4"
            >
              <WhoFor />
              <div className="container-slim p-3"><Testimonials itemNum={6} /></div>
              <BuyCTA />
            </div>

            <div id="payment" className="container-fluid py-4 bg-gray-lighter">
              <Price />
              <ValueProposition id="value" className="container-md" />
            </div>

            <div id="guarantee" className="container-fluid py-4 bg-gray-lightest">
              <Guarantee className="container-md" />
            </div>

            <div className="container-slim p-3"><Testimonials itemNum={1} /></div>
            <BuyCTA />

            <div id="alternatives" className="container-fluid py-4 bg-gray-lighter">
              <WhatDifferent className="container-md" />
              <div className="container-slim p-3"><Testimonials itemNum={0} /></div>
              <BuyCTA />
            </div>

            <div id="faqs" className="container-fluid pt-3">
              <FAQs className="container-md" />
              <BuyCTA />
            </div>

            <div id="instructor" className="py-4 bg-gray-lighter">
              <AboutAziz className="mr-auto ml-auto" />
            </div>
            <UsedBy />
          </div>
        </div>
      </div>
    </div>
  )
}

HomeSalesPage.propTypes = {
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
)(HomeSalesPage))
