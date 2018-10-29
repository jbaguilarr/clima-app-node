const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=96620f7b9cc1751d1dac98a7afe87d4a`);

    let temp = resp.data.main.temp; //.results[0];
    return temp;
}

module.exports = {
    getClima
}