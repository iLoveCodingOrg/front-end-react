import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import PremiumSection from './PremiumSection'
import StudentCommunity from './StudentCommunity'
import { Video } from '../../Video'

export default function () {
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
        <hr className="mb-1" />
        <div className="row">
          <div className="col-12 col-md-6 mt-5">
            <div>
              <h4>Start Training</h4>
              <ul className="list-unstyled">
                <li><Link to="/curriculum">Full Curriculum</Link></li>
                <li><Link to="/courses/core">Core Training</Link></li>
                <li><Link to="/courses/projects">Practice Projects</Link></li>
                <li className="d-inline-block pt-2 mt-2 border-top"><Link to="/pages/resources">Tools &amp; Resources</Link></li>
              </ul>
            </div>

            <div className="mt-5">
              <h4>Account Settings</h4>
              <ul className="list-unstyled">
                <li><Link to="/subscriptions">Subscription Info</Link></li>
                <li><Link to="/change-password">Change Password</Link></li>
                <li className="d-inline-block pt-2 mt-2 border-top">
Contact:
                  <a href="mailto:support@ilovecoding.org">support@ilovecoding.org</a>
                </li>
              </ul>
            </div>

          </div>
          <div className="col-12 col-md-6 mt-5">
            <StudentCommunity />
            <PremiumSection />
          </div>
        </div>
      </section>
    </div>
  )
}
