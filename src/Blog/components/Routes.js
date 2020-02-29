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
        component={withAuth(List, false)}
      />
      <Route
        exact
        strict
        path="/blog/add"
        component={withAuth(Add, false)}
      />
      <Route
        exact
        strict
        path="/blog/:slug"
        component={withAuth(View, false)}
      />
      <Route
        exact
        strict
        path="/blog/:slug/edit"
        component={withAuth(Edit)}
      />
      <Route
        component={withAuth(NotFound, false)}
      />
    </Switch>
  )
}
