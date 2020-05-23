import getSettingsStorage from './getSettingsStorage';

export default async ({
                          locale,
                          setLocale,
                          i18n,
                          setI18n,
                          theme,
                          setTheme,
                          themeMode,
                          setThemeMode
                      }) => {
    const settings = await getSettingsStorage();

    const {
        locale: storageLocale,
        theme: storageTheme,
        themeMode: storageThemeMode
    } = Object.assign({locale, theme, themeMode}, settings);

    i18n.locale = storageLocale;
    setLocale(storageLocale);
    setI18n(i18n);

    if (theme !== storageTheme) setTheme(storageTheme);
    if (themeMode !== storageThemeMode) setThemeMode(storageThemeMode);
};
