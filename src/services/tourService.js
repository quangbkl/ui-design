import axios from 'axios';

export const getTours = (params) => {
    return axios.get('/api/tours', {params});
};

export default {
    getTours
};
