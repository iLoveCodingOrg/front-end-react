import React from 'react'
import { connect } from 'react-redux'

import { getCourses, clearCourses } from '../actions'
import { List } from '../../_common'

function ListHeader(){
    return (
        <div className="d-flex flex-column align-items-center mb-5">
            <h1>Courses</h1>
            <p className="lead col-lg-9 align-self-center">
                Select from a topic you want to learn: You can learn JavaScript, jQuery, React, Node.js and other technologies by selecting a course below. Build simple to advance websites and mobile apps.
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
            dispatch(getCourses())
        },
        clearList: ()=>{
            dispatch(clearCourses())
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
