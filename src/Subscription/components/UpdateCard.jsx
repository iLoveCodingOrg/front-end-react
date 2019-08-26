import React, { useEffect } from 'react'
import CreditCardFrom from '../../CreditCardForm'

export default function UpdateCard({ match, history }) {
  const { id } = match.params

  const handleSubmit = () => {
    history.push(`/subscriptions/${id}`)
  }

  return (
    <div>
      <h3>Update Credit Card</h3>
      <CreditCardFrom
        error
        subscriptionId={id}
        onSuccessCb={handleSubmit}
      />
    </div>
  )
}
