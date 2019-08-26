import './braintree-hosted-fields.css'
import React, { useRef, useEffect, useState } from 'react'
import { Braintree, HostedField } from 'react-braintree-fields'
import { connect } from 'react-redux'
import { getBraintreeClientToken, updateBraintreeCreditCard } from '../Checkout/actions'
import Loading from '../Loading'
import ErrorBox from '../ErrorBox'

function CreditCardForm({
  error, isLoading, clientToken, getClientToken, updateCreditCard, subscriptionId, onSuccessCb, isLoadingUpdateCard,
}) {
  const [braintreeNonceError, setBraintreeNonceError] = useState(null)
  const [isNumberValid, setIsNumberValid] = useState(true)
  const [isExpirationValid, setIsExpirationValid] = useState(true)
  const [isCvvValid, setIsCvvValid] = useState(true)
  const [isPostalCodeValid, setIsPostalCodeValid] = useState(true)

  useEffect(() => {
    getClientToken()
  }, [])

  const getCreditCardObj = useRef()

  const handleFormClick = async () => {
    // 1. Grab the nonce
    // 2. Make call with the new API

    try {
      const token = await getCreditCardObj.current()
      console.log(token)

      const { isSuccess } = await updateCreditCard(subscriptionId, token.nonce)
      if (isSuccess) {
        onSuccessCb()
      }
    } catch (err) {
      console.log(err)
      setBraintreeNonceError(err.message)
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
        { braintreeNonceError && <div className="alert alert-danger">{braintreeNonceError}</div> }
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
              onValidityChange={({ isValid }) => setIsNumberValid(isValid)}
              // onValidityChange={(a) => { console.log(a); setIsNumberValid(a.isValid) }}
              // prefill="4111 1111 1111 1111"
            />
            {!isNumberValid && <small className="text-danger">Credit card number is invalid</small>}
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
              onBlur={({ isValid }) => setIsExpirationValid(isValid)}
              // prefill="0220"
            />
            {!isExpirationValid && <small className="text-danger">Expiration date is invalid</small>}
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
              onBlur={({ isValid }) => setIsCvvValid(isValid)}
              // prefill="123"
            />
            {!isCvvValid && <small className="text-danger">CVV is invalid</small>}
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
              onBlur={({ isValid }) => setIsPostalCodeValid(isValid)}
              // prefill="123456"
            />
            {!isPostalCodeValid && <small className="text-danger">Zip code / postal code is invalid</small>}
          </div>
        </div>
        <button
          className="btn btn-primary w-100"
          type="button"
          onClick={handleFormClick}
          disabled={isLoadingUpdateCard}
        >
          {isLoadingUpdateCard ? 'Updating...' : 'Update Card'}
        </button>
        <div className="d-block text-center small mt--25">
          Payment powered by Braintree (a PayPal company) - 🔒 Your information is secure
        </div>
      </Braintree>
      )}
    </>
  )
}

function mapStateToProps(state) {
  return {
    error: state.checkout.braintree.error,
    isLoading: state.checkout.braintree.isLoading,
    isLoadingUpdateCard: state.checkout.updateCreditCard.isLoading,
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
