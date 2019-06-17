import './braintree.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DropIn from 'braintree-web-drop-in-react'

import Loading from '../../Loading'
import ErrorBox from '../../ErrorBox'
import { getBraintreeClientToken } from '../actions'

class CreditCard extends React.Component {
  componentDidMount() {
    this.props.getBraintreeClientToken()
  }

  render() {
    const {
      isLoading, error, clientToken, setBraintreeInstance,
    } = this.props
    return (
      <div>
        <h4 className="mb-3">Payment Information</h4>
        { isLoading && <Loading /> }
        { !isLoading && error && <ErrorBox /> }
        { !isLoading && !error && (
          <DropIn
            options={{
              authorization: clientToken,
              paymentOptionPriority: ['card', 'paypal'],
              paypal: {
                flow: 'vault',
              },
            }}
            onInstance={instance => (setBraintreeInstance(instance))}
          />
        )
        }
      </div>
    )
  }
}

CreditCard.propTypes = {
  clientToken: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  getBraintreeClientToken: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setBraintreeInstance: PropTypes.func.isRequired,
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
    getBraintreeClientToken: () => {
      dispatch(getBraintreeClientToken())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreditCard)
