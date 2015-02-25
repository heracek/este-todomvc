import React from 'react'
import Router from 'react-router'
import routes from './routes'

/**
  @param {Object} data Server side data injected into app html.
*/
window.main = (data) => {
  // TODO: Check hashchange.
  Router.run(routes, Router.HistoryLocation, (Handler) => {
    // TODO: appState.fromJson
    React.render(<Handler />, document.body)
  })
}

if ('production' != process.env.NODE_ENV) {
  // Dev only code.
  // TODO: Report app errors.
}
