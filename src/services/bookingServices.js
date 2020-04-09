import axios from 'axios';

export const bookingHotel = params => {
    return axios.get('/api/booking-hotel', {params});
};

export default {
    bookingHotel,
};
