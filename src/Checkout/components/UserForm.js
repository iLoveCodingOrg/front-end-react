import React from 'react'
import { isEmailValid } from '../../_app/utils'

class UserForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: { value: '' },
            lastName: { value: '' },
            email: { value: '' }
        }
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.validate = this.validate.bind(this)
        this.renderInlineError = this.renderInlineError.bind(this)
    }

    handleFirstName(event){
        const value = event.target.value
        const options = {
            isRequired: true
        }
        this.setState({
            firstName: {
                value,
                error: this.validate(value, options)
            }
        })
    }

    handleLastName(event){
        const value = event.target.value
        const options = {
            isRequired: true
        }
        this.setState({
            lastName: {
                value,
                error: this.validate(value, options)
            }
        })
    }
    
    handleEmail(event){
        const value = event.target.value
        const options = {
            isRequired: true,
            isEmail: true
        }
        this.setState({
            email: {
                value,
                error: this.validate(value, options)
            }
        })
    }
    
    validate(value, { isRequired, isEmail }) {
        let error = ''

        if(isRequired){
            error = !value.length? 'Please enter the information' : ''
        }
        
        if(isEmail){
            error = !isEmailValid(value)? 'Please enter a valid email' : ''
        }

        return error
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
            <div>
                <h4 className="mb-3">Contact Information</h4>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text"
                            value={this.state.firstName.value}
                            onChange={this.handleFirstName}
                            className="form-control"
                            id="firstName"
                            placeholder="First Name"
                            required
                        />
                        {this.renderInlineError('firstName')}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text"
                            value={this.state.lastName.value}
                            onChange={this.handleLastName}
                            className="form-control"
                            id="lastName"
                            placeholder="Last Name"
                            required
                        />
                        {this.renderInlineError('lastName')}
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        value={this.state.email.value}
                        onChange={this.handleEmail}
                        className="form-control"
                        id="email"
                        placeholder="your@email.com"
                        required
                    />
                    {this.renderInlineError('email')}
                    <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>
            </div>
        )
    }
}

export default UserForm