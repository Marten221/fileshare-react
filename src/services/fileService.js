import apiClient from "./apiClient";
import {handleApiRequest} from "../utils/apiUtils";

export const fetchFiles = async (keyword, sorting, extension) => {
    return handleApiRequest(() =>
        apiClient.get('/public/findfile', {
            params: {
                keyword,
                sorting,
                extension
            }
    }));
};

export const fetchExensions = async () => {
    return handleApiRequest(() =>
        apiClient.get('/public/extensions'));
};