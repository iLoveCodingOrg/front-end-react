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
                    No need to learn 10 programing languages. When you follow this curriculum, you will come out the other side as a confident software engineer who is able to build fully functional modern web sites, and mobile Apps.
                </p>
                <p className="lead text-muted">
                    Trust the process, follow the modules...
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