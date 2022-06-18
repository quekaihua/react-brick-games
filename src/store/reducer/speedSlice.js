import { createSlice } from '@reduxjs/toolkit'

const initialState = 1

const speedSlice = createSlice({
  name: 'speed',
  initialState,
  reducers: {
    incSpeed: state => {
      if (state < 10) {
        return state + 1
      }
      return state
    },
    decSpeed: state => {
      if (state > 0) {
        return state - 1
      }
      return state
    }
  }
})

export const { incSpeed, decSpeed } = speedSlice.actions
export default speedSlice.reducer