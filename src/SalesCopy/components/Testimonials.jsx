import React from 'react'
import PrintReviews from '../../Reviews/components/PrintReviews'
import data from '../../Reviews/data'

function Testimonials({ itemNum }) {
  return (
    <section className="flex justify-content-center">
      <div className="">
        <PrintReviews
          containerClasses="flex-column"
          data={[data[itemNum || 0]]}
        />
      </div>
    </section>
  )
}

export default Testimonials
