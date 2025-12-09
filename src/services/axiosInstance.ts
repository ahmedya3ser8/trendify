import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://ecommerce.routemisr.com/api/v1/',
  headers: {
    "Content-Type": "application/json"
  }
})

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('access_trendify_token');
  if (token && config.headers) {
    config.headers.token = token;
  }
  return config;
  }, (err) => Promise.reject(err)
)
