import React from 'react'
import { Helmet } from 'react-helmet'
import Breadcrumbs from '../../Breadcrumbs'

export default () =>{
    const title = 'Change Password'
    return (
        <div className="d-flex flex-column">
            <Helmet>{title} - iLoveCoding</Helmet>
            <section className="
                align-self-center
                container
                mt-3
                mb-5"
            >
                <Breadcrumbs nodes={[
                    {
                        label: 'Back to Dashboard',
                        link: '/dashboard',
                    },
                    {
                        label: title,
                    }
                ]}/>
                <div className="row">
                    <div className="col-12 ">
                        <h1>Change Password</h1>
                    </div>
                </div>
                <hr className="mb-1"/>
                <div className="row">
                    plans, start date, status
                </div>
            </section>
        </div>
    )
}