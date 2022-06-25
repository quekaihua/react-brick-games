import todo from './todo'
import snake from './snake'
import tetris from './tetris'
import shooting from './shooting'

//长按
const eventLoop = {}

const clearLoop = (type) => {
  clearTimeout(eventLoop[type])
  eventLoop[type] = null
}

export default {
  todo,
  snake,
  tetris,
  shooting,
  eventLoop,
  clearLoop
}