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

export const register = async (registrationCode, user) => {
    const apiCall = () => apiClient.post('/public/register', user, {
        headers: {
            'X-Registration-Code': registrationCode,
        }
    })
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