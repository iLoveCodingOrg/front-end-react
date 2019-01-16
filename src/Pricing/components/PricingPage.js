import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import Header from './Header'
import Price from './Price'
import Guarantee from './Guarantee'
import FAQs from './FAQs'

import Testimonials from './Testimonials'

class Pricing extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="d-flex flex-column">
                <Helmet>
                    <title>Pricing - iLoveCoding</title>
                </Helmet>
                
                BIG GOAL YOU WILL ACHIEVE
                Or
                Big thing about iLoveCoding

                Get this without that.

                Price
                What you get
                Compare Price
                Guarantee
                Common questions

                <p className="alert alert-warning lead text-center">
                    <strong>Let’s be honest</strong> - Coding bootcamps are charging an arm and a leg - We give you <span className="strike">same</span> <Link to="/questions/how-better" className="u">better training</Link> for 2% of the cost.
                </p>
                <div className="pt-5"><Header /></div>
                <div className="pt-3"><Price /></div>
                <div className="py-5 bg-gray-200"><Testimonials /></div>
                <div className="py-5"><Guarantee /></div>
                <div className="py-5 bg-gray-200"><FAQs /></div>
            </div>
        )
    }
}

export default Pricing