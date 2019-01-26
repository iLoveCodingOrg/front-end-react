import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import WrapMini from '../../WrapMini'

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

        this.renderError = this.renderError.bind(this)
    }

    renderError(){
        if(!this.props.error) return

        return (
            <div className="alert alert-danger">
                {this.props.error}
            </div>
        )
    }
    render(){
        return (
            <WrapMini>
                <Helmet><title>Signup - iLoveCoding</title></Helmet>
                <h1 className="h2 text-center">Get started with iLoveCoding</h1>
                <p className="lead text-center">
                    Get access to the first two courses FREE. <Link to="/pricing">Upgrade for full-access anytime</Link>.
                </p>

                {this.renderError()}

                <form className="mt-5 col-lg-6 col-md-8 mx-auto">
                    <div className="form-group row">
                        <label htmlFor="firstName" className="col-md-3 col-form-label strong">First Name</label>
                        <div className="col-md-9">
                            <input
                                name="firstName"
                                type="firstName"
                                className="form-control form-control-lg"
                                placeholder="First Name"
                                autoFocus
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-md-3 col-form-label strong">Last Name</label>
                        <div className="col-md-9">
                            <input
                                name="lastName"
                                type="lastName"
                                className="form-control form-control-lg"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-md-3 col-form-label strong">Email address</label>
                        <div className="col-md-9">
                            <input
                                name="email"
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Email address"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-md-3 col-form-label strong">Password</label>
                        <div className="col-md-9">
                            <input
                                name="password"
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Password"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            disabled={this.props.isLoading}
                            type="submit"
                            name="signup"
                            value={this.props.isLoading? 'Creating account...' : 'Create Your Account'}
                            className="my-3 btn btn-lg btn-primary btn-block"
                        />
                    </div>
                    <div className="text-center">
                        Already have an account? <Link to="/login">Login here</Link>
                    </div>
                </form>
            </WrapMini>
        )
    }
}

Signup.propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    isLoading: PropTypes.bool.isRequired,
    signup: PropTypes.func.isRequired,
}

function mapStateToProps(state){
    return {
        error: state.user.error,
        isLoading: state.user.isLoading,
    }
}

function mapDispatchToProps(dispatch){
    return {
        signup: (firstName, lastName, email, password)=>{
            return dispatch(actions.signup(firstName, lastName, email, password))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(withRouter(Signup))