import React from 'react'
import { Route } from 'react-router-dom'
import App from './containers/App'
import ApplicationsContainer from './containers/ApplicationsContainer'
import ApplicationCreateContainer from './containers/ApplicationCreateContainer'

export default (
  <Route exact={true} path="/" component={App}>
    <Route path="/applications" component={ApplicationsContainer} />
    <Route path="/applications/create" component={ApplicationCreateContainer} />
  </Route>
)