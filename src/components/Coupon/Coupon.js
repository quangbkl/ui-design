import React from 'react';
import {ViewPropTypes, Text} from 'react-native';
import PropTypes from 'prop-types';

const Coupon = () => {
    return <Text>Coupon</Text>;
};

Coupon.propTypes = {
    name: PropTypes.string,
    code: PropTypes.number,
    description: PropTypes.string,
    valid: PropTypes.string,
    remain: PropTypes.string,
    style: ViewPropTypes.style,
};

export default Coupon;
