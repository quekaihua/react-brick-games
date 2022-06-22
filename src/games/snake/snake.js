import { List } from 'immutable'
export default class Snake {

  constructor(xy) {
    this.head = List(xy)
    this.bodies = List([])
    this.deadth = false
  }

  setX(value) {
    if (this.head.get(0) === value) {
      return
    }

    if (value < 0 || value >= 20) {
      this.setDeath(true)
      return false
    }

    this.head.set(0, value)
  }

  setY(value) {
    if (this.head.get(0) === value) {
      return
    }

    if (value < 0 || value >= 10) {
      this.setDeath(true)
      return false
    }

    this.head.set(1, value)
  }

  setDeath(death) {
    this.deadth = death
  }

  getDeath() {
    return this.deadth
  }

  getHead() {
    return this.head
  }

  addBody() {
    this.bodies.unshift(this.head)
  }

  //检测头是否撞到身体
  checkHeadBody() {
    return this.bodies.slice(1).contains(this.head)
  }
}