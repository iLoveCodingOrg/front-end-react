import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actions } from '../'

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
            <div>
                <h2>Login</h2>
                {JSON.stringify(this.state)}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            required
                            onChange={(event)=>this.handleChange('email', event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            onChange={(event)=>this.handleChange('password', event.target.value)}
                        />
                    </div>
                    <div>
                        <input type="submit" name="Login"/>
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