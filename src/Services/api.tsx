var axios = require('axios');
var data = JSON.stringify({ "createdAt": 1643693168, "Pname": "Pname 1", "Pdescription": "Pdescription 1", "Price": 98, "qtyAvailable": 63, "id": "20" });

var config = {
    method: 'post',
    url: 'https://61f8a8f7783c1d0017c4470d.mockapi.io/products',
    headers: {
        'Content-Type': 'application/json'
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
