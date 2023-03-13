import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, registrationUser, authUser } from './../actions/user';

export const registration = createAsyncThunk(
   'user/registration',
   async function (params) {
      const { email, password } = params
      const response = await registrationUser(email, password)
      console.log(response)
      return response.data
   }
)
export const login = createAsyncThunk(
   'user/login',
   async function (params) {
      const { email, password } = params
      const response = await loginUser(email, password)
      console.log(response.data)
      return response.data
   }
)
export const auth = createAsyncThunk(
   'user/auth',
   async function () {
      const response = await authUser()
      return response
   }
)

const initialState = {
   currentUser: {},
   isAuth: false,
}

export const userSlice = createSlice({
   name: 'userSlice',
   initialState,
   reducers: {
      logout(state, action) {
         localStorage.removeItem('token')
         state.currentUser = {}
         state.isAuth = false
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload.user
            state.isAuth = true
         })
         .addCase(auth.fulfilled, (state, action) => {
            console.log(action.status)
            state.currentUser = action.payload.user
            if (action.payload) state.isAuth = true
         })
   }

})

export default userSlice.reducer
export const { logout } = userSlice.actions