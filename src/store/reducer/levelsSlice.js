import { createSlice } from '@reduxjs/toolkit'

const initialState = 1

const levelsSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    incLevels: state => {
      if (state < 10) {
        return state + 1
      }
      return state
    },
    decLevels: state => {
      if (state > 0) {
        return state - 1
      }
      return state
    }
  }
})

export const { incLevels, decLevels } = levelsSlice.actions
export default levelsSlice.reducer