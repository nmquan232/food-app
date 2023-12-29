import {createSlice} from "@reduxjs/toolkit";

const initState = {
  isSignedIn: false
}

export const authSlice = createSlice({
  name: 'app',
  initialState: initState,
  reducers: {
    login: (state) => {
      state.isSignedIn = false
    },
    logout: (state) => {
      state.isSignedIn = false
    }
  },
  extraReducers: builder => {

  }
})

export const {logout, login} = authSlice.actions


