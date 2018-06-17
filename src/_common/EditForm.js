import React from 'react'
import PropTypes from 'prop-types'

class EditForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            ...props.data
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextFields = this.renderTextFields.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.data !== this.props.data){
            this.setState({
                ...nextProps.data
            })
        }
    }
    
    handleChange(field, value){
        this.setState({
            [field]: value
        })
    }
    
    handleSubmit(e){
        e.preventDefault()
        
        const prepairedPayload = {}

        this.props.editableFields.forEach((item)=>{
            const value = this.state[item.name]
            if(item.type === 'array' && !Array.isArray(value)){
                prepairedPayload[item.name] = value.split(',')
            } else {
                prepairedPayload[item.name] = value
            }
        })
        this.props.onSubmitForm(prepairedPayload)
    }

    renderTextareaFields(field){
        return (
            <div key={field} className="form-group row">
                <label
                    className="col-sm-2 col-form-label float-right"
                    htmlFor={field}>{field}</label>
                <div className="col-sm-10">
                    <textarea
                        className="form-control"
                        name={field}
                        value={this.state[field]}
                        onChange={(e)=>{ this.handleChange(field, e.target.value) }}
                    />
                </div>
            </div>
        )
    }

    renderTextFields(field, type){
        return (
            <div key={field} className="form-group row">
                <label
                    className="col-sm-2 col-form-label float-right"
                    htmlFor={field}>{field}</label>
                <div className="col-sm-10">
                    <input
                        className="form-control"
                        type={type}
                        name={field}
                        value={this.state[field]}
                        onChange={(e)=>{ this.handleChange(field, e.target.value) }}
                    />
                </div>
            </div>
        )
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                {
                    this.props.editableFields.map((field)=>{
                        if(
                            field.type === 'text'
                            || field.type === 'number'
                            || field.type === 'array'
                        ){
                            return this.renderTextFields(field.name, field.type)
                        } else if(field.type === 'textarea') {
                            return this.renderTextareaFields(field.name)
                        }
                    })
                }
                <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block">
                    Save
                </button>
            </form>
        )
    }
}

EditForm.propTypes = {
    data: PropTypes.object.isRequired,
    editableFields: PropTypes.array.isRequired,
    onSubmitForm: PropTypes.func.isRequired
}

export default EditForm