import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import PremiumSection from './PremiumSection'
import StudentCommunity from './StudentCommunity'
import { Video } from '../../Video'

export default function () {
  return (
    <div className="flex flex-column">
      <Helmet>
        <title>Dashboard - iLoveCoding</title>
      </Helmet>
      <section className="
                align-self-center
                container
                mt-1
                mb-3"
      >
        <div>
          <div>
            <h1 className="headline">Dashboard</h1>
            <h3 className="f-300 color-gray">
              Here you will find quick links to resources which are included in your membership.
            </h3>
          </div>
          <div>
            <Video videoSource="314907971" />
          </div>
        </div>
        <hr className="mb--25" />
        <div>
          <div className="mt-3">
            <div>
              <h4>Start Training</h4>
              <ul className="list-unstyled">
                <li><Link to="/curriculum">Full Curriculum</Link></li>
                <li><Link to="/courses/core">Core Training</Link></li>
                <li><Link to="/courses/projects">Practice Projects</Link></li>
                <li className="d-inline-block pt--5 mt--5 b bt-1"><Link to="/pages/resources">Tools &amp; Resources</Link></li>
              </ul>
            </div>

            <div className="mt-3">
              <h4>Account Settings</h4>
              <ul className="list-unstyled">
                <li><Link to="/subscriptions">Subscription Info</Link></li>
                <li><Link to="/change-password">Change Password</Link></li>
                <li className="d-inline-block pt--5 mt--5 b bt-1">
                  Contact:
                  {' '}
                  <a href="mailto:support@ilovecoding.org">support@ilovecoding.org</a>
                </li>
              </ul>
            </div>

          </div>
          <div className="mt-3">
            <StudentCommunity />
            <PremiumSection />
          </div>
        </div>
      </section>
    </div>
  )
}
