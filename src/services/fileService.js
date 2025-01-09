import apiClient from "./apiClient";
import {handleApiRequest} from "../utils/apiUtils";


export const createFile = async (formData) => {
    const apiCall = () => apiClient.post('/upload', formData);

    return handleApiRequest(apiCall)
};

export const fetchFiles = async (keyword, sorting, extension, size, page) => {
    const apiCall = () => apiClient.get('/public/findfile', {
        params: {
            keyword,
            sorting,
            extension,
            size,
            page
        }
    });

    return handleApiRequest(apiCall);
};

export const fetchExensions = async () => {
    const apiCall = () => apiClient.get('/public/extensions');

    return handleApiRequest(apiCall);
};

