import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000/',
}) //para iniciar o server digita 'yarn start'