import axios from 'axios';

//const API_BASE_URL = 'https://ojasaar.com/fileapi'
const API_BASE_URL = 'http://localhost:8080/'

const apiClient = axios.create({
    baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;