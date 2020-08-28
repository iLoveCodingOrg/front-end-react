import React from 'react'
import logo from '../../_app/images/ilovecoding-logo.svg'

export default function Header({ productName, productDesc }) {
  return (
    <div>
      <div className="flex space-between align-items-center my-2">
        <div className="flex align-justify-center">
          <div className="navbar-brand mr-1">
            <div className="img-wrap">
              <img src={logo} alt="iLoveCoding.org Logo" />
            </div>
          </div>
          <div className="flex flex-column">
            <div className="h4 f-400 color-gray t-uppercase m-0">
              You are about to buy:
            </div>
            <h1 className="h2">
              {productName}
            </h1>
          </div>
        </div>
        <div className="card">
          Need help? support@ilovecoding.org
        </div>
      </div>
      <div className="card card-success mb-2">
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
  )
}
