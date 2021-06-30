//antes de comecar precisou baixar mais um comando: yarn add axios
import axios from 'axios';

const api = axios.create({
    baseURL: 'http:/192.168.1.103:2000'
});

export default api;