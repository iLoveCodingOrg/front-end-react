import React from 'react'

export default function ErrorBox() {
  return (
    <div
      role="button"
      tabIndex="0"
      className="flex flex-column align-items-center"
      onClick={() => Raven.lastEventId() && Raven.showReportDialog()}
      onKeyPress={() => Raven.lastEventId() && Raven.showReportDialog()}
    >
      <div className="card card-danger d-inline-block mt-1">
        We're sorry — something's gone wrong.
        {' '}
        <br />
        Our team has been notified, but click here fill out a report.
      </div>
      <img
        alt="Something went wrong on the computer"
        src="https://media.giphy.com/media/nVTa8D8zJUc2A/giphy.gif"
      />
    </div>
  )
}
