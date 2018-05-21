import React from 'react'
import PropTypes from 'prop-types'

class Access extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <span>
                {
                    this.props.isFree?
                    <span className="badge badge-pill badge-dark">FREE</span>
                    :
                    <span className="badge badge-pill badge-success">PRO</span>
                }
            </span>
        )
    }
}

Access.propTypes = {
    isFree: PropTypes.bool.isRequired
}

export default Access