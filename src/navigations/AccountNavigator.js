import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import ProfileSettingScreen from 'screens/account/ProfileSetting/ProfileSettingScreen';
import ProfileEdit from 'screens/account/ProfileEdit/ProfileEditScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.PROFILE_SETTING} component={ProfileSettingScreen}/>
            <Stack.Screen name={appRoutes.PROFILE_EDIT} component={ProfileEdit}/>
        </Stack.Navigator>
    );
};

export default AccountNavigator;
