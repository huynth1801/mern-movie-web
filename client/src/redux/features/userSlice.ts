import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  user: string | null
  listFavorites: Array<string>
}

const initialState: UserState = {
  user: null,
  listFavorites: [],
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      const user = action.payload
      state.user = user
      if (user === null) {
        localStorage.removeItem('actkn')
      } else {
        localStorage.setItem('actkn', user)
      }
    },
    setListFavorites: (state, action: PayloadAction<Array<string>>) => {
      state.listFavorites = action.payload
    },
    removeFavorites: (state, action: PayloadAction<string>) => {
      state.listFavorites = [...state.listFavorites].filter(e => e !== action.payload)
    },
    addFavorites: (state, action: PayloadAction<string>) => {
      state.listFavorites = [...state.listFavorites, action.payload]
    },
  },
})

export const { setUser, setListFavorites, removeFavorites, addFavorites } = userSlice.actions

export default userSlice.reducer
