import axios from "axios";

const api = axios.create({
    //baseURL: "http://localhost:3000/" /* Local */
    baseURL: "https://dark-ruby-scallop-robe.cyclic.app/" /* No ar */
})

export default api;