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
                    No need to learn 10 programming languages. When you follow this curriculum, you will come out the other side as a confident software engineer who is able to build fully functional modern websites, and mobile Apps.
                </p>
                <p className="lead text-muted">
                    <strong>Trust the process - follow the modules: </strong>
                    Each module has core training along with a ton of practice projects. These practice projects will give you real life training on how to think like a developer and go from a blank screen to a fully finished application.
                </p>
                <div className="row mt-4">
                    <div className="col-sm-6 d-flex mb-4 mb-sm-0">
                        <div className="alert bg-white py-4 border text-center mb-0 w-100">
                            <h5>Time to completion - 5 months</h5>
                            <p className="mb-0">
                                Study 10 hrs/week and complete within 5 months.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex">
                        <div className="alert bg-white py-4 border text-center mb-0 w-100">
                            <h5>Weekly group calls with your mentor</h5>
                            <p className="mb-0">
                                Bring your questions and problems to be addressed live.
                            </p>
                        </div>
                    </div>
                </div>
                <Module1 />
                <Module2 />
                <Module3 />
                <Module4 />
                <Electives />
            </div>
        </div>
    )
}