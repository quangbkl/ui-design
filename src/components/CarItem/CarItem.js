import React from 'react';
import {ViewPropTypes, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {CardItem} from 'native-base';

const CarItem = () => {
    return (
        <CardItem cardBody>
            <View><Text>AAAA</Text></View>
            <View><Text>BBBB</Text></View>
        </CardItem>
    );
};

CarItem.propTypes = {
    style: ViewPropTypes.style,
    view: PropTypes.oneOf(['list', 'block', 'grid']),
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    per: PropTypes.string,
    rate: PropTypes.number,
    numReviews: PropTypes.number,
    services: PropTypes.array,
};

export default CarItem;
