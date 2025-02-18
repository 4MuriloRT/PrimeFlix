import axios from "axios";

//Base da URL: https://api.themoviedb.org/3/
//URL da API : movie/now_playing?api_key=07ceb7f5b400a434ed626dca93ac4d72&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;