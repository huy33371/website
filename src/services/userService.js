import axios from "axios";
const baseURL = import.meta.env.VITE_URL_BASE_BACKEND;

const registerNewUser = (newUser) => {
    return axios.post(`${baseURL}/users/register`, newUser);
}

const loginUser = (email, password) => {
    return axios.post(`${baseURL}/users/login`, {
        email, password
    });
}

export { registerNewUser, loginUser };
