import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Loading from '../Loading'
import ErrorBox from '../ErrorBox'

import EditForm from './AsyncEditForm'

export default function Edit({
  of,
  isLoading,
  error,
  editableFields,
  match,
  update,
  getView,
  view,
  children,
}) {
  const { slug } = match.params
  const pageTitle = `Edit ${of}`

  useEffect(() => {
    getView(slug)
  }, [match, getView])

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

    update(view.id, preparedPayload)
      .then(({ isSuccess }) => {
        if (isSuccess) {
          window.location.reload()
        }
      })
  }

  return (
    <div className="container">
      { isLoading && <Loading /> }
      { !isLoading && error && <ErrorBox /> }
      { !isLoading && !error && (
        <>
          <Helmet title={`${pageTitle} - iLoveCoding`} />
          <main>
            <h1 className="my-2 text-center text-capitalize">{pageTitle}</h1>
            {children}
            <EditForm
              key={slug}
              editableFields={editableFields}
              data={view}
              onSubmitForm={handelFormSubmit}
            />
          </main>
        </>
      )}
    </div>
  )
}

Edit.propTypes = {
  editableFields: PropTypes.array.isRequired,
  getView: PropTypes.func.isRequired,
  of: PropTypes.oneOf(['question', 'lesson', 'course', 'page', 'blog']).isRequired,
  update: PropTypes.func.isRequired,
  view: PropTypes.object.isRequired,
}
