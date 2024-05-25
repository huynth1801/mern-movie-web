import axiosClient from "../axios/axios.client";
import tmdbEndpoints from "./tmdb.endpoints";
import {
  MediaBase,
  MediaList,
  MediaDetail,
  MediaSearch,
  PersonType,
} from "./tmdb.endpoints";

const tmdbApi = {
  mediaList: async ({ mediaType, mediaCategory, page }: MediaList) =>
    await axiosClient.get(
      tmdbEndpoints.mediaList({ mediaType, mediaCategory, page })
    ),
  mediaDetail: async ({ mediaType, mediaId }: MediaDetail) =>
    await axiosClient.get(tmdbEndpoints.mediaDetail({ mediaType, mediaId })),
  mediaGenres: async ({ mediaType }: MediaBase) =>
    await axiosClient.get(tmdbEndpoints.mediaGenres({ mediaType })),
  mediaCredits: async ({ mediaType, mediaId }: MediaDetail) =>
    await axiosClient.get(tmdbEndpoints.mediaCredits({ mediaType, mediaId })),
  mediaVideos: async ({ mediaType, mediaId }: MediaDetail) =>
    await axiosClient.get(tmdbEndpoints.mediaVideos({ mediaType, mediaId })),
  mediaImages: async ({ mediaType, mediaId }: MediaDetail) =>
    axiosClient.get(tmdbEndpoints.mediaImages({ mediaType, mediaId })),
  mediaRecommend: async ({ mediaType, mediaId }: MediaDetail) =>
    axiosClient.get(tmdbEndpoints.mediaRecommend({ mediaType, mediaId })),
  mediaSearch: async ({ mediaType, query, page }: MediaSearch) =>
    axiosClient.get(tmdbEndpoints.mediaSearch({ mediaType, query, page })),
  personDetail: async ({ personId }: PersonType) =>
    axiosClient.get(tmdbEndpoints.personDetail({ personId })),
  personMedias: async ({ personId }: PersonType) =>
    axiosClient.get(tmdbEndpoints.personMedias({ personId })),
};

export default tmdbApi;
