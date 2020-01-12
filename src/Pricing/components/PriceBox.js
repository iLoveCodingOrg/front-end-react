import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ProDetails from './ProDetails'
import PremiumDetails from './PremiumDetails'

class PriceBox extends React.Component {
  constructor(props) {
    super(props)
    this.renderCTA = this.renderCTA.bind(this)
  }

  renderPrice(number, isStrikethrough) {
    const wholeNumber = Math.floor(number)
    // const decimal = number.toFixed(2).toString().split('.')[1] || '00'
    return (
      <div
        style={{
          textDecoration: isStrikethrough && 'line-through',
        }}
      >
        <sup className="h3">$</sup>
        <span className="h1">{wholeNumber}</span>
        {/* <sup className="decimal h2">.{decimal}</sup> */}
        <span className="color-gray-dark">/mo</span>
      </div>
    )
  }

  renderCTA() {
    const { isClosed, link } = this.props
    if (isClosed) {
      return <Link to={link} className="btn btn-block btn-lg t-center btn-gray disabled">Closed</Link>
    }
    return <Link to={link} className="btn btn-block btn-lg t-center btn-primary">Get Instant Access</Link>
  }

  render() {
    const {
      name,
      desc,
      originalPrice,
      price,
      terms,
      terms2,
      planType,
      isPopular,
    } = this.props
    return (
      <div
        style={{ maxWidth: '500px', minWidth: '320px' }}
        className="card mb-2 b-primary"
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
            <div className="h4">
              <span className="badge bg-gray-dark">{name}</span>
            </div>
            <br />
            <span className="h3 f-300 em">{desc}</span>
            <div className="flex justify-content-center card-title pricing-card-title mb-0">
              {originalPrice && originalPrice !== price && this.renderPrice(originalPrice, true)}
              {this.renderPrice(price)}
            </div>

            <div className="color-gray mb-1">
              {terms}
              <br />
              {terms2}
            </div>
          </div>

          {this.renderCTA()}

          { planType === 'pro' && <ProDetails />}
          { planType === 'premium' && <PremiumDetails />}

          {this.renderCTA()}

        </div>
      </div>
    )
  }
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
