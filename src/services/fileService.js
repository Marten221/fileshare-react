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

export const fetchExtensions = async () => {
    const apiCall = () => apiClient.get('/public/extensions');

    return handleApiRequest(apiCall);
};

export const fetchFileDescription = async (fileId) => {
    const apiCall = () => apiClient.get(`/public/filedescription/${fileId}`);

    return handleApiRequest(apiCall)
}

export const downloadFile = async (fileId) => {
    const apiCall = () => apiClient.get(`/public/download/${fileId}`, {
        responseType: 'blob'
    })

    return handleApiRequest(apiCall)
};

export const updateFile = async (updatedFile) => {
    const formData = new FormData();

    //If the user did not upload a file, don't include it in the update.
    if (updatedFile.file) formData.append('file', updatedFile.file);
    formData.append('fileId', updatedFile.fileId);
    formData.append('customFilename', updatedFile.customFilename);
    formData.append('description', updatedFile.description);
    formData.append('public', updatedFile.public);

    const apiCall = () => apiClient.put('/update', formData)

    return handleApiRequest(apiCall);
};

export const deleteFile = async (fileId) => {
    const apiCall = () => apiClient.delete(`/delete/${fileId}`)

    return handleApiRequest(apiCall);
}