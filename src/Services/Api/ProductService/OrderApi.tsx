import axios from "axios";

export const getTransactionHistory = (user_id : number) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:8000/order/${user_id}`);
}

export const addOrder = (data: object) => {
    return axios.post('http://localhost:8000/order/new', data);
}


export const changeOrderStatus = (order_id : string) => {
    return axios.post("http://localhost:8000/order/status", order_id);
}

export const getOutletOrders = ( outlet_id: string) => {
    return axios.get(`http://localhost:8000/order/outlet/${outlet_id}`);
}


