import React from 'react'
import PaymentMethodInfo from './PaymentMethodInfo'

export default ({ data }) => (
  <table className="table table-responsive table-striped">
    { renderHeader() }
    <tbody>
      { data.map(({
        id, createdAt, status, type, amount, currencyIsoCode, creditCard, paypal,
      }) => (
        <tr key={id}>
          <td>{id}</td>
          <td>{(new Date(createdAt)).toDateString()}</td>
          <td>{status}</td>
          <td>{type}</td>
          <td>
            {currencyIsoCode}
            {' '}
            {amount}
          </td>
          <td><PaymentMethodInfo creditCard={creditCard} paypal={paypal} /></td>
        </tr>
      ))}
    </tbody>
  </table>
)

function renderHeader() {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Date</th>
        <th>Status</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Payment Method</th>
      </tr>
    </thead>
  )
}
