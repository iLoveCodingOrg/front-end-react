import React from 'react'
import { connect } from 'react-redux'

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

export default connect(
    mapStateToProps,
    mapDispatchToProps)
((props)=>{
    return (<Edit {...props} of="course">
    </Edit>)
})