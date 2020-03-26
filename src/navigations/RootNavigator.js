import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name={appRoutes.AUTH} component={AuthNavigator}/>
                <Stack.Screen name={appRoutes.MAIN} component={MainNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
