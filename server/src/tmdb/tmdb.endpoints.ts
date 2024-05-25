import tmdb from "./tmdb";

export interface MediaBase {
  mediaType: string;
}

export interface MediaList extends MediaBase {
  mediaCategory: string;
  page: number;
}

export interface MediaDetail extends MediaBase {
  mediaId: number;
}

export interface MediaSearch extends MediaBase {
  query: string;
  page: number;
}

export interface PersonType {
  personId: number;
}

const tmdbEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }: MediaList) =>
    tmdb.getUrl(`${mediaType}/${mediaCategory}`, page.toString()),
  mediaDetail: ({ mediaType, mediaId }: MediaDetail) =>
    tmdb.getUrl(`${mediaType}/${mediaId}`),
  mediaGenres: ({ mediaType }: MediaBase) =>
    tmdb.getUrl(`genre/${mediaType}/list`),
  mediaCredits: ({ mediaType, mediaId }: MediaDetail) =>
    tmdb.getUrl(`${mediaType}/${mediaId}/credits`),
  mediaVideos: ({ mediaType, mediaId }: MediaDetail) =>
    tmdb.getUrl(`${mediaType}/${mediaId}/videos`),
  mediaRecommend: ({ mediaType, mediaId }: MediaDetail) =>
    tmdb.getUrl(`${mediaType}/${mediaId}/recommendations`),
  mediaImages: ({ mediaType, mediaId }: MediaDetail) =>
    tmdb.getUrl(`${mediaType}/${mediaId}/images`),
  mediaSearch: ({ mediaType, query, page }: MediaSearch) =>
    tmdb.getUrl(`search/${mediaType}?query=${query}&page=${page.toString()}`),
  personDetail: ({ personId }: PersonType) => tmdb.getUrl(`person/${personId}`),
  personMedias: ({ personId }: PersonType) =>
    tmdb.getUrl(`person/${personId}/combined_credits`),
};

export default tmdbEndpoints;
