import DocumentTitle from 'react-document-title'
import React from 'react'
import state from '../state'
import {Link, RouteHandler} from 'react-router'

// Leverage webpack require. Good for feature toggle dead code removal.
require('../../../assets/css/app.styl')

export default React.createClass({

  componentDidMount() {
    state.on('change', () => {
      // ForceUpdate here is ok, you can still use awesome PureRenderMixin.
      // http://facebook.github.io/react/docs/pure-render-mixin.html
      this.forceUpdate()
    })
  },

  render() {
    return (
      <DocumentTitle title={'Este.js • TodoMVC'}>
        <div className="app">
          <div className="page">
            <header>
              <ul>
                <li><Link to="home">{'Home'}</Link></li>
              </ul>
            </header>
            <RouteHandler />
            <footer>
              <p>{'Footer'}</p>
            </footer>
          </div>
        </div>
      </DocumentTitle>
    )
  }

})
