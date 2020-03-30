import axios from 'axios';

export const getBookingHistories = (params) => {
    return axios.get('/api/booking-histories', {params});
};

export default {
    getBookingHistories,
};
