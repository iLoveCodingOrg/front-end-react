import React from 'react'
import { Link } from 'react-router-dom'

import { Copyrights } from '../'

export default () => (
    <footer className="d-flex flex-column mt-5 py-4 pt-md-5 border-top">
        <div className="align-self-center container">
            <div className="my-2">
                <span className="strong pr-1">Students</span>
                <Link to="/curriculum" className="text-muted u px-2">Full Curriculum</Link>
                <Link to="/pages/resources" className="text-muted u px-2">Tools &amp; Resources</Link>
                <Link to="/reviews" className="text-muted u px-2">Reviews</Link>
            </div>
            <div className="my-2">
                <span className="strong pr-1">Cheat sheets</span>
                <Link className="text-muted u px-2" to="/blog/htmlcss-cheatsheet">HTML &amp; CSS Cheatsheet</Link>
                <Link className="text-muted u px-2" to="/blog/js-cheatsheet">JavaScript Cheatsheet</Link>
            </div>
            <div className="my-2">
                <span className="strong pr-1">Company</span>
                <Link to="/blog" className="text-muted u px-2">Blog</Link>
                <Link to="/pages/about" className="text-muted u px-2">About us</Link>
                <Link to="/pages/affiliates" className="text-muted u px-2">Affiliates</Link>
                <a className="text-muted u px-2" href="mailto:support@ilovecoding.org">support@ilovecoding.org</a>
            </div>
            <div className="my-2">
                <span className="strong pr-1">Social</span>
                <a className="text-muted u px-2" href="https://www.facebook.com/pg/ilovecodingorg">Facebook</a>
                <a className="text-muted u px-2" href="https://www.instagram.com/ilovecoding/">Instagram</a>
                <a className="text-muted u px-2" href="https://twitter.com/ilovecodingorg">Twitter</a>
                <a className="text-muted u px-2" href="https://www.quora.com/profile/Aziz-Ali">Quora</a>
            </div>
            <Copyrights />
        </div>
    </footer>
)