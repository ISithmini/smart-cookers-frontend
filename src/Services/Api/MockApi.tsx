import axios from "axios";

export const getProducts = () => {
    return axios.get('https://61f8a8f7783c1d0017c4470d.mockapi.io/')
};



export const addProduct = (data) => {
    axios({
        method: 'post',
        url: 'https://61f8a8f7783c1d0017c4470d.mockapi.io/products',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
        .then(function (response) {
            //handle success
            console.log(response);
            return response;
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

