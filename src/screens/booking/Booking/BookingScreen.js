import React from 'react';
import {View, Text} from 'react-native';
import useApp from 'hooks/app/useApp';
import {Button} from 'components';

// Use BookingHistory component
const BookingScreen = () => {
    const {state: appState, actions: appActions} = useApp();
    const {i18n} = appState;
    const {changeLanguage} = appActions;

    return (
        <View>
            <Button onPress={() => changeLanguage('vi')}>
                {i18n.t('main.booking.change_to', {lang: 'VI'})}
            </Button>
            <Button onPress={() => changeLanguage('en')}>
                {i18n.t('main.booking.change_to', {lang: 'EN'})}
            </Button>
            <Text>{i18n.t('main.booking.booking')}</Text>
        </View>
    );
};

export default BookingScreen;
