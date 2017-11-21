import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../components/Template'
import About from '../components/About'
import Skicams from '../components/Skicams'
import Contact from '../components/Contact'

const createRoutes = () => {
  return (
    <Route
      path="/"
      component={Template}
    >
      <IndexRoute
        component={About}
      />
      <Route
        path="/about"
        component={About}
      />
      <Route
        path="/skicams"
        component={Skicams}
      />
      <Route
        path="/contact"
        component={Contact}
      />
    </Route>
  )
}

const Routes = createRoutes()

export default Routes
