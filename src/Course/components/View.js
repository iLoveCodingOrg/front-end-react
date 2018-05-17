import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../'
import { View } from '../../_common'

function mapStateToProps(state){
    return {
        view: state.courses.view
    }
}

function mapDispatchtoProps(dispatch){
    return {
        getView: (slug)=>{
            dispatch(actions.getCourseBySlug(slug))
        },
        clearView: ()=>{
            dispatch(actions.clearCourse())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps)
((props)=>{
    return <View {...props} of="course" />
})
