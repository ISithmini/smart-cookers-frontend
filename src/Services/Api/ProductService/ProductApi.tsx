import axios from "axios";


export const getAllOutlets = () => {
    return axios.get(`http://localhost:8000/outlet/getall`);
}


export const getProducts = () => {
    return axios.get('http://localhost:8000/product/getall');
}

export const getProductsInOutlet = ( outlet_id : string) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:8000/outletProducts/${outlet_id}`);
}




export const getOneProductOutlet = (product_id: string) => {

    return axios.get(`http://localhost:8000/outletProducts/${product_id}`)
}

export const addOrder = (data: object) => {
    return axios.post('http://localhost:8000/order/add', data);
}


export const addProduct = (data: object) => {
    axios.defaults.withCredentials = true;
    return axios.post(`http://localhost:8000/product/register`, data);
}
