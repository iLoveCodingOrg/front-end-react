import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { get } from 'lodash'

import { isLoggedIn } from '../../_user/selectors'
import Loading from '../../Loading'
import ErrorBox from '../../ErrorBox'
import { actions as userActions } from '../../_user'
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

        this.state = {
            userInfo: {
                firstName: { value: props.firstName || '' },
                lastName: { value: props.lastName || '' },
                email: { value: props.email || '' }
            }
        }
        this.setUserInfo = this.setUserInfo.bind(this)
        this.setBraintreeInstance = this.setBraintreeInstance.bind(this)
        this.buy = this.buy.bind(this)
        this.renderBuyError = this.renderBuyError.bind(this)
    }
    braintreeInstance;
    
    setBraintreeInstance(instance){
        this.braintreeInstance = instance
    }
    
    async buy(event){
        event.preventDefault()

        const { slug } = this.props.match.params
        const { nonce } = await this.braintreeInstance.requestPaymentMethod()

        this.props.buy(slug, {
            firstName: this.state.userInfo.firstName.value,
            lastName: this.state.userInfo.lastName.value,
            email: this.state.userInfo.email.value,
            nonce
        })
            .then(({ isSubscribed })=>{
                if(isSubscribed){
                    this.props.history.push('/pages/welcome')
                }
            })
    }

    setUserInfo(userInfo){
        this.setState({
            userInfo
        })
    }

    componentWillReceiveProps(nextProps){
        const { slug } = this.props.match.params
        
        if(nextProps.match.params.slug !== slug){
            this.props.getProduct(nextProps.match.params.slug)
        }

        if(nextProps.firstName !== this.props.firstName){
            this.setUserInfo({
                firstName: { value: nextProps.firstName },
                lastName: { value: nextProps.lastName },
                email: { value: nextProps.email }
            })
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
        const price = get(this.props.product, 'price')
        const billingDuration = get(this.props.product, 'billingDuration')
        const billingCycles = get(this.props.product, 'billingCycles')
        const productName = get(this.props.product, 'name')
        const productDesc = get(this.props.product, 'description')
        return(
            <div className="container">
                {
                    (this.props.isLoading)? <Loading />
                    :
                    (this.props.error) ? <ErrorBox />
                    :
                    <div>
                        <Helmet><title>{productName}</title></Helmet>

                        <Header
                            productName={productName}
                            productDesc={productDesc}
                        />
                        <div className="row">
                            <div className="p-0 col-md-8 order-md-1">
                                <form
                                    onSubmit={this.buy}
                                    className="bg-light border p-4">
                                    {this.renderBuyError()}
                                    <UserForm
                                        logout={this.props.logout}
                                        isDisabled={this.props.isLoggedIn}
                                        userInfo={this.state.userInfo}
                                        setUserInfo={this.setUserInfo}
                                        />

                                    <hr className="mb-4" />
                                    <CreditCard setBraintreeInstance={this.setBraintreeInstance} />
                                    <Due
                                        price={price}
                                        billingDuration={billingDuration}
                                        billingCycles={billingCycles}
                                        />
                                    <button
                                        className="btn btn-primary btn-lg btn-block"
                                        type="submit"
                                        >
                                        Complete My Purchase
                                    </button>
                                    <div className="d-block text-center small mt-1">
                                        Payment powered by Braintree (a Paypal company) - Your information is secure
                                    </div>
                                </form>
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
        )
    }
}

Checkout.propTypes = {
    buyError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    isLoading: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    product: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        isLoggedIn: isLoggedIn(state),
        error: state.checkout.error,
        isLoading: state.checkout.isLoading,
        product: state.checkout.product,
        buyError: state.checkout.buy.error,
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        email: state.user.email
    }
}

function mapDispatchToProps(dispatch){
    return {
        logout: ()=>{
            return dispatch(userActions.logout())
            .then(({ isSuccess })=>{
                if(isSuccess){
                    window.location.reload()
                }
            })
        },
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
