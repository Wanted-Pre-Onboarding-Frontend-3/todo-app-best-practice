import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axios-instance';

export interface TodoResponse {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const createOneTodo = {
  url: '/todos',
  async request(body: string, config?: AxiosRequestConfig): Promise<TodoResponse> {
    return axiosInstance.post(this.url, { todo: body }, config);
  },
};

export const getManyTodo = {
  url: '/todos',
  async request(config?: AxiosRequestConfig): Promise<any> {
    return axiosInstance.get(this.url, config);
  },
};

export const updateOneTodo = {
  url: '/todos',
  async request(body: { todo: string; isCompleted: boolean }, id: number, config?: AxiosRequestConfig): Promise<TodoResponse> {
    return axiosInstance.put(`${this.url}/${id}`, body, config);
  },
};

export const deleteOneTodo = {
  url: '/todos',
  async request(id: number, config?: AxiosRequestConfig): Promise<TodoResponse> {
    return axiosInstance.delete(`${this.url}/${id}`, config);
  },
};