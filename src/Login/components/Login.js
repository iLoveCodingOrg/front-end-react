import './Login.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import queryString from 'query-string'

import { LoginWrap } from '../'
import { actions } from '../../_user'
import { selectors } from '../../_user'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.renderError = this.renderError.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
        
        const { location, history, login } = this.props
        const redirect = queryString.parse(location.search).redirect

        login(this.state.email, this.state.password)
        .then(({ isSuccess })=>{
            if(isSuccess){
                if(redirect){
                    history.push(redirect)
                }else{
                    history.push('/')
                }
            }
        })
    }
    handleChange(fieldName, newValue){
        this.setState({
            [fieldName]: newValue
        })
    }
    renderError(){
        const { error } = this.props
        if(error){
            return (
                <div className="alert alert-danger">
                    {this.props.error}
                </div>
            )
        }
        return null
    }
    render(){
        return (
            <LoginWrap>
                <Helmet><title>Login to iLoveCoding?</title></Helmet>
                <form className="form-login" onSubmit={this.handleSubmit}>
                    <h2 className="text-center">Please Login</h2>
                    <p>This login is only for students who are enrolled in one of iLoveCoding's Paid Programs.</p>
                    {this.renderError()}
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
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            required
                            onChange={(event)=>this.handleChange('password', event.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            disabled={this.props.isLoading}
                            type="submit"
                            name="Login"
                            value={this.props.isLoading? 'Logging in ...' : 'Login'}
                            className="my-3 btn btn-lg btn-primary btn-block"
                        />
                    </div>
                    <div className="text-center">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </form>
            </LoginWrap>
        )
    }
}

Login.propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    isLoading: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        error: state.user.error,
        isLoading: state.user.isLoading,
        isLoggedIn: selectors.isLoggedIn(state)
    }
}

function mapDispatchToProps(dispatch){
    return {
        login: (email, password)=>{
            return dispatch(actions.login(email, password))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(withRouter(Login))