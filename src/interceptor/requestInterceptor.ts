import axios, { AxiosInstance } from 'axios';
import { Environment } from '../constants/environment';

const axiosInstance :AxiosInstance= axios.create({
  baseURL: `${Environment.baseUrl}`,
  timeout: 5000, 
});


axiosInstance.interceptors.request.use(
    (config) => {
      try {
        const token = JSON.parse(localStorage.getItem('token'))['authToken']
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } catch (error) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer `;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export { axiosInstance };
