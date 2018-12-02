import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getQuestionBySlug, updateQuestionById } from '../actions'
import { Edit } from '../../_common'

function mapStateToProps(state){
    return {
        error: state.questions.view.error,
        isLoading: state.questions.view.isLoading,
        view: state.questions.view.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        getView: (slug)=>{
            dispatch(getQuestionBySlug(slug))
        },
        update: (id, payload)=>{
            return dispatch(updateQuestionById(id, payload))
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps)
((props)=>{

    const editableFields = [{
        name: 'slug',
        type: 'text'
    }, {
        name: 'title',
        type: 'text'
    }, {
        name: 'subTitle',
        type: 'textarea'
    }, {
        name: 'videoSource',
        type: 'text'
    }, {
        name: 'thumbnail',
        type: 'text'
    }, {
        name: 'duration',
        type: 'text'
    }, {
        name: 'access',
        type: 'number'
    }, {
        name: 'level',
        type: 'number'
    }, {
        name: 'technology',
        type: 'array'
    }, {
        name: 'topic',
        type: 'array'
    }, {
        name: 'bodyContent',
        type: 'wysiwyg'
    }]

    return (<Edit
        {...props}
        editableFields={editableFields}
        of="question">
    </Edit>)
}))