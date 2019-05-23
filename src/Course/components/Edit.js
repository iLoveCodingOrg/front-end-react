import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getCourseBySlug, updateCourseById } from '../actions'
import { Edit } from '../../_common'

function mapStateToProps(state) {
  return {
    error: state.courses.view.error,
    isLoading: state.courses.view.isLoading,
    view: state.courses.view.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getView: (slug) => {
      dispatch(getCourseBySlug(slug))
    },
    update: (id, payload) => dispatch(updateCourseById(id, payload)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)((props) => {
  const editableFields = [{
    name: 'slug',
    type: 'text',
  }, {
    name: 'title',
    type: 'text',
  }, {
    name: 'subTitle',
    type: 'textarea',
  }, {
    name: 'videoSource',
    type: 'text',
  }, {
    name: 'thumbnail',
    type: 'text',
  }, {
    name: 'duration',
    type: 'text',
  }, {
    name: 'access',
    type: 'number',
  }, {
    name: 'level',
    type: 'number',
  }, {
    name: 'technology',
    type: 'array',
  }, {
    name: 'topic',
    type: 'array',
  }, {
    name: 'lesson',
    type: 'array',
  }, {
    name: 'bodyContent',
    type: 'wysiwyg',
  }]

  return (
    <Edit
      {...props}
      editableFields={editableFields}
      of="course"
    />
  )
}))
