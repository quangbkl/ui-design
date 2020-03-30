import axios from 'axios';

export const signIn = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
};

export default {
    signIn,
};
