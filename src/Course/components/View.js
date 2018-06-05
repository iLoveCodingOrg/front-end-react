import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { View } from '../../_common'
import { CourseNav } from '../'

function mapStateToProps(state){
    return {
        error: state.courses.view.error,
        isLoading: state.courses.view.isLoading,
        view: state.courses.view.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        callMarkAsComplete: (id)=>{
            dispatch(actions.callMarkCourseComplete(id))
        },
        getView: (slug)=>{
            dispatch(actions.getCourseBySlug(slug))
        },
        clearView: ()=>{
            dispatch(actions.clearCourse())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
((props)=>{
    return (<View {...props} of="course">
        <CourseNav course={props.view} />
    </View>)
})
