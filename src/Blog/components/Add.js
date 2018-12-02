import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { addBlog } from '../actions'
import { Add } from '../../_common'

function mapStateToProps(){
    return
}

function mapDispatchToProps(dispatch){
    return {
        add: (payload)=>{
            return dispatch(addBlog(payload))
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

    return (<Add
        {...props}
        editableFields={editableFields}
        of="blog"
    />)
}))