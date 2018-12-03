import React from 'react'
import { connect } from 'react-redux'

import { getBlogs, clearBlogs } from '../actions'
import { List } from '../../_common'

function ListHeader(){
    return (
        <div className="d-flex flex-column align-items-center text-center">
            <h1>All Blogs</h1>
            <p className="lead col-lg-9 align-self-center">
                List of all the blogs
            </p>
        </div>
    )
}

function mapStateToProps(state){
    return {
        error: state.blogs.list.error,
        isLoading: state.blogs.list.isLoading,
        list: state.blogs.list.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        getList: ()=>{
            dispatch(getBlogs())
        },
        clearList: ()=>{
            dispatch(clearBlogs())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
((props)=>{
    return <List
        {...props}
        of="blog"
        listHeader={ListHeader}
    />
})
