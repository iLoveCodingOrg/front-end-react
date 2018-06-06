import React from 'react'
import { Link } from 'react-router-dom'

import { PrintCourses } from '../'

const courses = [{
    name: 'Learn HTML & CSS in 14 days',
    link: '/courses/learn-html-css-in-14-days',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/HTMLCSS14-1-intro.png'
}, {
    name: 'Learn Javascript in 14 Days',
    link: '/courses/learn-javascript-in-14-days',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/learnJSin14.png'
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
                    Module 1:
                </small>
                Fundamentals
            </h2>
            <p className="lead text-muted mb-0">
                Learn the fundamentals of the HTML, CSS and Javascript. This magic combination of three is the reason we enjoy using millions of beautiful websites.
            </p>
            <hr/>
            <strong>Core Training</strong>
            <PrintCourses courses={courses} />
            <strong>Projects for Practice:</strong>
            <ul>
                <li><a href="">Going Live: Putting Your Website Live</a></li>
                <li><a href="">Build a calculator app</a></li>
            </ul>
            <strong>Module Outcomes:</strong>
            <p>Once you are done with this module you will be able to:</p>
            <ol>
                <li>Build simple websites</li>
                <li>Launch your own website yourname.com</li>
                <li>Start Freelancing: Make websites for small businesses and non-profits</li>
                <li>Build simple mini applications</li>
                <li>Start thinking like a software engineer</li>
                <li>Call yourself a web designer</li>
            </ol>
        </section>
    )
}