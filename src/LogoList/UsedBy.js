import React from 'react'

import LogoList from './LogoList'

import airbnb from '../_app/images/companies/used-by/airbnb.png'
import facebook from '../_app/images/companies/used-by/facebook.png'
import ibm from '../_app/images/companies/used-by/ibm.png'
import instagram from '../_app/images/companies/used-by/instagram.png'
import microsoft from '../_app/images/companies/used-by/microsoft.png'
import skype from '../_app/images/companies/used-by/skype.png'
import tesla from '../_app/images/companies/used-by/tesla.png'
import walmart from '../_app/images/companies/used-by/walmart.png'

const data = [
    {
        altText: 'Airbnb',
        imgSrc: airbnb,
        margin: '',
        padding: '9px 0'
    },
    {
        altText: 'Facebook',
        imgSrc: facebook,
        margin: '',
        padding: '0px 0'
    },
    {
        altText: 'IBM',
        imgSrc: ibm,
        margin: '',
        padding: '10px 0'
    },
    {
        altText: 'Instagram',
        imgSrc: instagram,
        margin: '',
        padding: '10px 0'
    },
    {
        altText: 'Microsoft',
        imgSrc: microsoft,
        margin: '',
        padding: '10px 0'
    },
    {
        altText: 'Skype',
        imgSrc: skype,
        margin: '',
        padding: '9px 0'
    },
    {
        altText: 'Tesla',
        imgSrc: tesla,
        margin: '',
        padding: '0px 0'
    },
    {
        altText: 'Walmart',
        imgSrc: walmart,
        margin: '',
        padding: '10px 0'
    }
]

export default ()=>{
    return (
        <div>
            <div className="text-center text-uppercase text-muted">
                <span>
                    Learn the same tools and tricks used by:
                </span>
            </div>
            <LogoList
                data={data}
                height={60}
            />
        </div>
    )
}