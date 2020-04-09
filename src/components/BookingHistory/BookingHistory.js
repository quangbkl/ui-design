import React from 'react';
import {ViewPropTypes, Text} from 'react-native';
import PropTypes from 'prop-types';

// Preview component: http://passionui.com/wp-content/uploads/2019/07/2019-07-21_1223.png
const BookingHistory = () => {
    return <Text>BookingHistory</Text>;
};

// Example props:
// const item = {
//     name: "Proxeloca Hotel",
//     checkIn: "04 Jun 08",
//     checkOut: "07 Jun 08",
//     total: "2 Days 1 Night",
//     price: "$399,99"
// }

BookingHistory.propTypes = {
    name: PropTypes.string.isRequired,
    checkIn: PropTypes.string,
    checkOut: PropTypes.string,
    total: PropTypes.string,
    price: PropTypes.string,
    style: ViewPropTypes.style,
};

export default BookingHistory;
