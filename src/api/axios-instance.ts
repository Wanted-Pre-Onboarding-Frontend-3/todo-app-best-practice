import axios from 'axios'
import { getToken } from "@/utils/storage";


export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

axiosInstance.interceptors.request.use(function (config: any) {
  const token = getToken()
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})
