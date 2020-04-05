import getLocaleFromStorage from './getLocaleFromStorage';

export default async (setLocale) => {
    const value = await getLocaleFromStorage();
    if (value && typeof value === 'string') setLocale(value);
};
