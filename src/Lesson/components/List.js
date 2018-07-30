import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function ListHeader(props){
    return (
        <div className="d-flex flex-column align-items-center mb-5">
            <h1>All Lessons</h1>
            <p className="lead col-lg-9 align-self-center">
                Individual lessons
            </p>
        </div>
    )
}

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
    return <List
        {...props}
        of="lessons"
        listHeader={ListHeader}
    />
})
