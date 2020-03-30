import React from 'react';
import {ViewPropTypes, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {CardItem} from 'native-base';

// Preview component: http://passionui.com/wp-content/uploads/2019/07/2019-07-18_1503.png
const CarItem = () => {
    return (
        <CardItem cardBody>
            <View><Text>AAAA</Text></View>
            <View><Text>BBBB</Text></View>
        </CardItem>
    );
};

// Example props:
// const item = {
//     image: require("@assets/images/car-1.jpg"),
//     title: "Economic",
//     name: "Ford Mustang",
//     price: "$399,99",
//     per: "Day",
//     rate: 4.5,
//     numReviews: 100,
//     services: [
//         { icon: "user", name: "5 seats" },
//         { icon: "history", name: "Pay at Pick-Up  " },
//         { icon: "snowflake", name: "AC" },
//         { icon: "paw", name: "Pet Allowed" },
//         { icon: "wifi", name: "Free Wifi" }
//     ]
// }

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
