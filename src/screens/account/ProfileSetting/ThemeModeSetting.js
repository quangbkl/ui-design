import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {ListItemAngleRight, Text} from 'components';
import useApp from 'hooks/app/useApp';
import ThemeModeSettingContent from './ThemeModeSettingContent';

const ThemeModeSetting = () => {
    const {state: appState} = useApp();
    const {i18n, themeMode} = appState;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => setIsModalVisible(!isModalVisible);

    return (
        <>
            <ListItemAngleRight
                onPress={toggleModal}
                value={i18n.t('shared.' + themeMode)}>
                <Text>{i18n.t('main.account.profile_setting.theme_mode')}</Text>
            </ListItemAngleRight>

            <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
                <ThemeModeSettingContent />
            </Modal>
        </>
    );
};

ThemeModeSetting.propTypes = {};

export default ThemeModeSetting;
