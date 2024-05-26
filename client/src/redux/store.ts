import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import themeModeSlice from './features/themeMode.slice'

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
