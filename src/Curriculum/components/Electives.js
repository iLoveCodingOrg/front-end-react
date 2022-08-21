import React from 'react'

import PrintTraining from './PrintTraining'

const courses = [
  {
    name: 'Getting Good with Git',
    link: '/courses/git',
    thumbSrc: '//a.ilovecoding.org/thumb/git-intro.png',
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
        <small className="d-block color-gray">Electives:</small>
        Additional Training
      </h2>
      <h3 className="f-300 color-gray">
        This is additional supplementary training. Choose the topic that sparks your interest in any order.
      </h3>
      <p>
        <strong>Time investment</strong>
        <br />
        Use 2 weeks to pick up additional skills by choosing from the training below (Focus for week number 19 and 20)
      </p>
      <p className="card card-info mb-0">
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
