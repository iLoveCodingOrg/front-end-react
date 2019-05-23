import React from 'react'
import PrintReviews from './PrintReviews'
import data from '../data'

class Reviews extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="d-flex justify-content-center">
        <div className="">
          <PrintReviews
            itemClasses="m-3 col-lg-4 col-12"
            data={data}
          />
        </div>
      </section>
    )
  }
}

export default Reviews
