import DocumentTitle from 'react-document-title'
import React from 'react'
import state from '../state'
import {RouteHandler} from 'react-router'

import {addHundredTodos} from '../todos/store'

// Leverage webpack require goodness for feature toggle based dead code removal.
require('../../../assets/css/app.styl')

export default React.createClass({

  componentDidMount() {
    state.on('change', () => {
      // console.log(JSON.stringify(state.save()))
      // TODO: Use requestAnimationFrame.

      // Try thousands todos with and without PureRenderMixin.
      console.time('whole app re-rendered')
      this.forceUpdate(() => {
        console.timeEnd('whole app re-rendered')
      })
    })
  },

  render() {
    return (
      <DocumentTitle title={'Este.js • TodoMVC'}>
        <div>
          <RouteHandler />
          <footer id="info">
            <p>Double-click to edit a todo</p>
            <p>Written by <a href="https://twitter.com/steida">Daniel Steigerwald</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
          </footer>
          <div className="playground">
            <p>
              This TodoMVC demo was slightly improved to demonstrate some
              advanced features. Open console and enjoy.
            </p>
            <ul>
              <li>
                App is isomorphic. Check server rendered HTML and routing.
              </li>
              <li>
                App is über-fast. Check <a href="http://facebook.github.io/immutable-js">immutable.js</a>{' '}
                with <a href="http://facebook.github.io/react/docs/pure-render-mixin.html">
                PureRenderMixin</a> usage. Add hundreds todos, then play with
                app. Run app with <b>gulp -p</b> to get React production mode
                performance.
              </li>
            </ul>
            <button onClick={addHundredTodos}>Add Hundred Todos</button>
          </div>
        </div>
      </DocumentTitle>
    )
  }

})
