

import axios from 'axios';

const api = axios.create({
    baseURL: "https://json-server-portfolio-felipejh.herokuapp.com",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
