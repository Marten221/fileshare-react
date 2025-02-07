import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.160:8080'

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

apiClient.interceptors.request.use(
    (config) => {
        // Log the request details
        console.log("Outgoing request:", {
            url: config.url,
            method: config.method,
            headers: config.headers,
            data: config.data,
        });
        return config; // Must return the config to proceed with the request
    },
    (error) => {
        // Handle request errors
        console.error("Request error:", error);
        return Promise.reject(error);
    }
);


export default apiClient;