import { List } from 'immutable'

const transform = (function () {
  const trans = ['transform', 'webkitTransform', 'msTransform', 'mozTransform', 'oTransform']
  const body = document.body
  return trans.filter((e) => body.style[e] !== undefined)[0]
}())

const blankLine = Array(10).fill(0)

const blankMatrix = (() => {
  const matrix = []
  for (let i = 0; i < 20; i++) {
    matrix.push(List(blankLine))
  }
  return List(matrix)
})()

export {
  transform,
  blankMatrix
}