import './braintree-hosted-fields.css'
import React, { useRef, useEffect } from 'react'
import { Braintree, HostedField } from 'react-braintree-fields'
import { connect } from 'react-redux'
import { getBraintreeClientToken, updateBraintreeCreditCard } from '../Checkout/actions'
import Loading from '../Loading'
import ErrorBox from '../ErrorBox'

function CreditCardForm({
  error, isLoading, clientToken, getClientToken, updateCreditCard, subscriptionId, onSuccessCb,
}) {
  useEffect(() => {
    getClientToken()
  }, [])

  const getCreditCardObj = useRef()

  const handleFormClick = async () => {
    // 1. Grab the nonce
    // 2. Make call with the new API
    const token = await getCreditCardObj.current()
    console.log(token)

    const { isSuccess } = await updateCreditCard(subscriptionId, token.nonce)
    if (isSuccess) {
      onSuccessCb()
    }
  }

  return (
    <>
      { isLoading && <Loading /> }
      { !isLoading && error && <ErrorBox /> }
      { !isLoading && !error && (
      <Braintree
        getTokenRef={(ref) => { getCreditCardObj.current = ref }}
        authorization={clientToken}
        styles={{
          ':focus': {
            color: 'black',
          },
        }}
      >
        <div className="flex">
          <div className="w-100 mb-2">
            <label
              htmlFor="number"
            >
              Card Number
            </label>
            <HostedField
              className="form-control"
              type="number"
              placeholder="4111 1111 1111 1111"
              prefill="4111 1111 1111 1112"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-100 mb-2 mr-1">
            <label
              htmlFor="expirationDate"
            >
            Expiration Date
            </label>
            <HostedField
              className="form-control"
              type="expirationDate"
              placeholder="MM/YYYY"
              prefill="0220"
            />
          </div>
          <div className="w-100 mb-2 mr-1">
            <label
              htmlFor="cvv"
            >
            CVV
            </label>
            <HostedField
              className="form-control"
              type="cvv"
              placeholder="123"
              prefill="123"
            />
          </div>
          <div className="w-100 mb-2">
            <label
              htmlFor="postalCode"
            >
            Zip Code / Postal Code
            </label>
            <HostedField
              className="form-control"
              type="postalCode"
              placeholder="11111"
              prefill="123456"
            />
          </div>
        </div>
        <button
          className="btn btn-primary w-100"
          type="button"
          onClick={handleFormClick}
        >
            Update Card
        </button>
      </Braintree>
      )}
    </>
  )
}

function mapStateToProps(state) {
  return {
    error: state.checkout.braintree.error,
    isLoading: state.checkout.braintree.isLoading,
    clientToken: state.checkout.braintree.clientToken,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getClientToken: () => {
      dispatch(getBraintreeClientToken())
    },
    updateCreditCard: (subscriptionId, nonce) => dispatch(updateBraintreeCreditCard(subscriptionId, nonce)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreditCardForm)
