import React from 'react'
import PropTypes from 'prop-types'

class View extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }

    componentWillMount(){
      this.props.getView(this.props.match.params.slug)
    }

    componentWillUnmount(){
        this.props.clearView()
    }

    render(){
        const {
            title,
            subTitle,
            vidoeSource,
            body
        } = this.props.view

        return (
            <div>
                {
                    !this.props.view.title ?
                    <div>
                        Loading...
                    </div>
                    :
                    <div>
                      <h1>{title}</h1>
                      <p>{subTitle}</p>
                      <div>
                          {vidoeSource}
                      </div>
                      <p>{body}</p>
                    </div>
                }
            </div>
        )
    }
}

View.propTypes = {
    clearView: PropTypes.func.isRequired,
    getView: PropTypes.func.isRequired,
    of: PropTypes.oneOf(['lesson', 'course', 'page']).isRequired,
    view: PropTypes.object.isRequired
}

export default View