import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function mapStateToProps(state){
    return {
        list: state.pages.list
    }
}

function mapDispatchtoProps(dispatch){
    return {
        getList: ()=>{
            dispatch(actions.getPages())
        },
        clearList: ()=>{
            dispatch(actions.clearPages())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps)
((props)=>{
    return <List {...props} of="pages" />
})
