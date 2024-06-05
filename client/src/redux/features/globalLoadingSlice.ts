import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GlobalLoadingType {
  globalLoading: boolean
}

const initialState: GlobalLoadingType = {
  globalLoading: false,
}

export const globalLoadingSlice = createSlice({
  name: 'AuthModal',
  initialState,
  reducers: {
    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
      state.globalLoading = action.payload
    },
  },
})

export const { setGlobalLoading } = globalLoadingSlice.actions

export default globalLoadingSlice.reducer
