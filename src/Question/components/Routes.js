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
        component={withAuth(List, false)}
      />
      <Route
        exact
        strict
        path="/q/add"
        component={withAuth(Add, false)}
      />
      <Route
        exact
        strict
        path="/q/:slug"
        component={withAuth(View, false)}
      />
      <Route
        exact
        strict
        path="/q/:slug/edit"
        component={withAuth(Edit)}
      />
      <Route
        component={withAuth(NotFound, false)}
      />
    </Switch>
  )
}
