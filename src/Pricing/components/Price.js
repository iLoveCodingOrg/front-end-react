import React from 'react'
import { connect } from 'react-redux'

import { selectors } from '../../Offer'
import PriceBox from './PriceBox'
import Switch from './Switch'

const dataOriginal = {
  // pro: {
  //   monthly: {
  //     planType: 'pro',
  //     name: 'PRO',
  //     desc: <span>Best suited for self-learners who need some support</span>,
  //     price: 37,
  //     terms: 'Paid Monthly',
  //     // terms2: 'Complete training to job-ready',
  //     link: '/checkout/ilc-pro-37m',
  //   },
  //   '6-month': {
  //     planType: 'pro',
  //     name: 'PRO',
  //     desc: <span>Best suited for self-learners who need some support</span>,
  //     price: 25,
  //     terms: 'Billed $150 Every 6 Months',
  //     // terms2: 'Complete training to job-ready',
  //     link: '/checkout/ilc-pro-150sixm',
  //     isPopular: false,
  //   },
  // },
  premium: {
    monthly: {
      planType: 'premium',
      name: 'PREMIUM',
      desc: (
        <span>
          Best suited for learners who need more hands-on-support
          {' '}
          <span className="color-green">(Weekly mentor group calls)</span>
        </span>
      ),
      price: 199,
      terms: 'Paid Monthly',
      // terms2: 'Complete training + weekly group calls',
      link: '/checkout/ilc-premium-199m',
    },
    '6-month': {
      planType: 'premium',
      name: 'PREMIUM',
      desc: (
        <span>
          Best suited for learners who need more hands-on-support
          {' '}
          <span className="color-green">(Weekly mentor group calls)</span>
        </span>
      ),
      price: 67,
      terms: 'Billed $400 Every 6 Months',
      // terms2: 'Complete training + weekly group calls',
      link: '/checkout/ilc-premium-400sixm',
      isPopular: false,
    },
  },
}

const data30 = {
  ...dataOriginal,
}

class Price extends React.Component {
  constructor(props) {
    super(props)

    this.handleSwitch = this.handleSwitch.bind(this)

    this.state = {
      selected: 'monthly',
    }
  }

  handleSwitch(event) {
    this.setState({
      selected: event.target.value,
    })
  }

  renderPriceBox({
    name,
    desc,
    price,
    terms,
    terms2,
    link,
    planType,
    isPopular = false,
    isClosed = false,
  }) {
    return (
      <PriceBox
        name={name}
        desc={desc}
        price={price}
        terms={terms}
        terms2={terms2}
        link={link}
        planType={planType}
        isPopular={isPopular}
        isClosed={isClosed}
      />
    )
  }

  render() {
    const { selected } = this.state
    let data
    if (this.props.isOfferValid) {
      data = data30
    } else {
      data = dataOriginal
    }

    return (
      <div className="flex flex-column align-items-center">
        {/* <div className="position-relative mb-1 mx-sm-auto mr-auto">
                      <Switch
                          style={{ maxWidth: '400px', minWidth: '320px' }}
                          onChange={this.handleSwitch}
                          selected={selected}
                          options={[{
                              name: "monthly",
                              label: "Monthly",
                              css: {
                                  width: "72px",
                                  left: "2px",
                              }
                          },
                          {
                              name: "6-month",
                              label: "6 Month (Save 32%)",
                              css: {
                                  width: "155px",
                                  left: "80px",
                              }
                          }]}
                      />
                      <h5 className="position-absolute" style={{ right: "-133px", bottom: 0 }}>
                          <div className="badge badge-orange"><span className="oi oi-arrow-thick-left" /> Save up to 32%</div>
                      </h5>
                  </div> */}
        <div className="flex flex-wrap justify-content-center">
          {/* {this.renderPriceBox(data.pro[selected])} */}
          {this.renderPriceBox(data.premium[selected])}
        </div>
        <div className="flex mt-2">
          <p className="mr--5">
            <span aria-label="thunder" role="img">⚡️</span>
            Cancel Anytime.
          </p>
          <p>
            <span aria-label="shield" role="img">🛡️</span>
            7-Day Full Refund Policy.
          </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isOfferValid: selectors.isOfferValid(state),
  }
}

export default connect(mapStateToProps)(Price)
