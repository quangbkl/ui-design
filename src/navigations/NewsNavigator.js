import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRoutes from './appRoutes';
import PostListScreen from '../screens/news/PostList/PostListScreen';

const Stack = createStackNavigator();

class NewsNavigator extends React.Component {
    render() {
        return (
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name={appRoutes.POST_LIST} component={PostListScreen}/>
            </Stack.Navigator>
        );
    }
}

export default NewsNavigator;
