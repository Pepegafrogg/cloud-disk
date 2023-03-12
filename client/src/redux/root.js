import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userSlice';
import { fileSlice } from './fileSlice';

export const store = configureStore({
   reducer: {
      user: userSlice,
      file: fileSlice
   }
})
window.store = store