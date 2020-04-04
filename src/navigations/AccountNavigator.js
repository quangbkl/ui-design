import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import ProfileSettingScreen from 'screens/account/ProfileSetting/ProfileSettingScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.PROFILE_SETTING} component={ProfileSettingScreen}/>
        </Stack.Navigator>
    );
};

export default AccountNavigator;
