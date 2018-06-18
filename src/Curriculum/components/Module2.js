import React from 'react'

import { PrintTraining } from '../'

const courses = [
    {
        name: 'Learn jQuery in 14 days',
        link: '/courses/learn-jquery-in-14-days',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/jQuery14-0-Intro.png'
    },
    {
        name: 'Learn & Master Bootstrap in a Week',
        link: '/courses/learn-master-bootstrap-in-a-week',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/bootstrap-1-intro.png'
    },
    {
        name: 'Learn React JS in 14 Days',
        link: '/courses/react',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/react/react0-intro.png'
    }
]

const practice = [
    {
        name: 'Project: Create a Top Bar Widget with jQuery',
        link: '/lessons/project-create-a-top-bar-widget-with-jquery',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/jQuery14-7-1-projectTopBar.png'
    },
    {
        name: 'Project: Create Tabs functionality with jQuery',
        link: '/lessons/project-create-tabs-functionality-with-jquery',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/jQuery14-7-2-projectTabs.png'
    },
    {
        name: 'Animate: Animating elements with jQuery',
        link: '/lessons/animate-animating-elements-with-jquery',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/jQuery14-8-animate.png'
    },
    {
        name: 'Project: Create your own Image Carousel Slider with jQuery',
        link: '/lessons/project-create-your-own-image-carousel-slider-with-jquery',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/jQuery14-12-projectSlider.png'
    },
    {
        name: 'Ajax: Create a Single Page App with jQuery',
        link: '/lessons/ajax-create-a-single-page-app-with-jquery',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/jQuery14-13-ajaxSinglePage.png'
    },
    {
        name: 'Ajax: Create a Location Finder App using jQuery & Google Maps API',
        link: '/lessons/ajax-create-a-location-finder-app-using-jquery-google-maps-api-part-1',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/jQuery-14-14-googleMapsAPI-part1.png'
    },
    {
        name: 'Project: Building a Todo List App with React',
        link: '/courses/react/lessons/project-building-a-todo-list-app-with-react',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/react/react15-project-todolist.png'
    },
    {
        name: 'Project: Building a Timer App with React',
        link: '/courses/react-timer-app',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/react/react18-project-timer.png'
    },
    {
        name: 'Project: Building a Song Search App with React',
        link: '/courses/react-song-search-app',
        thumbSrc: 'https://ilovecoding-assets.s3.amazonaws.com/thumb/react/react21-project-song-search.png'
    },
]

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
                <li>Build modern and flashy websites</li>
                <li>Build interactive web app front-end</li>
                <li>Integrate your app with any sort of back-end</li>
                <li>Connect your app with any third-party API (whether it be Google, Facebook, etc.</li>
                <li>Call yourself a Front-End Developer</li>
                <li>Market yourself as a Professional Developer and command a respectable salary</li>
            </ol>
        </section>
    )
}