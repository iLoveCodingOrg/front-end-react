import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import Add from './Add'
import View from './View'
import Edit from './Edit'
import List from './List'
import { AsyncNotFound as NotFound } from '../../Page'
import withAuth from '../../withAuth'

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        strict
        path="/q"
        component={List}
      />
      <Route
        exact
        strict
        path="/q/add"
        component={Add}
      />
      <Route
        exact
        strict
        path="/q/:slug"
        component={View}
      />
      <Route
        exact
        strict
        path="/q/:slug/edit"
        component={withAuth(Edit)}
      />
      <Route
        component={NotFound}
      />
    </Switch>
  )
}
