import * as actions from './actions'
import dispatcher from '../dispatcher'
import {Range, Record} from 'immutable'
import {getRandomString} from '../../lib/getrandomstring'
import {newTodoCursor, todosCursor} from '../state'

// Note store is state-less. It's must for isomorphic app.

var TodoRecord = Record({
  completed: false,
  id: '',
  title: ''
})

let isCompleted = todo => todo.get('completed')

export const MAX_TODO_TITLE_LENGTH = 42

export const dispatchToken = dispatcher.register((payload) => {
  let {action, data} = payload

  switch (action) {
    case actions.addTodo:
      let title = getNewTodo().title.trim()
      if (!title) return
      // Create a nice client unique enough id.
      let id = getRandomString()
      todosCursor(todos => todos.push(new TodoRecord({id, title}).toMap()))
      newTodoCursor(todo => new TodoRecord)
      break

    case actions.onNewTodoFieldChange:
      let {name, value} = data
      switch (name) {
        case 'title':
          // Field max length should be implemented in store.
          value = value.slice(0, MAX_TODO_TITLE_LENGTH)
          break
      }
      newTodoCursor(todo => todo.set(name, value))
      break

    case actions.toggleTodo:
      todosCursor(todos => {
        let idx = todos.indexOf(data)
        let completed = data.get('completed')
        return todos.update(idx, (todo) => todo.set('completed', !completed))
      })
      break

    case actions.destroyTodo:
      todosCursor(todos => todos.delete(todos.indexOf(data)))
      break

    case actions.clearCompleted:
      todosCursor(todos => getRemaining())
      break

    case actions.toggleAll:
      let {checked} = data
      todosCursor(todos => todos.map(todo => todo.set('completed', checked)))
      break

    case actions.saveTodo:
      let {todo, props} = data
      todosCursor(todos => {
        return todos.update(todos.indexOf(todo), (todo) => todo.merge(props))
      })
      break
  }

})

export function getNewTodo(): Object {
  return newTodoCursor().toJS()
}

export function getTodos() {
  return todosCursor()
}

export function getCompleted() {
  return getTodos().filter(isCompleted)
}

export function getRemaining() {
  return getTodos().filterNot(isCompleted)
}

export function allCompleted() {
  return getTodos().every(isCompleted)
}

// For performance testing.
export function addHundredTodos() {
  todosCursor(todos => {
    return todos.withMutations(list => {
      Range(1, 100).forEach(i => {
        let id = getRandomString()
        list.push(new TodoRecord({
          completed: false,
          id: id,
          title: `Item #${id}`
        }).toMap())
      })
    })
  })
}
