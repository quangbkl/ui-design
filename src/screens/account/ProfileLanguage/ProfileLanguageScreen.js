import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Container} from 'native-base';
import {Header, Button, SelectList, TextButton} from 'components';
import useApp from 'hooks/app/useApp';
import SelectListItemCheck from '../../../components/SelectList/SelectListItemCheck';
import Text from '../../../components/Text/Text';

const ProfileLanguageScreen = () => {
    const {state: appState, actions: appActions} = useApp();
    const {i18n, locale, colors} = appState;
    const {changeLanguage} = appActions;

    const [selectedLanguage, setSelectedLanguage] = useState(locale);

    const handleSelectLanguage = (selectedValue) => {
        setSelectedLanguage(selectedValue);
    };

    const handlePressButton = async () => {
        await changeLanguage(selectedLanguage);
    };

    const HeaderRightComponent = () => {
        return (
            <TextButton onPress={handlePressButton}>{i18n.t('shared.save')}</TextButton>
        );
    };

    const styles = StyleSheet.create({
        main: {
            backgroundColor: colors.backgroundPrimaryColor
        },
        scrollView: {
            paddingLeft: 20,
            paddingRight: 20,
            flex: 1
        }
    });

    return (
        <Container style={styles.main}>
            <Header
                title={i18n.t('main.account.profile_language.change_language')}
                RightComponent={<HeaderRightComponent/>}
            />
            <ScrollView style={styles.scrollView}>
                <SelectList value={selectedLanguage} onChange={handleSelectLanguage}>
                    <SelectListItemCheck value="en">
                        <Text>{i18n.t('locale.en')}</Text>
                    </SelectListItemCheck>
                    <SelectListItemCheck value="vi">
                        <Text>{i18n.t('locale.vi')}</Text>
                    </SelectListItemCheck>
                </SelectList>
            </ScrollView>
        </Container>
    );
};

ProfileLanguageScreen.propTypes = {};

export default ProfileLanguageScreen;
