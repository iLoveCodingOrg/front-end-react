import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { isPaid } from '../../_user/selectors'
import { JOIN_STUDENT_COMMUNITY_LINK } from '../../_app/constants'

function StudentCommunity({ isPaid }) {
  return (
    <>
      <h3>Private Student Community</h3>
      {
        isPaid ? (
          <p>
            <a target="_blank" rel="noopener noreferrer" href={JOIN_STUDENT_COMMUNITY_LINK}>Join the Mentor-Moderated Private Student Community (on Slack).</a>
            <br />
            <br />
              I have a
            {' '}
            <strong>"no-student left behind"</strong>
            {' '}
              policy! and to support that, I have created this
            {' '}
            <a target="_blank" rel="noopener noreferrer" href={JOIN_STUDENT_COMMUNITY_LINK}>Private Student Community</a>
            {' '}
              for you to keep in touch with me.
            <br />
            <br />
              Ask questions and get help. Make a point to help others, this will not only help your peers, it will actually exercise your ability to solve problems.
          </p>
        ) : (
          <p>
            <Link to="pricing">Upgrade to iLoveCoding Premium</Link>
            {' '}
              to unlock the private student community.
            <Link to="pricing" className="badge bg-success">Upgrade to PREMIUM</Link>
          </p>
        )
      }
    </>
  )
}

function mapStateToProps(state) {
  return {
    isPaid: isPaid(state),
  }
}

export default connect(mapStateToProps)(StudentCommunity)
