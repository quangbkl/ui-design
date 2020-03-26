import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import HomeScreen from '../screens/home/Home/HomeScreen';
import HotelBlockViewScreen from '../screens/home/HotelBlockView/HotelBlockViewScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.HOME} component={HomeScreen}/>
            <Stack.Screen name={appRoutes.HOTEL_BLOCK_VIEW} component={HotelBlockViewScreen}/>
        </Stack.Navigator>
    );
};

export default HomeNavigator;
