import axiosClient from '../axios/axios.client'
import tmdbEndpoints from './tmdb.endpoints'
import { MediaBase, MediaList, MediaDetail, MediaSearch, PersonType } from './tmdb.endpoints'

import {
  MediaListResponse,
  MediaDetailResponse,
  MediaGenresResponse,
  MediaCreditsResponse,
  MediaImagesResponse,
  MediaVideosResponse,
  MediaRecommendResponse,
  PersonDetailResponse,
  PersonMediasResponse,
} from '../types/tmdbApi.type'

const tmdbApi = {
  mediaList: async ({ mediaType, mediaCategory, page }: MediaList): Promise<MediaListResponse> =>
    await axiosClient.get(tmdbEndpoints.mediaList({ mediaType, mediaCategory, page })),
  mediaDetail: async ({ mediaType, mediaId }: MediaDetail): Promise<MediaDetailResponse> =>
    await axiosClient.get(tmdbEndpoints.mediaDetail({ mediaType, mediaId })),
  mediaGenres: async ({ mediaType }: MediaBase): Promise<MediaGenresResponse> =>
    await axiosClient.get(tmdbEndpoints.mediaGenres({ mediaType })),
  mediaCredits: async ({ mediaType, mediaId }: MediaDetail): Promise<MediaCreditsResponse> =>
    await axiosClient.get(tmdbEndpoints.mediaCredits({ mediaType, mediaId })),
  mediaVideos: async ({ mediaType, mediaId }: MediaDetail): Promise<MediaVideosResponse> =>
    await axiosClient.get(tmdbEndpoints.mediaVideos({ mediaType, mediaId })),
  mediaImages: async ({ mediaType, mediaId }: MediaDetail): Promise<MediaImagesResponse> =>
    axiosClient.get(tmdbEndpoints.mediaImages({ mediaType, mediaId })),
  mediaRecommend: async ({ mediaType, mediaId }: MediaDetail): Promise<MediaRecommendResponse> =>
    axiosClient.get(tmdbEndpoints.mediaRecommend({ mediaType, mediaId })),
  mediaSearch: async ({ mediaType, query, page }: MediaSearch) =>
    axiosClient.get(tmdbEndpoints.mediaSearch({ mediaType, query, page })),
  personDetail: async ({ personId }: PersonType): Promise<PersonDetailResponse> =>
    axiosClient.get(tmdbEndpoints.personDetail({ personId })),
  personMedias: async ({ personId }: PersonType): Promise<PersonMediasResponse> =>
    axiosClient.get(tmdbEndpoints.personMedias({ personId })),
}

export default tmdbApi
