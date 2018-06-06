import React from 'react'
import { Link } from 'react-router-dom'

import { PrintCourses } from '../'

const courses = [{
    name: 'Learn React Native & Build Mobile App (Android & iOS)',
    link: '/courses/react-native',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/react-native/0-intro.jpg'
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
                    Module 4:
                </small>
                Mobile Development
            </h2>
            <p className="lead text-muted mb-0">
                Learn how to build Mobile Applications for iPhone and Android with Javascript. Use the same technology used to build Instagram, Facebook, Airbnb and Walmart mobile apps.
            </p>
            <hr/>
            <strong>Core Training</strong>
            <PrintCourses courses={courses} />
            <strong>Projects for Practice:</strong>
            <ul>
                <li><a href="">Build Crypto Currency Price Checker App</a></li>
            </ul>
            <strong>Module Outcomes:</strong>
            <p>Once you are done with this module you will be able to:</p>
            <ol>
                <li>Learn to build Mobile apps for Android &amp; iOS devices</li>
            </ol>
        </section>
    )
}