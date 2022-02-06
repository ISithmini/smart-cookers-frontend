import axios from "axios";
export const baseURL = "http://localhost:8000/";

export const logIn = (email: string , password: string) => {
    console.log(email, password);
    return axios.post('http://localhost:8000/user/login', {
        email, password
    })
};

// export const addProduct = (data: object) => {
//     axios({
//         method: 'post',
//         url: 'https://61f8a8f7783c1d0017c4470d.mockapi.io/products',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: data
//     })
//         .then(function (response) {
//             //handle success
//             console.log(response);
//             return response;
//         })
//         .catch(function (response) {
//             //handle error
//             console.log(response);
//         });
// }