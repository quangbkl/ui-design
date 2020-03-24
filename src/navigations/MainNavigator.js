import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../configs/colors';
import appRoutes from './appRoutes';
import DetailsScreen from '../screens/Details/DetailsScreen';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const ROOT_ROUTES = [appRoutes.HOME];

const isOneOfRootRoutes = (currentRoute) => {
    return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({route}) => {
    const currentRoute = route.state && route.state.routes[route.state.index];
    return {tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute)};
};

class MainNavigator extends React.Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName={appRoutes.HOME}
                tabBarOptions={{
                    activeTintColor: colors.color1,
                }}
                screenOptions={TabBarVisibleOnRootScreenOptions}
            >
                <Tab.Screen
                    name={appRoutes.HOME}
                    component={HomeNavigator}
                    options={{
                        tabBarLabel: appRoutes.HOME,
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name={appRoutes.DETAILS}
                    component={DetailsScreen}
                    options={{
                        tabBarLabel: appRoutes.DETAILS,
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="bell" color={color} size={size}/>
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

export default MainNavigator;
