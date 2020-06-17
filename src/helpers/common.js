import validator from "validator";

export const getRouterParam = (
    props: Object,
    paramName: string,
    defaultValue: any = null,
) => {
    try {
        return props.route.params[paramName];
    } catch (error) {
        return defaultValue;
    }
};

export const validateEmail = email => {
    if (!email) return 'Please enter a value';
    if (!email.includes('@')) return 'An email address must contain a single @';
    if (!validator.isEmail(`${email}`)) return 'Please enter a valid email address';

    return ''
}

export const validatePassword = password => {
    if (!password) return 'Please enter a value';

    return '';
}

export const validateFullName = fullName => {
    if (!fullName) return 'Please enter a value';

    return '';
}
