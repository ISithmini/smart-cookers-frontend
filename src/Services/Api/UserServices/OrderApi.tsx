import axios from "axios";

export const getTransactionHistory = (id : number) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:8000/order/details/${id}`);
}

export const addOrder = (data: object) => {
    return axios.post('http://localhost:8000/order/add', data);
}


export const changeOrderStatus = (id:any) => {
    return axios.patch("http://localhost:8000/order/status", id);
}

export const getOrders = ( outletName : string) => {
    return axios.get(`http://localhost:8000/product/order/${outletName}`);
}


