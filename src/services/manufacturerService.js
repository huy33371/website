import axios from "axios";
const baseURL = import.meta.env.VITE_URL_BASE_BACKEND;

const getAllManufacturers = () => {
    return axios.get(`${baseURL}/manufacturers`);
}

export { getAllManufacturers };