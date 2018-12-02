import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
    getBlogBySlug,
    updateBlogById
} from '../actions'
import { Edit } from '../../_common'

function mapStateToProps(state){
    return {
        error: state.blogs.view.error,
        isLoading: state.blogs.view.isLoading,
        view: state.blogs.view.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        getView: (slug)=>{
            dispatch(getBlogBySlug(slug))
        },
        update: (id, payload)=>{
            return dispatch(updateBlogById(id, payload))
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
        name: 'bodyContent',
        type: 'wysiwyg'
    }]

    return (<Edit
        {...props}
        editableFields={editableFields}
        of="blog">
    </Edit>)
}))