import axios from "axios";
const baseURL = import.meta.env.VITE_URL_BASE_BACKEND;

const searchCustomize = (dataSearch) => {
    return axios.post(`${baseURL}/search/customize`, dataSearch);
}

const searchCategoriesNormal = (keyword, currentPage) => {
    return axios.post(`${baseURL}/categories/search?page=${currentPage}&limit=4`, {keyword: keyword});
}

export { searchCustomize, searchCategoriesNormal };