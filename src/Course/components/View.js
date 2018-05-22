import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { View } from '../../_common'
import { CourseNav } from '../'

function mapStateToProps(state){
    return {
        isLoading: state.courses.isLoadingView,
        view: state.courses.view
    }
}

function mapDispatchToProps(dispatch){
    return {
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
