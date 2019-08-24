import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { isPremium } from '../../_user/selectors'

function PremiumSupport({ isPremium }) {
  return (
    <div className="mt-3">
      <h4>Premium Support</h4>
      <ul className="list-unstyled">
        {
          isPremium ? (
            <li>
              <Link to="/groupcalls">Weekly Group Call with Aziz</Link>
              <span className="badge badge-pill badge-success">PREMIUM</span>
            </li>
          ) : (
            <li>
              <Link to="pricing">Upgrade to iLoveCoding Premium</Link>
              {' '}
              to unlock Weekly Live Group Calls with Aziz.
              <Link to="pricing" className="badge badge-pill badge-success">Upgrade to PREMIUM</Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isPremium: isPremium(state),
  }
}

export default connect(mapStateToProps)(PremiumSupport)
