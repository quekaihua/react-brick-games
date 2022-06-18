import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { name: 'tetris', highest: 0, score: 0 },
  { name: 'snake', highest: 234, score: 0 }
]

const gamesSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    setHighest: (state, action) => {
      state.highest = action.payload
    }
  }
})

export default gamesSlice.reducer