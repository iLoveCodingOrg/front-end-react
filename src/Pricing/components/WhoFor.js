import React from 'react'
import Video from '../../Video/components/Video'
import { CheckMark } from '../../_common'

export default function () {
  return (
    <div className="flex flex-column align-items-center">
      <div className="col-md-10 col-lg-8 row mb-2">
        <div className="col-md-6">
          <Video videoSource="311500173" />
        </div>
        <div className="col-md-6">
          <h2>Who is iLoveCoding for?</h2>
          <h3 className="f-300">
            Designed for beginners, designers and entrepreneurs (Like me - Aziz). However I constantly get experienced developers from large companies join as well.
          </h3>
          <div>
            <CheckMark />
            {' '}
            Beginners
            <br />
            <CheckMark />
            {' '}
            Junior/Senior developers
            <br />
            <CheckMark />
            {' '}
            Developers from a different domain
            <br />
            <CheckMark />
            {' '}
            Entrepreneurs
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}
