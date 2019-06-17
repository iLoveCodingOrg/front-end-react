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
import isPrivate from '../../isPrivate'

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        strict
        path="/pages"
        component={List}
      />
      <Route
        exact
        strict
        path="/pages/add"
        component={Add}
      />
      <Route
        exact
        strict
        path="/pages/:slug"
        component={View}
      />
      <Route
        exact
        strict
        path="/pages/:slug/edit"
        component={isPrivate(Edit)}
      />
      <Route
        component={NotFound}
      />
    </Switch>
  )
}
