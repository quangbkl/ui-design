import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import BookingScreen from 'screens/booking/Booking/BookingScreen';

const Stack = createStackNavigator();

const BookingNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.BOOKING} component={BookingScreen}/>
        </Stack.Navigator>
    );
};

export default BookingNavigator;
