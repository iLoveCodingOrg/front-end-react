import React from 'react'
import { connect } from 'react-redux'

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

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Auth)
