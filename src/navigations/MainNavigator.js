import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../configs/colors';
import appRoutes from './appRoutes';
import HomeScreen from '../screens/Home/HomeScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';

const Tab = createBottomTabNavigator();

class MainNavigator extends React.Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName={appRoutes.HOME}
                tabBarOptions={{
                    activeTintColor: colors.color1,
                }}
            >
                <Tab.Screen
                    name={appRoutes.HOME}
                    component={HomeScreen}
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
                        tabBarVisible: false,
                    }}
                />
            </Tab.Navigator>
        );
    }
}

export default MainNavigator;
