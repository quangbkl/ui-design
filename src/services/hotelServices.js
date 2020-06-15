import axios from 'axios';

export const searchHotels = (params) => {
    const newParams = {
        page: 1,
        pageSize: 100,
        isActive: 1,
    }
    if (params.location) {
        newParams.cityOrProvince = params.location.code;
    }
    console.log(newParams)
    return axios.get('https://booking-ui-api.herokuapp.com/hotels', {params: newParams});
};

export const getHotel = (id) => {
    return axios.get(`https://booking-ui-api.herokuapp.com/hotels/${id}`).then(res => res.data);
};

export default {
    searchHotels,
    getHotel
};
