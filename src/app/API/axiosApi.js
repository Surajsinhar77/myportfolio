import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://127.0.0.1:7000', // Set your base URL
    headers: {
        'Authorization': 'Bearer your_access_token', // Set common headers if needed
        'Content-Type': 'application/json',
    },
});

export default axiosApi;