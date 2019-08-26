import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Breadcrumbs from '../../Breadcrumbs'
import { getSubscriptions } from '../actions'
import Subscriptions from './Subscriptions'
import Loading from '../../Loading'
import ErrorBox from '../../ErrorBox'

class SubscriptionList extends React.Component {
  componentDidMount() {
    this.props.getList()
  }

  render() {
    const title = 'Subscriptions'
    const { isLoading, error, list } = this.props
    return (
      <div className="flex flex-column">
        <Helmet>
          <title>
            {title}
            {' '}
            - iLoveCoding
          </title>
        </Helmet>
        <section className="align-self-center container mt-1 mb-3">
          <Breadcrumbs nodes={[
            {
              label: 'Back to Dashboard',
              link: '/dashboard',
            },
            {
              label: title,
            },
          ]}
          />
          <div className="row">
            <div className="col-12">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              { isLoading && <Loading />}
              { !isLoading && error && <ErrorBox /> }
              { !isLoading && !error && <Subscriptions data={list} /> }
            </div>
          </div>
        </section>
      </div>
    )
  }
}

SubscriptionList.propTypes = {
  getList: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
}

function mapStateToProps({ subscriptions }) {
  return {
    error: subscriptions.list.error,
    isLoading: subscriptions.list.isLoading,
    list: subscriptions.list.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getList: () => {
      dispatch(getSubscriptions())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionList)
