import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Breadcrumbs from '../../Breadcrumbs'
import { getSubscriptionById } from '../actions'
import ViewGeneral from './ViewGeneral'
import UpdateCard from './UpdateCard'

function SubscriptionView({ match }) {
  const { id } = match.params
  const title = `Subscription ID: ${id}`

  return (
    <div className="d-flex flex-column">
      <Helmet>
        <title>
          {title}
          {' '}
          - iLoveCoding
        </title>
      </Helmet>
      <section className=" align-self-center container mt-3 mb-5">
        <Breadcrumbs nodes={[
          {
            label: 'Back to Dashboard',
            link: '/dashboard',
          },
          {
            label: 'Subscriptions',
            link: '/subscriptions',
          },
          {
            label: title,
          },
        ]}
        />
        <div className="row">
          <div className="col-12 ">
            <h1>{title}</h1>
          </div>
        </div>
        <hr className="mb-1" />
        <Route
          exact
          strict
          path="/subscriptions/:id"
          component={ViewGeneral}
        />
        <Route
          exact
          strict
          path="/subscriptions/:id/update-card"
          component={UpdateCard}
        />
      </section>
    </div>
  )
}

SubscriptionView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

function mapStateToProps({ subscriptions }) {
  return {
    error: subscriptions.view.error,
    isLoading: subscriptions.view.isLoading,
    view: subscriptions.view.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSubscription: (id) => {
      dispatch(getSubscriptionById(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionView)
