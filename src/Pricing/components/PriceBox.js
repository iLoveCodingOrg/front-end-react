import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { ProDetails, PlusDetails, PremiumDetails } from '../index'

class PriceBox extends React.Component {
    constructor(props){
        super(props)
    }

    renderPrice(number){
        const wholeNumber = Math.floor(number)
        const decimal = number.toString().split('.')[1] || '00'
        return (
            <div>
                {wholeNumber}
                <sup className="decimal h2">.{decimal}</sup>
            </div>
        )
    }
    render(){
        const { name, link, price, terms, planType, isPopular } = this.props
        return (
            <div style={{ maxWidth: '500px', minWidth: '320px' }}
                className="card mx-2 mb-4 mb-md-0">
                <div className="card-body align-self-center">
                    { 
                        isPopular? 
                        <h5 class="position-absolute" style={{ top: "5px", right: "5px" }}>
                            <span class="badge bg-gray-300">Most Popular</span>
                        </h5>
                        : null
                    }
                    <div className="h4 my-2 text-center font-weight-light">
                        {name}
                    </div>
                    <h1 className="headline card-title pricing-card-title text-center mb-2">
                        {this.renderPrice(price)}
                    </h1>

                    <div className="text-muted text-center">{terms}</div>

                    <Link to={link} className="mt-3 btn btn-block btn-lg text-center btn-outline-primary">Get Instant Access</Link>

                    { planType === 'pro'? <ProDetails />: null}
                    { planType === 'plus'? <PlusDetails />: null}
                    { planType === 'premium'? <PremiumDetails />: null}
                    
                    <Link to={link} className="btn btn-block btn-lg text-center btn-primary">Get Instant Access</Link>
                </div>
            </div>
        )
    }
}

PriceBox.propTypes = {
    isPopular: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    planType: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    terms: PropTypes.string.isRequired,
}

export default PriceBox