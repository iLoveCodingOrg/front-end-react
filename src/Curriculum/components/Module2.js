import React from 'react'
import { Link } from 'react-router-dom'

import { PrintCourses } from '../'

const courses = [{
    name: 'Learn jQuery in 14 days',
    link: '/courses/learn-jquery-in-14-days',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/jQuery14-0-Intro.png'
}, {
    name: 'Learn & Master Bootstrap in a Week',
    link: '/courses/learn-master-bootstrap-in-a-week',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/bootstrap-1-intro.png'
}, {
    name: 'Learn React JS in 14 Days',
    link: '/courses/react',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/react/react0-intro.png'
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
        <section className="bg-light card p-4 p-md-5 mt-5">
            <h2>
                <small className="d-block text-muted">
                    Module 2:
                </small>
                Front-End Development
            </h2>
            <p className="lead text-muted mb-0">
                Learn how to make traditional and modern front-end applications. Learn the Javascript frameworks which are in demand today, and learn the techniques used by high-tech companies to build modern websites. Its all within reach here.
            </p>
            <hr/>
            <strong>Core Training</strong>
            <PrintCourses courses={courses} />
            <strong>Projects for Practice:</strong>
            <ul>
                <li><a href="">Build a Todo App with React</a></li>
                <li><a href="">Build a Book Search App with jQuery</a></li>
                <li><a href="">Build a Song Search App with React</a></li>
                <li><a href="">Build TopBar Feature</a></li>
            </ul>
            <strong>Module Outcomes:</strong>
            <p>Once you are done with this module you will be able to:</p>
            <ol>
                <li>Build modern and flashy websites</li>
                <li>Build interactive web app front-end</li>
                <li>Integrate your app with any sort of back-end</li>
                <li>Connect your app with any third-party API (whether it be Google, Facebook etc</li>
                <li>Call yourself a Front-End Developer</li>
                <li>Market Yourself as a Professional Developer and command a respectable salary</li>
            </ol>
        </section>
    )
}