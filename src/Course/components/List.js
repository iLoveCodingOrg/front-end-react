import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function mapStateToProps(state){
    return {
        error: state.courses.list.error,
        isLoading: state.courses.list.isLoading,
        list: state.courses.list.data
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
