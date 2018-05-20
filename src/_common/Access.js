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
                    <span className="badge badge-secondary">Free</span>
                    :
                    <span className="badge badge-success">Pro</span>
                }
            </span>
        )
    }
}

Access.propTypes = {
    isFree: PropTypes.bool.isRequired
}

export default Access