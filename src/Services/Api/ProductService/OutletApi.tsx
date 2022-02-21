import axios from "axios";


export const getAllOutlets = () => {
    return axios.get(`http://localhost:8000/outlet/all`);
}


export const getProductsInOutlet = ( outlet_id : string) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:8000/outlet-products/${outlet_id}`);
}


export const getOneProductOutlet = (product_id: any, outlet_id: any) => {
    return axios.get(`http://localhost:8000/outlet-products/${outlet_id}/${product_id}`)
}

