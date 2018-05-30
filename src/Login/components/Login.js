import './Login.scss'

import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { actions } from '../../_user'
import logo from '../../_app/images/ilovecoding-logo.svg'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.login(this.state.email, this.state.password)
        .then(({ isSuccess })=>{
            if(isSuccess){
                this.props.history.push('/')
            }
        })
    }
    handleChange(fieldName, newValue){
        this.setState({
            [fieldName]: newValue
        })
    }
    render(){
        return (
            <div className="d-flex flex-column bg-light full-screen">
                <form className="form-login" onSubmit={this.handleSubmit}>
                    <div class="d-flex justify-content-center navbar-brand py-3">
                        <div class="img-wrap">
                            <img src={logo} alt="iLoveCoding.org Logo" />
                        </div>
                    </div>
                    <h2 className="text-center">Please Login</h2>
                    <p>This login is only for students who are enrolled in one of iLoveCoding's Paid Programs.</p>
                    <div>
                        <label for="email" class="sr-only">Email address</label>
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
                        <label for="password" class="sr-only">Password</label>
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
                            type="submit"
                            name="Login"
                            value="Login"
                            className="my-3 btn btn-lg btn-primary btn-block"
                        />
                    </div>
                    <div className="text-center">
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                    <div className="text-muted text-center my-5">
                        iLoveCoding Inc. &copy; 2018
                    </div>
                </form>

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.user.emailHash
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