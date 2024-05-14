import axiosClient from "../axios/axios.client";
import tmdbEndpoints from "./tmdb.endpoints";
import { MediaBase, MediaList, MediaDetail, MediaSearch } from "./tmdb.endpoints";


const tmdbApi = {
    mediaList: async ({mediaType, mediaCategory, page}: MediaList) => axiosClient.get(
        tmdbEndpoints.mediaList({mediaType, mediaCategory, page})
    ),
    mediaDetail: async ({mediaType, mediaId}: MediaDetail) => axiosClient.get(
        tmdbEndpoints.mediaDetail({mediaType, mediaId})
    ),
    mediaGenres: async ({mediaType}: MediaBase) => axiosClient.get(
        tmdbEndpoints.mediaGenres({mediaType})
    ),
    mediaCredits: async ({mediaType, mediaId}: MediaDetail) => axiosClient.get(
        tmdbEndpoints.mediaCredits({mediaType, mediaId})
    ),
    mediaVideos: async ({mediaType, mediaId}: MediaDetail) => axiosClient.get(
        tmdbEndpoints.mediaVideos({mediaType, mediaId})
    ),
    mediaImages: async ({mediaType, mediaId}: MediaDetail) => axiosClient.get(
        tmdbEndpoints.mediaImages({mediaType, mediaId})
    ),
    mediaRecommend: async ({mediaType, mediaId}: MediaDetail) => axiosClient.get(
        tmdbEndpoints.mediaRecommend({mediaType, mediaId})
    ),
    mediaSearch: async ({ mediaType, query, page }: MediaSearch) => axiosClient.get(
        tmdbEndpoints.mediaSearch({ mediaType, query, page })
    )
    
}

export default tmdbApi;