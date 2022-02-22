import axios from "axios";



export const getProducts = () => {
    return axios.get('http://localhost:8000/product/all');
}

export const getOneProduct = (product_id : any) => {
    return axios.get(`http://localhost:8000/product/${product_id}`);
}


export const addProduct = (data: object) => {
    axios.defaults.withCredentials = true;
    return axios.post(`http://localhost:8000/product/register`, data);
}
