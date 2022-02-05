import axios from "axios";

const mockapi = 'https://61f8a8f7783c1d0017c4470d.mockapi.io';


export const getProducts = () => {
    return axios.get(mockapi + '/products');
}


export const getOneProduct = (id: string) => {
    return axios.get(mockapi + '/products/' + id)
}


export const addProduct = (data: object) => {
    console.log("adddddd");

    return axios.post(mockapi + '/products/', data);
}
