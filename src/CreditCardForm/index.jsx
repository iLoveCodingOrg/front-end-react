import React from 'react'

function CreditCardForm() {
  return (
    <div>
      <div className="firstName">
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>
      <div className="lastName">
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>
      <div className="card">
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>
      <div className="expiration">
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>
      <div className="cvv">
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>
      <div className="zip">
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>
    </div>
  )
}

export default CreditCardForm
