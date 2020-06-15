import axios from 'axios';

export const getPromos = (params) => {
    return axios.get('/api/promos', {params});
};

export default {
    getPromos
};
