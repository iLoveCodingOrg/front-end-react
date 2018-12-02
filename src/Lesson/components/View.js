import React from 'react'
import { connect } from 'react-redux'

import { callMarkLessonComplete, getLessonBySlug, clearLesson } from '../actions'
import { View } from '../../_common'

function mapStateToProps(state){
    return {
        error: state.lessons.view.error,
        isLoading: state.lessons.view.isLoading,
        view: state.lessons.view.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        callMarkAsComplete: (id)=>{
            dispatch(callMarkLessonComplete(id))
        },
        getView: (slug)=>{
            dispatch(getLessonBySlug(slug))
        },
        clearView: ()=>{
            dispatch(clearLesson())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
((props)=>{
    return <View {...props} of="lesson" />
})
