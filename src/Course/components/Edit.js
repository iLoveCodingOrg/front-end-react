import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actions } from '../'
import { Edit } from '../../_common'

function mapStateToProps(state){
    return {
        error: state.courses.view.error,
        isLoading: state.courses.view.isLoading,
        view: state.courses.view.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        getView: (slug)=>{
            dispatch(actions.getCourseBySlug(slug))
        },
        update: (id, payload)=>{
            return dispatch(actions.updateCourseById(id, payload))
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
        type: 'text'
    }, {
        name: 'videoSource',
        type: 'text'
    }, {
        name: 'thumbnail',
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
        type: 'textarea'
    }]

    return (<Edit
        {...props}
        editableFields={editableFields}
        of="course">
    </Edit>)
}))