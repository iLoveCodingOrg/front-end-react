import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getSubscriptionById } from '../actions'
import Transactions from './Transactions'
import Loading from '../../Loading'
import PaymentMethodInfo from './PaymentMethodInfo'

function ViewGeneral({
  getSubscription, isLoading, error, view, subscriptionId,
}) {
  const {
    plan, transactions, active, paymentMethod,
  } = view

  useEffect(() => {
    getSubscription(subscriptionId)
  }, [subscriptionId])

  const renderError = () => (
    <div className="alert alert-danger">
      {error}
    </div>
  )

  return (
    <div>
      <div>
        { isLoading && <Loading />}
        { !isLoading && error && renderError() }
        { !isLoading && !error && (
        <>
          <div className="my-1 h4">
            Your subscription is
            {' '}
            {
              active ? <span className="badge badge-pill bg-success mr-1">Active</span>
                : <span className="badge badge-pill bg-danger mr-1">Inactive</span>
            }
          </div>
          <div
            className="grid"
            style={{ gridTemplateColumns: '1fr 1fr', gridGap: '10px;' }}
          >
            <div>
              <h3>Plan details</h3>
              <p>
                <strong>Plan Name</strong>
                <br />
                {plan && plan.name}
              </p>
              <p>
                <strong>Plan Description</strong>
                <br />
                {plan && plan.description}
              </p>
            </div>

            <div>
              <h3>Payment Method on file</h3>
              {subscriptionId && paymentMethod && (
                <PaymentMethodInfo
                  subscriptionId={subscriptionId}
                  creditCard={paymentMethod.creditCard}
                  paypal={paymentMethod.paypal}
                  showUpdateBtn
                />
              )}
            </div>
          </div>
          <div>
            <h3>Transactions</h3>
            {transactions && <Transactions data={transactions} />}
          </div>
        </>
        )}
      </div>
    </div>
  )
}

ViewGeneral.propTypes = {
  subscriptionId: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  getSubscription: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  view: PropTypes.shape({
    plan: PropTypes.object,
    transactions: PropTypes.array,
    active: PropTypes.bool,
    paymentMethod: PropTypes.object,
  }).isRequired,
}

function mapStateToProps({ subscriptions }, { match }) {
  return {
    error: subscriptions.view.error,
    isLoading: subscriptions.view.isLoading,
    view: subscriptions.view.data,
    subscriptionId: match.params.id,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSubscription: (id) => {
      dispatch(getSubscriptionById(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewGeneral)
