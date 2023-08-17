import axios from "axios";

const api = axios.create({
    baseURL: "https://dark-ruby-scallop-robe.cyclic.app/"
})

export default api;