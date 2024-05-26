import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PaletteMode } from '@mui/material'

interface ThemeState {
  themeMode: PaletteMode
}

const initialState: ThemeState = {
  themeMode: 'dark',
}

export const themeModeSlice = createSlice({
  name: 'ThemeMode',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<PaletteMode>) => {
      state.themeMode = action.payload
    },
  },
})

export const { setThemeMode } = themeModeSlice.actions
export default themeModeSlice.reducer
