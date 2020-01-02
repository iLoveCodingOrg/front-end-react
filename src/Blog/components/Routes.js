import '../style.css'
import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import Add from './Add'
import View from './View'
import Edit from './Edit'
import List from './List'
import NotFound from './NotFound'
import withAuth from '../../withAuth'

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        strict
        path="/blog"
        component={List}
      />
      <Route
        exact
        strict
        path="/blog/add"
        component={Add}
      />
      <Route
        exact
        strict
        path="/blog/:slug"
        component={View}
      />
      <Route
        exact
        strict
        path="/blog/:slug/edit"
        component={withAuth(Edit)}
      />
      <Route
        component={NotFound}
      />
    </Switch>
  )
}
