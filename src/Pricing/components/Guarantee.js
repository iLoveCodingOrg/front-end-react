import React from 'react'

export default function () {
  return (
    <div className="flex justify-content-center">
      <div>
        <div className="p-1 alert-warning">
          <h3 className="text-center text-dark">
            <span role="img" aria-label="Sheild Emoji">🛡️</span>
            {' '}
            7-Day Full-Refund Policy
          </h3>
          <p>
            If you are not happy with your purchase for any reason whatsoever, please request a refund by emailing
            {' '}
            <u>support@ilovecoding.org</u>
            {' '}
            within the first 7-days of your purchase, and we will prompty issue a full-refund.
            <br />
            <br />
            We only want to keep your money if you think we have earned it.
            <br />
            <br />
            If you cancel after the first 7-days, you will continue to have access for the current month, and you will not be billed any further.
          </p>
        </div>
      </div>
    </div>
  )
}
