import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import View from './View'
import List from './List'
import { AsyncNotFound as NotFound } from '../../Page'

export default ()=>(
    <Switch>
        <Route
            exact
            strict
            path="/subscriptions"
            component={List} />
        <Route
            exact
            strict
            path="/subscriptions/:id"
            component={View} />
        <Route
            component={NotFound} />
    </Switch>
)