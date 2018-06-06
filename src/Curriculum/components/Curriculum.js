import React from 'react'
import { Helmet } from 'react-helmet'

import {
    Module1,
    Module2,
    Module3,
    Module4,
    Electives
} from '../'

export default ()=>{
    return (
        <div className="d-flex flex-column">
            <Helmet><title>Curriculum</title></Helmet>
            <div className="align-self-center col-md-10 col-lg-8 mt-3">
                <h1 className="headline">Curriculum</h1>
                <p className="lead text-muted">
                    Here you will find quick links to resources which are included in your enrollment.
                </p>
                <Module1 />
                <Module2 />
                <Module3 />
                <Module4 />
                <Electives />
            </div>
        </div>
    )
}