import React from 'react'
import PropType from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { isLoggedIn, isPaid, isPro } from '../_user/selectors'

const Cta = ({
  isLoggedIn, isPaid, isPro, of, slug,
}) => {
  if (
    of === 'page'
    && (slug === 'confirm' || slug === 'welcome')
  ) {
    return (<span />)
  }

  if (!isLoggedIn) {
    return (
      <div className="card card-warning t-center my-2">
        <span>Become a confident software developer with guidance!</span>
        <br />
        <Link to="/pricing" className="btn btn-lg btn-primary my--5">Get Started</Link>
        <br />
        Already have an account,
        {' '}
        <Link to="/login" className="btn-link">Please Login</Link>
      </div>
    )
  }

  if (isLoggedIn && !isPaid) {
    return (
      <div className="card card-warning h3 f-300 t-center my-2">
        Unlock the complete video training + mentor support with iLoveCoding Premium membership
        <br />
        <Link to="/pricing" className="btn btn-lg btn-success mt--5">Upgrade Now</Link>
      </div>
    )
  }

  if (isLoggedIn && isPro) {
    return (
      <div className="card card-warning h3 f-300 t-center my-2">
        <Link to="/pricing" className="btn btn-lg btn-success my--5">Upgrade to iLoveCoding Premium</Link>
        {' '}
        to unlock live weekly group calls with your mentor.
      </div>
    )
  }

  return (<></>)
}

Cta.propType = {
  isLoggedIn: PropType.bool.isRequired,
  isPaid: PropType.bool.isRequired,
  isPro: PropType.bool.isRequired,
  of: PropType.string,
  slug: PropType.string,
}

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state),
    isPaid: isPaid(state),
    isPro: isPro(state),
  }
}

export default connect(mapStateToProps)(Cta)
