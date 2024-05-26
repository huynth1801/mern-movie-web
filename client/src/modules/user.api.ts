import privateClient from '../api/client/private.client'
import publicClient from '../api/client/public.client'

const userEndpoint = {
  sigin: 'user/signin',
  signup: 'user/signup',
  getInfo: 'user/info',
  updatePassword: 'user/update-password',
  getFavorites: 'user/favorites',
  addFavorites: 'user/favorites',
}

export interface User {
  username: string
  password: string
}

export interface SignUpUser extends User {
  confimPassword: string
  displayName: string
}

export interface UpdatePassword {
  password: string
  newPassword: string
  confirmPassword: string
}

const userApi = {
  signin: async ({ username, password }: User) => {
    try {
      const response = publicClient.post(userEndpoint.sigin, { username, password })
      return { response }
    } catch (error) {
      return { error }
    }
  },
  signup: async ({ username, password, confimPassword, displayName }: SignUpUser) => {
    try {
      const response = publicClient.post(userEndpoint.signup, {
        username,
        password,
        confimPassword,
        displayName,
      })
      return { response }
    } catch (error) {
      return { error }
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoint.getInfo)
      return { response }
    } catch (error) {
      return { error }
    }
  },
  updatePassword: async ({ password, newPassword, confirmPassword }: UpdatePassword) => {
    try {
      const response = await privateClient.put(userEndpoint.updatePassword, {
        password,
        newPassword,
        confirmPassword,
      })
      return response
    } catch (error) {
      return { error }
    }
  },
}

export default userApi
