import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Loading from '../Loading'
import ErrorBox from '../ErrorBox'

import { EditForm } from './'

class View extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillReceiveProps(nextProps){
        const { slug } = this.props.match.params
        
        if(nextProps.match.params.slug !== slug){
            this.props.getView(nextProps.match.params.slug)
        }
    }

    componentWillMount(){
      this.props.getView(this.props.match.params.slug)
    }

    componentWillUnmount(){
        // this.props.clearView()
    }

    render(){
        const {
            title
        } = this.props.view
        const {
            isLoading,
            error
        } = this.props
        return (
            <div className="container">
                {
                    (isLoading)? <Loading />
                    :
                    (error) ? <ErrorBox />
                    :
                    <div>
                        <Helmet><title>Edit - {title}</title></Helmet>
                        <main>
                            {this.props.children}
                            <EditForm data={this.props.view} />
                            <pre>
                                {JSON.stringify(this.props.view, null, 2)}
                            </pre>
                        </main>
                    </div>
                }
            </div>
        )
    }
}

View.propTypes = {
    getView: PropTypes.func.isRequired,
    of: PropTypes.oneOf(['lesson', 'course', 'page']).isRequired,
    view: PropTypes.object.isRequired
}

export default View