import './Login.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { LoginWrap } from '../'

class ForgotPassword extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <LoginWrap>
                <Helmet><title>Forgot Password of iLoveCoding?</title></Helmet>
                <form className="form-forgot-password" onSubmit={this.handleSubmit}>
                    <h2 className="text-center">Forgot Password?</h2>
                    <p>Please enter your email to search for your account.</p>
                    <div>
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Email address"
                            autoFocus
                            required
                            onChange={(event)=>this.handleChange('email', event.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            name="submit"
                            value="Get new password"
                            className="my-3 btn btn-lg btn-primary btn-block"
                        />
                    </div>
                    <div className="text-center">
                        <Link to="/login"> 🔙 Back to login</Link>
                    </div>
                </form>
            </LoginWrap>
        )
    }
}

export default ForgotPassword