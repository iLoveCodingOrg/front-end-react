import React from 'react'
import PropTypes from 'prop-types'

class RedirectAlert extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { slug, fromSlug, toUrl } = this.props

        return (fromSlug === slug)?
        <div className="alert alert-danger">
            <strong>IMPORTANT:</strong> <a href={toUrl}>The new version of this course is available here</a>
        </div>
        : null
    }
}

RedirectAlert.propTypes = {
    fromSlug: PropTypes.string.isRequired,
    slug: PropTypes.string,
    toUrl: PropTypes.string.isRequired
}

export default RedirectAlert