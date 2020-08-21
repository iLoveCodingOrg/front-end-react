import React from 'react'
import Video from '../../Video/components/Video'
import { CheckMark } from '../../_common'

export default function () {
  return (
    <div className="container">
      <div className="grid-list-item align-items-center mb-2">
        <div><Video videoSource="311500669" /></div>
        <div>
          <h2>What will you build?</h2>
          <h3 className="f-300">
            With iLoveCoding your focus will be to apply your knowledge; For that we will build a bunch of projects so you learn and build your portfolio in the process.
          </h3>
          <div className="flex flex-wrap justify-space-around">
            <div>
              <CheckMark />
              {' '}
              Blog Design
              <br />
              <CheckMark />
              {' '}
              Simple To-do List App
              <br />
              <CheckMark />
              {' '}
              Snake game
              <br />
              <CheckMark />
              {' '}
              Calculator App
              <br />
              <CheckMark />
              {' '}
              Photo Slider
              <br />
              <CheckMark />
              {' '}
              Stop Watch
              <br />
              <CheckMark />
              {' '}
              Accordion Feature
              <br />
              <CheckMark />
              {' '}
              Tab Feature
              <br />
              <CheckMark />
              {' '}
              Location Finder
              {' '}
              <small>(Powered by Google Maps)</small>
              <br />
              <CheckMark />
              {' '}
              Song Search App
              {' '}
              <small>(Powered by iTunes API)</small>
              <br />
              <CheckMark />
              {' '}
              Book Search App
              {' '}
              <small>(Powered by Google Books)</small>
              <br />
              <CheckMark />
              {' '}
              Note Taking API
              {' '}
              <small>(with password protection)</small>
              <br />
              <CheckMark />
              {' '}
              Timer App
              <br />
              <CheckMark />
              {' '}
              Web Scraper
              <br />
              <CheckMark />
              {' '}
              Cryptocurrency Price Checker
              <br />
              <CheckMark />
              {' '}
              Scroll animation, and more
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
