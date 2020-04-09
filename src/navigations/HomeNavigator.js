import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import {withSafeAreaView} from 'components';

const HomeScreen = React.lazy(() => import('screens/home/Home/HomeScreen'));
const HotelsScreen = React.lazy(() =>
    import('screens/home/Hotels/HotelsScreen'),
);
const HotelDetailScreen = React.lazy(() =>
    import('screens/home/HotelDetail/HotelDetailScreen'),
);
const PreviewBookingScreen = React.lazy(() =>
    import('screens/booking/PreviewBooking/PreviewBookingScreen'),
);

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name={appRoutes.HOME} component={HomeScreen} />
            <Stack.Screen
                name={appRoutes.HOTELS}
                component={withSafeAreaView(HotelsScreen)}
            />
            <Stack.Screen
                name={appRoutes.HOTEL_DETAIL}
                component={HotelDetailScreen}
            />
            <Stack.Screen
                name={appRoutes.PREVIEW_BOOKING}
                component={PreviewBookingScreen}
            />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
