import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8001/',
}) //para iniciar o server digita 'npm run api'