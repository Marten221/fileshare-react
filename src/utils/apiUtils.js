export const handleApiRequest = async (apiCall, message = 'Something went wrong. Please try again') => {
    try {
        const response = await apiCall();
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || message);
        }
        //Generic error, if no message is included.
        throw new Error('Something went wrong. Please try again');
    }
};