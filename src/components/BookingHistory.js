import React from 'react';
import {ViewPropTypes, Text} from 'react-native';
import PropTypes from 'prop-types';

class BookingHistory extends React.Component {
    render() {
        return (
            <Text>BookingHistory</Text>
        );
    }
}

BookingHistory.propTypes = {
    name: PropTypes.string.isRequired,
    checkIn: PropTypes.string,
    checkOut: PropTypes.string,
    total: PropTypes.string,
    price: PropTypes.string,
    style: ViewPropTypes.style,
};

export default BookingHistory;
