import axios from 'axios';
const BASE_URL = import.meta.env.MODE === "development" ? 'http://localhost:5001/api' : '/api';
const api = axios.create({
  baseURL: BASE_URL,
})
export default api; 

//first baseUrl was localhost:5001/api but in production we dont need to specify the domain
//because both frontend and backend are served from same domain
//so we made it dynamic based on environment as render.com will
//provide its own domain and we dont know which it will be
//so we just use relative path /api for production