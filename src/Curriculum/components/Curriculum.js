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
                <h1>The Perfect Curriculum</h1>
                <p className="lead">
                    Follow this curriculum to go from zero to a professional software developer.
                </p>
                <div className="row mb-3">
                    <div className="col-sm-12 d-flex mb-4 mb-sm-0">
                        <div className="alert bg-gray-100 py-4 border text-center mb-0 w-100">
                            <h5>Time to completion - 5 months</h5>
                            <p className="mb-0">
                                Study 10 hrs/week and complete within 5 months.
                            </p>
                        </div>
                    </div>
                    {/* <div className="col-sm-6 d-flex">
                        <div className="alert bg-white py-4 border text-center mb-0 w-100">
                            <h5>Weekly group calls with your mentor</h5>
                            <p className="mb-0">
                                Bring your questions and problems to be addressed live.
                            </p>
                        </div>
                    </div> */}
                </div>
                <p className="lead">
                    By the time you are done with this curriculum you will have the complete skills to code and launch modern websites, web applications and even mobile apps from scratch. Plus you will have an impressive portfolio to land you a respectable job as a software developer.
                </p>
                <p className="lead">
                    We'll do all of this while focusing on one programming language, which is JavaScript. JavaScript is currently the most popular and versatile programing language on planet internet. In fact 95% of all top websites use JavaScript, and all the tech giants use it to build their websites and mobile apps: Facebook, Paypal, Google, LinkedIn, Walmart, Tesla, Apple, and even Microsoft uses it actively to build their apps.
                </p>
                <p className="lead">
                    <strong>Trust the process - follow the modules: </strong>
                    Each module has core training along with a ton of practice projects. These practice projects will give you real life training on how to think like a developer and go from a blank screen to a fully finished application.
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