import React from 'react'
import { Link } from 'react-router-dom'

import { Copyrights } from '../'

export default () => (
    <footer className="mt-5 pt-4 pt-md-5 border-top">
        <div className="d-flex justify-content-around">
            <div className="">
                <h5>Students</h5>
                <ul className="list-unstyled">
                    <li><Link to="/courses" className="text-muted">All Courses</Link></li>
                    <li><Link to="/curriculum" className="text-muted">Full Curriculum</Link></li>
                    <li><Link to="/pages/resources" className="text-muted">Tools &amp; Resources</Link></li>
                    <li><a target="_blank" rel="noopener" href="https://ilovecoding.typeform.com/to/g6mTg8" className="text-muted">Submit success story</a></li>
                    {/* <li><Link to="/" className="text-muted">Podcast</Link></li> */}
                </ul>
            </div>
            <div className="">
                <h5>Company</h5>
                <ul className="list-unstyled text-small">
                    <li><Link to="/blog" className="text-muted">Blog</Link></li>
                    {/* <li><Link to="/" className="text-muted">Affiliates</Link></li> */}
                    <li><Link to="/pages/about" className="text-muted">About us</Link></li>
                    <li><a className="text-muted" href="https://www.facebook.com/pg/ilovecodingorg">Facebook</a></li>
                    <li><a className="text-muted" href="https://twitter.com/ilovecodingorg">@iLoveCodingOrg</a></li>
                </ul>
            </div>
        </div>
        <Copyrights />
    </footer>
)