import axios from 'axios';

export const signIn = data => {
    return axios.post('/auth/sign-in', data);
};

export default {
    signIn,
};
