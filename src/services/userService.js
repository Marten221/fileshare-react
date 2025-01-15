import apiClient from "./apiClient";
import {handleApiRequest} from "../utils/apiUtils";

export const login = async (user) => {
    const apiCall = () => apiClient.post('/public/login', user);
    const data = await handleApiRequest(apiCall);

    const token = data.token;
    if (token) { // TODO: make it a function and store in cookies instead of storage
        localStorage.setItem('authToken', token);
    }
};

export const register = async (user) => {
    const apiCall = () => apiClient.post('/public/register', user)
    const data = await handleApiRequest(apiCall);

    const token = data.token;
    if (token) {
        localStorage.setItem('authToken', token);
    }
};

export const getDiskspace = async () => {
    const apiCall = () => apiClient.get('diskspace');
    return await handleApiRequest(apiCall);
};