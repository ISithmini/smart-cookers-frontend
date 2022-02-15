import axios from "axios";

export const getTransactionHistory = (id : number) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:8000/order/details/${id}`);
}



export const changeOrderStatus = (id) => {
    console.log(id)
    return axios.patch("http://localhost:8000/order/status", id);
}

export const getOrders = ( outletName : string) => {
    return axios.get(`http://localhost:8000/product/order/${outletName}`);
}


