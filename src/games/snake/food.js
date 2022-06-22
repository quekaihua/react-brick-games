import { List } from 'immutable'

export default class Food {

  constructor(xy) {
    this.xy = List(xy)
  }

  getX() {
    return this.xy.get(0)
  }
  getY() {
    return this.xy.get(1)
  }

  change() {
    this.xy.set(0, Math.ceil(Math.random()*10))
    this.xy.set(1, Math.ceil(Math.random()*10))
  }
}