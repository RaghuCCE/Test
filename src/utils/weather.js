const request = require('request');

const getWeather = (sLatitude, sLongitude, fnCallback) => {
    var url = 'https://api.darksky.net/forecast/1a4addbc24e7d67196a989fde7b90b39/' + sLatitude + ',' + sLongitude;

    request( {url, json: true}, (error, {body}) => {
        fnCallback(error, body);
    });
}

module.exports = getWeather;