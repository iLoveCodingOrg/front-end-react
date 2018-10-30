import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <small className="d-block mt-5 mb-3 text-muted text-center">
        © 2014 - 2018 iLoveCoding Inc. ⚡ by drive and commitment 
        <Link to="/pages/privacy" className="pl-1 text-muted"><u>Privacy</u></Link>
        <Link to="/pages/terms" className="pl-1 text-muted"><u>Terms</u></Link>
    </small>
)