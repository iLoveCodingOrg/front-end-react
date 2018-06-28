import React from 'react'

class HomeForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <form
                    className="d-none d-sm-block"
                    action="https://www.getdrip.com/forms/924464645/submissions"
                    method="post"
                    data-drip-embedded-form="924464645"
                >
                    <div className="input-group">
                        <input
                            autoFocus
                            className="form-control form-control-lg border-primary"
                            placeholder="Enter your email address"
                            type="email"
                            id="drip-email"
                            name="fields[email]"
                            required
                        />
                        <div className="input-group-prepend">
                            <input
                                type="submit"
                                value="Send Me Lesson #1"
                                data-drip-attribute="sign-up-button"
                                className="btn btn-lg btn-primary rounded-right"
                            />
                        </div>
                    </div>
                </form>

                <form
                    className="d-sm-none"
                    action="https://www.getdrip.com/forms/924464645/submissions"
                    method="post"
                    data-drip-embedded-form="924464645"
                >
                    <input
                        autoFocus
                        className="form-control form-control-lg border-primary mb-3"
                        placeholder="Enter your email address"
                        type="email"
                        id="drip-email"
                        name="fields[email]"
                        required
                    />
                    <input
                        type="submit"
                        value="Send Me Lesson #1"
                        data-drip-attribute="sign-up-button"
                        className="btn btn-lg btn-primary btn-block"
                    />
                </form>
            </div>
        )
    }
}

export default HomeForm