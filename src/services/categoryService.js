import axios from "axios";
const baseURL = import.meta.env.VITE_URL_BASE_BACKEND;

const getCategoriesByPaginate = (currentPage) => {
    return axios.get(`${baseURL}/categories?page=${currentPage}&limit=5`);
}

const createANewCategory = (newCategory) => {
    return axios.post(`${baseURL}/categories`, newCategory);
}

const getCategoryById = (categoryId) => {
    return axios.get(`${baseURL}/categories/${categoryId}`);
}

const updateCategory = (categoryId, updateCategory) => {
    return axios.put(`${baseURL}/categories/${categoryId}`, updateCategory);
}

const getCategoriesByManufacturer = (manufacturer, currentPage) => {
    return axios.post(`${baseURL}/categories/manufacturer?page=${currentPage}&limit=3`, {manufacturer: manufacturer});
}

export { 
    getCategoriesByPaginate, 
    createANewCategory, 
    getCategoryById, 
    updateCategory,
    getCategoriesByManufacturer
};