import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function mapStateToProps(state){
    return {
        error: state.lessons.list.error,
        isLoading: state.lessons.list.isLoading,
        list: state.lessons.list.data
    }
}

function mapDispatchToProps(dispatch){
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
    mapDispatchToProps)
((props)=>{
    return <List {...props} of="lessons" />
})
