import React from 'react';
import {View, Text, Button} from 'react-native';

const HotelBlockViewScreen = (props) => {
    const {navigation} = props;

    return (
        <View>
            <Text>HotelBlockView Screen</Text>
            <Button title="Back" onPress={() => navigation.goBack()}/>
        </View>
    );
};

export default HotelBlockViewScreen;
