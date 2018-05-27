import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'

import { get } from 'lodash'

import Loading from '../../Loading'
import ErrorBox from '../../ErrorBox'
import {
    actions,
    CreditCard,
    Footer,
    Header,
    Testimonials,
    UserForm,
    WhatYouGet,
    Due
} from '../'

class Checkout extends React.Component{
    constructor(props){
        super(props)

        this.setBraintreeInstance = this.setBraintreeInstance.bind(this)
        this.buy = this.buy.bind(this)
        this.renderBuyError = this.renderBuyError.bind(this)
    }
    braintreeInstance;
    
    setBraintreeInstance(instance){
        console.log('instance', instance)
        this.braintreeInstance = instance
    }
    
    async buy(event){
        event.preventDefault()

        const { slug } = this.props.match.params        
        const { nonce } = await this.braintreeInstance.requestPaymentMethod()

        this.props.buy(slug, {
            firstName: 'f',
            lastName: 'l',
            email: 'fakeilc12@dayrep.com',
            nonce
        })
            .then(({ isSubscribed })=>{
                if(isSubscribed){
                    this.props.history.push('/')
                }
            })
    }

    componentWillReceiveProps(nextProps){
        const { slug } = this.props.match.params
        
        if(nextProps.match.params.slug !== slug){
            this.props.getProduct(nextProps.match.params.slug)
        }
    }

    componentWillMount(){
      this.props.getProduct(this.props.match.params.slug)
    }

    renderBuyError(){
        const { buyError } = this.props
        if(buyError){
            return (
                <div className="alert alert-danger">
                    {this.props.buyError}
                </div>
            )
        }
        return null
    }

    render(){
        const productName = get(this.props.product, 'name')
        return(
            <div className="container">
                {
                    (this.props.isLoading)? <Loading />
                    :
                    (this.props.error) ? <ErrorBox />
                    :
                    <div>
                        <Helmet><title>{productName}</title></Helmet>

                        <Header productName={productName} />
                        <div className="row">
                            <form
                                onSubmit={this.buy}
                                className="col-md-8 order-md-1 bg-light border p-4">
                                {this.renderBuyError()}
                                {/* <UserForm /> */}

                                <hr className="mb-4" />
                                <CreditCard setBraintreeInstance={this.setBraintreeInstance} />
                                <Due />
                                <button
                                    className="btn btn-primary btn-lg btn-block"
                                    type="submit"
                                >
                                    Complete My Purchase
                                </button>
                                <small>Payment powered by Braintree (a Paypal company) - AES-256bit encryption - Your information is secure</small>
                            </form>
                            <div className="col-md-4 order-md-2 mb-4 px-4">
                                <WhatYouGet />
                                <Testimonials />
                            </div>
                        </div>
                        <Footer />
                    </div>
                }
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        error: state.checkout.error,
        isLoading: state.checkout.isLoading,
        product: state.checkout.product,
        buyError: state.checkout.buy.error
    }
}

function mapDispatchToProps(dispatch){
    return {
        getProduct: (slug)=>{
            dispatch(actions.getProductBySlug(slug))
        },
        buy: (slug, payload)=>{
            return dispatch(actions.buy(slug, payload))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(withRouter(Checkout))
