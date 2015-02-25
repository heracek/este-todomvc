import EventEmitter from 'eventemitter3'
import Immutable from 'immutable'

export default class State extends EventEmitter {

  constructor(opt_json) {
    this.load(opt_json || {})
  }

  load(json) {
    this._state = Immutable.fromJS(json)
    this.emit('change')
  }

  save() {
    return this._state.toJS()
  }

  toConsole() {
    console.log(JSON.stringify(this.save()))
  }

  cursor(path) {
    return (update) => {
      if (update) {
        const newState = this._state.updateIn(path, update)
        if (newState === this._state) return
        this._state = newState
        this.emit('change')
      }
      else
        return this._state.getIn(path)
    }
  }

}
