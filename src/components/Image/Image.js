import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

const Image = (props) => {
    const {style, resizeMode, ...rest} = props;
    const resize = FastImage.resizeMode[resizeMode] || FastImage.resizeMode.cover;

    return (
        <FastImage
            style={StyleSheet.flatten([style && style])}
            {...rest}
            resizeMode={resize}
        />
    );
};

Image.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Image.defaultProps = {
    style: {},
    resizeMode: 'cover'
};

export default Image;
