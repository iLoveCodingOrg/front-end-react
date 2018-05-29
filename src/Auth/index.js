import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actions } from '../_user'

class Auth extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.getUser()
    }
    render(){
        return this.props.children
    }
}

function mapStateToProps(){
    return {}
}

function mapDispatchToProps(dispatch){
    return {
        getUser: ()=>{
            dispatch(actions.getUser())
        }
    }
}

// export default Auth
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps)
(Auth))
