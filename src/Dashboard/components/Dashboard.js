import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import PremiumSection from './PremiumSection'
import StudentCommunity from './StudentCommunity'
import { Video } from '../../Video'

export default function (){
    return (
        <div className="d-flex flex-column">
            <Helmet>
                <title>Dashboard - iLoveCoding</title>
            </Helmet>
            <section className="
                align-self-center
                container
                mt-3
                mb-5"
            >
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9">
                        <h1 className="headline">Dashboard</h1>
                        <p className="lead text-muted">
                            Here you will find quick links to resources which are included in your membership.
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <Video videoSource="314907971" />
                    </div>
                </div>
                <hr className="mb-1"/>
                <div className="row">
                    <div className="col-12 col-md-6 mt-5">
                        <div>
                            <h4>Start Training</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/curriculum">Full Curriculum</Link></li>
                                <li><Link to="/courses/core">Core Training</Link></li>
                                <li><Link to="/courses/projects">Practice Projects</Link></li>
                            </ul>
                        </div>

                        <div className="mt-5">
                            <h4>Additional</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/pages/resources">Tools &amp; Resources</Link></li>
                                <li><a target="_blank" rel="noopener" href="https://ilovecoding.typeform.com/to/g6mTg8">Submit your success story</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-5">
                        <StudentCommunity />
                        <PremiumSection />
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-12 col-md-4 mt-5">
                        <h4>Account Settings</h4>
                        <ul className="list-unstyled">
                            <li><a to="/">Change Password</a></li>
                            <li><a to="/">Active / Past Enrollments</a></li>
                            <li><a to="/">Payments</a></li>
                        </ul>
                    </div> */}
                </div>
            </section>
        </div>
    )
}
