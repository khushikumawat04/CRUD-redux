import { configureStore } from '@reduxjs/toolkit'

import UserReducer from "../UserReducer.js";

export const store = configureStore({
  reducer: {
   users: UserReducer
  },
})