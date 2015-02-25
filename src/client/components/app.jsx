import DocumentTitle from 'react-document-title'
import React from 'react'
import state from '../state'
import {RouteHandler} from 'react-router'

// Leverage webpack require goodness for feature toggle based dead code removal.
require('../../../assets/css/app.styl')

export default React.createClass({

  componentDidMount() {
    state.on('change', () => {
      // console.log(JSON.stringify(state.save()))
      // TODO: Use requestAnimationFrame.

      // Try to play with zilions todos with and without PureRenderMixin.
      // console.time('forceUpdate')
      this.forceUpdate(() => {
        // console.timeEnd('forceUpdate')
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
        </div>
      </DocumentTitle>
    )
  }

})
