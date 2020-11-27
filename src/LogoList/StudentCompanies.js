import React from 'react'

import LogoList from './LogoList'

import citi from '../_app/images/companies/students/citi.png'
import fnf from '../_app/images/companies/students/fidelity-national-financial.png'
import sony from '../_app/images/companies/students/sony.png'
import twitter from '../_app/images/companies/students/twitter.png'
import fortune500 from '../_app/images/companies/students/fortune-500.png'
import cvs from '../_app/images/companies/my-clients/cvs-health.png'
import starbucks from '../_app/images/companies/students/starbucks.png'
import libertyMutual from '../_app/images/companies/students/liberty-mutual.png'
import intuit from '../_app/images/companies/students/intuit.png'
import carsDotCom from '../_app/images/companies/students/carsdotcom.png'
import tsheets from '../_app/images/companies/students/tsheets.png'
import salesforce from '../_app/images/companies/students/salesforce.png'

const data = [
  {
    altText: 'Fortune 500',
    imgSrc: fortune500,
    margin: '',
    padding: '7px 0',
  },
  {
    altText: 'Citi',
    imgSrc: citi,
    margin: '',
    padding: '10px 0',
  },
  {
    altText: 'Fidelity National Financial',
    imgSrc: fnf,
    margin: '',
    padding: '7px 0',
  },
  {
    altText: 'Sony',
    imgSrc: sony,
    margin: '',
    padding: '17px 0',
  },
  {
    altText: 'Twitter',
    imgSrc: twitter,
    margin: '',
    padding: '10px 0',
  },
  {
    altText: 'CVS Health',
    imgSrc: cvs,
    margin: '',
    padding: '10px 0',
  },
  {
    altText: 'Cars.com',
    imgSrc: carsDotCom,
    margin: '',
    padding: '10px 0',
  },
  {
    altText: 'Starbucks',
    imgSrc: starbucks,
    margin: '',
    padding: '0px 0',
  },
  {
    altText: 'Intuit',
    imgSrc: intuit,
    margin: '',
    padding: '10px 0',
  },
  {
    altText: 'TSheets',
    imgSrc: tsheets,
    margin: '',
    padding: '7px 0',
  },
  {
    altText: 'Salesforce',
    imgSrc: salesforce,
    margin: '',
    padding: '0px 0',
  },
  {
    altText: 'Liberty Mutual',
    imgSrc: libertyMutual,
    margin: '',
    padding: '0px 0',
  },
]

export default () => (
  <div>
    <div className="my-3 t-center t-uppercase color-gray">
        iLoveCoding students work at:
    </div>
    <LogoList
      data={data}
      height={50}
    />
  </div>
)
