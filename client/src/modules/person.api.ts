import publicClient from '../api/client/public.client'

const personEndpoints = {
  detail: (personId: number) => `person/${personId}`,
  medias: (personId: number) => `person/${personId}/medias`,
}

const personApi = {
  detail: async (personId: number) => {
    try {
      const response = await publicClient.get(personEndpoints.detail(personId))
      return { response }
    } catch (error) {
      return { error }
    }
  },
  medias: async (personId: number) => {
    try {
      const response = await publicClient.get(personEndpoints.medias(personId))
      return { response }
    } catch (error) {
      return { error }
    }
  },
}

export default personApi
