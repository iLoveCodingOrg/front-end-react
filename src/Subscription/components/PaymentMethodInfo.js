import React from 'react'
import isEmpty from 'lodash/isEmpty'
import { Link } from 'react-router-dom'

export default function PaymentMethodInfo({creditCard, paypal, showUpdateBtn}){
    if(isEmpty(paypal)){
        const { cardType, last4, expirationDate } = creditCard
        return (
            <div>
                <p>
                    {cardType} ending in {last4} <br/>
                    Expiry: {expirationDate}
                </p>
                {showUpdateBtn && <Link to="/update-card" className="btn btn-primary">Update Card</Link>}
            </div>
        )
    } else {
        const { payerEmail, paymentId } = paypal
        return (
            <div>
                PayPal Email: {payerEmail}<br/>
                PayPay payment Id: {paymentId}
            </div>
        )
    }
}