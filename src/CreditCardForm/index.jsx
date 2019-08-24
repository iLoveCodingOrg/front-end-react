import React from 'react'
import { Input, useInput } from '../Controls'

function CreditCardForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex">
        <Input
          className="w-100 mb-2 mr-2"
          name="firstName"
          label="First Name"
        />
        <Input
          className="w-100 mb-2"
          name="lastName"
          label="Last Name"
        />
      </div>
      <div className="flex">
        <Input
          className="w-100 mb-2"
          name="creditCard"
          label="Credit Card"
        />
      </div>
      <div className="flex">
        <Input
          className="w-100 mb-2 mr-2"
          name="expiration"
          label="Expiration"
        />
        <Input
          className="w-100 mb-2 mr-2"
          name="cvv"
          label="CVV"
        />
        <Input
          className="w-100 mb-2"
          name="zippostalcode"
          label="Zip Code / Postal Code"
        />
      </div>
      <button className="btn btn-primary w-100" type="submit">Update Credit Card</button>
    </form>
  )
}

export default CreditCardForm
