import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Loading from '../Loading'
import ErrorBox from '../ErrorBox'

import { EditForm } from './'

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

    componentWillMount(){
      this.props.getView(this.props.match.params.slug)
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
        const { title } = this.props.view
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
                        <Helmet><title>{pageTitle}</title></Helmet>
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
    of: PropTypes.oneOf(['lesson', 'course', 'page']).isRequired,
    update: PropTypes.func.isRequired,
    view: PropTypes.object.isRequired
}

export default Edit