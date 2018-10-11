import React from 'react'

import LogoList from './LogoList'

import citi from '../_app/images/companies/students/citi.png'
import fnf from '../_app/images/companies/students/fidelity-national-financial.jpg'
import sony from '../_app/images/companies/students/sony.png'
import twitter from '../_app/images/companies/students/twitter.png'
import fortune500 from '../_app/images/companies/students/fortune-500.png'

const data = [
    {
        altText: 'Citi',
        imgSrc: citi,
        margin: '',
        padding: '10px 0'
    },
    {
        altText: 'Fidelity National Financial',
        imgSrc: fnf,
        margin: '',
        padding: '0px 0'
    },
    {
        altText: 'Sony',
        imgSrc: sony,
        margin: '',
        padding: '17px 0'
    },
    {
        altText: 'Twitter',
        imgSrc: twitter,
        margin: '',
        padding: '5px 0'
    },
    {
        altText: 'Fortune 500',
        imgSrc: fortune500,
        margin: '',
        padding: '0px 0'
    }
]

export default ()=>{
    return (
        <div>
            <div className="my-5 text-center text-uppercase text-muted">
                <span>
                    Where iLoveCoding students work at:
                </span>
            </div>
            <LogoList
                data={data}
                height={60}
            />
        </div>
    )
}