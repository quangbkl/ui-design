import axios from 'axios';

export const bookingHotel = (params) => {
    return axios.get('/api/booking-hotel', {params});
};

export const createBookingHotel = (params) => {
    return axios.post(`https://booking-ui-api.herokuapp.com/hotel-bookings`, params).then(res => res.data);
}

export const getBookingHotels = (params) => {
    return axios.get(`https://booking-ui-api.herokuapp.com/hotel-bookings`, { params }).then(res => res.data);
}


export const getBookingHotel = (bookingId) => {
    return axios.get(`https://booking-ui-api.herokuapp.com/hotel-bookings/${bookingId}`).then(res => res.data);
}

export const updateBookingHotel = (bookingId, params) => {
    return axios.patch(`https://booking-ui-api.herokuapp.com/hotel-bookings/${bookingId}`, params).then(res => res.data);
}

export default {
    bookingHotel,
    createBookingHotel,
    getBookingHotels,
    getBookingHotel,
    updateBookingHotel,
};
