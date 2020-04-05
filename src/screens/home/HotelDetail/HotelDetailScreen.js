import React from 'react';
import {Text, View} from 'react-native';
import {getRouterParam} from 'helpers/common';

const HotelDetailScreen = (props) => {
    const hotelId = getRouterParam(props, 'hotelId');
    console.log(hotelId);
    return (
        <View>
            <Text>Hotel Detail</Text>
        </View>
    );
};

HotelDetailScreen.propTypes = {};

export default HotelDetailScreen;
