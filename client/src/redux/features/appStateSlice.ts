import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  appState: string
}

const initialState: AppState = {
  appState: '',
}

export const appStateSlice = createSlice({
  name: 'AppState',
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload
    },
  },
})

// Xuất các action
export const { setAppState } = appStateSlice.actions

// Xuất reducer
export default appStateSlice.reducer
