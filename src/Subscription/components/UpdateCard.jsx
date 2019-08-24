import React, { useEffect } from 'react'
import CreditCardFrom from '../../CreditCardForm'

export default function UpdateCard() {
  // Show fields
  // on submit update card
  // on error show error
  // on success go back to the previous screen

  const handleSubmit = () => {
    // MAKE THE API CALL
  }

  return (
    <div>
      <h3>Update Credit Card</h3>
      <CreditCardFrom
        error
        onSubmitCb={handleSubmit}
      />
    </div>
  )
}
