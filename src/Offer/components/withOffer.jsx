import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { qsParse } from '../../_app/utils'
import { actions, isOfferValidSelector } from '..'

export default function withOffer(Component) {
  function WrappedComponent({ setTimes, location, ...props }) {
    useEffect(() => {
      const query = qsParse(location.search)
      if (query.t) {
        const timeFrom = parseInt(query.t, 10) || undefined
        const timeLeft = query.l ? parseInt(query.l, 10) : undefined

        setTimes(timeFrom, timeLeft)
      }
    }, [location])

    return <Component {...props} />
  }

  function mapStateToProps(state) {
    return {
      timeFrom: state.offer.timeFrom,
      timeLeft: state.offer.timeLeft,
      isOfferValid: isOfferValidSelector(state),
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      setTimes: (timeFrom, timeLeft) => {
        dispatch(actions.setOfferTimes(timeFrom, timeLeft))
      },
    }
  }

  return withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedComponent))
}
