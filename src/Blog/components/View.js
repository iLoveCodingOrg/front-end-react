import React from 'react'
import { connect } from 'react-redux'

import { getBlogBySlug, clearBlog } from '../actions'
import { View } from '../../_common'

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
        clearView: ()=>{
            dispatch(clearBlog())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
((props)=>{
    return <View {...props} of="blog" />
})
