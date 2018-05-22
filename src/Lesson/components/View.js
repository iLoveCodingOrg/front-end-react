import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { View } from '../../_common'

function mapStateToProps(state){
    return {
        isLoading: state.lessons.isLoading,
        view: state.lessons.view
    }
}

function mapDispatchToProps(dispatch){
    return {
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
