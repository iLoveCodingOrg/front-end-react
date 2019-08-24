import React from 'react'
import { Input, useInput } from '../Controls'

function CreditCardForm() {
  return (
    <div>
      <Input name="firstName" label="First Name" />
      <Input name="lastName" label="Last Name" />
      <Input name="creditCard" label="Credit Card" />

      <Input name="expiration" label="Expiration" />
      <Input name="cvv" label="CVV" />
      <Input name="zippostalcode" label="Zip Code / Postal Code" />
    </div>
  )
}

export default CreditCardForm
