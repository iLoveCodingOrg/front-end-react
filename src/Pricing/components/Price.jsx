import React, { useState } from 'react'
import { connect } from 'react-redux'

import { content } from '../../_app/constants'
import { isOfferValidSelector } from '../../Offer'
import PriceBox from './PriceBox'
import Switch from './Switch'

const dataOriginal = {
  mastery: {
    lifeTime: {
      planType: 'mastery',
      name: content.mainProductName,
      // desc: <span>Best suited for self-learners who need some support</span>,
      price: 99,
      terms: 'One-time payment',
      terms2: 'Lifetime access',
      link: 'https://checkout.ilovecoding.org/full-stack-mastery',
      isPopular: false,
      billingInterval: null,
    },
  },
  // premium: {
  //   monthly: {
  //     planType: 'premium',
  //     name: 'PREMIUM',
  //     desc: (
  //       <span>
  //         Best suited for learners who need more hands-on-support
  //         {' '}
  //         <span className="color-green">(Weekly mentor group calls)</span>
  //       </span>
  //     ),
  //     originalPrice: 199,
  //     price: 199,
  //     terms: 'Paid Monthly',
  //     // terms2: 'Complete training + weekly group video-calls',
  //     link: '/checkout/ilc-premium-199m',
  //   },
  //   '6-month': {
  //     planType: 'premium',
  //     name: 'PREMIUM',
  //     desc: (
  //       <span>
  //         Best suited for learners who need more hands-on-support
  //         {' '}
  //         <span className="color-green">(Weekly mentor group video-calls)</span>
  //       </span>
  //     ),
  //     price: 67,
  //     terms: 'Billed $400 Every 6 Months',
  //     // terms2: 'Complete training + weekly group video-calls',
  //     link: '/checkout/ilc-premium-400sixm',
  //     isPopular: false,
  //   },
  // },
}

const data30 = {
  ...dataOriginal,
}

function Price({ id, className, isOfferValid }) {
  const data = (isOfferValid) ? data30 : dataOriginal
  const [selectedPlan] = useState('mastery')
  const [selectedVariant, setSelectedVariant] = useState('lifeTime')


  const handleSwitch = (event) => {
    setSelectedVariant(event.target.value)
  }

  const renderPriceBox = ({
    name,
    desc,
    originalPrice,
    price,
    terms,
    terms2,
    link,
    planType,
    billingInterval,
    isPopular = false,
    isClosed = false,
  }) => (
    <PriceBox
      name={name}
      desc={desc}
      originalPrice={originalPrice}
      price={price}
      terms={terms}
      terms2={terms2}
      link={link}
      planType={planType}
      isPopular={isPopular}
      isClosed={isClosed}
    />
  )

  return (
    <div id={id} className={`${className} flex flex-column align-items-center`}>
      {/* <div className="position-relative mb-1 mx-sm-auto mr-auto">
          <Switch
              style={{ maxWidth: '400px', minWidth: '320px' }}
              onChange={handleSwitch}
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
              <div className="badge bg-orange"><span className="oi oi-arrow-thick-left" /> Save up to 32%</div>
          </h5>
      </div> */}
      <div className="flex flex-wrap justify-content-center">
        {renderPriceBox(data[selectedPlan][selectedVariant])}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isOfferValid: isOfferValidSelector(state),
  }
}

export default connect(mapStateToProps)(Price)
