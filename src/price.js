const axios = require('axios');

const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
const API_key = "08e32a9e-f876-4a41-a9b5-86d024772ac0";

axios.interceptors.request.use((config) => {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error.response?.data);
});

axios.get(url + "?symbol=BTC", {
    headers: { "X-CMC_PRO_API_KEY": API_key },
}).then((res) => {
    console.log(JSON.stringify(res.data), "res");
}).catch((res) => {
    console.log(res, "catch");
});