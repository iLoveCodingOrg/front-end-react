import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function ListHeader(props){
    return (
        <div className="d-flex flex-column align-items-center mb-5">
            <h1>Questions &amp; Answers</h1>
            <p className="lead col-lg-9 align-self-center">
                To the point answers for every step of the way of your journey!
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
