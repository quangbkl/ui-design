import React from 'react';
import {View, Text} from 'react-native';
import useApp from 'hooks/app/useApp';
import Button from '../../../components/Button/Button';

// Use BookingHistory component
const BookingScreen = () => {
    const {state: appState, actions: appActions} = useApp();
    const {i18n} = appState;
    const {changeLanguage} = appActions;

    return (
        <View>
            <Button onPress={() => changeLanguage('vi')}>Change To VI</Button>
            <Button onPress={() => changeLanguage('en')}>Change To EN</Button>
            <Text>{i18n.t('main.booking.booking')}</Text>
        </View>
    );
};

export default BookingScreen;
