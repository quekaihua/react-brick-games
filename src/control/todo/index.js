import { decLevels, incLevels, setLevels } from '../../store/reducer/levelsSlice'
import { incSpeed, decSpeed, setSpeed } from '../../store/reducer/speedSlice'
import { setPause } from '../../store/reducer/pauseSlice'
import { setGame } from '../../store/reducer/gameSlice'
import { toggle } from '../../store/reducer/musicSlice'
import { Music } from '../../utils/music'
import store from '../../store'
import { setTetris } from '../../store/reducer/tetrisSlice'
import { createNewTetris } from '../../games/tetris/tetris'

const left = () => {
  const state = store.getState()
  if (state.music && Music.move) {
    Music.move()
  }
  store.dispatch(decSpeed())
}

const right = () => {
  const state = store.getState()
  if (state.music && Music.move) {
    Music.move()
  }
  store.dispatch(incSpeed())
}

const up = () => {
  const state = store.getState()
  if (state.music && Music.move) {
    Music.move()
  }
  store.dispatch(incLevels())
}

const down = () => {
  const state = store.getState()
  if (state.music && Music.move) {
    Music.move()
  }
  store.dispatch(decLevels())
}

const p = () => {
  const { levels, game, music, pause } = store.getState()
  if (music && Music.start) {
    Music.start()
  }
  const newPause = pause === 1 ? 2 : 1
  if (game.name === 'tetris') {
    const newTetris = createNewTetris({ levels: levels })
    store.dispatch(setTetris(newTetris.toJsObj()))
  }
  store.dispatch(setPause(newPause))
}

const s = () => {
  store.dispatch(toggle())
}

const r = () => {
  store.dispatch(setPause(0))
  store.dispatch(setSpeed(1))
  store.dispatch(setLevels(1))
}

const nextGameIndex = (games, game) => {
  console.log(games, game)
  let idx = games.findIndex((g) => g.name === game.name)
  if (idx === games.length - 1) {
    return 0
  }
  return idx + 1
}

const rotate = () => {
  const { games, game, music } = store.getState()
  if (music && Music.rotate) {
    Music.rotate()
  }
  const idx = nextGameIndex(games, game)
  store.dispatch(setGame(games[idx]))
}

export default {
  left,
  right,
  up,
  down,
  p,
  s,
  r,
  rotate,
}
