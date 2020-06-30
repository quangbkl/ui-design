import axios from 'axios';

export const bookingHotel = (params) => {
    return axios.get('/api/booking-hotel', {params});
};
export const bookingTour = (params) => {
    return axios.get('/api/booking-tour', {params});
};

export const createBookingHotel = (params) => {
    return axios.post(`https://booking-ui-api.herokuapp.com/hotel-bookings`, params).then(res => res.data);
}
export const createBookingTour = (params) => {
	return axios.post(`https://booking-ui-api.herokuapp.com/tour-bookings`, params).then(res => res.data);
}
export default {
    bookingHotel,
	bookingTour,
    createBookingHotel,
	createBookingTour
};
