import axios from 'axios';

export const getPosts = (params) => {
    return axios.get('/api/posts', {params});
};

export default {
    getPosts,
};
