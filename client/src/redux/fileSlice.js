import { createSlice } from "@reduxjs/toolkit";




const initialState = {
   files: [],
   currentDir: null,
}

export const fileSlice = createSlice({
   name: 'fileSlice',
   initialState,
   reducers: {
      setFiles(state, action) {
         state.files = action.payload
      },
      setCurrentDir(state, action) {
         state.currentDir = action.payload
      },
   },
})

export default fileSlice.reducer
export const { setFiles, setCurrentDir } = fileSlice.actions