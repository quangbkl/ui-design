import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import SignInScreen from '../screens/SignIn/SignInScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import ResetPasswordScreen from '../screens/ResetPassword/ResetPasswordScreen';

const Stack = createStackNavigator();

class AuthNavigator extends React.Component {
    render() {
        return (
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name={appRoutes.SIGN_IN} component={SignInScreen}/>
                <Stack.Screen name={appRoutes.SIGN_UP} component={SignUpScreen}/>
                <Stack.Screen name={appRoutes.RESET_PASSWORD} component={ResetPasswordScreen}/>
            </Stack.Navigator>
        );
    }
}

export default AuthNavigator;
