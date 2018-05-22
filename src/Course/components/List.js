import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function mapStateToProps(state){
    return {
        isLoading: state.courses.isLoading,
        list: state.courses.list
    }
}

function mapDispatchToProps(dispatch){
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
    mapDispatchToProps)
((props)=>{
    return <List {...props} of="courses" />
})
