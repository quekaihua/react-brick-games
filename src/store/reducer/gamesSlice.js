import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { name: 'tetris', highest: 0 },
  { name: 'snake', highest: 0 }
]

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setHighest: (state, action) => {
      const { gameName, score } = action.payload
      return state.map(game => {
        if (game.name !== gameName) {
          return game
        } else {
          if (game.highest >= score) {
            return game
          } else {
            return {
              ...game, highest: score
            }
          }
        }
      })
    }
  }
})

export const { setHighest } = gamesSlice.actions

export default gamesSlice.reducer