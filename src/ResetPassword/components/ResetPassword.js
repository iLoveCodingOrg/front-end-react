import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Loading from '../../Loading'
import { actions } from '../'

class ResetPassword extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            isPasswordMatch: true,
            error: false
        }

        this.renderError = this.renderError.bind(this)
        this.renderPasswordMatchError = this.renderPasswordMatchError.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
        this.handleCallResetPassword = this.handleCallResetPassword.bind(this)
    }

    handleCallResetPassword(){
        const { accessToken } = this.props.match.params
        const { email, password } = this.state
        
        this.props.callResetPassword(accessToken, email, password)
            .then((response)=>{
                console.log('response', response)
                if(response.isSuccess){
                    this.props.history.push('/login')
                } else {
                    this.setState({
                        error: response.message
                    })
                }
            })
    }

    handleSubmit(event){
        event.preventDefault()
        this.handleCallResetPassword()
    }

    handleEmail(event){
        const val = event.target.value
        this.setState({ email: val })
    }

    handlePassword(event){
        const val = event.target.value
        const isPasswordMatch = val === this.state.confirmPassword
        this.setState({
            password: val,
            isPasswordMatch
        })
    }

    handleConfirmPassword(event){
        const val = event.target.value
        const isPasswordMatch = val === this.state.password
        this.setState({
            confirmPassword: val,
            isPasswordMatch
        })
    }

    renderPasswordMatchError(){
        if(!this.state.isPasswordMatch){
            return (
                <div className="invalid-feedback" style={{display:'block'}}>
                    Password does not match.
                </div>
            )
        }
    }

    renderError(){
        const { error } = this.state
        if(error){
            return (
                <div className="alert alert-danger">
                    {error}
                </div>
            )
        } else {
            return null
        }
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <h1>Reset Password</h1>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderError()}
                            <div className="form-group row">
                                <label className="col-md-3" htmlFor="email">Confirm Email</label>
                                <div className="col-md-9">
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        placeholder="Confirm Email"
                                        onChange={this.handleEmail}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3" htmlFor="password">New Password</label>
                                <div className="col-md-9">
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        placeholder="Enter new password"
                                        onChange={this.handlePassword}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3" htmlFor="confirmPassword">Confirm New Password</label>
                                <div className="col-md-9">
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Re-enter new password"
                                        onChange={this.handleConfirmPassword}
                                        required
                                    />
                                    {this.renderPasswordMatchError()}
                                </div>
                            </div>
                            <input className="btn btn-primary btn-block" type="submit" value="Set New Password"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        // isLoading: state.resetPassword.isLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        callResetPassword: (accessToken, email, password)=>{
            return dispatch(actions.callResetPassword(accessToken, email, password))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(ResetPassword)
