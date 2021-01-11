import React from 'react'
import Video from '../../Video/components/Video'
import { CheckMark } from '../../_common'

export default function () {
  return (
    <div className="container">
      <div className="grid-list-item align-items-start mb-2">
        <div><Video videoSource="311500669" /></div>
        <div>
          <h2>What will you build?</h2>
          <h3 className="f-300">
            With iLoveCoding your focus will be to apply your knowledge; For that we will build a bunch of projects so you learn and build your portfolio in the process.
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap space-around">
        <div className="px-1">
          <CheckMark />&nbsp;Blog Design<br />
          <CheckMark />&nbsp;Simple To-do List App<br />
          <CheckMark />&nbsp;Snake game<br />
          <CheckMark />&nbsp;Calculator App<br />
          <CheckMark />&nbsp;Photo Slider<br />
          <CheckMark />&nbsp;Stop Watch<br />
          <CheckMark />&nbsp;Accordion Feature<br />
          <CheckMark />&nbsp;Tab Feature<br />
        </div>
        <div className="px-1">
          <CheckMark />&nbsp;Location Finder&nbsp;<small>(Powered by Google Maps)</small><br />
          <CheckMark />&nbsp;Song Search App&nbsp;<small>(Powered by iTunes API)</small><br />
          <CheckMark />&nbsp;Book Search App&nbsp;<small>(Powered by Google Books)</small><br />
          <CheckMark />&nbsp;Note Taking API&nbsp;<small>(with password protection)</small><br />
          <CheckMark />&nbsp;Timer App<br />
          <CheckMark />&nbsp;Web Scraper<br />
          <CheckMark />&nbsp;Cryptocurrency Price Checker<br />
          <CheckMark />&nbsp;Scroll animation, and more
        </div>
      </div>
    </div>
  )
}
