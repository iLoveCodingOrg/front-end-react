import React from 'react'

import PrintTraining from './PrintTraining'

const courses = [
  {
    name: 'Learn React Native & Build Mobile App (Android & iOS)',
    link: '/courses/react-native',
    thumbSrc: '//a.ilovecoding.org/thumb/react-native/0-intro.jpg',
  },
]

const practice = [
  {
    name: 'Project: Create a Cryptocurrency price checker app with React Native',
    link: '/courses/react-native-crypto-price',
    thumbSrc: '//a.ilovecoding.org/thumb/react-native/44-crypro-intro.jpg',
  },
]

export default () => (
  <section className="bg-light p-2 p-md-5 my-3 bt-1">
    <div>
      <h2>
        <small className="d-block text-muted">
          Module 4:
        </small>
        Mobile Development
      </h2>
      <h3 className="f-300 text-muted">
        Learn how to build Mobile Applications for iPhone and Android with JavaScript. Use the same technology used to build Instagram, Facebook, Airbnb and Walmart mobile apps.
      </h3>
      <p>
        <strong>Time to completion:</strong>
        <br />
        2 weeks (Focus for week number 17 and 18)
      </p>
    </div>
    <div className="pl-xl-5 ">
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
        <li>Learn to build Mobile apps for Android &amp; iOS devices</li>
      </ol>
    </div>
  </section>
)
