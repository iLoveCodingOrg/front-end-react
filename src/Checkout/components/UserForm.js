import React from 'react'

class UserForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
        this.handleFirstName = this.handleFirstName.bind(this)
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
    
    validate(value, { isRequired }) {
        let error = ''

        if(isRequired){
            error = !value.length? 'Please enter the information' : ''
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
                <form className="needs-validation" noValidate>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text"
                                value={this.state.firstName.value}
                                onChange={this.handleFirstName}
                                className="form-control"
                                id="firstName"
                                placeholder="First Name"
                                required />
                            {this.renderInlineError('firstName')}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Last Name"
                                required />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            className="form-control"
                            id="email"
                            placeholder="your@email.com"
                        />
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserForm