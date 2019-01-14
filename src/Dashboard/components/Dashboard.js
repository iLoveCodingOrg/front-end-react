import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import PremiumSection from './PremiumSection'

export default function (){
    return (
        <div className="d-flex flex-column">
            <Helmet>
                <title>Dashboard - iLoveCoding</title>
            </Helmet>
            <section className="
                align-self-center
                col-md-8
                mt-3
                mb-5"
            >
                <h1 className="headline">
                    Dashboard
                </h1>
                <p className="lead text-muted">
                    Here you will find quick links to resources which are included in your membership.
                </p>
                <hr className="mb-1"/>
                <div className="row">
                    <div className="col-12 col-md-6 mt-5">
                        <div>
                            <h4>Start Training</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/curriculum">Full Curriculum</Link></li>
                                <li><Link to="/courses/core">Core Training</Link></li>
                                <li><Link to="/courses/projects">Practice Projects</Link></li>
                                <li><Link to="/questions">Questions/Answers</Link></li>
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
                        <div>
                            <h4>Private Student Community</h4>
                            <p>
                                <a target="_blank"  href="https://join.slack.com/t/ilovecoding/shared_invite/enQtNTIzNTI3MDIyNTY1LWE2Njc4YmU0MDkyN2EzYzA0YWU1YTE5ODU1OTA1OWNlNWE3ZGE1ZTg2MjQ0MDIzMmM4MWMxM2NiNmVjYjQyZmY">Join the Mentor-Moderated Private Student Community (on Slack)</a>.
                                <br/><br/>
                                Ask questions and get help. Make a point to help others, this will not only help your peers, it will actually exercise your ability to solve problems.
                                <br/><br/>
                                I have a <strong>"no-student left behind"</strong> policy! and to support that, I have created this <a target="_blank"  href="https://join.slack.com/t/ilovecoding/shared_invite/enQtNTIzNTI3MDIyNTY1LWE2Njc4YmU0MDkyN2EzYzA0YWU1YTE5ODU1OTA1OWNlNWE3ZGE1ZTg2MjQ0MDIzMmM4MWMxM2NiNmVjYjQyZmY">Private Student Community</a> for you to keep in touch with me.
                            </p>
                        </div>

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
