import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
// import ProfileSettingScreen from 'screens/account/ProfileSetting/ProfileSettingScreen';
// import ProfileEditScreen from 'screens/account/ProfileEdit/ProfileEditScreen';
// import ChangePasswordScreen from 'screens/account/ChangePassword/ChangePasswordScreen';
// import ChangeLanguageScreen from 'screens/account/ChangeLanguage/ChangeLanguageScreen';
// import ProfileInfoScreen from 'screens/account/ProfileInfo/ProfileInfoScreen';

const ProfileSettingScreen = React.lazy(() => import('screens/account/ProfileSetting/ProfileSettingScreen'));
const ProfileEditScreen = React.lazy(() => import('screens/account/ProfileEdit/ProfileEditScreen'));
const ChangePasswordScreen = React.lazy(() => import('screens/account/ChangePassword/ChangePasswordScreen'));
const ChangeLanguageScreen = React.lazy(() => import('screens/account/ChangeLanguage/ChangeLanguageScreen'));
const ProfileInfoScreen = React.lazy(() => import('screens/account/ProfileInfo/ProfileInfoScreen'));

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.PROFILE_INFO} component={ProfileInfoScreen}/>
            <Stack.Screen name={appRoutes.PROFILE_EDIT} component={ProfileEditScreen}/>
            <Stack.Screen name={appRoutes.PROFILE_SETTING} component={ProfileSettingScreen}/>
            <Stack.Screen name={appRoutes.CHANGE_PASSWORD} component={ChangePasswordScreen}/>
            <Stack.Screen name={appRoutes.CHANGE_LANGUAGE} component={ChangeLanguageScreen}/>
        </Stack.Navigator>
    );
};

export default AccountNavigator;
