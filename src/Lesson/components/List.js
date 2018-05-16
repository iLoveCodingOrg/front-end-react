import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from '../'

class List extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.getList()
    }

    // componentWillUnmount(){
    //     this.props.clearList()
    // }

    render(){
        console.log('this.props.list', this.props.list)
        return (
            <div>
                List Page
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        list: state.lessons.list
    }
}

function mapDispatchtoProps(dispatch){
    return {
        getList: ()=>{
            dispatch(actions.getLessons())
        },
        clearList: ()=>{
            dispatch(actions.clearLessons())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps)
(List)
