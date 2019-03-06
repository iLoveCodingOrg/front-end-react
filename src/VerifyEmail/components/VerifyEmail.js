import React from 'react'
import { connect } from 'react-redux'
import { qsParse } from '../../_app/utils'

import Loading from '../../Loading'
import { actions } from '../'

class VerifyEmail extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const queryString = qsParse(this.props.location.search)
        this.props.callVerifyEmail(queryString.uid, queryString.token)
            .then((response)=>{
                if(response.isSuccess){
                    this.props.history.push('/login')
                }
            })
    }

    componentDidUpdate(prevProps){
        const queryString = qsParse(this.props.location.search)
        const prevQueryString = qsParse(prevProps.location.search)

        if(
            prevQueryString.uid !== queryString.uid
            || prevQueryString.token !== queryString.token
        ) {
            this.props.callVerifyEmail(queryString.uid, queryString.token)
        }

    }

    render(){
        return (
            <div>
                {
                    (this.props.isLoading)? <Loading />
                    :
                    (this.props.error) ? <div className="alert alert-danger">{this.props.error}</div>
                    :
                    <div>Verifiying your email...</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        error: state.verifyEmail.error,
        isLoading: state.verifyEmail.isLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        callVerifyEmail: (uid, token)=>{
            return dispatch(actions.callVerifyEmail(uid, token))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(VerifyEmail)
