import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="d-flex flex-column">
                <Helmet>
                    <title>
                        Dashboard | iLoveCoding
                    </title>
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
                        Here you will find quick links to resources which are included in your enrollment.
                    </p>
                    <hr className="mb-1"/>
                    <div className="row">
                        <div className="col-12 col-md-4 mt-5">
                            <h4>Start training</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/curriculum">Full Curriculum</Link></li>
                                <li><Link to="/courses?tag=front-end">All Courses</Link></li>
                                <li><a to="/qa">Questions &amp; Answers</a> (Coming soon)</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 mt-5">
                            <h4>Join the community</h4>
                            <ul className="list-unstyled">
                                <li><a target="_blank" href="https://join.slack.com/t/ilovecoding/shared_invite/enQtMzU5Nzk5NTUxNDQwLWNiZWM4YWIzODEyNzFmYjAyNGQyNzg2MTM0YmRjMmYxZDAwOGY4ODcwYzA4NDBhMTFlN2NkMTZjYWExNWNjZmQ">Private Slack chat</a></li>
                                <li><a target="_blank"  href="https://www.facebook.com/groups/1688313098134415">Private Facebook group</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 mt-5">
                            <h4>Ask for support</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/officehours">Schedule a call with Aziz</Link></li>
                                <li><Link to="/groupcalls">Join weekly group calls</Link></li>
                                <li><a target="_blank" href="mailto:support@ilovecoding.org">Email support</a></li>
                            </ul>
                            <p className="text-muted mb-0"><em>
                                We have a "no student left behind" policy! and to support that we have the above ways you can keep in touch with us.</em>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="col-12 col-md-4 mt-5">
                            <h4>Career</h4>
                            <ul className="list-unstyled">
                                <li><a to="/">Getting your first job</a></li>
                                <li><a to="/">Breaking into freelancing</a></li>
                            </ul>
                        </div> */}
                        <div className="col-12 col-md-4 mt-5">
                            <h4>Additional</h4>
                            <ul className="list-unstyled">
                                <li><a to="/">Tools &amp; Resources</a> (Coming soon)</li>
                                <li><a target="_blank" href="https://ilovecoding.typeform.com/to/g6mTg8">Submit your success story</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 mt-5">
                            <h4>Account Settings</h4>
                            <ul className="list-unstyled">
                                <li><a to="/">Change Password</a></li>
                                <li><a to="/">Active / Past Enrollments</a></li>
                                <li><a to="/">Payments</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Dashboard