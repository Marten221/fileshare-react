import axios from 'axios';

const API_BASE_URL = 'https://ojasaar.com/fileapi'
//const API_BASE_URL = 'http://localhost:8080/'

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
});

export default apiClient;