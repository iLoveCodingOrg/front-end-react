import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { contentTypeToRoute } from '../_app/utils'

import { AsyncEditForm as EditForm } from '.'

class Add extends React.Component {
  constructor(props) {
    super(props)

    this.handelFormSubmit = this.handelFormSubmit.bind(this)
    this.prepareData = this.prepareData.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { slug } = this.props.match.params

    if (prevProps.match.params.slug !== slug) {
      this.props.getView(slug)
    }
  }

  componentDidMount() {
    // Add jQuery to page for react-trumbowyg
    if (!document.querySelector('#jquery')) {
      const script = document.createElement('script')
      script.id = 'jquery'
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
      document.body.appendChild(script)
    }
  }

  handelFormSubmit(payload) {
    const {
      of,
      add,
      history,
      editableFields,
    } = this.props

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

  prepareData() {
    const obj = {}

    this.props.editableFields.forEach(({ name }) => {
      obj[name] = ''
    })

    return obj
  }

  render() {
    const {
      of,
      editableFields,
    } = this.props
    const pageTitle = `Add ${of}`
    return (
      <div className="container">
        <div>
          <Helmet>
            <title>
              {pageTitle}
              {' '}
- iLoveCoding
            </title>
          </Helmet>
          <main>
            <h1 className="my-4 text-center text-capitalize">{pageTitle}</h1>
            {this.props.children}
            <EditForm
              key="new-edit-form"
              data={this.prepareData()}
              editableFields={editableFields}
              onSubmitForm={this.handelFormSubmit}
            />
          </main>
        </div>
      </div>
    )
  }
}

Add.propTypes = {
  add: PropTypes.func.isRequired,
  editableFields: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  of: PropTypes.oneOf(['question', 'lesson', 'course', 'page', 'blog']).isRequired,
}

export default withRouter(Add)
