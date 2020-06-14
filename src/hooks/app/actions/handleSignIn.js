import authServices from 'services/authServices';

export default ({setIsSigned}) => async ({email, password}) => {
    try {
        await authServices.signIn({email, password});
        setIsSigned(true);
    } catch (e) {
        setIsSigned(false);
        throw e;
    }
}
