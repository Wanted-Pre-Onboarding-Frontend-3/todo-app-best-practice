import { AxiosRequestConfig } from 'axios'
import { axiosInstance } from './axios-instance'

export interface loginAuth {
  data: {
    access_token: string;
  };
  message: string;
}

export interface loginAuthReqBody {
  email: string;
  password: string;
}


export const authSignUp = {
  url: '/auth/signup',
  async request(email: string, password: string, config?: AxiosRequestConfig): Promise<loginAuth> {
    return axiosInstance.post(this.url, { email, password } as loginAuthReqBody, config)
  },
}

export const authSignIn = {
  url: '/auth/signin',
  async request(email: string, password: string, config?: AxiosRequestConfig): Promise<loginAuth> {
    return axiosInstance.post(this.url, { email, password } as loginAuthReqBody, config)
  },
}