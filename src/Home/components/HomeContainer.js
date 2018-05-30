import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import { actionCreators } from '../'

const mapStateToProps = (state, ownProps) => {
    return {
        show: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(actionCreators.toggleShow())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)