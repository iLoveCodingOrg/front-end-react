import React from 'react'
import { Helmet } from 'react-helmet'

import { Offer, CountDown } from '../../Offer'
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


class Pricing extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="d-flex flex-column">
                <Helmet>
                    <title>Pricing | iLoveCoding</title>
                </Helmet>
                <div className="pt-5"><Header /></div>
                <div className="pt-3"><Price /></div>
                <div className="py-5 bg-gray-200"><Testimonials /></div>
                <div className="py-5"><FAQs /></div>
                <div className="py-5"><Guarantee /></div>
            </div>
        )
    }
}

export default Pricing