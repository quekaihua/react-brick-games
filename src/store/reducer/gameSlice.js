import { createSlice } from '@reduxjs/toolkit'

const initialState = { name: 'tetris', highest: 0, score: 0 }

const gameSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    setGame: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
    // setGameName: (state, action) => {
    //   state.name = action.payload
    // },
    // setGameHighest: (state, action) => {
    //   if (state.highest < action.payload) {
    //     state.highest = action.payload
    //   }
    // },
    // setScore(state, score) {
    //   state.score = score
    // }
  }
})

export const { setGame } = gameSlice.actions

export default gameSlice.reducer