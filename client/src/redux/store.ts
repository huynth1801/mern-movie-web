import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import themeModeSlice from './features/themeMode.slice'
import authModalSlice from './features/authModalSlice'
import globalLoadingSlice from './features/globalLoadingSlice'
import appStateSlice from './features/appStateSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
    authModal: authModalSlice,
    globalLoading: globalLoadingSlice,
    appState: appStateSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
