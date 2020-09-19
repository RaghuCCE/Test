const request = require('request');

const getGeoCode = (sLocation, fnCallback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + 
                          encodeURIComponent(sLocation) + '.json?' + 
                          'types=region,postcode,district,place&' +
                          'access_token=pk.eyJ1IjoicmFnaHVyYW0xNTc5IiwiYSI6ImNrMmp6djNkajB2MXYzYm9oazUzNzY5cXcifQ.uKHGmF4l-srgfqG0SQ8C3Q';

    request( {url, json: true}, (error, {body} ) => {

        if(error) {
            return fnCallback('Something went wrong with geo location', null);
        }

        if(body.features.length <= 0) {
            return fnCallback('This app supports only locations on planet Earth. Aliens need to wait to get forecast', null);
        }

        fnCallback(error, {sLatitude: body.features[0].center[1],
                           sLongitude: body.features[0].center[0],
                           sLocationFound: body.features[0].place_name} );
    });
}

module.exports = getGeoCode;