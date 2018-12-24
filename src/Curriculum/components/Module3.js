import React from 'react'

import { PrintTraining } from '../'

const courses = [
    {
        name: 'Learn Node JS in a Week',
        link: '/courses/nodejs',
        thumbSrc: '//a.ilovecoding.org/thumb/nodeWk-1-intro.png'
    },
    {
        name: 'Learn Express.js in 14 days',
        link: '/courses/expressjs',
        thumbSrc: '//a.ilovecoding.org/thumb/express/express-0-intro.jpg'
    },
    {
        name: 'Crash Course to Databases & MongoDB',
        link: '/courses/mongodb',
        thumbSrc: '//a.ilovecoding.org/thumb/mongodb/mongodb-0-intro.jpg'
    }
]

const practice = [
    {
        name: 'Create a Simple HTTP Server with Node.js',
        link: '/courses/nodejs/lessons/create-a-simple-http-server-with-nodejs',
        thumbSrc: '//a.ilovecoding.org/thumb/nodeWk-8-httpServer.png'
    },
    {
        name: 'Project: Create a Web Scraper to Gather Information from the web',
        link: '/courses/nodejs/lessons/project-create-a-web-scraper-to-gather-information-from-the-web',
        thumbSrc: '//a.ilovecoding.org/thumb/nodeWk-10-scraper.png'
    },
    {
        name: 'Creating a Simple Web App with Node.js',
        link: '/courses/nodejs/lessons/creating-a-simple-web-app-with-nodejs',
        thumbSrc: '//a.ilovecoding.org/thumb/nodeWk-11-webapp.png'
    },
    {
        name: 'Project: Build a Note Taking App with Express.js',
        link: 'courses/expressjs-notes-app',
        thumbSrc: '//a.ilovecoding.org/thumb/express-p/express-p1-setup.jpg'
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
            <p className="lead text-muted">
                Learn how to make web application back-ends. Build Web APIs, security and authentication (i.e. Login Feature) and connect your app with the database
            </p>
            <p className="mb-0">
                <strong>Time to completion:</strong> 4 weeks (Focus for week number 13-16)
            </p>
            <PrintTraining
                title="Core Training"
                data={courses} />

            <PrintTraining
                title="Practice Projects"
                data={practice}
                maxWidth={190} />

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
                <li>Call yourself a Full-Stack JavaScript Developer</li>
            </ol>
        </section>
    )
}