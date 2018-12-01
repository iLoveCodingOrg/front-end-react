import React from 'react'

import { PrintTraining } from '../'

const courses = [
    {
        name: 'Learn HTML & CSS in 14 days',
        link: '/courses/htmlcss2',
        thumbSrc: '//a.ilovecoding.org/thumb/htmlcss2.gif'
    },
    {
        name: 'Learn JavaScript Correctly',
        link: '/courses/js2',
        thumbSrc: '//a.ilovecoding.org/thumb/js2.gif'
    },
    {
        name: 'Going Live: Putting Your Website Live',
        link: '/courses/going-live-putting-your-website-live',
        thumbSrc: '//a.ilovecoding.org/thumb/goingLive-part1.png'
    }
]

const practice = [
    {
        name: 'Project: Create a blog design from scratch using HTML and CSS',
        link: '/courses/htmlcss2/lessons/blog-design',
        thumbSrc: '//a.ilovecoding.org/thumb/HTMLCSS14-9-myBlogDesign-part1.png'
    },
    {
        name: 'Build a stopwatch app with pure JavaScript',
        link: '/lessons/stopwatch-app-with-pure-javascript',
        thumbSrc: '//a.ilovecoding.org/thumb/stopWatch.png'
    },
    {
        name: 'Build a simple To-Do App with pure JavaScript',
        link: '/lessons/simple-to-do-app-with-pure-javascript',
        thumbSrc: '//a.ilovecoding.org/thumb/todoApp.png'
    },
    {
        name: 'Build a Rock Paper Scissor app with pure JavaScript',
        link: '/lessons/rock-paper-scissor-app-with-pure-javascript',
        thumbSrc: '//a.ilovecoding.org/thumb/rockPaperScissor.png'
    },
    {
        name: 'Project: Build Your Own Snake Game with JavaScript',
        link: '/courses/snake-game',
        thumbSrc: '//a.ilovecoding.org/thumb/snakegame1.png'
    },
]

export default ()=>{
    return (
        <section className="bg-light card p-4 p-md-5 mt-4">
            <h2>
                <small className="d-block text-muted">
                    Module 1:
                </small>
                Fundamentals
            </h2>
            <p className="lead text-muted">
                Learn the fundamentals of the HTML, CSS and JavaScript. This magic combination of three is the reason we enjoy using millions of beautiful websites.
            </p>
            <p className="mb-0">
                <strong>Time to completion:</strong> 6 weeks (Focus for the first 6 weeks)
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