import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getLessonBySlug, updateLessonById } from '../actions'
import { Edit } from '../../_common'

function mapStateToProps(state) {
  return {
    error: state.lessons.view.error,
    isLoading: state.lessons.view.isLoading,
    view: state.lessons.view.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getView: (slug) => {
      dispatch(getLessonBySlug(slug))
    },
    update: (id, payload) => dispatch(updateLessonById(id, payload)),
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
    name: 'sourceUrl',
    type: 'text',
  }, {
    name: 'demoUrl',
    type: 'text',
  }, {
    name: 'bodyContent',
    type: 'wysiwyg',
  }]

  return (
    <Edit
      {...props}
      editableFields={editableFields}
      of="lesson"
    />
  )
}))
