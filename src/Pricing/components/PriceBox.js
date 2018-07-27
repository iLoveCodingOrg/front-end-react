import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { ProDetails, PlusDetails } from '../index'

class PriceBox extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { name, link, price, terms, planType } = this.props
        return (
            <div style={{ maxWidth: '500px', minWidth: '320px' }}
                className="card mx-2 mb-4 mb-md-0">
                <div className="card-body align-self-center">
                    <div className="h4 my-2 text-center font-weight-light">
                        {name}
                    </div>
                    <h1 className="headline card-title pricing-card-title text-center mb-2">
                        ${price}
                    </h1>

                    <div className="text-muted text-center">{terms}</div>

                    <Link to={link} className="mt-3 btn btn-block btn-lg text-center btn-outline-primary">Get Instant Access</Link>

                    { planType === 'pro'? <ProDetails />: null}
                    { planType === 'plus'? <PlusDetails />: null}
                    
                    <Link to={link} className="btn btn-block btn-lg text-center btn-primary">Get Instant Access</Link>
                </div>
            </div>
        )
    }
}

PriceBox.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    planType: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    terms: PropTypes.string.isRequired,
}

export default PriceBox