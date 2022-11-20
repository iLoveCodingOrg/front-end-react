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
    thumbSrc: '//a.ilovecoding.org/thumb/bootstrap-1-intro.png',
  },
  {
    name: 'Learn React Native & Build Mobile App (Android & iOS)',
    link: '/courses/react-native',
    thumbSrc: '//a.ilovecoding.org/thumb/react-native/0-intro.jpg',
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
    name: 'Project: Create a Cryptocurrency price checker app with React Native',
    link: '/courses/react-native-crypto-price',
    thumbSrc: '//a.ilovecoding.org/thumb/react-native/44-crypro-intro.jpg',
  },
]

export default () => (
  <section className="bg-gray-lightest p-2 my-3 b bt-1">
    <div>
      <h2>
        <small className="d-block color-gray t-uppercase h4">
          Archieved:
        </small>
        Archieved Training
      </h2>
      <h3 className="f-300 color-gray">
        This are training which are no longer pivitol to your success, hence it has been moved to the archieved section.
      </h3>
    </div>
    <div className="pl-xl-5 ">
      <PrintTraining
        title="Courses"
        data={courses}
      />
      <hr />
      <PrintTraining
        title="Projects"
        data={practice}
        maxWidth={190}
      />
    </div>
  </section>
)
