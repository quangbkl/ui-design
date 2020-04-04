import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, View} from 'react-native';

const Touchable = ({onPress, ...rest}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View {...rest}/>
        </TouchableWithoutFeedback>
    );
};

Touchable.propTypes = {
    onPress: PropTypes.func.isRequired,
};

export default Touchable;
