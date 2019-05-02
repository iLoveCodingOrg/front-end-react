import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Recaptcha2 } from '../../Recaptcha'
import WrapMini from '../../WrapMini'
import { signup, clearError } from '../../_user/actions'

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            recaptchaToken: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

        this.renderError = this.renderError.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.verifyRecaptchaCb = this.verifyRecaptchaCb.bind(this)
        this.setRecaptchaElem = this.setRecaptchaElem.bind(this)
    }

    componentDidMount(){
        this.props.clearError()
    }

    handleSubmit(e){
        e.preventDefault()

        const { history, signup } = this.props
        const {
            firstName,
            lastName,
            email,
            password,
            recaptchaToken
        } = this.state
        
        signup({firstName, lastName, email, password, recaptchaToken})
        .then(({ isSuccess })=>{
            if(isSuccess){
                history.push('/pages/confirm')
            }else{
                if(this.recaptchaElm){
                    this.recaptchaElm.reset()
                    this.setState({ recaptchaToken: '' })
                }
            }
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    renderError(){
        if(!this.props.error) return

        return (
            <div className="alert alert-danger">
                {this.props.error}
            </div>
        )
    }

    verifyRecaptchaCb(recaptchaToken) {
        this.setState({ recaptchaToken })
    }

    setRecaptchaElem(recaptchaElm){
        this.recaptchaElm = recaptchaElm
    }

    render(){
        return (
            <WrapMini>
                <Helmet><title>Signup - iLoveCoding</title></Helmet>
                <h1 className="h2 text-center">Get started with iLoveCoding</h1>
                <p className="lead text-center">
                    Get access to the first two courses FREE. <Link to="/pricing">Upgrade for full-access anytime</Link>.
                </p>

                <form onSubmit={this.handleSubmit} className="mt-5 col-lg-6 col-md-8 mx-auto">
                    {this.renderError()}
                    <div className="form-group row">
                        <label htmlFor="firstName" className="col-md-3 col-form-label strong">First Name</label>
                        <div className="col-md-9">
                            <input
                                onChange={this.handleChange}
                                name="firstName"
                                type="firstName"
                                className="form-control form-control-lg"
                                placeholder="First Name"
                                autoFocus
                                
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-md-3 col-form-label strong">Last Name</label>
                        <div className="col-md-9">
                            <input
                                onChange={this.handleChange}
                                name="lastName"
                                type="lastName"
                                className="form-control form-control-lg"
                                placeholder="Last Name"
                                
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-md-3 col-form-label strong">Email address</label>
                        <div className="col-md-9">
                            <input
                                onChange={this.handleChange}
                                name="email"
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Email address"
                                
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-md-3 col-form-label strong">Password</label>
                        <div className="col-md-9">
                            <input
                                onChange={this.handleChange}
                                name="password"
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Password"
                                
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-md-3 col-form-label strong">Are you a human?</label>
                        <div className="col-md-9">
                            <Recaptcha2
                                onLoadCb={this.setRecaptchaElem}
                                verifyTokenCb={this.verifyRecaptchaCb}
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
                </form>

                <div className="text-center">
                    Already have an account? <Link to="/login">Login here</Link>
                </div>
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
        clearError: ()=>{
            return dispatch(clearError())
        },
        signup: (payload)=>{
            return dispatch(signup(payload))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(withRouter(Signup))