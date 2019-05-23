import React from 'react'

import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'


class Wrap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Wrap
