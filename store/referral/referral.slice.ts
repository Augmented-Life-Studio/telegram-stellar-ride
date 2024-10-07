import { ReferralSettings } from 'sdk/interfaces'
import { createSlice } from '@reduxjs/toolkit'
import { referralApi } from './referral.api'

export interface ReferralSlice {
  referralsSettings?: ReferralSettings
}

const initialState: ReferralSlice = {}

export const ReferralSlice = createSlice({
  name: 'referral_slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(referralApi.endpoints.getProjectReferralSettings.matchFulfilled, (state, { payload }) => {
      state.referralsSettings = payload
    })
  }
})

export const {} = ReferralSlice.actions

export default ReferralSlice.reducer
