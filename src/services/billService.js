import axios from "axios";
const baseURL = import.meta.env.VITE_URL_BASE_BACKEND;

const orderBillService = (bill) => {
    return axios.post(`${baseURL}/bills`, {
        bill
    });
};

const getListBillsByPaginate = (currentPage) => {
    return axios.get(`${baseURL}/bills?page=${currentPage}&limit=5`);
}

export { orderBillService, getListBillsByPaginate };
