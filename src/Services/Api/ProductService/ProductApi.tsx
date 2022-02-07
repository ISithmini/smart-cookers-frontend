import axios from "axios";

const mockapi = 'https://61f8a8f7783c1d0017c4470d.mockapi.io';


export const getProducts = () => {
    return axios.get(mockapi + '/products');
}

export const getProductsInOutlet = ( outletName : string) => {
    console.log(outletName)
    //axios.defaults.withCredentials = true;
    return axios.get(`http://localhost:8000/product/outlet/${outletName}`);
}

// export const getDetailsForProfile = ( outletName : string) => {
//     return axios.get("http://localhost:8000/product/outlet", {
//         params: {
//             outletName : outletName,
//         },
//     });
// };


export const getOneProduct = (id: string) => {
    return axios.get(mockapi + '/products/' + id)
}


export const addProduct = (data: object) => {
    return axios.post(mockapi + '/products/', data);
}
