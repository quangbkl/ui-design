import axios from 'axios';
import firebase from 'firebase';

export const signIn = (data) => {
    const { email, password } = data;
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
};

export default {
    signIn,
};
