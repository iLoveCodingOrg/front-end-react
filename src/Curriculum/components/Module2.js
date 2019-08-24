import React from 'react'

import PrintTraining from './PrintTraining'

const courses = [
  {
    name: 'Learn jQuery in 14 days',
    link: '/courses/jquery',
    thumbSrc: '//a.ilovecoding.org/thumb/jQuery14-0-Intro.png',
  },
  {
    name: 'Learn & Master Bootstrap in a Week',
    link: '/courses/learn-master-bootstrap-in-a-week',
    thumbSrc: '//a.ilovecoding.org/thumb/bootstrap--25-intro.png',
  },
  {
    name: 'Learn React JS in 14 Days',
    link: '/courses/react',
    thumbSrc: '//a.ilovecoding.org/thumb/react/react0-intro.png',
  },
]

const practice = [
  {
    name: 'Project: Create a Top Bar Widget with jQuery',
    link: '/courses/jquery/lessons/project-create-a-top-bar-widget-with-jquery',
    thumbSrc: '//a.ilovecoding.org/thumb/jQuery14-7-1-projectTopBar.png',
  },
  {
    name: 'Project: Create Tabs functionality with jQuery',
    link: '/courses/jquery/lessons/project-create-tabs-functionality-with-jquery',
    thumbSrc: '//a.ilovecoding.org/thumb/jQuery14-7-2-projectTabs.png',
  },
  {
    name: 'Animate: Animating elements with jQuery',
    link: '/courses/jquery/lessons/animate-animating-elements-with-jquery',
    thumbSrc: '//a.ilovecoding.org/thumb/jQuery14-8-animate.png',
  },
  {
    name: 'Project: Create your own Image Carousel Slider with jQuery',
    link: '/courses/jquery/lessons/project-create-your-own-image-carousel-slider-with-jquery',
    thumbSrc: '//a.ilovecoding.org/thumb/jQuery14-12-projectSlider.png',
  },
  {
    name: 'Ajax: Create a Single Page App with jQuery',
    link: '/courses/jquery/lessons/ajax-create-a-single-page-app-with-jquery',
    thumbSrc: '//a.ilovecoding.org/thumb/jQuery14-13-ajaxSinglePage.png',
  },
  {
    name: 'Ajax: Create a Location Finder App using jQuery & Google Maps API',
    link: '/courses/jquery/lessons/ajax-create-a-location-finder-app-using-jquery-google-maps-api-part-1',
    thumbSrc: '//a.ilovecoding.org/thumb/jQuery-14-14-googleMapsAPI-part1.png',
  },
  {
    name: 'Build a Calculator App with jQuery',
    link: '/courses/calculator',
    thumbSrc: '//a.ilovecoding.org/thumb/calculator.png',

  },
  {
    name: 'Project: Building a Todo List App with React',
    link: '/courses/react/lessons/project-building-a-todo-list-app-with-react',
    thumbSrc: '//a.ilovecoding.org/thumb/react/react15-project-todolist.png',
  },
  {
    name: 'Project: Building a Timer App with React',
    link: '/courses/react-timer-app',
    thumbSrc: '//a.ilovecoding.org/thumb/react/react18-project-timer.png',
  },
  {
    name: 'Project: Building a Song Search App with React',
    link: '/courses/react-song-search-app',
    thumbSrc: '//a.ilovecoding.org/thumb/react/react21-project-song-search.png',
  },
]

export default () => (
  <section className="bg-light p-2 p-md-5 my-3 row border-top">
    <div className="col-xl-4">
      <h2>
        <small className="d-block text-muted">
          Module 2:
        </small>
        Modern Front-End Development
      </h2>
      <p className="lead text-muted">
        Learn how to make traditional and modern front-end applications. Learn the JavaScript frameworks which are in demand today, and learn the techniques used by high-tech companies to build modern websites. It's all within reach here.
      </p>
      <p>
        <strong>Time to completion:</strong>
        <br />
        6 weeks (Focus for week number 7-12)
      </p>
    </div>
    <div className="pl-xl-5 col-xl-8">
      <PrintTraining
        title="Core Training"
        data={courses}
      />
      <hr />
      <PrintTraining
        title="Practice Projects"
        data={practice}
        maxWidth={190}
      />

      <hr />
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
    </div>
  </section>
)
