import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
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
            dispatch(actions.getBlogBySlug(slug))
        },
        clearView: ()=>{
            dispatch(actions.clearBlog())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
((props)=>{
    return <View {...props} of="blog" />
})
