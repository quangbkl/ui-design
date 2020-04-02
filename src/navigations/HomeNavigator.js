import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import HomeScreen from '../screens/home/Home/HomeScreen';
import HotelsScreen from '../screens/home/Hotels/HotelsScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.HOME} component={HomeScreen}/>
            <Stack.Screen name={appRoutes.HOTELS} component={HotelsScreen}/>
        </Stack.Navigator>
    );
};

export default HomeNavigator;
