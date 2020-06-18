import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SelectList, Text, SelectListItemCheck, TextButton} from 'components';
import {ThemeModeConstant} from 'config/constant';
import {View} from 'react-native';
import useApp from 'hooks/app/useApp';

const ThemeModeSettingContent = (props) => {
    const {state: appState, actions: appActions} = useApp();
    const {i18n, colors} = appState;
    const {changeThemeMode} = appActions;

    const [themeMode, setThemeMode] = useState(appState.themeMode);

    const {toggleModal} = props;

    const handleChangeThemeMode = (newThemeMode) => {
        setThemeMode(newThemeMode);
    };

    const handleApplyTheme = async () => {
        changeThemeMode(themeMode);
        setTimeout(toggleModal, 100);
    };

    return (
        <View style={{backgroundColor: colors.backgroundSecondaryColor, padding: 20, borderRadius: 10}}>
            <SelectList onChange={handleChangeThemeMode} value={themeMode}>
                <SelectListItemCheck value={ThemeModeConstant.THEME_MODE_LIGHT}>
                    <Text>{i18n.t('shared.light')}</Text>
                </SelectListItemCheck>

                <SelectListItemCheck value={ThemeModeConstant.THEME_MODE_DARK} style={{borderBottomWidth: 0}}>
                    <Text>{i18n.t('shared.dark')}</Text>
                </SelectListItemCheck>
            </SelectList>

            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TextButton onPress={toggleModal}>{i18n.t('shared.cancel')}</TextButton>
                <TextButton onPress={handleApplyTheme} style={{marginLeft: 40}}>{i18n.t('shared.apply')}</TextButton>
            </View>
        </View>
    );
};

ThemeModeSettingContent.propTypes = {
    text: PropTypes.string
};

export default ThemeModeSettingContent;
