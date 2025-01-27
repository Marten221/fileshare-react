export const handleApiRequest = async (apiCall, message = 'Something went wrong. Please try again') => {
    try {
        const response = await apiCall();
        console.log(response)
        if (response.data) return response.data;
        return response;
    } catch (error) {
        console.log(error)
        //if (error.message) throw new Error(error.message);
        if (error.response && error.response.data.message) {
            throw new Error(error.response.data.message || message);
        }
        if (error.status === 401) {
            throw new Error("You don't have access to this file.")
        }
        //Generic error, if no message is included.
        throw new Error('Something went wrong. Please try again');
    }
};