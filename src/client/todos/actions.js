import dispatcher from '../dispatcher'

// Note actions are pure functions. No state is allowed in actions.

export function addTodo() {
  dispatcher.dispatch(addTodo)
}

export function onNewTodoFieldChange(e) {
  // Only name and value is relevant.
  let {name, value} = e.target
  dispatcher.dispatch(onNewTodoFieldChange, {name, value})
}

export function toggleTodo(todo) {
  dispatcher.dispatch(toggleTodo, todo)
}

export function destroyTodo(todo) {
  dispatcher.dispatch(destroyTodo, todo)
}

export function clearCompleted() {
  dispatcher.dispatch(clearCompleted)
}

export function toggleAll(checked) {
  dispatcher.dispatch(toggleAll, {checked})
}

export function saveTodo(todo, props) {
  dispatcher.dispatch(saveTodo, {todo, props})
}
