import setSettingsStorage from './setSettingsStorage';

export default ({themeMode, setThemeMode}) => async newThemeMode => {
    if (themeMode !== newThemeMode) {
        await setSettingsStorage({themeMode: newThemeMode});
        setThemeMode(newThemeMode);
    }
};
