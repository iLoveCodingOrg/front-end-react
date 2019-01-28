import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { getCourses, clearCourses } from '../actions'
import { List } from '../../_common'

function ListHeader(){
    return (
        <div className="d-flex flex-column align-items-center">
            <Helmet><title>Core Training - iLoveCoding</title></Helmet>
            <h1>Core Training</h1>
            <p className="lead col-lg-9 align-self-center">
                Here you will learn the foundation of modern software development.
                <br/><br/>
                This is your curriculum to become a modern <strong><i>Job-ready</i></strong> Front-End and/or Full-Stack JavaScript Developer - Someone who can build modern web, mobile and desktop apps.
                <br/><br/>
                Each course has at least 2 practical projects, so you apply what you learn in the course. For additional practice go to the <Link to="/courses/projects">Practice Projects</Link> section.
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
            dispatch(getCourses('core'))
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
