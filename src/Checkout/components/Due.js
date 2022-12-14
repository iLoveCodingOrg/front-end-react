import React from 'react'

export default function Due({ price, billingDuration, billingCycles }) {
  const getBillingDurationText = () => {
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

  const getBillingCyclesText = () => {
    if (billingCycles > 1) {
      return ` for ${billingCycles} ${billingDuration}s`
    }
    return null
  }

  return (
    <div>
      {/* // Payment plans and limited durations and all */}
      {billingCycles > 1 && (
        <div className="card flex space-between mb-1">
          <div className="h5 mb-0">Payment Terms</div>
          <div className="h5 mb-0">
            $
            {price}
            {getBillingDurationText()}
            {getBillingCyclesText()}
          </div>
        </div>
      )
      }
      {/* // Simple Subscriptions */}
      <div className="card flex space-between mb-1">
        <div className="h4 mb-0">Due Today</div>
        <div className="h4 color-green mb-0 t-right">
          $
          {price}
          {getBillingDurationText()}

          {/* // 6-month subscription only */}
          {(billingDuration === '6-month') && (
            <div className="small">
              auto-renews every
              {' '}
              {billingDuration}
              s
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}
