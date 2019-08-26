import React from 'react'
import { Helmet } from 'react-helmet'

import { Offer, CountDown } from '../../Offer'
import {
  Header,
  Testimonials,
  Price,
  Guarantee,
  FAQs,
} from '..'

import { Curriculum } from '../../Curriculum'

import AboutAziz from '../../AboutAziz/AboutAziz'

function Pricing() {
  return (
    <div className="flex flex-column">
      <Helmet>
        <title>
          Pricing | iLoveCoding - iLoveCoding
        </title>
      </Helmet>
      <Offer />
      <CountDown title="30% Off expires in:" />
      <div className="pt-3"><Header /></div>
      <div className="pb-3">
        <Curriculum />
      </div>
      <div className="bg-gray-lighter mt-2">
        <div className="py-3 flex justify-content-center">
          <div className="col-md-10 col-lg-8">
            <AboutAziz />
          </div>
        </div>
      </div>
      <div className="py-3 bg-light"><Testimonials /></div>
      {/* <div className="py-3 bg-light"><Testimonials /></div>
      <div className="py-3"><Outcomes /></div>
      <div className="py-3 bg-light"><WhatsIncluded /></div>
      <div className="py-3"><WhosItFor /></div>
      <div className="py-3 bg-light"><WhosItNotFor /></div>
      <div className="py-3"><Price /></div> */}
      <div className="py-3 bg-secondary">
        <div className="flex justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h2 className="text-center text-white">
              Coding bootcamp level training for 2% of the cost!
            </h2>
            <div className="alert alert-danger">
              <p>
                <strong>Note:</strong>
                {' '}
                We cover the same topics taught at a coding bootcamp, plus some more, at 2% of the sticker price. I don't have the fancy offices, and expensive staff so I pass the savings to you!
              </p>
              <p className="mb-0">
                <strong>Plus</strong>
                {' '}
                I am invested in your success, since your success means more success for iLoveCoding
              </p>
            </div>
          </div>
        </div>
        <Price />
      </div>
      <div className="py-3 bg-dark"><Guarantee /></div>
      <div className="py-3"><FAQs /></div>
      <div className="py-3 bg-secondary"><Price /></div>
    </div>
  )
}

export default Pricing
