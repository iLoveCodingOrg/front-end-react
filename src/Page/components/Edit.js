import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { Edit } from '../../_common'

function mapStateToProps(state){
    return {
        error: state.pages.view.error,
        isLoading: state.pages.view.isLoading,
        view: state.pages.view.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        getView: (slug)=>{
            dispatch(actions.getPageBySlug(slug))
        },
        update: (id, payload)=>{
            return dispatch(actions.updatePageById(id, payload))
        }
    }
}

export default connect(
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
        name: 'access',
        type: 'number'
    }, {
        name: 'bodyContent',
        type: 'textarea'
    }]

    return (<Edit
        {...props}
        editableFields={editableFields}
        of="page">
    </Edit>)
})