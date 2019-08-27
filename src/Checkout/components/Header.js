import React from 'react'
import logo from '../../_app/images/ilovecoding-logo.svg'

export default function Header({ productName, productDesc }) {
  return (
    <div>
      <div className="flex justify-content-between flex-column-reverse flex-md-row align-items-center">
        <div className="flex align-items-center justify-content-center">
          <div className="navbar-brand mr-1 py-3 text-center">
            <div className="img-wrap">
              <img src={logo} alt="iLoveCoding.org Logo" />
            </div>
          </div>
          <div className="flex flex-column">
            <div className="h6 text-muted text-uppercase m-0">
              You are about to buy:
            </div>
            <h1 className="h2">
              {productName}
            </h1>
          </div>
        </div>
        <div className="alert-light alert my--5 border">
          Need help? support@ilovecoding.org
        </div>
      </div>
      <div>
        <div className="alert alert-success">
          <h4>🔒 Secure Checkout:</h4>
          <p>
            Congratulations! Once you complete this secure registration form, you'll have instant access to
            {' '}
            <strong>
              {productName}
            </strong>
            .
          </p>
          <p className="mb-0">{productDesc}</p>
        </div>
      </div>
    </div>
  )
}
