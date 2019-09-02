import React from 'react'

import LogoList from './LogoList'

import cvs from '../_app/images/companies/my-clients/cvs-health.png'
import uptake from '../_app/images/companies/my-clients/uptake.png'
import pg from '../_app/images/companies/my-clients/press-ganey.png'
import unitedAirlines from '../_app/images/companies/my-clients/united-airlines.png'

const data = [
  {
    altText: 'CVS Health',
    imgSrc: cvs,
    margin: '',
    padding: '5px 0',
  },
  {
    altText: 'Uptake',
    imgSrc: uptake,
    margin: '',
    padding: '20px 0',
  },
  {
    altText: 'Press Ganey',
    imgSrc: pg,
    margin: '',
    padding: '10px 0',
  },
  {
    altText: 'United Airlines',
    imgSrc: unitedAirlines,
    margin: '',
    padding: '0 0',
  },
]

export default () => (
  <div>
    <div className="my-3 t-center t-uppercase color-gray">
      <span>
                    Some clients I have built websites and apps for:
      </span>
    </div>
    <LogoList
      data={data}
      height={60}
    />
  </div>
)
