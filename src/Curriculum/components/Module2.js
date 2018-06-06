import React from 'react'

export default ()=>{
    return (
        <section className="bg-light card p-5 mt-5">
            <h2>
                <small className="d-block text-muted">
                    Module 2:
                </small>
                Front-End Development
            </h2>
            <p className="lead text-muted mb-0">
                Describe this module, in good detail, and even add some video descriping it. Its better visually if it spans multiple lines.
            </p>
            <hr/>
            <strong>Core Training</strong>
            <ul>
                <li><a href="">Learn HTML &amp; CSS in 14 days</a></li>
                <li><a href="">Learn Javascript in 14 Days</a></li>
            </ul>
            <strong>Projects for practice:</strong>
            <ul>
                <li><a href="">Launch your website</a></li>
                <li><a href="">Build a calculator app</a></li>
            </ul>
        </section>
    )
}