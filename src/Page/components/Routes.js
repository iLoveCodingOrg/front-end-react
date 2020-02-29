import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import Add from './Add'
import View from './View'
import Edit from './Edit'
import List from './List'
import NotFound from './AsyncNotFound'
import withAuth from '../../withAuth'

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        strict
        path="/pages"
        component={withAuth(List, false)}
      />
      <Route
        exact
        strict
        path="/pages/add"
        component={withAuth(Add, false)}
      />
      <Route
        exact
        strict
        path="/pages/:slug"
        component={withAuth(View, false)}
      />
      <Route
        exact
        strict
        path="/pages/:slug/edit"
        component={withAuth(Edit)}
      />
      <Route
        component={withAuth(NotFound, false)}
      />
    </Switch>
  )
}
