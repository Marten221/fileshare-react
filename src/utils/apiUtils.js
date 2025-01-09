export const handleApiRequest = async (apiCall, message = 'Something went wrong. Please try again') => {
    try {
        const response = await apiCall();
        if (response.data) return response.data;
        return response;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || message);
        }
        //Generic error, if no message is included.
        throw new Error('Something went wrong. Please try again');
    }
};