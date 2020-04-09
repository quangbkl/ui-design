import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import PostsScreen from 'screens/news/Posts/PostsScreen';
import PostDetailScreen from 'screens/news/PostDetail/PostDetailScreen';

const Stack = createStackNavigator();

const NewsNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name={appRoutes.POSTS} component={PostsScreen} />
            <Stack.Screen
                name={appRoutes.POST_DETAIL}
                component={PostDetailScreen}
            />
        </Stack.Navigator>
    );
};

export default NewsNavigator;
