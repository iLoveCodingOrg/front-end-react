import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Signup from './Signup'
import Play from './Play'
import Replay from './Replay'
import withAuth from '../../withAuth'

export default function Routes() {
  return (
    <Switch>
      <Route exact strict path="/webinar" component={withAuth(Signup, false)} />
      <Route exact strict path="/webinar/play" component={withAuth(Play, false)} />
      <Route exact strict path="/webinar/replay" component={withAuth(Replay, false)} />
    </Switch>
  )
}
