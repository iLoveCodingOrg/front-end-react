import React from 'react'
import PrintReviews from './PrintReviews'
import data from '../data'

class Reviews extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="flex justify-content-center">
        <div>
          <PrintReviews
            itemClasses="m-1 "
            data={data}
          />
        </div>
      </section>
    )
  }
}

export default Reviews
