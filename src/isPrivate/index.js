import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectors } from '../_user'

export default function (WrappedComponent) {
    function PrivateComponent(props) {
        if(props.isLoggedIn){
            return <WrappedComponent />
        }else{
            return <div className="container d-flex justify-content-center">
                <div className="col-md-8">
                    <h1>Dashboard</h1>
                    <div className="alert alert-info">
                        You must be logged in to view this page!
                        &nbsp;<Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        }
    }

    function mapStateToProps(state){
        return {
            isLoggedIn: selectors.isLoggedIn(state)
        }
    }
    
    return connect(mapStateToProps)(PrivateComponent)
}