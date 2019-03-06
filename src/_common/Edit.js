import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Loading from '../Loading'
import ErrorBox from '../ErrorBox'

import { AsyncEditForm as EditForm } from './'

class Edit extends React.Component{
    constructor(props){
        super(props)

        this.handelFormSubmit = this.handelFormSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps){
        const { slug } = this.props.match.params
        
        if(nextProps.match.params.slug !== slug){
            this.props.getView(nextProps.match.params.slug)
        }
    }

    componentDidMount(){
        this.props.getView(this.props.match.params.slug)
    
        // Add jQuery to page for react-trumbowyg
        if(!document.querySelector('#jquery')){
            const script = document.createElement("script")
            script.id='jquery'
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
            document.body.appendChild(script);
        }
    }

    handelFormSubmit(payload){
        const preparedPayload = {}
        this.props.editableFields.forEach((field)=>{
            preparedPayload[field.name] = payload[field.name]
        })

        this.props.update(this.props.view.id, preparedPayload)
        .then(({ isSuccess })=>{
            if(isSuccess){
                window.location.reload()
            }
        })
    }

    render(){
        const {
            of,
            isLoading,
            error,
            editableFields
        } = this.props
        const pageTitle = `Edit ${of}`
        return (
            <div className="container">
                {
                    (isLoading)? <Loading />
                    :
                    (error) ? <ErrorBox />
                    :
                    <div>
                        <Helmet><title>{pageTitle} - iLoveCoding</title></Helmet>
                        <main>
                            <h1 className="my-4 text-center text-capitalize">{pageTitle}</h1>
                            {this.props.children}
                            <EditForm
                                editableFields={editableFields}
                                data={this.props.view}
                                onSubmitForm={this.handelFormSubmit}
                            />
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

Edit.propTypes = {
    editableFields: PropTypes.array.isRequired,
    getView: PropTypes.func.isRequired,
    of: PropTypes.oneOf(['question', 'lesson', 'course', 'page', 'blog']).isRequired,
    update: PropTypes.func.isRequired,
    view: PropTypes.object.isRequired
}

export default Edit