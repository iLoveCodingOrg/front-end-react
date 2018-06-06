import React from 'react'
import { Link } from 'react-router-dom'

import { PrintCourses } from '../'

const courses = [{
    name: 'Learn Node JS in a Week',
    link: '/courses/learn-node-js-in-a-week',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/nodeWk-1-intro.png'
}, {
    name: 'Learn Express.js in 14 days',
    link: '/courses/expressjs',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/express/express-0-intro.jpg'
}, {
    name: 'Crash Course to Databases & MongoDB',
    link: '/courses/mongodb',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/mongodb/mongodb-0-intro.jpg'
}]

const practice = [{
    name: 'Going Live: Putting Your Website Live',
    link: '/',
    thumbSrc: ''
}, {
    name: 'Build a calculator app',
    link: '/',
    thumbSrc: ''
}]

export default ()=>{
    return (
        <section className="bg-light card p-5 mt-5">
            <h2>
                <small className="d-block text-muted">
                    Module 3:
                </small>
                Back-End Development
            </h2>
            <p className="lead text-muted mb-0">
                Learn how to make web application back-ends. Build Web APIs, Security, Authentication (Login Feature) and connect your app with database
            </p>
            <hr/>
            <strong>Core Training</strong>
            <PrintCourses courses={courses} />
            <strong>Projects for Practice:</strong>
            <ul>
                <li><a href="">Build A Note Taking App</a></li>
            </ul>
            <strong>Module Outcomes:</strong>
            <p>Once you are done with this module you will be able to:</p>
            <ol>
                <li>Build Full-Stack Web Applications</li>
                <li>Build traditional Web Applications</li>
                <li>Build Modern Web Application Back-end</li>
                <li>Build Web API</li>
                <li>Build login capability for your app</li>
                <li>Implement security and permissions in your app</li>
                <li>Connect your app with a database</li>
                <li>Call yourself a Full-Stack Javascript Developer</li>
            </ol>
        </section>
    )
}