import React from 'react'
import HomeForm from './HomeForm'

class SevenDayCourse extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        className="
                    mx-2 mx-sm-0
                    my-3
                    align-self-center
                    card
                    p-4
                    border-primary
                    bg-gray-100
                    "
        style={{
          maxWidth: '640px',
        }}
      >
        <div className="h4">
                🔥 NEW: Free 7-Day Email Course
        </div>
        <p>
                    In this course you'll get a
          {' '}
          <em><u>jump start into programming</u></em>
. I'll have you write your first few lines of professional code and even have you put your first simple little website live on the internet.
        </p>
        <p>
                    I will show you the
          {' '}
          <em><u>right way of thinking</u></em>
          {' '}
so you are no longer afraid of coding - Its going to start making sense after all.
        </p>
        <p>
                    From theory to examples to practice, I'll show you the most effective path to becoming a job ready software developer that you've never seen before.
        </p>
        <p>
                    No spam. Easy unsubscribe if you hate it.
        </p>
        <HomeForm />
        <p className="small mt-2 mb-0">
                    Plus:
                    Along the way in the course, I'll also show you two little known yet Free tools used by top developers to do great work - I use the same tools on this site.
        </p>
        {/* <p className="mt-mb-0">
                    No prior computer science training necessary — I teach using simple words, skipping all the overly complicated language.
                </p> */}
      </div>
    )
  }
}

export default SevenDayCourse
