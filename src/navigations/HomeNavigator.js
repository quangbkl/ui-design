import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import {withSafeAreaView} from 'components';

const HomeScreen = React.lazy(() => import('screens/home/Home/HomeScreen'));
const SearchHotelScreen = React.lazy(() => import('screens/home/SearchHotel/SearchHotelScreen'));
const BookingV2Screen = React.lazy(() => import('screens/booking/BookingV2/BookingV2'));
const HotelsScreen = React.lazy(() => import('screens/home/Hotels/HotelsScreen'));
const HotelDetailScreen = React.lazy(() => import('screens/home/HotelDetail/HotelDetailScreen'));
const PreviewGGMapScreen = React.lazy(() => import('screens/home/HotelDetail/PreviewGGMap'));
const CheckoutReviewScreen = React.lazy(() => import('screens/booking/Checkout/CheckoutReviewScreen'));
const CheckoutScreen = React.lazy(() => import('screens/booking/Checkout/CheckoutScreen'));
const PaymentMethods = React.lazy(() => import('screens/booking/Payment/PaymentMethodsScreen'));
const PaymentMethod = React.lazy(() => import('screens/booking/Payment/PaymentMethodScreen'));
const TourDetailScreen = React.lazy(() => import('screens/home/TourDetail/TourDetailScreen'));
const ToursScreen = React.lazy(() => import('screens/home/Tours/ToursScreen'));
const BookingDetailScreen = React.lazy(() => import('screens/booking/BookingDetail/BookingDetailScreen'));

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.HOME} component={HomeScreen}/>
            <Stack.Screen name={appRoutes.SEARCH_HOTEL} component={SearchHotelScreen}/>
            <Stack.Screen name={appRoutes.BOOKINGV2} component={BookingV2Screen}/>
            <Stack.Screen name={appRoutes.HOTELS} component={withSafeAreaView(HotelsScreen)}/>
            <Stack.Screen name={appRoutes.HOTEL_DETAIL} component={HotelDetailScreen}/>
            <Stack.Screen name={appRoutes.PREVIEW_GGMAP} component={PreviewGGMapScreen}/>
            <Stack.Screen name={appRoutes.CHECKOUT_REVIEW} component={CheckoutReviewScreen}/>
	        <Stack.Screen name={appRoutes.CHECKOUT} component={CheckoutScreen}/>
	        <Stack.Screen name={appRoutes.PAYMENT_METHODS} component={PaymentMethods}/>
	        <Stack.Screen name={appRoutes.PAYMENT_METHOD} component={PaymentMethod}/>
	        <Stack.Screen name={appRoutes.TOUR_DETAIL} component={TourDetailScreen}/>
	        <Stack.Screen name={appRoutes.TOURS} component={withSafeAreaView(ToursScreen)}/>
	        <Stack.Screen name={appRoutes.BOOKING_DETAIL} component={BookingDetailScreen}/>
        </Stack.Navigator>
    );
};

export default HomeNavigator;
