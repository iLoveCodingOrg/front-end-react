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
    WhatYouGet
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
        return(
            <div className="bg-light">
            <div className="container">
                {
                    (this.props.isLoading)? <Loading />
                    :
                    (this.props.error) ? <ErrorBox />
                    :
                    <div>
                        <Helmet><title>'title'</title></Helmet>

                        <Header />
                        <div className="row">
                            <div className="col-md-8 order-md-1">
                                <UserForm />
                                <hr className="mb-4" />
                                <CreditCard />
                                <hr className="mb-4" />
                                <button className="btn btn-primary btn-lg btn-block" type="submit">
                                    Continue to checkout
                                </button>
                            </div>
                            <div className="col-md-4 order-md-2 mb-4">
                                <WhatYouGet />
                                <Testimonials />
                            </div>
                        </div>
                        <Footer />

                        {get(this.props.product, 'name')}
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
