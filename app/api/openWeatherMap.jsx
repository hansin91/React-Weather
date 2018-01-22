var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='https://api.openweathermap.org/data/2.5/weather?appid=98746ca68811f7c3a4f8e1569d88e707&units=metric';
module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res){
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}