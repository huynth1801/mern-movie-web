import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthModalState {
  authModalOpen: boolean
}

const initialState: AuthModalState = {
  authModalOpen: false,
}

export const authModalSlice = createSlice({
  name: 'AuthModal',
  initialState,
  reducers: {
    setAuthModalOpen: (state, action: PayloadAction<boolean>) => {
      state.authModalOpen = action.payload
    },
  },
})

export const { setAuthModalOpen } = authModalSlice.actions

export default authModalSlice.reducer
