import React from 'react'
import PropTypes from 'prop-types'

class SourceDemo extends React.Component{
    constructor(props){
        super(props)
        this.getFullLink = this.getFullLink.bind(this)
    }
    getFullLink(linkString){
        const URL = '//img.ilovecoding.org/'

        if(linkString.substring(0,4) === 'http'){
            return linkString
        } else {
            return URL+linkString
        }
    }
    render(){        
        const { demo, source } = this.props
        
        if(!demo && !source){ return null }
        
        return (
            <div className="my-3 btn-group">
                {
                    demo?
                    <a
                        target="_blank"
                        href={this.getFullLink(demo)}
                        className="btn btn-outline-secondary btn-sm">View demo</a>: null
                }
                {
                    source?
                    <a
                        target="_blank"
                        href={this.getFullLink(source)}
                        className="btn btn-outline-secondary btn-sm">Download source code</a>: null
                }
            </div>
        )
    }
}

SourceDemo.propTypes = {
    demoUrl: PropTypes.string,
    sourceUrl: PropTypes.string
}

export default SourceDemo