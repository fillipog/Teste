import axios from 'axios'

const api = axios.create({
    baseURL: 'https://hp-api.onrender.com/'
})

export default api;