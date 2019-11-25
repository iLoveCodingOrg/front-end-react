import React, { useEffect, useState, useRef } from 'react'
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
import UserForm from './UserFormFunc'
import WhatYouGet from './WhatYouGet'
import Due from './Due'
import Testimonials from './Testimonials'

import { CountDown, isOfferValidSelector } from '../../Offer'

function Checkout({
  match,
  getProduct,
  buyError,
  isOfferValid,
  product,
  isLoading,
  error,
  logout,
  isLoggedIn,
  history,
  buy,
  firstName,
  lastName,
  email,
  timeFrom,
  timeLeft,
}) {
  const braintreeInstance = useRef()
  const recaptchaElm = useRef()

  const [recaptchaToken, setRecaptchaToken] = useState('')
  const [userInfo, setUserInfo] = useState({
    firstName: { value: firstName },
    lastName: { value: lastName },
    email: { value: email },
  })

  const setBraintreeInstance = (instance) => {
    braintreeInstance.current = instance
  }

  const handleBuy = async (event) => {
    event.preventDefault()

    const { slug } = match.params
    const { nonce } = await braintreeInstance.requestPaymentMethod()

    buy(slug, {
      firstName: userInfo.firstName.value,
      lastName: userInfo.lastName.value,
      email: userInfo.email.value,
      nonce,
      coupon: isOfferValid ? '30percent' : undefined,
      recaptchaToken,
    })
      .then(({ isSubscribed }) => {
        if (isSubscribed) {
          history.push('/pages/welcome')
        } else {
          braintreeInstance.current.clearSelectedPaymentMethod()
          if (recaptchaElm.current) {
            recaptchaElm.current.reset()
            setRecaptchaToken('')
          }
        }
      })
  }

  useEffect(() => {
    const { slug } = match.params

    getProduct(slug)
  }, [match])


  const renderBuyError = () => {
    if (buyError) {
      return (
        <div className="card card-danger">
          {buyError}
        </div>
      )
    }
    return null
  }

  const getPrice = () => {
    if (isOfferValid) {
      return roundTwoDecimal(parseInt(get(product, 'price')) * 0.7)
    }
    return get(product, 'price')


    function roundTwoDecimal(number) {
      return (Math.round(number * 100) / 100).toFixed(2)
    }
  }

  const setRecaptchaElem = (recaptchaElm) => {
    recaptchaElm.current = recaptchaElm
  }

  const price = getPrice()
  const billingDuration = get(product, 'billingDuration')
  const billingCycles = get(product, 'billingCycles')
  const productName = get(product, 'name')
  const productDesc = get(product, 'description')

  return (
    <div>
      {timeFrom && timeLeft && (
      <CountDown
        title="30% Off expires in:"
        timeFrom={timeFrom}
        timeLeft={timeLeft}
      />
      )}
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
          <div className="flex">
            <div className="flex-3 p-0">
              <form
                onSubmit={handleBuy}
                className="card bg-gray-lightest p-2"
              >
                {renderBuyError()}
                <UserForm
                  logout={logout}
                  isDisabled={isLoggedIn}
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                />

                <hr className="mb-2" />
                <CreditCard setBraintreeInstance={setBraintreeInstance} />
                <Due
                  price={price}
                  billingDuration={billingDuration}
                  billingCycles={billingCycles}
                />
                <Recaptcha2
                  onLoadCb={setRecaptchaElem}
                  verifyTokenCb={setRecaptchaToken}
                />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Complete My Purchase
                </button>
                <div className="d-block t-center small mt--25">
                  Payment powered by Braintree (a PayPal company) - 🔒 Your information is secure
                </div>
              </form>
              <div className="flex space-around m-1">
                <p className="mr--5">
                  <span aria-label="thunder" role="img">⚡️</span>
                  Cancel Anytime.
                </p>
                <p>
                  <span aria-label="shield" role="img">🛡️</span>
                  7-Day Full Refund Policy.
                </p>
              </div>
            </div>
            <div className="flex-1 mb-2 px-2">
              <WhatYouGet />
              <Testimonials />
            </div>
          </div>
          <Footer />
        </div>
        )}
      </div>
    </div>
  )
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
    isOfferValid: isOfferValidSelector(state),
    timeFrom: state.offer.timeFrom,
    timeLeft: state.offer.timeLeft,
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
