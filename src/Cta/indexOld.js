import React from 'react'
import PropType from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { isLoggedIn, isPaid, isPro } from '../_user/selectors'

const Cta = ({isLoggedIn, isPaid, isPro, of, slug}) => {
    if (
        of === 'page'
        &&
        (slug === 'confirm' || slug === 'welcome')
    ){
        return (<span></span>)
    }

    if (!isLoggedIn){
        return (
            <div className="alert alert-warning text-center my-4">
                <span className="lead">Become a confident software developer with guidance!</span>
                <br/>
                <Link to="/signup" className="btn btn-lg btn-primary my-2">Get Started Free</Link>
                <br/>
                Already have an account, <Link to="/login" className="btn-link">Please Login</Link>
            </div>
        )
    }

    if(isLoggedIn && !isPaid){
        return (
            <div className="alert alert-warning lead text-center my-4">
                Unlock the complete video training + mentor support with iLoveCoding Pro / Premium membership
                <br/>
                <Link to="/pricing" className="btn btn-lg btn-success mt-2">Upgrade Now</Link>
            </div>
        )
    }

    if(isLoggedIn && isPro){
        return (
            <div className="alert alert-warning lead text-center my-4">
                <Link to="/pricing" className="btn btn-lg btn-success my-2">Upgrade to iLoveCoding Premium</Link> to unlock live weekly group calls with your mentor.
            </div>
        )
    }

    return (<span></span>)
}

Cta.propType ={
    isLoggedIn: PropType.bool.isRequired,
    isPaid: PropType.bool.isRequired,
    isPro: PropType.bool.isRequired,
    of: PropType.string,
    slug: PropType.string
}

function mapStateToProps(state){
    return {
        isLoggedIn: isLoggedIn(state),
        isPaid: isPaid(state),
        isPro: isPro(state)
    }
}

export default connect(mapStateToProps)(Cta)