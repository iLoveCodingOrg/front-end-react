import React from 'react'
import { Helmet } from 'react-helmet'

import {
    Header,
    Testimonials,
    WhatsIncluded,
    WhosItFor,
    WhosItNotFor,
    Price,
    Guarantee,
    FAQs,
    Outcomes,
} from '../'

import { Curriculum } from '../../Curriculum'

import AboutAziz from '../../AboutAziz/AboutAziz'

class Pricing extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="d-flex flex-column">
                <Helmet>
                    <title>
                        Pricing | iLoveCoding
                    </title>
                </Helmet>
                <div className="pt-5"><Header /></div>
                <div className="pb-5">
                    <Curriculum />
                </div>
                <div className="bg-gray-200 mt-4">
                    <div className="py-5 d-flex justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <AboutAziz />
                        </div>
                    </div>

                </div>
                <div className="py-5 bg-light"><Testimonials /></div>
                {/* <div className="py-5 bg-light"><Testimonials /></div>
                <div className="py-5"><Outcomes /></div>
                <div className="py-5 bg-light"><WhatsIncluded /></div>
                <div className="py-5"><WhosItFor /></div>
                <div className="py-5 bg-light"><WhosItNotFor /></div> */}
                {/* <div className="py-5"><Price /></div> */}
                <div className="py-5 bg-secondary">
                    <div className="d-flex justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <h2 className="text-center text-white">
                                Coding bootcamp level training for 2% of the cost!
                            </h2>
                            <div className="alert alert-danger">
                                <p>
                                    <strong>Note:</strong> We cover the same topics taught at a coding bootcamp, plus some more, at 2% of the sticker price. I don't have the fancy offices, and expensive staff so I pass the savings to you!
                                </p>
                                <p className="mb-0"><strong>Plus</strong> I am invested in your success, since your success means more success for iLoveCoding</p>
                            </div>
                        </div>
                    </div>
                    <Price />
                </div>
                <div className="py-5 bg-dark"><Guarantee /></div>
                <div className="py-5"><FAQs /></div>
                <div className="py-5 bg-secondary"><Price /></div>
            </div>
        )
    }
}

export default Pricing