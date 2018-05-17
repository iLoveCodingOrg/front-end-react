import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { View } from '../../_common'

function mapStateToProps(state){
    return {
        view: state.pages.view
    }
}

function mapDispatchtoProps(dispatch){
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
    mapDispatchtoProps)
((props)=>{
    return <View {...props} of="page" />
})
