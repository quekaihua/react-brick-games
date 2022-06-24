/* eslint-disable no-unused-vars */
import { toggle } from '../../store/reducer/musicSlice'
import { Music } from '../../utils/music'
import { setPause } from '../../store/reducer/pauseSlice'
import { setLock, toggleLock } from '../../store/reducer/lockSlice'
import { setTetris } from '../../store/reducer/tetrisSlice'
import store from '../../store'
import Tetris, { createNewTetris, originXY } from '../../games/tetris/tetris'
import { blockShape } from '../../games/tetris/block'
import { setGame } from '../../store/reducer/gameSlice'
import { setSpeed } from '../../store/reducer/speedSlice'
import { setLevels } from '../../store/reducer/levelsSlice'
import { setHighest } from '../../store/reducer/gamesSlice'
import { setSnake } from '../../store/reducer/snakeSlice'
import Snake, { createNewSnake } from '../../games/snake/snake'
import control from '..'

export const controlSnake = (type) => {
  if (type==='') {return }
  const state = store.getState()
  const { snake, music, levels, game } = state
  const snakeObj = new Snake(snake)
  snakeObj.direction = type
  let [x, y] = snakeObj.getNextXY()
  //反向
  if (x===snakeObj.bodies[1][0] && y===snakeObj.bodies[1][1]) {
    return false
  }
  const res = snakeObj.move()

  let score = game.score
  let newLevels = levels
  if (res) { //eat food
    score += 100
    newLevels++
    store.dispatch(setGame({ score: game.score + 100 })) //+100分
    if (music && Music.clear) {
      Music.clear()
    }
  } else {
    score += 10
    store.dispatch(setGame({ score: game.score + 10 }))
  }
  setSpeedAndLevels(score, newLevels)
  store.dispatch(setSnake(snakeObj.toJsObj()))
}

export const gameover = () => {
  const { games, game } = store.getState()
  store.dispatch(setLevels(1))
  store.dispatch(setSpeed(1))
  store.dispatch(setPause(0))
  store.dispatch(setLock(false))
  store.dispatch(setHighest({ gameName: 'snake', score: game.score }))
  store.dispatch(setGame({ ...games.find(game => game.name === 'snake'),score: 0 }))
}

const setSpeedAndLevels = (score, levels) => {
  let speed = Math.ceil(score / 1500)
  store.dispatch(setSpeed(speed))
  store.dispatch(setLevels(levels))
}

const left = () => {
  const state = store.getState()
  if (state.lock) return
  if (state.music && Music.move) {
    Music.move()
  }
  controlSnake('left')
  control.eventLoop.left = setTimeout(left, 100)
}

const right = () => {
  const state = store.getState()
  if (state.lock) return
  if (state.music && Music.move) {
    Music.move()
  }
  controlSnake('right')
  control.eventLoop.right = setTimeout(right, 100)
}

const up = () => {
  const state = store.getState()
  if (state.lock) return
  if (state.music && Music.move) {
    Music.move()
  }
  controlSnake('up')
  control.eventLoop.up = setTimeout(up, 100)
}

const down = () => {
  const state = store.getState()
  if (state.lock) return
  if (state.music && Music.move) {
    Music.move()
  }
  controlSnake('down')
  control.eventLoop.down = setTimeout(down, 100)
}

const rotate = () => {
  // const state = store.getState()
  // if (state.lock) return
  // if (state.music && Music.rotate) {
  //   Music.rotate()
  // }
}

const p = () => {
  const state = store.getState()
  if (state.lock && state.snake.death) return
  const newPause = state.pause === 1 ? 2 : 1
  store.dispatch(setPause(newPause))
  store.dispatch(toggleLock())
}

const s = () => {
  store.dispatch(toggle())
}

const r = () => {
  store.dispatch(setPause(0))
}

export default {
  left,
  right,
  up,
  down,
  p,
  s,
  r,
  rotate
}

