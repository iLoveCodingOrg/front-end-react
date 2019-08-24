import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import get from 'lodash/get'

import { Recaptcha2 } from '../../Recaptcha'
import { isLoggedIn } from '../../_user/selectors'
import Loading from '../../Loading'
import ErrorBox from '../../ErrorBox'
import { actions as userActions } from '../../_user'
import { getProductBySlug, buy } from '../actions'

import CreditCard from './CreditCard'
import Header from './Header'
import Footer from './Footer'
import UserForm from './UserForm'
import WhatYouGet from './WhatYouGet'
import Due from './Due'
import Testimonials from './Testimonials'

import { CountDown, selectors } from '../../Offer'

class Checkout extends React.Component {
  braintreeInstance;

  constructor(props) {
    super(props)

    this.state = {
      recaptchaToken: '',
      userInfo: {
        firstName: { value: props.firstName },
        lastName: { value: props.lastName },
        email: { value: props.email },
      },
    }
    this.setUserInfo = this.setUserInfo.bind(this)
    this.setBraintreeInstance = this.setBraintreeInstance.bind(this)
    this.buy = this.buy.bind(this)
    this.renderBuyError = this.renderBuyError.bind(this)
    this.getPrice = this.getPrice.bind(this)
    this.verifyRecaptchaCb = this.verifyRecaptchaCb.bind(this)
    this.setRecaptchaElem = this.setRecaptchaElem.bind(this)
  }

  setBraintreeInstance(instance) {
    this.braintreeInstance = instance
  }

  async buy(event) {
    event.preventDefault()

    const { slug } = this.props.match.params
    const { nonce } = await this.braintreeInstance.requestPaymentMethod()

    this.props.buy(slug, {
      firstName: this.state.userInfo.firstName.value,
      lastName: this.state.userInfo.lastName.value,
      email: this.state.userInfo.email.value,
      nonce,
      coupon: this.props.isOfferValid ? '30percent' : undefined,
      recaptchaToken: this.state.recaptchaToken,
    })
      .then(({ isSubscribed }) => {
        if (isSubscribed) {
          this.props.history.push('/pages/welcome')
        } else {
          this.braintreeInstance.clearSelectedPaymentMethod()
          if (this.recaptchaElm) {
            this.recaptchaElm.reset()
            this.setState({ recaptchaToken: '' })
          }
        }
      })
  }

  setUserInfo(userInfo) {
    this.setState({
      userInfo,
    })
  }

  componentDidUpdate(prevProps) {
    const { slug } = this.props.match.params

    if (prevProps.match.params.slug !== slug) {
      this.props.getProduct(slug)
    }
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.slug)
  }

  renderBuyError() {
    const { buyError } = this.props
    if (buyError) {
      return (
        <div className="alert alert-danger">
          {buyError}
        </div>
      )
    }
    return null
  }

  getPrice() {
    const { isOfferValid, product } = this.props
    if (isOfferValid) {
      return roundTwoDecimal(parseInt(get(product, 'price')) * 0.7)
    }
    return get(product, 'price')


    function roundTwoDecimal(number) {
      return (Math.round(number * 100) / 100).toFixed(2)
    }
  }

  verifyRecaptchaCb(recaptchaToken) {
    this.setState({ recaptchaToken })
  }

  setRecaptchaElem(recaptchaElm) {
    this.recaptchaElm = recaptchaElm
  }

  render() {
    const {
      product, isLoading, error, logout, isLoggedIn,
    } = this.props
    const price = this.getPrice()
    const billingDuration = get(product, 'billingDuration')
    const billingCycles = get(product, 'billingCycles')
    const productName = get(product, 'name')
    const productDesc = get(product, 'description')
    return (
      <div>
        <CountDown title="30% Off expires in:" />
        <div className="container">
          { isLoading && <Loading /> }
          { !isLoading && error && <ErrorBox /> }
          { !isLoading && !error && (
            <div>
              <Helmet title={`${productName} - iLoveCoding`} />
              <Header
                productName={productName}
                productDesc={productDesc}
              />
              <div className="row">
                <div className="p-0 col-md-8 order-md-1">
                  <form
                    onSubmit={this.buy}
                    className="bg-light border p-2"
                  >
                    {this.renderBuyError()}
                    <UserForm
                      logout={logout}
                      isDisabled={isLoggedIn}
                      userInfo={this.state.userInfo}
                      setUserInfo={this.setUserInfo}
                    />

                    <hr className="mb-2" />
                    <CreditCard setBraintreeInstance={this.setBraintreeInstance} />
                    <Due
                      price={price}
                      billingDuration={billingDuration}
                      billingCycles={billingCycles}
                    />
                    <Recaptcha2
                      onLoadCb={this.setRecaptchaElem}
                      verifyTokenCb={this.verifyRecaptchaCb}
                    />
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Complete My Purchase
                    </button>
                    <div className="d-block text-center small mt--25">
                      Payment powered by Braintree (a PayPal company) - 🔒 Your information is secure
                    </div>
                  </form>
                  <div className="text-center mt-1 mb-3">
                    ⚡️ Cancel Anytime.
                    &nbsp; &nbsp;
                    🛡️ 7-Day Full Refund Policy.
                  </div>
                </div>
                <div className="col-md-4 order-md-2 mb-2 px-2">
                  <WhatYouGet />
                  <Testimonials />
                </div>
              </div>
              <Footer />
            </div>
          )
          }
        </div>
      </div>
    )
  }
}

Checkout.propTypes = {
  buyError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isLoading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  const isLoggedInCache = isLoggedIn(state)
  return {
    isLoggedIn: isLoggedInCache,
    firstName: (isLoggedInCache) ? state.user.firstName : '',
    lastName: (isLoggedInCache) ? state.user.lastName : '',
    email: (isLoggedInCache) ? state.user.email : '',
    error: state.checkout.error,
    isLoading: state.checkout.isLoading,
    product: state.checkout.product,
    buyError: state.checkout.buy.error,
    isOfferValid: selectors.isOfferValid(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(userActions.logout())
      .then(({ isSuccess }) => {
        if (isSuccess) {
          window.location.reload()
        }
      }),
    getProduct: (slug) => {
      dispatch(getProductBySlug(slug))
    },
    buy: (slug, payload) => dispatch(buy(slug, payload)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Checkout))
