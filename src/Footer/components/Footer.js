import React from 'react'
import { Link } from 'react-router-dom'

import Copyrights from './Copyrights'

export default () => (
  <footer className="flex flex-column mt-3 py-2 pt-md-5 bt-1">
    <div className="align-self-center container">
      <div className="my--5">
        <span className="strong pr--25">Students</span>
        <Link to="/curriculum" className="text-muted u px--5">Full Curriculum</Link>
        <Link to="/pages/resources" className="text-muted u px--5">Tools &amp; Resources</Link>
        <Link to="/reviews" className="text-muted u px--5">Reviews</Link>
      </div>
      <div className="my--5">
        <span className="strong pr--25">Cheat sheets</span>
        <Link className="text-muted u px--5" to="/blog/htmlcss-cheatsheet">HTML &amp; CSS Cheatsheet</Link>
        <Link className="text-muted u px--5" to="/blog/js-cheatsheet">JavaScript Cheatsheet</Link>
      </div>
      <div className="my--5">
        <span className="strong pr--25">Company</span>
        <Link to="/blog" className="text-muted u px--5">Blog</Link>
        <Link to="/pages/about" className="text-muted u px--5">About us</Link>
        <Link to="/pages/affiliates" className="text-muted u px--5">Affiliates</Link>
        <a className="text-muted u px--5" href="mailto:support@ilovecoding.org">support@ilovecoding.org</a>
      </div>
      <div className="my--5">
        <span className="strong pr--25">Social</span>
        <a className="text-muted u px--5" href="https://www.facebook.com/pg/ilovecodingorg">Facebook</a>
        <a className="text-muted u px--5" href="https://www.instagram.com/ilovecoding/">Instagram</a>
        <a className="text-muted u px--5" href="https://twitter.com/ilovecodingorg">Twitter</a>
        <a className="text-muted u px--5" href="https://www.quora.com/profile/Aziz-Ali">Quora</a>
      </div>
      <Copyrights />
    </div>
  </footer>
)
