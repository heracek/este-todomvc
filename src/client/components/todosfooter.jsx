import React from 'react'
import {Link} from 'react-router'
import {clearCompleted} from '../todos/actions'
import {getCompleted, getRemaining, getTodos} from '../todos/store'

export default React.createClass({

  render() {
    if (!getTodos().size)
      return false

    let completed = getCompleted()
    let remaining = getRemaining()
    // TODO: Use http://formatjs.io/guide/#messageformat-plural-format
    let localizedItems = remaining.size == 1 ? 'item' : 'items'

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>{remaining.size}</strong> {localizedItems} left
        </span>
        <ul id="filters">
          <li><Link to="home" activeClassName="selected">All</Link></li>
          <li><Link to="active" activeClassName="selected">Active</Link></li>
          <li><Link to="completed" activeClassName="selected">Completed</Link></li>
        </ul>
        {completed.size > 0 &&
          <button
            id="clear-completed"
            onClick={clearCompleted}
          >{`Clear completed (${completed.size})`}
          </button>
        }
      </footer>
    )
  }

})
