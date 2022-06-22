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

export const controlTetris = (type) => {
  const state = store.getState()
  const { tetris } = state
  const tetrisObj = new Tetris(tetris)
  const res = tetrisObj.move(type)
  if (type === 'down' && !res) {
    tetrisObj.draw()
    console.log('tetris.draw', tetrisObj)
    store.dispatch(setGame({ score: tetrisObj.score }))
    setSpeedAndLevels(tetrisObj.score, tetrisObj.levels)
    tetrisObj.xy = originXY
    tetrisObj.shape = blockShape[tetris.next]
    tetrisObj.next = Tetris.getNextType()
  }

  store.dispatch(setTetris(tetrisObj.toJsObj()))
  return res
}

export const tetrisClearLines = () => {
  const { tetris } = store.getState()
  const tetrisObj = new Tetris(tetris)
  tetrisObj.draw()
  tetrisObj.clear()
  setSpeedAndLevels(tetrisObj.score, tetrisObj.levels)
  store.dispatch(setGame({ score: tetrisObj.score }))
  tetrisObj.xy = originXY
  tetrisObj.shape = blockShape[tetrisObj.next] //先把next放入当前shape
  tetrisObj.next = Tetris.getNextType()
  store.dispatch(setTetris(tetrisObj.toJsObj()))
  store.dispatch(setLock(false))
}

export const gameover = () => {
  const { levels, tetris, games } = store.getState()
  const newTetris = createNewTetris({ levels: levels })
  store.dispatch(setTetris(newTetris.toJsObj()))
  store.dispatch(setPause(0))
  store.dispatch(setLock(false))
  store.dispatch(setHighest({ gameName: 'tetris', score: tetris.score }))
  store.dispatch(setGame(games.find(game => game.name === 'tetris')))
}

const setSpeedAndLevels = (score, levels) => {
  let speed = Math.ceil(score / 1000)
  store.dispatch(setSpeed(speed))
  store.dispatch(setLevels(levels))
}

const left = () => {
  const state = store.getState()
  if (state.lock) return
  if (state.music && Music.move) {
    Music.move()
  }
  controlTetris('left')
}

const right = () => {
  const state = store.getState()
  if (state.lock) return
  if (state.music && Music.move) {
    Music.move()
  }
  controlTetris('right')
}

const up = () => {
  const state = store.getState()
  if (state.lock) return
  if (state.music && Music.fall) {
    Music.fall()
  }
  let tetris = new Tetris(state.tetris)
  while(tetris.checkMove('down')) {
    controlTetris('down')
    const nextTetris = store.getState().tetris
    tetris = new Tetris(nextTetris)
  }
}

const down = () => {
  const state = store.getState()
  if (state.lock) return
  if (state.music && Music.move) {
    Music.move()
  }
  controlTetris('down')
}

const rotate = () => {
  const state = store.getState()
  if (state.lock) return
  if (state.music && Music.rotate) {
    Music.rotate()
  }
  controlTetris('rotate')
}

const p = () => {
  const state = store.getState()
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

