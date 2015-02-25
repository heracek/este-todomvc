import State from '../lib/state'

const state = new State({
  newTodo: {
    title: ''
  },
  todos: []
})

export default state
export const newTodoCursor = state.cursor(['newTodo'])
export const todosCursor = state.cursor(['todos'])
