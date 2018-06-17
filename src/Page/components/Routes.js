import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { View, Edit, List } from '../'
import { NotFound } from '../'
import isPrivate from '../../isPrivate'

class Routes extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Switch>
                <Route
                    exact
                    strict
                    path="/pages"
                    component={List} />
                <Route
                    exact
                    strict
                    path="/pages/:slug"
                    component={View} />
                <Route
                    exact
                    strict
                    path="/pages/:slug/edit"
                    component={isPrivate(Edit)} />
                <Route
                    component={NotFound} />
            </Switch>
        )
    }
}

export default Routes