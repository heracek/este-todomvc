import React from 'react'
import classnames from 'classnames'
import immutable from 'immutable'
import {MAX_TODO_TITLE_LENGTH} from '../todos/store'
import {addons} from 'react/addons'
import {destroyTodo, saveTodo, toggleTodo} from '../todos/actions'

export default React.createClass({
  // Try add hundreds todos. Editing, removing, toggling etc is still superfast.
  // With immutable map, all we need it === check.
  mixins: [addons.PureRenderMixin],

  propTypes: {
    // Whenever component prop is an immutable structure, use PureRenderMixin.
    todo: React.PropTypes.instanceOf(immutable.Map)
  },

  // By TodoMVC specs, editing should not be preserved in app state/localStore.
  // In real app, I would never use React component state.
  getInitialState() {
    return {
      editing: false,
      title: ''
    }
  },

  onTitleDoubleClick() {
    this.setState({
      editing: true,
      title: this.props.todo.get('title')
    }, () => {
      this.refs.edit.getDOMNode().focus()
    })
  },

  onEditChange(e) {
    let title = e.target.value.slice(0, MAX_TODO_TITLE_LENGTH)
    this.setState({title: title})
  },

  onEditKeyDown(e) {
    switch(e.key) {
      case 'Escape': this.disableEdit(); break
      case 'Enter': this.saveOrDestroyTodo(e); break
    }
  },

  disableEdit() {
    this.setState({editing: false})
  },

  saveOrDestroyTodo(e) {
    if (!this.state.editing) return
    if (!e.target.value.trim()) {
      destroyTodo(this.props.todo)
      return
    }
    this.saveTodo()
  },

  saveTodo() {
    let title = this.refs.edit.getDOMNode().value.trim()
    saveTodo(this.props.todo, {title})
    this.disableEdit()
  },

  render() {
    let todo = this.props.todo

    return (
      <li className={classnames({editing: this.state.editing})}>
        <div className="view">
          <input
            checked={todo.get('completed')}
            className="toggle"
            onChange={() => toggleTodo(todo)}
            type="checkbox"
          />
          <label onDoubleClick={this.onTitleDoubleClick}>
            {todo.get('title')}
          </label>
          <button
            className="destroy"
            onClick={() => destroyTodo(todo)}
          />
        </div>
        <input
          className="edit"
          onBlur={this.saveOrDestroyTodo}
          onChange={this.onEditChange}
          onKeyDown={this.onEditKeyDown}
          ref="edit"
          value={this.state.title}
        />
      </li>
    )
  }

})
