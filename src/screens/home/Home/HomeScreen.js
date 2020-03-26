import React from 'react';
import {View, Text} from 'react-native';
import appRoutes from '../../../navigations/appRoutes';
import {Button} from '../../../components';

const HomeScreen = (props) => {
    const {navigation} = props;

    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                onPress={() => navigation.navigate(appRoutes.HOTEL_BLOCK_VIEW)}
            >
                Hotel Block View
            </Button>
        </View>
    );
};

export default HomeScreen;
