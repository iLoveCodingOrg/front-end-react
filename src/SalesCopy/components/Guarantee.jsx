import React from 'react'

export default function ({ id, className }) {
  return (
    <div id={id} className={`${className} flex justify-content-center`}>
      <div>
        <div className="card card-warning">
          <h2 className="t-center text-dark">
            <span role="img" aria-label="Sheild Emoji">🛡️</span>&nbsp;
            7-Day Full Refund Policy
          </h2>
          <p>
            If you are not happy with your purchase for any reason whatsoever, please request a refund by emailing
            {' '}
            <u>support@ilovecoding.org</u>
            {' '}
            within the first 7-days of your purchase, and we will promptly issue a full refund.
            <br />
            <br />
            We only want to keep your money if you think we have earned it.
          </p>
        </div>
      </div>
    </div>
  )
}
