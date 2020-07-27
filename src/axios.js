import axios from "axios";

// Base URL untuk membuat permintaan film dari database film
const instance = axios.create({
   baseURL  = "https://api.themoviedb.org/3".
});

export default instance;