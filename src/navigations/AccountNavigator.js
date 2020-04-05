import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import ProfileSettingScreen from 'screens/account/ProfileSetting/ProfileSettingScreen';
import ProfileEditScreen from 'screens/account/ProfileEdit/ProfileEditScreen';
import ChangePasswordScreen from 'screens/account/ChangePassword/ChangePasswordScreen';


const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.PROFILE_SETTING} component={ProfileSettingScreen}/>
            <Stack.Screen name={appRoutes.PROFILE_EDIT} component={ProfileEditScreen}/>
            <Stack.Screen name={appRoutes.CHANGE_PASSWORD} component={ChangePasswordScreen}/>
        </Stack.Navigator>
    );
};

export default AccountNavigator;
