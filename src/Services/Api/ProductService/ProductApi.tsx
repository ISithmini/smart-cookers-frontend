import axios from "axios";


export const getAllOutlets = () => {
    return axios.get(`http://localhost:8000/outlet/all`);
}


export const getProducts = () => {
    return axios.get('http://localhost:8000/product/all');
}

export const getOneProduct = (product_id : number) => {
    console.log(product_id)
    return axios.get(`http://localhost:8000/product/${product_id}`);
}

export const getProductsInOutlet = ( outlet_id : string) => {
    axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:8000/outlet-products/${outlet_id}`);
}




export const getOneProductOutlet = (product_id: string, outlet_id: string) => {
    return axios.get(`http://localhost:8000/outlet-products/${outlet_id}/${product_id}`)
}



export const addProduct = (data: object) => {
    axios.defaults.withCredentials = true;
    return axios.post(`http://localhost:8000/product/register`, data);
}
