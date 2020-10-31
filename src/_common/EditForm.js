import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Rte from './Rte'
// import Wysiwyg from './Wysiwyg'

function EditForm({ data, editableFields, onSubmitForm }) {
  const [isViewSource, setIsViewSource] = useState(false)
  const [fields, setFields] = useState(data)

  const handleChange = (field, value) => {
    setFields({
      ...fields,
      [field]: value,
    })
  }

  const handleViewSource = (e) => {
    setIsViewSource(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const preparedPayload = {}

    editableFields.forEach((item) => {
      const value = fields[item.name]
      if (item.type === 'array' && !Array.isArray(value)) {
        preparedPayload[item.name] = value.split(',')
      } else {
        preparedPayload[item.name] = value
      }
    })
    onSubmitForm(preparedPayload)
  }

  const renderViewSourceCheckbox = () => (
    <label
      className="flex align-items-center"
      htmlFor="view-source"
    >
      <input
        type="checkbox"
        id="view-source"
        onChange={handleViewSource}
        checked={isViewSource}
      />
        View Source
    </label>
  )

  const renderTextFields = (field, type) => (
    <div key={field} className="form-group">
      <label
        className="col-form-label"
        htmlFor={field}
      >
        {field}
      </label>
      <div>
        <input
          className="form-control"
          type={type}
          name={field}
          value={fields[field]}
          onChange={(e) => { handleChange(field, e.target.value) }}
        />
      </div>
    </div>
  )

  const renderTextarea = field => (
    <div key={field} className="form-group">
      <label
        className="col-form-label"
        htmlFor={field}
      >
        {field}
      </label>
      <div>
        <textarea
          className="form-control"
          name={field}
          value={fields[field]}
          onChange={(e) => { handleChange(field, e.target.value) }}
        />
      </div>
    </div>
  )

  const renderWysiwyg = field => (
    <div key={field}>
      <label
        htmlFor={field}
      >
        {field}
      </label>
      <div>
        {renderViewSourceCheckbox()}
        {isViewSource
          ? (
            <textarea
              rows="13"
              className=""
              name={field}
              value={fields[field]}
              onChange={(e) => { handleChange(field, e.target.value) }}
            />
          )
          : (
            // <Wysiwyg
            //   value={fields[field]}
            //   updateValue={newValue => setFields({
            //     ...fields,
            //     [field]: newValue,
            //   })}
            // />
            <Rte
              value={fields[field]}
              updateValue={newValue => setFields({
                ...fields,
                [field]: newValue,
              })}
            />
          )
          }
      </div>
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      {
          editableFields.map((field) => {
            if (
              field.type === 'text'
              || field.type === 'number'
              || field.type === 'array'
            ) {
              return renderTextFields(field.name, field.type)
            } if (field.type === 'textarea') {
              return renderTextarea(field.name)
            } if (field.type === 'wysiwyg') {
              return renderWysiwyg(field.name, field.type)
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

EditForm.propTypes = {
  data: PropTypes.object.isRequired,
  editableFields: PropTypes.array.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
}

export default EditForm
