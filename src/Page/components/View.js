import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { View } from '../../_common'

function mapStateToProps(state){
    return {
        isLoading: state.pages.isLoading,
        view: state.pages.view
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
