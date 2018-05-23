import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function mapStateToProps(state){
    return {
        isLoading: state.pages.list.isLoading,
        list: state.pages.list.data
    }
}

function mapDispatchToProps(dispatch){
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
    mapDispatchToProps)
((props)=>{
    return <List {...props} of="pages" />
})
