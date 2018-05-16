import { connect } from 'react-redux'

import { actions } from '../'
import { List } from '../../_common'

function mapStateToProps(state){
    return {
        list: state.lessons.list
    }
}

function mapDispatchtoProps(dispatch){
    return {
        getList: ()=>{
            dispatch(actions.getLessons())
        },
        clearList: ()=>{
            dispatch(actions.clearLessons())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps)
(List)
