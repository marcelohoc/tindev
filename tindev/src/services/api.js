import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
    //URL deve ser baseada no emulador
});

export default api;