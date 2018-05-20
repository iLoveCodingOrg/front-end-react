import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../_user'
import Header from '../Header'
import Footer from '../Footer'

class Wrap extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.getUser()
    }
    render(){
        return (
            <div>
                <Header/>
                    {this.props.children}
                <Footer/>
            </div>
        )
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
(Wrap)
