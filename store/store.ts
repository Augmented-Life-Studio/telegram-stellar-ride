import { Action, configureStore } from '@reduxjs/toolkit'
import { userApi, UserSlice } from './user'
import { referralApi, ReferralSlice } from './referral'
import { thunk, ThunkAction } from 'redux-thunk'
import { nftApi } from './nft'
import { leaderboardApi } from './leaderboard'
import { appApi } from './app'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: UserSlice.reducer,
      referrals: ReferralSlice.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [referralApi.reducerPath]: referralApi.reducer,
      [nftApi.reducerPath]: nftApi.reducer,
      [leaderboardApi.reducerPath]: leaderboardApi.reducer,
      [appApi.reducerPath]: appApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({})
        .concat([userApi.middleware])
        .concat([referralApi.middleware])
        .concat([nftApi.middleware])
        .concat([leaderboardApi.middleware])
        .concat([appApi.middleware])
        .concat(thunk),
    devTools: process.env.NODE_ENV === 'development'
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export type AppDispatch = AppStore['dispatch']
