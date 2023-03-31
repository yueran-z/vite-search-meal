import axios from 'axios';
//自定义API
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axiosClient;