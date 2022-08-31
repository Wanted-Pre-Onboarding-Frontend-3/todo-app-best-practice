import axios from 'axios'
import { PROPERTIES } from '@/config/properties'
import { getToken } from '@/utils/storage'

export const axiosInstance = axios.create({
  //! dotenv lib 사용시 추후 env로 변경
  baseURL: PROPERTIES.BASE_URL,
})

axiosInstance.interceptors.request.use(function (config: any) {
  const token = getToken()
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})
