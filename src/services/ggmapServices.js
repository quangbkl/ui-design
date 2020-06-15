import axios from 'axios';

export const getNearByPlace = (lat, lng) => {
    const params = {
        radius: 20000,
        types: 'tourist_attraction',
        sensor: false,
        key: 'AIzaSyAcb20nZnWEkRstG7yFXDGnzo0YB61aoFs',
        location: `${lat},${lng}`
    }
    return axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {params});
};

export default {
    getNearByPlace,
};
