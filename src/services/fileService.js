import apiClient from "./apiClient";
import {handleApiRequest} from "../utils/apiUtils";

export const fetchFiles = async (keyword, sorting) => {
    return handleApiRequest(() =>
        apiClient.get('/public/findfile', {
            params: {
                keyword,
                sorting
            }
    }));
};