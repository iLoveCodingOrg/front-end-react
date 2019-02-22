import './style.scss'

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { actions, selectors } from '../_user'
import logo from '../_app/images/ilovecoding-logo.svg'
import { Copyrights } from '../Footer'

class WrapMini extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { isLoggedIn, firstName, lastName, logout } = this.props
        return (
            <div className="bg-light full-screen">
                <div className="d-flex justify-content-center navbar-brand py-3">
                    <Link to="/" className="img-wrap">
                        <img src={logo} alt="iLoveCoding.org Logo" />
                    </Link>
                </div>

                {
                    isLoggedIn?
                    <div className="text-center">
                        <h2>Hi {firstName}! <br/></h2>
                        <p>
                            You are already logged in, <Link to="/dashboard">continue to dashboard</Link>.
                            <br/>
                            Not you? <button className="border-0 btn-link p-0" onClick={logout}>Log out</button>
                        </p>
                    </div>
                    :
                    this.props.children
                }

                <Copyrights className="text-center" />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: selectors.isLoggedIn(state),
        firstName: state.user.firstName,
        lastName: state.user.lastName
    }
}

function mapDispatchToProps(dispatch){
    return {
        logout: ()=>{
            return dispatch(actions.logout())
            .then(({ isSuccess })=>{
                if(isSuccess){
                    window.location.reload()
                }
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(WrapMini)
