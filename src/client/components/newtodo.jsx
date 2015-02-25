import React from 'react'
import {getNewTodo} from '../todos/store'
import {addTodo, onNewTodoFieldChange} from '../todos/actions'

export default React.createClass({

  onKeyDown(e) {
    if (e.key == 'Enter')
      addTodo()
  },

  render() {
    return (
      <input
        autoFocus="true"
        id="new-todo"
        name="title"
        onChange={onNewTodoFieldChange}
        onKeyDown={this.onKeyDown}
        placeholder="What needs to be done?"
        value={getNewTodo().title}
      />
    )
  }

})
