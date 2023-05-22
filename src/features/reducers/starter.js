import { createSlice } from '@reduxjs/toolkit'
import { staterFetch } from '../../services/asyncActions/stater'

// penyimpanan hasil hit api dan tempat pengolahan datanya
const initialState = {
  data: {},
}

const staterReducer = createSlice({
  name: 'starter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(staterFetch.pending, (state) => {
      state.data = {}
    })
    builder.addCase(staterFetch.fulfilled, (state, action) => {
      state.data = action?.payload
    })
  },
})

export { staterFetch }

export default staterReducer.reducer
