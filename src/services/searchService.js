import axios from "axios";
const baseURL = import.meta.env.VITE_URL_BASE_BACKEND;

const searchCustomize = (dataSearch) => {
    return axios.post(`${baseURL}/search/customize`, dataSearch);
}

export { searchCustomize };