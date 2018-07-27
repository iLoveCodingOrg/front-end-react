import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function ListHeader(){
    return (
        <div className="d-flex flex-column align-items-center mb-5">
            <h1 className="title">All Courses</h1>
            <p className="lead col-lg-9 align-self-center">
                Courses are a collection of video lessons, put together in specific order to help you learn a specific technology. You can learn Javascript, jQuery, Angular JS and other technologies by selecting a course below.
            </p>
        </div>
    )
}

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
    return <List 
        {...props}
        of="courses"
        listHeader={ListHeader}
    />
})
