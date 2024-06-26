const mediaType = {
  movie: 'movie',
  tv: 'tv',
}

const mediaCategory = {
  popular: 'popular',
  top_rated: 'top_rated',
}

const backdropPath = (imgEndpoint: string) => `https://image.tmdb.org/t/p/original${imgEndpoint}`

const posterPath = (imgEndpoint: string) => `https://image.tmdb.org/t/p/w500${imgEndpoint}`

const videoPath = (videoId: number) => `https://www.youtube.com/embed/${videoId}?controls=0`

const tmdbConfigs = {
  mediaType,
  mediaCategory,
  posterPath,
  backdropPath,
  videoPath,
}

export default tmdbConfigs
