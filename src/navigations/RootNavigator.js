import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();
const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    }
};

const RootNavigator = () => {
    return (
        <NavigationContainer theme={Theme}>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name={appRoutes.AUTH} component={AuthNavigator}/>
                <Stack.Screen name={appRoutes.MAIN} component={MainNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
