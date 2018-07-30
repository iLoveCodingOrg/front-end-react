import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function ListHeader(props){
    return (
        <div className="d-flex flex-column align-items-center mb-5">
            <h1>All Questions</h1>
            <p className="lead col-lg-9 align-self-center">
                Courses are a collection of video questions, put together in specific order to help you learn a specific technology. You can learn Javascript, jQuery, Angular JS and other technologies by selecting a course below.
            </p>
        </div>
    )
}

function mapStateToProps(state){
    return {
        error: state.questions.list.error,
        isLoading: state.questions.list.isLoading,
        list: state.questions.list.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        getList: ()=>{
            dispatch(actions.getQuestions())
        },
        clearList: ()=>{
            dispatch(actions.clearQuestions())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
((props)=>{
    return <List
        {...props}
        of="questions"
        listHeader={ListHeader}
    />
})
