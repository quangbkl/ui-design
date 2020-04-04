import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import SignInScreen from 'screens/auth/SignIn/SignInScreen';
import SignUpScreen from 'screens/auth/SignUp/SignUpScreen';
import ResetPasswordScreen from 'screens/auth/ResetPassword/ResetPasswordScreen';
import WalkthroughScreen from 'screens/auth/Walkthrough/WalkthroughScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.WALKTHROUGH} component={WalkthroughScreen}/>
            <Stack.Screen name={appRoutes.SIGN_IN} component={SignInScreen}/>
            <Stack.Screen name={appRoutes.SIGN_UP} component={SignUpScreen}/>
            <Stack.Screen name={appRoutes.RESET_PASSWORD} component={ResetPasswordScreen}/>
        </Stack.Navigator>
    );
};

export default AuthNavigator;
