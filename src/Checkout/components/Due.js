import React from 'react'

export default function ({ price, billingDuration, billingCycles }) {
  return (
    <div>
      {/* // Payment plans and limited durations and all */}
      {billingCycles > 1 ? (
        <div className="card p-3 d-flex flex-row justify-content-between mb-3">
          <div className="h5 mb-0">Payment Terms</div>
          <div className="h5 mb-0">
                        $
            {price}
            {getBillingDurationText(billingDuration)}
            {getBillingCyclesText(billingCycles, billingDuration)}
          </div>
        </div>
      ) : null
            }
      {/* // Simple Subscriptions */}
      <div className="card p-3 d-flex flex-row justify-content-between mb-3">
        <div className="h4 mb-0">Due Today</div>
        <div className="h4 text-success mb-0 text-right">
                    $
          {price}
          {getBillingDurationText(billingDuration)}

          {/* // 6-month subscription only */}
          {(billingDuration === '6-month') ? (
            <div className="small">
                            auto-renews every
              {' '}
              {billingDuration}
s
            </div>
          ) : null
                    }
        </div>
      </div>
    </div>
  )
}

function getBillingDurationText(billingDuration) {
  switch (billingDuration) {
    case 'month':
      return '/month'
    case 'year':
      return '/year'
    case '6-month':
      return '/six-month'
    default:
      return ''
  }
}

function getBillingCyclesText(billingCycles, billingDuration) {
  if (billingCycles > 1) {
    return ` for ${billingCycles} ${billingDuration}s`
  }
  return null
}
