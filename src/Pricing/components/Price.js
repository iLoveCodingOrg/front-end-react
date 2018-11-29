import React from 'react'
import { connect } from 'react-redux'

import { selectors } from '../../Offer'
import PriceBox from './PriceBox'

const dataOriginal = {
    pro: {
        monthly: {
            planType: 'pro',
            name: 'Pro - Monthly',
            // desc: 'Self-Paced Structured Learning',
            price: 37,
            terms: 'per month/paid monthly',
            terms2: '(Its like paying $1.23/day)',
            link: '/checkout/ilc-pro-37m',
        },
        yearly: {
            planType: 'pro',
            name: 'Pro - Yearly',
            // desc: 'Self-Paced Structured Learning',
            price: 370,
            terms: '(Save 16.67%) per year/paid yearly',
            terms2: '(Its like paying $1.01/day)',
            link: '/checkout/ilc-pro-370y',
            isPopular: true
        }
    },
    // plus: {
    //     monthly: {
    //         planType: 'plus',
    //         name: 'Plus Monthly',
    //         price: 74,
    //         terms: 'per month, paid monthly',
    //         link: '/checkout/ilc-plus-74m',
    //         isPopular: true
    //     },
    //     yearly: {
    //         planType: 'plus',
    //         name: 'Plus Yearly',
    //         price: 49.58,
    //         terms: 'per month, paid yearly',
    //         link: '/checkout/ilc-plus-594y',
    //         isPopular: true
    //     }
    // },
    // premium: {
    //     monthly: {
    //         planType: 'premium',
    //         name: 'Premium',
    //         desc: 'Learn with 1:1 Mentor Support',
    //         price: 370,
    //         terms: 'per month, paid monthly',
    //         link: '/checkout/ilc-premium-299m',
    //         isClosed: true
    //     },
    //     yearly: {
    //         planType: 'premium',
    //         name: 'Premium',
    //         desc: 'Learn with 1:1 Mentor Support',
    //         price: 247.90,
    //         terms: 'per month, paid yearly',
    //         terms2: '($2974.80/year - after 33% discount)',
    //         link: '/checkout/ilc-premium-2403y',
    //         isClosed: true
    //     }
    // }
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
    renderPriceBox({
        name,
        desc,
        price,
        terms,
        terms2,
        link,
        planType,
        isPopular = false,
        isClosed = false
    }){
        return (
            <PriceBox
                name={name}
                desc={desc}
                price={price}
                terms={terms}
                terms2={terms2}
                link={link}
                planType={planType}
                isPopular={isPopular}
                isClosed={isClosed}
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
                <div className="d-flex flex-column align-items-center">
                    {/* <div className="position-relative mb-3 mx-sm-auto mr-auto">
                        <Switch
                            style={{ maxWidth: '400px', minWidth: '320px' }}
                            onChange={this.handleSwitch}
                            selected={this.state.selected}
                        />
                        {
                            this.state.selected === 'yearly'?
                            <h5 className="position-absolute" style={{ right: "-127px", bottom: 0 }}>
                                <div className="badge badge-orange"><span className="oi oi-arrow-thick-left" /> 4 Months Free</div>
                            </h5>
                            : null
                        }
                    </div> */}
                    <div className="d-flex flex-wrap justify-content-center">
                        {this.renderPriceBox(data.pro['yearly'])}
                        {this.renderPriceBox(data.pro['monthly'])}
                    </div>
                    <div className="d-flex flex-wrap my-4">
                        <p className="m-2">⚡️ Cancel Anytime.</p>
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