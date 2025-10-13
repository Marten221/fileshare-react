import apiClient from "./apiClient";
import {handleApiRequest} from "../utils/apiUtils";


export const createFile = async (formData) => {
    const apiCall = () => apiClient.post('/file', formData);

    return handleApiRequest(apiCall)
};

export const fetchFiles = async (keyword, sorting, owner, extension, size, page) => {
    const apiCall = () => apiClient.get('/public/files', {
        params: {
            keyword,
            sorting,
            owner,
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
    const apiCall = () => apiClient.get(`/public/filecontent/${fileId}`, {
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

    const apiCall = () => apiClient.put('/file', formData)

    return handleApiRequest(apiCall);
};

export const deleteFile = async (fileId) => {
    const apiCall = () => apiClient.delete(`/file/${fileId}`)

    return handleApiRequest(apiCall);
}