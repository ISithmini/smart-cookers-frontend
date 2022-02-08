import axios from "axios";

export const getTransactionHistory = (id : number) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:8000/order/details/${id}`);
}