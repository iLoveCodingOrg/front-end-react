import './Login.scss'

import React from 'react'

import logo from '../../_app/images/ilovecoding-logo.svg'

class LoginWrap extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="d-flex flex-column bg-light full-screen">
                <div className="d-flex justify-content-center navbar-brand py-3">
                    <div className="img-wrap">
                        <img src={logo} alt="iLoveCoding.org Logo" />
                    </div>
                </div>
                {this.props.children}
                <div className="text-muted text-center my-5">
                    iLoveCoding Inc. &copy; 2018
                </div>
            </div>
        )
    }
}

export default LoginWrap