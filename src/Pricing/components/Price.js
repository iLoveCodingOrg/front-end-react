import React from 'react'
import { connect } from 'react-redux'

import { selectors } from '../../Offer'
import {
    Switch,
    PriceBox,
} from '../'

const dataOriginal = {
    pro: {
        monthly: {
            planType: 'pro',
            name: 'Pro Monthly',
            price: 37,
            terms: 'per month, paid monthly',
            link: '/checkout/ilc-fs-599',
        },
        yearly: {
            planType: 'pro',
            name: 'Pro Yearly',
            price: 24.79,
            terms: 'per month, paid yearly',
            link: '/checkout/ilc-fs-150-4pay',
        }
    },
    plus: {
        monthly: {
            planType: 'plus',
            name: 'Plus Monthly',
            price: 74,
            terms: 'per month, paid monthly',
            link: '/checkout/ilc-fs-599',
        },
        yearly: {
            planType: 'plus',
            name: 'Plus Yearly',
            price: 49.58,
            terms: 'per month, paid yearly',
            link: '/checkout/ilc-fs-150-4pay',
        }
    }
}

const data30 = {
    ...dataOriginal
}

class Price extends React.Component {
    constructor(props){
        super(props)

        this.handleSwitch = this.handleSwitch.bind(this)

        this.state = {
            selected: 'yearly'
        }
    }
    handleSwitch(event){
        this.setState({
            selected: event.target.value
        })
    }
    renderPriceBox({name, price, terms, link, planType}){
        return (
            <PriceBox
                name={name}
                price={price}
                terms={terms}
                link={link}
                planType={planType}
            />
        )
    }
    render(){
        let data
        if(this.props.isOfferValid){
            data = data30
        } else{
            data = dataOriginal
        }

        return (
            <section className="d-flex justify-content-center">
                <div className="
                    d-flex flex-column align-items-center">
                    <Switch
                        style={{ maxWidth: '400px', minWidth: '320px' }}
                        onChange={this.handleSwitch}
                        selected={this.state.selected}
                    />
                    <div className="d-flex flex-wrap justify-content-center">
                        {this.renderPriceBox(data.pro[this.state.selected])}
                        {this.renderPriceBox(data.plus[this.state.selected])}

                    </div>
                    <div className="d-flex flex-wrap my-4">
                        <p className="m-2">👌 30-day unconditional money-back guarantee!</p>
                        <p className="m-2">🔒 Secure Checkout</p>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {
        isOfferValid: selectors.isOfferValid(state)
    }
}

export default connect(mapStateToProps)(Price)