import api from './api';

const authService = {
    login: async (credentials) => {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    },
    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },
    forgotPassword: async (userData) => {
        const response = await api.post('/auth/forgot-password', userData);
        return response.data;
    },
    resetPassword: async (userData) => {
        const response = await api.post('/auth/reset-password', userData);
        return response.data;
    },
    logout: async () => {
        // If the backend has a logout endpoint
        const response = await api.post('/auth/logout');
        return response.data;
    },
};

export default authService;
