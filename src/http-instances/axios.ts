import axios from 'axios';
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = import.meta.env.VITE_API_URL
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    console.log(error.request.data)
    return Promise.reject(error.request.data);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    alert(error.request.data.error)
    return Promise.reject(error.response.data);
});

export default axiosInstance