import apiClient from "./apiClient";

export const login = async (user) => {
    try {
        const response = await apiClient.post('/public/login', {
            email: user.email,
            password: user.password,
        });

        const token = response.data.token;
        if (token) { // TODO: make it a function and store in cookies instead of storage
            localStorage.setItem('authToken', token);
        }
    } catch (error) {
        if (error.response && error.response.data){
            throw new Error(error.response.data.message || 'Login failed');
        }
        throw new Error('Something went wrong. Please try again.');
    }
};

export const register = async (user) => {
    try {
        const response = await apiClient.post('/public/register', {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        });

        const token = response.data.token;
        if (token) {
            localStorage.setItem('authToken', token);
        }
    } catch (error) {
        if (error.response && error.response.data){
            throw new Error(error.response.data.message || 'Register failed');
        }
        //Generic error, if no message is included.
        throw new Error('Something went wrong. Please try again.');
    }

}

