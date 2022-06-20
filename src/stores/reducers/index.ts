import { combineReducers } from '@reduxjs/toolkit'
import userSlice from '@/stores/slices/user.slice'

export const rootReducer = combineReducers({
  userStore: userSlice,
})
