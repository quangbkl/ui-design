import authServices from 'services/authServices';
import { AsyncStorage } from 'react-native';

export default ({setIsSigned}) => async ({email, password}) => {
    try {
        const res = await authServices.signIn({email, password});
        if (res) {
            AsyncStorage.setItem('userLoginId', res.user.uid);
        }
        setIsSigned(true);
        // return user;
    } catch (e) {
        console.log(e)
        setIsSigned(false);
        // return null;
    }
}
