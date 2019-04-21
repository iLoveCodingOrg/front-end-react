import React from 'react'
import { Helmet } from 'react-helmet'

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
                    Sorry! Currently iLoveCoding Training is closed. Please get on the waitlist, and we'll keep you posted when the training re-opens.
                </p>
            </div>
        )
    }
}

export default Pricing