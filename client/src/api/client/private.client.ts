import queryString from 'query-string'
import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios'

const baseUrl: string = import.meta.env.VITE_BASE_URL

const privateClient: AxiosInstance = axios.create({
  baseURL: baseUrl,
  paramsSerializer: {
    encode: (params: Record<string, string>): string => queryString.stringify(params),
  },
})

privateClient.interceptors.request.use(config => {
  const token = localStorage.getItem('actkn')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  config.headers['Content-Type'] = 'application/json'
  return config
})

privateClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response && response.data) return response.data
    return response
  },
  (err: AxiosError): Promise<AxiosError> => {
    return Promise.reject(err)
  },
)

export default privateClient
