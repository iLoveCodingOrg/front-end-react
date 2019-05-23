import React from 'react'
import PropTypes from 'prop-types'

class Section extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="" />
    )
  }
}

Section.propTypes = {
  className: PropTypes.string.isRequired,
}

export default Section
