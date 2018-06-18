import React from 'react'

import { PrintTraining } from '../'

const courses = [
    {
        name: 'Learn Node JS in a Week',
        link: '/courses/learn-node-js-in-a-week',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/nodeWk-1-intro.png'
    },
    {
        name: 'Learn Express.js in 14 days',
        link: '/courses/expressjs',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/express/express-0-intro.jpg'
    },
    {
        name: 'Crash Course to Databases & MongoDB',
        link: '/courses/mongodb',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/mongodb/mongodb-0-intro.jpg'
    }
]

const practice = [
    {
        name: 'Create a Simple HTTP Server with Node.js',
        link: '/courses/learn-node-js-in-a-week/lessons/create-a-simple-http-server-with-nodejs',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/nodeWk-8-httpServer.png'
    },
    {
        name: 'Project: Create a Web Scraper to Gather Information from the web',
        link: '/courses/learn-node-js-in-a-week/lessons/project-create-a-web-scraper-to-gather-information-from-the-web',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/nodeWk-10-scraper.png'
    },
    {
        name: 'Creating a Simple Web App with Node.js',
        link: '/courses/learn-node-js-in-a-week/lessons/creating-a-simple-web-app-with-nodejs',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/nodeWk-11-webapp.png'
    },
    {
        name: 'Project: Build a Note Taking App with Express.js',
        link: 'courses/expressjs-note-taking-app',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/express-p/express-p1-setup.jpg'
    }
]

export default ()=>{
    return (
        <section className="bg-light card p-4 p-md-5 mt-5">
            <h2>
                <small className="d-block text-muted">
                    Module 3:
                </small>
                Back-End Development
            </h2>
            <p className="lead text-muted mb-0">
                Learn how to make web application back-ends. Build Web APIs, security and authentication (i.e. Login Feature) and connect your app with the database
            </p>

            <PrintTraining
                title="Core Training"
                data={courses} />

            <PrintTraining
                title="Projects for Practice"
                data={practice} />

            <hr/>
            <h5>Module Outcomes:</h5>
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