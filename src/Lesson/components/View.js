import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
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
            dispatch(actions.callMarkLessonComplete(id))
        },
        getView: (slug)=>{
            dispatch(actions.getLessonBySlug(slug))
        },
        clearView: ()=>{
            dispatch(actions.clearLesson())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
((props)=>{
    return <View {...props} of="lesson" />
})
