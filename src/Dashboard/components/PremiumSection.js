import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { isPremium } from '../../_user/selectors'

function PremiumSupport({ isPremium }) {
  return (
    <>
      <h3>Premium Support</h3>
      <ul className="list-unstyled">
        {
          isPremium ? (
            <li>
              <Link to="/groupcalls">Weekly Group Call with Aziz</Link>
              <span className="badge bg-success ml--5">PREMIUM</span>
            </li>
          ) : (
            <li>
              <Link to="pricing">Upgrade to iLoveCoding Premium</Link>
              {' '}
              to unlock Weekly Live Group Calls with Aziz.
              <Link to="pricing" className="badge bg-success">Upgrade to PREMIUM</Link>
            </li>
          )
        }
      </ul>
    </>
  )
}

function mapStateToProps(state) {
  return {
    isPremium: isPremium(state),
  }
}

export default connect(mapStateToProps)(PremiumSupport)
