import { createSlice } from "@reduxjs/toolkit";

// export const getSneakersItems = createAsyncThunk(
//    'sneakers/getSneakersItems',
//    async function () {
//       const response = await api.getSneakersItems()
//       return response.data
//    }
// )

const initialState = {
   currentUser: {},
   isAuth: false
}

export const userSlice = createSlice({
   name: 'userSlice',
   initialState,
   reducers: {},
   // extraReducers: (builder) => {
   //    builder
   //       .addCase(getSneakersItems.pending, (state) => {
   //          state.isLoading = true
   //       })
   //       .addCase(getSneakersItems.fulfilled, (state, action) => {
   //          state.sneakers = action.payload
   //          state.isLoading = false
   //       })
   // }

})

export default userSlice.reducer
export const { } = userSlice.actions