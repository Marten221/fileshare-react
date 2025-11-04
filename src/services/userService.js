import apiClient from "./apiClient";
import {handleApiRequest} from "../utils/apiUtils";

export const login = async (user) => {
    const apiCall = () => apiClient.post('/public/login', user);
    await handleApiRequest(apiCall);
};

export const register = async (registrationCode, user) => {
    const apiCall = () => apiClient.post('/public/register', user, {
        headers: {
            'X-Registration-Code': registrationCode,
        }
    })
    await handleApiRequest(apiCall);
};

export const getDiskspace = async () => {
    const apiCall = () => apiClient.get('/diskspace');
    return await handleApiRequest(apiCall);
};

export const getLoginStatus = async () => {
    const apiCall = () => apiClient.get('/public/loginstatus')
    return await handleApiRequest(apiCall);
};

export const getUserInfo = async () => {
    const apiCall = () => apiClient.get('/userinfo');
    return await handleApiRequest(apiCall);
};

export const logOut = async () => {
    await apiClient.post('/public/logout'); // or whatever your endpoint is
};