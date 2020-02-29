import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import View from './View'
import List from './List'
import { AsyncNotFound as NotFound } from '../../Page'
import withAuth from '../../withAuth'

export default () => (
  <Switch>
    <Route
      exact
      strict
      path="/subscriptions"
      component={withAuth(List, false)}
    />
    <Route
      strict
      path="/subscriptions/:id"
      component={withAuth(View, false)}
    />
    <Route
      component={withAuth(NotFound, false)}
    />
  </Switch>
)
