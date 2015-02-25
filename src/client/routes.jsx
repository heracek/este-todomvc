import App from './components/app'
import NotFound from './components/notfound'
import React from 'react'
import Todos from './components/todos'
import {DefaultRoute, NotFoundRoute, Route} from 'react-router'

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Todos} name="home" />
    <NotFoundRoute handler={NotFound} name="not-found" />
    <Route handler={Todos} name="active" path="/active" />
    <Route handler={Todos} name="completed" path="/completed" />
  </Route>
)
