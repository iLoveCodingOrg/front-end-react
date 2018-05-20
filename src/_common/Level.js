import React from 'react'
import PropTypes from 'prop-types'

class Level extends React.Component {
    constructor(props) {
        super(props)
    }

    renderSwitch(level) {
        switch (level) {
            case 0:
                return 'Beginner'
            case 1:
                return 'Intermediate'
            case 2:
                return 'Advance'
            default:
                return ''
        }
    }

    render() {
        return (
            <small className="pl-3">
                Level: {this.renderSwitch(this.props.level)}
            </small>
        )
    }
}

Level.propTypes = {
    level: PropTypes.oneOf([0, 1, 2]).isRequired
}

export default Level