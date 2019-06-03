import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Signup from './Signup'
import Play from './Play'
import Replay from './Replay'

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        strict
        path="/webinar"
        component={Signup}
      />
      <Route
        exact
        strict
        path="/webinar/play"
        component={Play}
      />
      <Route
        exact
        strict
        path="/webinar/replay"
        component={Replay}
      />
    </Switch>
  )
}
