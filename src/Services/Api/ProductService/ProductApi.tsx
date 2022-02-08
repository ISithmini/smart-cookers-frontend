import axios from "axios";

const mockapi = 'https://61f8a8f7783c1d0017c4470d.mockapi.io';

export const getProducts = () => {
    return axios.get('http://localhost:8000/product/getall');
}
export const getProductsInOutlet = ( outletName : string) => {
    return axios.get(`http://localhost:8000/product/outlet/${outletName}`);
}


export const getOneProductOutlet = (id: string) => {

    return axios.get(`http://localhost:8000/product/${id}`)
}

export const addOrder = (data: object) => {
    return axios.post('http://localhost:8000/order/add', data);
}


export const addProduct = (data: object) => {
    return axios.post(mockapi + '/products/', data);
}
