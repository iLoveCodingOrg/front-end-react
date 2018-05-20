import React from 'react'
import PropTypes from 'prop-types'

class Duration extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <small className="pl-3">
                {this.props.duration} mins
            </small>
        )
    }
}

Duration.propTypes = {
    duration: PropTypes.string.isRequired
}

export default Duration