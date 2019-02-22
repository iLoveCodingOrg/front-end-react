import React from 'react'
import { Link } from 'react-router-dom'

import { Copyrights } from '../'

export default () => (
    <footer className="d-flex flex-column mt-5 py-4 pt-md-5 border-top">
        <div className="align-self-center container">
            <div className="my-2">
                <span className="strong pr-1">Students</span>
                <Link to="/curriculum" className="text-muted u px-1">Full Curriculum</Link>
                <Link to="/pages/resources" className="text-muted u px-1">Tools &amp; Resources</Link>
                <Link to="/reviews" className="text-muted u px-1">Reviews</Link>
            </div>
            <div className="my-2">
                <span className="strong pr-1">Company</span>
                <Link to="/blog" className="text-muted u px-1">Blog</Link>
                <Link to="/pages/about" className="text-muted u px-1">About us</Link>
                <Link to="/pages/affiliates" className="text-muted u px-1">Affiliates</Link>
                <a className="text-muted u px-1" href="mailto:support@ilovecoding.org">support@ilovecoding.org</a>
            </div>
            <div className="my-2">
                <span className="strong pr-1">Social</span>
                <a className="text-muted u px-1" href="https://www.facebook.com/pg/ilovecodingorg">Facebook</a>
                <a className="text-muted u px-1" href="https://www.instagram.com/ilovecoding/">Instagram</a>
                <a className="text-muted u px-1" href="https://twitter.com/ilovecodingorg">Twitter</a>
                <a className="text-muted u px-1" href="https://www.quora.com/profile/Aziz-Ali">Quora</a>
            </div>
            <Copyrights />
        </div>
    </footer>
)