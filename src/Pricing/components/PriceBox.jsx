import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ProDetails from './ProDetails'
import PremiumDetails from './PremiumDetails'

function PriceBox({
  name,
  desc,
  originalPrice,
  price,
  terms,
  terms2,
  planType,
  billingInterval,
  isPopular,
  isClosed,
  link,
}) {
  const isExternalLink = link.slice(0, 8) === 'https://' || link.slice(0, 7) === 'http://'
  const renderPrice = (number, isStrikethrough) => {
    const wholeNumber = Math.floor(number)
    // const decimal = number.toFixed(2).toString().split('.')[1] || '00'
    return (
      <div
        style={{
          textDecoration: isStrikethrough && 'line-through',
        }}
      >
        <sup className="h2" style={{ top: '-20px' }}>$</sup>
        <span className="h1" style={{ fontSize: '4rem' }}>{wholeNumber}</span>
        {/* <sup className="decimal h2">.{decimal}</sup> */}
        {billingInterval === 'month' && <span className="color-gray-dark">/mo</span>}
        {billingInterval === 'year' && <span className="color-gray-dark">/yr</span>}
      </div>
    )
  }

  const renderCTA = () => {
    if (isClosed) {
      return <button type="button" className="btn btn-block btn-lg t-center btn-gray disabled">Closed</button>
    }

    if (isExternalLink) {
      return <a href={link} className="btn btn-block btn-lg t-center btn-primary">Get Instant Access</a>
    }

    return <Link to={link} className="btn btn-block btn-lg t-center btn-primary">Get Instant Access</Link>
  }

  return (
    <div
      style={{ maxWidth: '500px', minWidth: '320px' }}
      className="card mb-2 b-primary b-2 b-blue p-3"
    >
      <div className="align-self-center">
        {
          isPopular && (
            <h5 className="position-absolute" style={{ top: '5px', right: '5px' }}>
              <span className="badge bg-warning">Recommended</span>
            </h5>
          )
        }
        <div className="t-center">
          <div className="h3">
            <span className="badge bg-gray-dark">{name}</span>
          </div>
          <span className="h3 f-300 em">{desc}</span>
          <div className="flex justify-content-center card-title pricing-card-title mb-0">
            {originalPrice && originalPrice !== price && renderPrice(originalPrice, true)}
            {renderPrice(price)}
          </div>

          <div className="color-gray mb-1">
            {terms}
            <br />
            {terms2}
          </div>
        </div>

        {renderCTA()}

        { planType === 'pro' && <ProDetails />}
        { planType === 'mastery' && <ProDetails />}
        { planType === 'premium' && <PremiumDetails />}

        {renderCTA()}
      </div>
    </div>
  )
}

PriceBox.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  isPopular: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  planType: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  terms: PropTypes.string.isRequired,
}

export default PriceBox
