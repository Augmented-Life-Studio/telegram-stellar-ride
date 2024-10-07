import { User } from 'sdk/interfaces'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { userApi } from './user.api'

export interface UserSlice {
  account: string
  user?: User
  accessToken?: string
  isUserLoading?: boolean
}

const initialState: UserSlice = {
  account: '',
  isUserLoading: true
}

export const UserSlice = createSlice({
  name: 'user_slice',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string>) => {
      state.account = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.telegramLogin.matchPending, (state) => {
      state.isUserLoading = true
    })
    builder.addMatcher(userApi.endpoints.telegramLogin.matchFulfilled, (state, { payload }) => {
      state.isUserLoading = false
      state.user = payload.account
      state.accessToken = payload.token.accessToken
    })
    builder.addMatcher(userApi.endpoints.telegramLogin.matchRejected, (state) => {
      state.isUserLoading = false
    })
    builder.addMatcher(userApi.endpoints.updateUser.matchFulfilled, (state, { payload }) => {
      state.user = payload
    })
    builder.addMatcher(userApi.endpoints.addWallet.matchFulfilled, (state, { payload }) => {
      state.user = payload
    })
  }
})

export const { setAccount } = UserSlice.actions

export default UserSlice.reducer
