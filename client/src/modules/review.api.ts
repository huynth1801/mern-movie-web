import privateClient from '../api/client/private.client'

const reviewEndpoints = {
  list: 'reviews',
  add: 'reviews',
  remove: (reviewId: number) => `revies/${reviewId}`,
}

export interface Review {
  mediaId: string
  mediaType: string
  mediaTitle: string
  mediaPoster: string
  content: string
}

const reviewApi = {
  add: async ({ mediaId, mediaType, mediaTitle, mediaPoster, content }: Review) => {
    try {
      const response = await privateClient.post(reviewEndpoints.add, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        content,
      })
      return response
    } catch (error) {
      return { error }
    }
  },
  remove: async (reviewId: number) => {
    try {
      const response = await privateClient.post(reviewEndpoints.remove(reviewId))
      return response
    } catch (error) {
      return { error }
    }
  },
  getList: async () => {
    try {
      const response = await privateClient.get(reviewEndpoints.list)
      return { response }
    } catch (error) {
      return { error }
    }
  },
}

export default reviewApi
