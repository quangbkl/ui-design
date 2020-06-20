import axios from 'axios';

export const bookingHotel = (params) => {
    return axios.get('/api/booking-hotel', {params});
};

export const createBookingHotel = (params) => {
    return axios.post(`https://booking-ui-api.herokuapp.com/hotel-bookings`, params).then(res => res.data);
}

export default {
    bookingHotel,
    createBookingHotel,
};
