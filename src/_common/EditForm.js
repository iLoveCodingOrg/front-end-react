import React from 'react'
import PropTypes from 'prop-types'

class EditForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            ...props.data,
            title: props.data.title
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
        const whiteListedFields = [
            'slug',
            'title',
            'subTitle',
            'videoSource',
            'thumbnail',
            'access',
            'level',
            'technology',
            'topic'
        ]

        if(whiteListedFields.indexOf(field) == -1){
            return null
        }

        return (
            <div className="form-group row">
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
        const {
            title,
            subTitle,
            duration,
            courseDuration,
            lesson,
            bodyContent
        } = this.props.data
        return (
            <form>
                {
                    Object.keys(this.props.data).map((fieldName)=>{
                        return this.renderFields(fieldName)
                    })
                }
            </form>
        )
    }
}

EditForm.propTypes = {
    data: PropTypes.object.isRequired
}

export default EditForm