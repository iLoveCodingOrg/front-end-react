import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { contentTypeToRoute } from '../_app/utils'
import EditForm from './AsyncEditForm'

export default function Add({
  add,
  of,
  history,
  editableFields,
  children,
}) {
  const pageTitle = `Add ${of}`

  useEffect(() => {
    // Add jQuery to page for react-trumbowyg
    if (!document.querySelector('#jquery')) {
      const script = document.createElement('script')
      script.id = 'jquery'
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
      document.body.appendChild(script)
    }
  }, [])

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
        <h1 className="my-2 text-center text-capitalize">{pageTitle}</h1>
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
  editableFields: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  of: PropTypes.oneOf(['question', 'lesson', 'course', 'page', 'blog']).isRequired,
}
