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

class Pricing extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="pricing-page" className="d-flex flex-column">
                <Helmet>
                    <title>Pricing - iLoveCoding</title>
                </Helmet>

                <p className="alert alert-warning lead text-center">
                    <strong>Let’s be honest</strong> - Coding bootcamps are charging an arm and a leg - We give you <span className="strike">same</span> <Link to="/q/how-better" className="u">better training</Link> for 2% of the cost.
                </p>
                <div className="py-5"><Header /></div>
                <div id="payment" className="py-5 bg-gray-200">
                    <Price />
                </div>
                <div className="pt-5"><Testimonials itemNum="1"/></div>
                <div className="pb-6 text-center">
                    <a className="mt-4 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
                </div>

                <div className="py-7 bg-gray-200"><WhatYouGet /></div>
                <div className="pt-5"><Testimonials itemNum="0"/></div>
                <div className="text-center">
                    <a className="mt-4 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
                </div>

                <div className="py-7"><WhatDifferent /></div>
                <div className=""><Testimonials itemNum="3"/></div>
                
                <div className="pb-5 text-center">
                    <a className="mt-4 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
                </div>
                
                <div className="py-7"><WhatBuild /></div>
                <div className="py-7"><WhatLearn /></div>
                <div className="py-7"><WhoFor /></div>
                <div className=""><Testimonials itemNum="4"/></div>
                <div className="pb-5 text-center">
                    <a className="mt-4 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
                </div>
                <div className="py-7 bg-gray-100"><Guarantee /></div>
                <div className="py-7 bg-gray-200">
                    <div className="col-md-10 col-lg-8 mr-auto ml-auto">
                        <AboutAziz />
                    </div>
                </div>
                <div className="pt-5"><Testimonials itemNum="5"/></div>
                <div className="text-center">
                    <a className="mt-4 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
                </div>
                <div className="pt-7"><FAQs /></div>
                <div className="pb-7 text-center">
                    <a className="mt-4 btn btn-lg btn-primary" href="#payment">Buy risk-free</a>
                </div>
            </div>
        )
    }
}

export default Pricing