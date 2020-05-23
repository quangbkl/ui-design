import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import BookingScreen from 'screens/booking/Booking/BookingScreen';
import BookingDetailScreen from 'screens/booking/BookingDetail/BookingDetailScreen';

const Stack = createStackNavigator();

const BookingNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.BOOKING} component={BookingScreen}/>
            <Stack.Screen name={appRoutes.BOOKING_DETAIL} component={BookingDetailScreen}/>
        </Stack.Navigator>
    );
};

export default BookingNavigator;
