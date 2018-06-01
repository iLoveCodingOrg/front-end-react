import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { validateField } from '../../_app/utils'

import WrapMini from '../../WrapMini'

class ForgotPassword extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: {
                value: 'error',
                error: true
            }
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.renderInlineError = this.renderInlineError.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()

    }

    handleEmail(event){
        const { value } = event.target
        this.setState({
            email: {
                value,
                error: validateField(value, { isRequired: true, isEmail: true })
            }
        })
    }

    renderInlineError(fieldName){
        const error = this.state[fieldName].error

        if(error){
            return (
                <div className="invalid-feedback" style={{ display: 'block' }}>
                    {error}
                </div>
            )
        }else{
            return null
        }
    }

    render(){
        return (
            <WrapMini>
                <Helmet><title>Forgot Password of iLoveCoding?</title></Helmet>
                <form className="form-forgot-password" onSubmit={this.handleSubmit} noValidate>
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
                            onChange={this.handleEmail}
                        />
                        {this.renderInlineError('email')}
                    </div>
                    <div>
                        <input
                            disabled={this.state.email.error}
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
            </WrapMini>
        )
    }
}

export default ForgotPassword