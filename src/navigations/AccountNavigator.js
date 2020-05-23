import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';

const ProfileSettingScreen = React.lazy(() => import('screens/account/ProfileSetting/ProfileSettingScreen'));
const ProfileEditScreen = React.lazy(() => import('screens/account/ProfileEdit/ProfileEditScreen'));
const ChangePasswordScreen = React.lazy(() => import('screens/account/ChangePassword/ChangePasswordScreen'));
const ChangeLanguageScreen = React.lazy(() => import('screens/account/ChangeLanguage/ChangeLanguageScreen'));
const ProfileLanguageScreen = React.lazy(() => import('screens/account/ProfileLanguage/ProfileLanguageScreen'));
const ProfileInfoScreen = React.lazy(() => import('screens/account/ProfileInfo/ProfileInfoScreen'));
const ProfileThemeScreen = React.lazy(() => import('screens/account/ProfileTheme/ProfileThemeScreen'));

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.PROFILE_INFO} component={ProfileInfoScreen}/>
            <Stack.Screen name={appRoutes.PROFILE_EDIT} component={ProfileEditScreen}/>
            <Stack.Screen name={appRoutes.PROFILE_SETTING} component={ProfileSettingScreen}/>
            <Stack.Screen name={appRoutes.CHANGE_PASSWORD} component={ChangePasswordScreen}/>
            <Stack.Screen name={appRoutes.PROFILE_LANGUAGE} component={ProfileLanguageScreen}/>
            <Stack.Screen name={appRoutes.PROFILE_THEME} component={ProfileThemeScreen}/>
        </Stack.Navigator>
    );
};

export default AccountNavigator;
