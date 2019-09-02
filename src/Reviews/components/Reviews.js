import React from 'react'
import PrintReviews from './PrintReviews'
import data from '../data'

function Reviews() {
  return (
    <section className="flex justify-content-center">
      <PrintReviews data={data} />
    </section>
  )
}

export default Reviews
