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

  renderPrice(number) {
    const wholeNumber = Math.floor(number)
    // const decimal = number.toFixed(2).toString().split('.')[1] || '00'
    return (
      <div className="h4x">
        <sup className="h3">$</sup>
        <span className="h1">{wholeNumber}</span>
        {/* <sup className="decimal h2">.{decimal}</sup> */}
        <span className="text-secondary">/mo</span>
      </div>
    )
  }

  renderCTA() {
    const { isClosed, link } = this.props
    if (isClosed) {
      return <Link to={link} className="btn btn-block btn-lg text-center btn-secondary disabled">Closed</Link>
    }
    return <Link to={link} className="btn btn-block btn-lg text-center btn-primary">Get Instant Access</Link>
  }

  render() {
    const {
      name,
      desc,
      price,
      terms,
      terms2,
      planType,
      isPopular,
    } = this.props
    return (
      <div
        style={{ maxWidth: '500px', minWidth: '320px' }}
        className="bg-white mx--5 mb-2 mb-lg-0 border-primary"
      >
        <div className="align-self-center p-2">
          {
            isPopular && (
              <h5 className="position-absolute" style={{ top: '5px', right: '5px' }}>
                <span className="badge badge-warning">Recommended</span>
              </h5>
            )
          }
          <div className="text-center">
            <div className="h4">
              <span className="px-1 badge badge-pill badge-dark border">{name}</span>
            </div>
            <br />
            <span className="h3 f-300 em">{desc}</span>
            <div className="card-title pricing-card-title mb-0">
              {this.renderPrice(price)}
            </div>

            <div className="text-muted mb-1">
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
