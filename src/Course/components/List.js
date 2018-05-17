import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function mapStateToProps(state){
    return {
        list: state.courses.list
    }
}

function mapDispatchtoProps(dispatch){
    return {
        getList: ()=>{
            dispatch(actions.getCourses())
        },
        clearList: ()=>{
            dispatch(actions.clearCourses())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps)
((props)=>{
    return <List {...props} of="courses" />
})
