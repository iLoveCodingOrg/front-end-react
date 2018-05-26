import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

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

    render(){
        const productName = get(this.props.product, 'name')
        return(
            <div className="">
            <div className="container">
                {
                    (this.props.isLoading)? <Loading />
                    :
                    (this.props.error) ? <ErrorBox />
                    :
                    <div>
                        <Helmet><title>'title'</title></Helmet>

                        <Header productName={productName} />
                        <div className="row">
                            <div className="col-md-8 order-md-1 bg-light border p-4">
                                <UserForm />
                                <hr className="mb-4" />
                                <CreditCard />
                                <Due />
                                <button className="btn btn-primary btn-lg btn-block" type="submit">
                                    Complete My Purchase
                                </button>
                                <small>Payment powered by Braintree (a Paypal company) - AES-256bit encryption - Your information is secure</small>
                            </div>
                            <div className="col-md-4 order-md-2 mb-4 px-4">
                                <WhatYouGet />
                                <Testimonials />
                            </div>
                        </div>
                        <Footer />
                    </div>
                }
            </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        error: state.checkout.error,
        isLoading: state.checkout.isLoading,
        product: state.checkout.product
    }
}

function mapDispatchToProps(dispatch){
    return {
        getProduct: (slug)=>{
            dispatch(actions.getProductBySlug(slug))
        },
        buy: ()=>{
            dispatch(actions.buy())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Checkout)
