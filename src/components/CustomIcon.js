import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { BaseColor } from '../config/color';

const CustomIcon = (props) => {
    const { type, onPress, color, size, ...rest } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <FontAwesome5Icon name={type} size={size} color={color} {...rest} />
        </TouchableOpacity>
    )
};

CustomIcon.propTypes = {
    type: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.number,
    onPress: PropTypes.func,
};

CustomIcon.defaultProps = {
    onPress: () => {},
    color: BaseColor.primaryColor,
    size: 18,
};

export default CustomIcon;