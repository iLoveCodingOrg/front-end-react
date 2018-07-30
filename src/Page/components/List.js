import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function ListHeader(props){
    return (
        <div className="d-flex flex-column align-items-center text-center mb-5">
            <h1>All Pages</h1>
            <p className="lead col-lg-9 align-self-center">
                List of all the pages
            </p>
        </div>
    )
}

function mapStateToProps(state){
    return {
        error: state.pages.list.error,
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
    return <List
        {...props}
        of="pages"
        listHeader={ListHeader}
    />
})
