import '../../node_modules/react-trumbowyg/dist/trumbowyg.min.css'
import Editor from 'react-trumbowyg'

import React from 'react'
import PropTypes from 'prop-types'


class EditForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isViewSource: false,
      ...props.data,
    }

    this.handleViewSource = this.handleViewSource.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderViewSourceCheckbox = this.renderViewSourceCheckbox.bind(this)
    this.renderTextFields = this.renderTextFields.bind(this)
    this.renderTextarea = this.renderTextarea.bind(this)
    this.renderWysiwyg = this.renderWysiwyg.bind(this)
  }


  handleChange(field, value) {
    this.setState({
      [field]: value,
    })
  }

  handleViewSource(e) {
    this.setState({
      isViewSource: e.target.checked,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const preparedPayload = {}

    this.props.editableFields.forEach((item) => {
      const value = this.state[item.name]
      if (item.type === 'array' && !Array.isArray(value)) {
        preparedPayload[item.name] = value.split(',')
      } else {
        preparedPayload[item.name] = value
      }
    })
    this.props.onSubmitForm(preparedPayload)
  }

  renderWysiwyg(field) {
    return (
      <div key={field} className="form-group row">
        <label
          className="col-md-2 col-form-label float-right"
          htmlFor={field}
        >
          {field}
        </label>
        <div className="col-md-10">
          {this.renderViewSourceCheckbox()}
          {
                        (this.state.isViewSource)
                          ? (
                            <textarea
                              rows="13"
                              className="form-control"
                              name={field}
                              value={this.state[field]}
                              onChange={(e) => { this.handleChange(field, e.target.value) }}
                            />
                          )
                          : (
                            <Editor
                              id="react-trumbowyg"
                              buttons={
                                [
                                  ['viewHTML'],
                                  ['formatting'],
                                  'btnGrp-semantic',
                                  ['link'],
                                  ['insertImage'],
                                  'btnGrp-justify',
                                  'btnGrp-lists',
                                  ['table'], // I ADDED THIS FOR THE TABLE PLUGIN BUTTON
                                  ['fullscreen'],
                                ]
                            }
                              resetCss={false}
                              autogrow
                              semantic={false}
                              data={this.props.data[field]}
                              placeholder="Type your text!"
                              onChange={(editor) => { this.handleChange(field, editor.target.innerHTML) }}
                              ref="trumbowyg"
                            />
                          )
                    }
        </div>
      </div>
    )
  }

  renderViewSourceCheckbox() {
    return (
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="view-source"
          onChange={this.handleViewSource}
          checked={this.state.isViewSource}
        />
        <label
          className="form-check-input"
          htmlFor="view-source"
        >
                    View Source
        </label>
      </div>
    )
  }

  renderTextFields(field, type) {
    return (
      <div key={field} className="form-group row">
        <label
          className="col-md-2 col-form-label float-right"
          htmlFor={field}
        >
          {field}
        </label>
        <div className="col-md-10">
          <input
            className="form-control"
            type={type}
            name={field}
            value={this.state[field]}
            onChange={(e) => { this.handleChange(field, e.target.value) }}
          />
        </div>
      </div>
    )
  }

  renderTextarea(field) {
    return (
      <div key={field} className="form-group row">
        <label
          className="col-md-2 col-form-label float-right"
          htmlFor={field}
        >
          {field}
        </label>
        <div className="col-md-10">
          <textarea
            className="form-control"
            name={field}
            value={this.state[field]}
            onChange={(e) => { this.handleChange(field, e.target.value) }}
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {
                    this.props.editableFields.map((field) => {
                      if (
                        field.type === 'text'
                            || field.type === 'number'
                            || field.type === 'array'
                      ) {
                        return this.renderTextFields(field.name, field.type)
                      } if (field.type === 'textarea') {
                        return this.renderTextarea(field.name)
                      } if (field.type === 'wysiwyg') {
                        return this.renderWysiwyg(field.name, field.type)
                      }
                    })
                }
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block"
        >
                    Save
        </button>
      </form>
    )
  }
}

EditForm.propTypes = {
  data: PropTypes.object.isRequired,
  editableFields: PropTypes.array.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
}

export default EditForm
