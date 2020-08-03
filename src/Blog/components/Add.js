import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { addBlog } from '../actions'
// import { Add } from '../../_common'
const Add = React.lazy(() => import('../../_common/Add'))

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    add: payload => dispatch(addBlog(payload)),
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
    name: 'bodyContent',
    type: 'wysiwyg',
  }]

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Add
        {...props}
        editableFields={editableFields}
        of="blog"
      />
    </Suspense>
  )
}))
