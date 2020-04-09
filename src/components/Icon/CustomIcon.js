import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {BaseColor} from 'config/color';
import Touchable from '../Touchable/Touchable';

const CustomIcon = props => {
    const {type, onPress, color, size, ...rest} = props;
    return (
        <Touchable onPress={onPress}>
            <FontAwesome5Icon name={type} size={size} color={color} {...rest} />
        </Touchable>
    );
};

CustomIcon.propTypes = {
    type: PropTypes.string,
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
