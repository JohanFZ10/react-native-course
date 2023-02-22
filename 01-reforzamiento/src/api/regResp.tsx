import axios from "axios";

// Creando una instancia de axios
export const reqRespApi = axios.create({
    baseURL: 'https://reqres.in/api'
})
