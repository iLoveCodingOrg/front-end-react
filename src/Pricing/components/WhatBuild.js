import React from 'react'
import Video from '../../Video/components/Video'
import { CheckMark } from '../../_common'

export default function (){
    return (
    <div className="d-flex flex-column align-items-center">
        <div className="col-md-10 col-lg-8 row mb-4">
            <div className="col-md-4">
                <Video videoSource="311500669" />
            </div>
            <div className="col-md-8">
                <h2>What will you build?</h2>
                <p className="lead">
                    With iLoveCoding your focus will be to apply your knowledge; For that we will build a bunch of projects so you learn and build your portfolio in the process.
                </p>
                <div className="d-flex flex-wrap justify-space-around">
                    <div className="mx-2"><CheckMark /> Blog Design</div>
                    <div className="mx-2"><CheckMark /> Simple Todo List App</div>
                    <div className="mx-2"><CheckMark /> Snake game</div>
                    <div className="mx-2"><CheckMark /> Calculator App</div>
                    <div className="mx-2"><CheckMark /> Photo Slider</div>
                    <div className="mx-2"><CheckMark /> Stop Watch</div>
                    <div className="mx-2"><CheckMark /> Accordion Feature</div>
                    <div className="mx-2"><CheckMark /> Tab Feature</div>
                    <div className="mx-2"><CheckMark /> Location Finder <small>(Powered by Google Maps)</small></div>
                    <div className="mx-2"><CheckMark /> Song Search App <small>(Powered by iTunes API)</small></div>
                    <div className="mx-2"><CheckMark /> Book Search App <small>(Powered by Google Books)</small></div>
                    <div className="mx-2"><CheckMark /> Note Taking API <small>(with password protection)</small></div>
                    <div className="mx-2"><CheckMark /> Timer App</div>
                    <div className="mx-2"><CheckMark /> Web Scraper</div>
                    <div className="mx-2"><CheckMark /> Cryptocurrency Price Checker</div>
                    <div className="mx-2"><CheckMark /> Scroll animation, and more</div>
                </div>
            </div>
        </div>
    </div>
)}
