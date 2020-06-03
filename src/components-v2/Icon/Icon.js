import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Icon = (props) => {
    const {style, ...rest} = props;
    return <FontAwesome5Icon style={StyleSheet.flatten([style && style])} {...rest} />;
};

Icon.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Icon.defaultProps = {
    style: {}
};

export default Icon;
