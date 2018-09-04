import React from 'react'

import { PrintTraining } from '../'

const courses = [
    {
        name: 'Learn to use any Web API - Part 1',
        link: '/courses/use-web-api',
        thumbSrc: '//img.ilovecoding.org/thumb/api1-intro.jpg'
    },
    {
        name: 'Learn to use any Web API - Part 2',
        link: '/courses/use-web-api-part2',
        thumbSrc: '//img.ilovecoding.org/thumb/api2-1-intro.png'
    },
    {
        name: 'Getting Good with Git',
        link: '/courses/git',
        thumbSrc: '//img.ilovecoding.org/thumb/git-intro.png'
    },
    {
        name: 'Learn Object Oriented Programming with JavaScript',
        link: '/courses/object-oriented-javascript',
        thumbSrc: '//img.ilovecoding.org/thumb/oopjs.gif'
    },
    {
        name: 'Learn Angular JS in 14 days',
        link: '/courses/learn-angular-js-in-14-days',
        thumbSrc: '//img.ilovecoding.org/thumb/learnAngular-1-intro.png'
    },
    {
        name: 'How to set a full cover background image on your website',
        link: '/lessons/full-cover-background-image',
        thumbSrc: '//img.ilovecoding.org/thumb/fullCoverBackgroundImage.png'
    },
    {
        name: 'How to set fullscreen video in the background on your website',
        link: '/lessons/fullscreen-video-in-background',
        thumbSrc: '//img.ilovecoding.org/thumb/fullCoverBackgroundVideo.png'
    },
    {
        name: 'Load Page Elements when Scrolled to that Area',
        link: '/lessons/load-page-elements-when-scrolled-to-that-area',
        thumbSrc: '//img.ilovecoding.org/thumb/showOnScroll.png'
    },
]

export default ()=>{
    return (
        <section className="bg-light card p-4 p-md-5 mt-5">
            <h2>
                <small className="d-block text-muted">
                    Electives:
                </small>
                Additional Training
            </h2>
            <p className="lead text-muted">
                These are additional supplementary training. Choose the topic that spark your interest in any order.
            </p>
            <p className="">
                <strong>Time investment</strong> Use 2 weeks to pickup additional skills by choosing from a training below (Focus for week number 19 and 20)
            </p>
            <p className="alert alert-info mb-0"><strong>Note:</strong> Be sure to read the prerequisite section under each training before starting the training.</p>

            <PrintTraining
                title="Core Training"
                data={courses} />

        </section>
    )
}