import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { View } from '../../_common'

function mapStateToProps(state){
    return {
        error: state.questions.view.error,
        isLoading: state.questions.view.isLoading,
        view: state.questions.view.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        callMarkAsComplete: (id)=>{
            dispatch(actions.callMarkQuestionComplete(id))
        },
        getView: (slug)=>{
            dispatch(actions.getQuestionBySlug(slug))
        },
        clearView: ()=>{
            dispatch(actions.clearQuestion())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
((props)=>{
    return <View {...props} of="question" />
})
