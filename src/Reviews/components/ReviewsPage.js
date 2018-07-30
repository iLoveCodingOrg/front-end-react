import React from 'react'
import { Helmet } from 'react-helmet'

import {
    Reviews,
} from '../'


class ReviewsPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="d-flex flex-column">
                <Helmet><title>Real Results | iLoveCoding</title></Helmet>
                <div class="container text-center">
                    <h1>Real Results</h1>
                    <p className="lead">
                        I asked my students what changed for the better since learning from iLoveCoding. Here's what they had to say:
                    </p>
                </div>
                <div className="bg-gray-200 p-4">
                    <div className="container">
                        <Reviews />
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewsPage