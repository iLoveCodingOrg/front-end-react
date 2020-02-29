import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import Add from './Add'
import View from './View'
import Edit from './Edit'
import List from './List'
import ListCore from './ListCore'
import ListProject from './ListProject'
import CourseLessonView from './CourseLessonView'
import { AsyncNotFound as NotFound } from '../../Page'
import withAuth from '../../withAuth'

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        strict
        path="/courses"
        component={withAuth(List, false)}
      />
      <Route
        exact
        strict
        path="/courses/core"
        component={withAuth(ListCore, false)}
      />
      <Route
        exact
        strict
        path="/courses/projects"
        component={withAuth(ListProject, false)}
      />
      <Route
        exact
        strict
        path="/courses/add"
        component={withAuth(Add)}
      />
      <Route
        exact
        strict
        path="/courses/:courseSlug/lessons/:lessonSlug"
        component={withAuth(CourseLessonView, false)}
      />
      <Route
        exact
        strict
        path="/courses/:slug"
        component={withAuth(View, false)}
      />
      <Route
        exact
        strict
        path="/courses/:slug/edit"
        component={withAuth(Edit)}
      />
      <Route
        component={withAuth(NotFound, false)}
      />
    </Switch>
  )
}
