import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import appRoutes from './appRoutes';
import HomeNavigator from './HomeNavigator';
import BookingNavigator from './BookingNavigator';
import NewsNavigator from './NewsNavigator';
import AccountNavigator from './AccountNavigator';
import useApp from '../hooks/app/useApp';

const Tab = createBottomTabNavigator();

const ROOT_ROUTES = [appRoutes.HOME, appRoutes.BOOKING, appRoutes.POST_LIST, appRoutes.PROFILE_SETTING];

const isOneOfRootRoutes = (currentRoute) => {
    return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({route}) => {
    const currentRoute = route.state && route.state.routes[route.state.index];
    return {tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute)};
};

const MainNavigator = () => {
    const {state: appState} = useApp();
    const {color} = appState;

    return (
        <Tab.Navigator
            initialRouteName={appRoutes.HOME}
            screenOptions={TabBarVisibleOnRootScreenOptions}
            tabBarOptions={{
                activeTintColor: color.primaryColor,
                inactiveTintColor: color.grayColor,
                style: {
                    backgroundColor: color.fieldColor
                }
            }}
        >
            <Tab.Screen
                name={appRoutes.HOME}
                component={HomeNavigator}
                options={{
                    tabBarLabel: appRoutes.HOME,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="home" color={color} size={size} solid/>
                    )
                }}
            />
            <Tab.Screen
                name={appRoutes.BOOKING}
                component={BookingNavigator}
                options={{
                    tabBarLabel: appRoutes.BOOKING,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="bookmark" color={color} size={size} solid/>
                    )
                }}
            />
            <Tab.Screen
                name={appRoutes.NEWS}
                component={NewsNavigator}
                options={{
                    tabBarLabel: appRoutes.NEWS,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="copy" color={color} size={size} solid/>
                    )
                }}
            />
            <Tab.Screen
                name={appRoutes.ACCOUNT}
                component={AccountNavigator}
                options={{
                    tabBarLabel: appRoutes.ACCOUNT,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="user-circle" color={color} size={size} solid/>
                    )
                }}
            />

        </Tab.Navigator>
    );
};

export default MainNavigator;
