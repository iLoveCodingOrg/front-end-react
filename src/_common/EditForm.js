import React from 'react'
import PropTypes from 'prop-types'

class EditForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            ...props.data
        }

        this.renderFields = this.renderFields.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

    renderFields(field){
        if(this.props.editableFields.indexOf(field) == -1){
            return null
        }

        return (
            <div key={field} className="form-group row">
                <label
                    className="col-sm-2 col-form-label float-right"
                    htmlFor={field}>{field}</label>
                <div className="col-sm-10">
                    <input
                        className="form-control"
                        type="text"
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
            <form onSubmit={(e)=>{
                e.preventDefault()
                this.props.onSubmitForm({ ...this.state })
            }}>
                {
                    Object.keys(this.props.data).map((fieldName)=>{
                        return this.renderFields(fieldName)
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