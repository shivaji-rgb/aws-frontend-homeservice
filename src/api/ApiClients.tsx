import axios from 'axios';

export const homeClient = axios.create({
    baseURL: 'http://localhost:9050',
    timeout: 10000,
    headers: { Accept: "application/json",
         "Content-Type": "application/json",
         },
});
