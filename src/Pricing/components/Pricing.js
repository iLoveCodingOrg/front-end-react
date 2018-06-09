import React from 'react'
import { Helmet } from 'react-helmet'

import {
    Header,
    Testimonials,
    Price
} from '../'

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
                <div className=""><Header /></div>
                <div className="bg-light"><Testimonials /></div>
                <div className=""><Price /></div>
            </div>
        )
    }
}

export default Pricing