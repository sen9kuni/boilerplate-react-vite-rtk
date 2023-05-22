import { createAsyncThunk } from '@reduxjs/toolkit'
import https from '../https'

export const staterFetch = createAsyncThunk('stater/get', async () => {
  let result = {}

  try {
    const { data } = await https().get('/', {
      headers: {
        'content-Type': 'application/json',
      },
    })
    return data
  } catch (error) {
    result.isError = true
    result.error = error
  }
})
