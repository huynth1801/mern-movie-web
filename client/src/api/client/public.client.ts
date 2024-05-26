import queryString from 'query-string'
import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios'

const baseUrl: string = import.meta.env.VITE_BASE_URL

const publicClient: AxiosInstance = axios.create({
  baseURL: baseUrl,
  paramsSerializer: {
    encode: (params: Record<string, string>): string => queryString.stringify(params),
  },
})

publicClient.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  return config
})

publicClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response && response.data) return response.data
    return response
  },
  (err: AxiosError): Promise<AxiosError> => {
    return Promise.reject(err)
  },
)

export default publicClient
