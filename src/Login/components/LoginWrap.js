import './Login.scss'

import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../_app/images/ilovecoding-logo.svg'

class LoginWrap extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="bg-light full-screen">
                <div className="d-flex justify-content-center navbar-brand py-3">
                    <Link to="/" className="img-wrap">
                        <img src={logo} alt="iLoveCoding.org Logo" />
                    </Link>
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