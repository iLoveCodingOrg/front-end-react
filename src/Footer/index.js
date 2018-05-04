import React from 'react'
import logo from '../_main/images/ilovecoding-logo.svg'
import styles from './styles'

export default () => (
    <footer className="container pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
            <div className="col-4 text-center">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Cool stuff</a></li>
                    <li><a className="text-muted" href="#">Random feature</a></li>
                    <li><a className="text-muted" href="#">Team feature</a></li>
                    <li><a className="text-muted" href="#">Stuff for developers</a></li>
                    <li><a className="text-muted" href="#">Another one</a></li>
                    <li><a className="text-muted" href="#">Last time</a></li>
                </ul>
            </div>
            <div className="col-4 text-center">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Resource</a></li>
                    <li><a className="text-muted" href="#">Resource name</a></li>
                    <li><a className="text-muted" href="#">Another resource</a></li>
                    <li><a className="text-muted" href="#">Final resource</a></li>
                </ul>
            </div>
            <div className="col-4 text-center">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Team</a></li>
                    <li><a className="text-muted" href="#">Locations</a></li>
                    <li><a className="text-muted" href="#">Privacy</a></li>
                    <li><a className="text-muted" href="#">Terms</a></li>
                </ul>
            </div>
            <div className="col-12 text-center">
                <small className="d-block my-3 text-muted">
                    © 2018 iLoveCoding Inc.
                </small>
            </div>
        </div>
    </footer>
)