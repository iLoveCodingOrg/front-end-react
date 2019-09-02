import React from 'react'

import PrintTraining from './PrintTraining'

const courses = [
  {
    name: 'Learn to use any Web API - Part 1',
    link: '/courses/use-web-api',
    thumbSrc: '//a.ilovecoding.org/thumb/api1-intro.jpg',
  },
  {
    name: 'Learn to use any Web API - Part 2',
    link: '/courses/use-web-api-part2',
    thumbSrc: '//a.ilovecoding.org/thumb/api2-1-intro.png',
  },
  {
    name: 'Getting Good with Git',
    link: '/courses/git',
    thumbSrc: '//a.ilovecoding.org/thumb/git-intro.png',
  },
  {
    name: 'Learn Object Oriented Programming with JavaScript',
    link: '/courses/object-oriented-javascript',
    thumbSrc: '//a.ilovecoding.org/thumb/oopjs.gif',
  },
  {
    name: 'Learn Angular JS in 14 days',
    link: '/courses/learn-angular-js-in-14-days',
    thumbSrc: '//a.ilovecoding.org/thumb/learnAngular-1-intro.png',
  },
  {
    name: 'How to set a full cover background image on your website',
    link: '/courses/full-cover-background-image',
    thumbSrc: '//a.ilovecoding.org/thumb/fullCoverBackgroundImage.png',
  },
  {
    name: 'How to set fullscreen video in the background on your website',
    link: '/courses/fullscreen-video-in-background',
    thumbSrc: '//a.ilovecoding.org/thumb/fullCoverBackgroundVideo.png',
  },
  {
    name: 'Load Page Elements when Scrolled to that Area',
    link: '/courses/wow-js',
    thumbSrc: '//a.ilovecoding.org/thumb/showOnScroll.png',
  },
]

export default () => (
  <section className="bg-gray-lightest p-2 my-3 b bt-1">
    <div>
      <h2>
        <small className="d-block color-gray">
          Electives:
        </small>
        Additional Training
      </h2>
      <h3 className="f-300 color-gray">
        These are additional supplementary training. Choose the topic that spark your interest in any order.
      </h3>
      <p>
        <strong>Time investment</strong>
        <br />
        Use 2 weeks to pickup additional skills by choosing from a training below (Focus for week number 19 and 20)
      </p>
      <p className="alert alert-info mb-0">
        <strong>Note:</strong>
        {' '}
        Be sure to read the prerequisite section under each training before starting the training.
      </p>
    </div>
    <div className="pl-xl-5 ">
      <PrintTraining
        title="Core Training"
        data={courses}
      />
    </div>
  </section>
)
