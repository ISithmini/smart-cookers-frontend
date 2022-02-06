import axios from "axios";
//export const baseURL = "http://localhost:8000/";

axios.defaults.withCredentials = true;

export const logIn = (email: string , password: string) => {
    console.log(email, password);
    return axios.post('http://localhost:8000/user/login', {
        email, password
    })
};

export const getUser = () => {
    return axios.get('http://localhost:8000/user/user/info')
}

export const logOut = () => {
    return axios.get("http://localhost:8000/user/logout");
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