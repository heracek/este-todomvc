import React from 'react'
import TodoItem from './todoitem'
import immutable from 'immutable'
import {addons} from 'react/addons'

export default React.createClass({
  // Whenever component prop is an immutable structure, use PureRenderMixin.
  mixins: [addons.PureRenderMixin],

  propTypes: {
    todos: React.PropTypes.instanceOf(immutable.List)
  },

  render() {
    return (
      <ul id="todo-list">
        {this.props.todos.map((todo, i) => {
          return <TodoItem todo={todo} key={todo.get('id')} />
          // toArray will not be required for React 0.13
        }).toArray()}
      </ul>
    )
  }

})
