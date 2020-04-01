import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import PostsScreen from '../screens/news/Posts/PostsScreen';

const Stack = createStackNavigator();

const NewsNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={appRoutes.POSTS} component={PostsScreen}/>
        </Stack.Navigator>
    );
};

export default NewsNavigator;
