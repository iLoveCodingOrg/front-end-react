import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ProDetails from './ProDetails'
// import PlusDetails from './PlusDetails'
// import PremiumDetails from './PremiumDetails'

class PriceBox extends React.Component {
    constructor(props){
        super(props)
        this.renderCTA = this.renderCTA.bind(this)
    }

    renderPrice(number){
        const wholeNumber = Math.floor(number)
        // const decimal = number.toFixed(2).toString().split('.')[1] || '00'
        return (
            <div>
                <sup className="h3 ">$</sup>
                {wholeNumber}
                {/* <sup className="decimal h2">.{decimal}</sup> */}
            </div>
        )
    }

    renderCTA(){
        const { isClosed, link } = this.props
        if(isClosed){
            return <Link to={link} className="btn btn-block btn-lg text-center btn-secondary disabled">Closed</Link>
        }else{
            return <Link to={link} className="btn btn-block btn-lg text-center btn-primary">Get Instant Access</Link>
        }
    }

    render(){
        const {
            name,
            desc,
            price,
            terms,
            terms2,
            planType,
            isPopular,
        } = this.props
        return (
            <div style={{ maxWidth: '500px', minWidth: '320px' }}
                className="card mx-2 mb-4 mb-md-0">
                <div className="card-body align-self-center p-4">
                    { 
                        isPopular? 
                        <h5 className="position-absolute" style={{ top: "5px", right: "5px" }}>
                            <span className="badge badge-warning">Most Popular</span>
                        </h5>
                        : null
                    }
                    <div className="my-2 text-center font-weight-light">
                        <span className="h4">{name}</span>
                        <br/>
                        <span className="lead em">{desc}</span>
                    </div>
                    <h1 className="headline card-title pricing-card-title text-center mb-0">
                        {this.renderPrice(price)}
                    </h1>

                    <div className="text-muted text-center mb-3">
                        {terms}
                        <br/>
                        {terms2}
                    </div>

                    {/* {this.renderCTA()} */}

                    { planType === 'pro'? <ProDetails />: null}
                    {/* { planType === 'plus'? <PlusDetails />: null} */}
                    {/* { planType === 'premium'? <PremiumDetails />: null} */}

                    {this.renderCTA()}

                </div>
            </div>
        )
    }
}

PriceBox.propTypes = {
    isClosed: PropTypes.bool.isRequired,
    isPopular: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    planType: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    terms: PropTypes.string.isRequired,
}

export default PriceBox