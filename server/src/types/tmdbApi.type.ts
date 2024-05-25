// Media item type
export interface MediaItem {
  id: number
  title: string
  overview: string
  poster_path: string
  release_date: string
}

// Genre type
export interface Genre {
  id: number
  name: string
}

// Credit type
export interface Credit {
  id: number
  name: string
  character: string
  job: string
  profile_path: string
  // Add more fields as needed
}

// Video type
export interface Video {
  id: string
  key: string
  name: string
  site: string
  type: string
  // Add more fields as needed
}

// Image type
export interface Image {
  file_path: string
  width: number
  height: number
  // Add more fields as needed
}

// Person type
export interface Person {
  id: number
  name: string
  biography: string
  profile_path: string
  // Add more fields as needed
}

// Define the expected response structure for each endpoint
export interface MediaListResponse {
  page: number
  results: MediaItem[]
  total_pages: number
  total_results: number
}

export interface MediaDetailResponse extends MediaItem {
  genres: Genre[]
  runtime: number
  credits?: MediaCreditsResponse
  videos?: MediaVideosResponse
  recommend?: Array<MediaItem>
  images?: MediaImagesResponse
  isFavorite?: boolean
  reviews?: Array<any> // Replace with actual review type if available
}

export interface MediaGenresResponse {
  genres: Genre[]
}

export interface MediaCreditsResponse {
  cast: Credit[]
  crew: Credit[]
}

export interface MediaVideosResponse {
  results: Video[]
}
export interface MediaImagesResponse {
  backdrops: Image
  posters: Image
}

export interface MediaRecommendResponse {
  results: MediaItem[]
}

export interface MediaSearchResponse {
  page: number
  results: MediaItem[]
  total_pages: number
  total_results: number
}

export interface PersonDetailResponse extends Person {
  combined_credits?: PersonMediasResponse
}

export interface PersonMediasResponse {
  cast: MediaItem[]
  crew: MediaItem[]
}
