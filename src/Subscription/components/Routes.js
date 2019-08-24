import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import View from './View'
import List from './List'
import UpdateCard from './UpdateCard'
import { AsyncNotFound as NotFound } from '../../Page'

export default () => (
  <Switch>
    <Route
      exact
      strict
      path="/subscriptions"
      component={List}
    />
    <Route
      strict
      path="/subscriptions/:id"
      component={View}
    />
    <Route
      component={NotFound}
    />
  </Switch>
)
