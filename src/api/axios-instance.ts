import axios from 'axios'
import { PROPERTIES } from '../config/properties'
import { getToken } from '../utils/storage';

export const axiosInstance = axios.create({
  //! dotenv lib 사용시 추후 env로 변경
  baseURL: PROPERTIES.BASE_URL,
  headers: {
    Authorization: `Barer ${getToken()}`
  }
});
