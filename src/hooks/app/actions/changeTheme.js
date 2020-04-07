import setSettingsStorage from './setSettingsStorage';

export default ({theme, setTheme}) => async (newTheme) => {
    if (theme !== newTheme) {
        await setSettingsStorage({theme: newTheme});
        setTheme(newTheme);
    }
}
