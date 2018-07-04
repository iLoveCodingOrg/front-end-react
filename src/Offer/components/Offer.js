import React from 'react'
import qs from 'query-string'
import { isNil } from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actions } from '../'

class Offer extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        const query = qs.parse(location.search)

        if(isNil(query.t)) return

        const timeFrom = parseInt(query.t)
        const timeLeft = query.l ? parseInt(query.l) : undefined

        this.props.setTimes(timeFrom, timeLeft)
    }

    render(){
        return (<div>
            I am Offer component
            {this.props.timeFrom}, {this.props.timeLeft}
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        timeFrom: state.offer.timeFrom,
        timeLeft: state.offer.timeLeft
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTimes: (timeFrom, timeLeft)=>{
            dispatch(actions.setOfferTimes(timeFrom, timeLeft))
        }
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps)
(Offer))