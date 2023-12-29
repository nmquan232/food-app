import {createSlice} from "@reduxjs/toolkit";

const initState = {
  isSignedIn: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initState,
  reducers: {

  },
  extraReducers: builder => {

  }
})



