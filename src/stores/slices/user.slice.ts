import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserState = {
  user?: any
}

const initialState: UserState = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
  },
})

export default userSlice.reducer
export const { saveUser } = userSlice.actions
