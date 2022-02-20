import axios from "axios";

export const getTransactionHistory = (user_id : number) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:8000/order/userOrders/${user_id}`);
}

export const addOrder = (data: object) => {
    return axios.post('http://localhost:8000/order/add', data);
}


export const changeOrderStatus = (id:any) => {
    return axios.patch("http://localhost:8000/order/status", id);
}

export const getOutletOrders = ( outlet_id: string) => {
    console.log(outlet_id)
    return axios.get(`http://localhost:8000/order/outletOrders/${outlet_id}`);
}


