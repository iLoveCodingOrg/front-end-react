import React from 'react'
import { Link } from 'react-router-dom'

import { PrintCourses } from '../'

const courses = [{
    name: 'Learn to use any Web API - Part 1',
    link: '/courses/use-web-api',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/api1-intro.jpg'
}, {
    name: 'Learn to use any Web API - Part 2',
    link: '/courses/use-web-api-part2',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/api2-1-intro.png'
}, {
    name: 'Getting Good with Git',
    link: '/courses/git',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/git-intro.png'
}, {
    name: 'Learn Object Oriented Programming with Javascript',
    link: '/courses/object-oriented-javascript',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/oopjs.gif'
}, {
    name: 'Learn Angular JS in 14 days',
    link: '/courses/learn-angular-js-in-14-days',
    thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/learnAngular-1-intro.png'
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
                    Electives:
                </small>
                Additional Training
            </h2>
            <p className="lead text-muted">
                These are additional supplimentary training. Choose the topic that spark your interest in any order.
            </p>
            <p className="mb-0"><strong>Note:</strong> Besure to read the prerequisite section under each training before starting the training.</p>
            <hr/>
            <PrintCourses courses={courses} />
        </section>
    )
}