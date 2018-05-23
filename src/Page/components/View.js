import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { View } from '../../_common'

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
        clearView: ()=>{
            dispatch(actions.clearPage())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
((props)=>{
    return <View {...props} of="page" />
})
