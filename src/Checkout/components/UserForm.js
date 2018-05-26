import React from 'react'

class UserForm extends React.Component{
    constructor(props){
        super(props)

        this.validate = this.validate.bind(this)
    }
    
    validate(email, password) {
        return {
          email: email.length === 0,
          password: password.length === 0,
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
                                className="form-control"
                                id="firstName"
                                placeholder="First Name"
                                required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
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