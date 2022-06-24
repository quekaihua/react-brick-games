import todo from './todo'
import snake from './snake'
import tetris from './tetris'

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
  eventLoop,
  clearLoop
}