import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getItems = () => {
    return apiClient.get('/items');
};

export const createItem = (item) => {
    return apiClient.post('/items', item);
};