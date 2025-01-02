import apiClient from "./apiClient";
import {handleApiRequest} from "../utils/apiUtils";

export const login = async (user) => {
    const data = await handleApiRequest(() =>
        apiClient.post('/public/login', {
            email: user.email,
            password: user.password,
        }));

    const token = data.token;
    if (token) { // TODO: make it a function and store in cookies instead of storage
        localStorage.setItem('authToken', token);
    }
};

export const register = async (user) => {
    const data = await handleApiRequest(() =>
        apiClient.post('/public/register', {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
        }));

    const token = data.token;
    if (token) {
        localStorage.setItem('authToken', token);
    }
};

