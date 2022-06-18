import { decLevels, incLevels } from '../../store/reducer/levelsSlice'
import { incSpeed, decSpeed } from '../../store/reducer/speedSlice'
import { setPause } from '../../store/reducer/pauseSlice'
import { setGame } from '../../store/reducer/gameSlice'
import { toggle } from '../../store/reducer/musicSlice'
import { Music } from '../../utils/music'

const left = ({ dispatch, music }) => {
  if (music && Music.move) {
    Music.move()
  }
  dispatch(decSpeed())
}

const right = ({ dispatch, music }) => {
  if (music && Music.move) {
    Music.move()
  }
  dispatch(incSpeed())
}

const up = ({ dispatch, music }) => {
  if (music && Music.move) {
    Music.move()
  }
  dispatch(incLevels())
}

const down = ({ dispatch, music }) => {
  if (music && Music.move) {
    Music.move()
  }
  dispatch(decLevels())
}

const p = ({ dispatch, pause }) => {
  const newPause = pause === 1 ? 2 : 1
  dispatch(setPause(newPause))
}

const s = ({ dispatch }) => {
  dispatch(toggle())
}

const r = ({ dispatch }) => {
  dispatch(setPause(0))
}

const nextGameIndex = (games, game) => {
  console.log(games, game)
  let idx = games.findIndex((g) => g.name === game.name)
  if (idx === games.length - 1) {
    return 0
  }
  return idx + 1
}

const rotate = ({ dispatch, games, game, music }) => {
  if (music && Music.rotate) {
    Music.rotate()
  }
  const idx = nextGameIndex(games, game)
  dispatch(setGame(games[idx]))
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
