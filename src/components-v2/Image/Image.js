import React from 'react';
import {Image as ReactNativeImage} from 'react-native';
import PropTypes from 'prop-types';

const Image = (props) => {
    return (
        <ReactNativeImage {...props}/>
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
