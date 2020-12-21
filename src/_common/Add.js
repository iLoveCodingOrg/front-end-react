import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { contentTypeToRoute } from '../_app/constants'
import EditForm from './EditForm'

export default function Add({
  add,
  of,
  history,
  editableFields,
  children,
}) {
  const pageTitle = `Add ${of}`

  const handelFormSubmit = (payload) => {
    const preparedPayload = {}
    editableFields.forEach((field) => {
      preparedPayload[field.name] = payload[field.name]
    })

    add(preparedPayload)
      .then(({ isSuccess, slug }) => {
        if (isSuccess) {
          const route = contentTypeToRoute[of]

          history.push(`/${route}/${slug}`)
        }
      })
  }

  const prepareData = () => {
    const obj = {}

    editableFields.forEach(({ name }) => {
      obj[name] = ''
    })

    return obj
  }
  const preparedData = prepareData()
  return (
    <div className="container">
      <Helmet title={`${pageTitle} - iLoveCoding`} />
      <main>
        <h1 className="t-center t-capitalize">{pageTitle}</h1>
        {children}
        <EditForm
          key="new"
          editableFields={editableFields}
          data={preparedData}
          onSubmitForm={handelFormSubmit}
        />
      </main>
    </div>
  )
}

Add.propTypes = {
  add: PropTypes.func.isRequired,
  children: PropTypes.any,
  editableFields: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  of: PropTypes.oneOf(['question', 'lesson', 'course', 'page', 'blog']).isRequired,
}
