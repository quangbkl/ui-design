import getSettingsStorage from './getSettingsStorage';

export default async ({locale, setLocale, i18n, setI18n}) => {
    const settings = await getSettingsStorage();

    const {locale} = Object.assign({}, settings);

    const language = value && typeof value === 'string' ? value : locale;
    i18n.locale = language;
    setLocale(language);
    setI18n(i18n);
};
