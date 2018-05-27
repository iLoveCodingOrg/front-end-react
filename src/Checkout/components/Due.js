import React from 'react'

export default function ({ price, billingDuration }) {

    return (
        <div className="card border p-3 d-flex flex-row justify-content-between mb-3">
            <div className="h4 mb-0">Due Today</div>
            <div className="h4 text-success mb-0">${price}{getBillingDurationText(billingDuration)}</div>
        </div>
    )
}

function getBillingDurationText(billingDuration){
    switch(billingDuration){
        case 'month':
            return '/month'
        case 'year':
            return '/year'
        default:
            return ''
    }
}