import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectors } from '../_user/'

class Access extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <span>
                {
                    this.props.isFree?
                        this.props.isLoggedIn?
                        null
                        :
                        <span className="badge badge-pill badge-dark mr-3">FREE</span>
                    :
                    <span className="badge badge-pill badge-success mr-3">PRO</span>
                }
            </span>
        )
    }
}

Access.propTypes = {
    isFree: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}

function mapStateToProps(state){
    return {
        isLoggedIn: selectors.isLoggedIn(state)
    }
}
export default connect(mapStateToProps)(Access)