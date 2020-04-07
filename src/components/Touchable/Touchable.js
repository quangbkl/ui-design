import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, View} from 'react-native';

const Touchable = ({onPress, disabled, children, ...rest}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
            <View {...rest}>
                {
                    children
                }
            </View>
        </TouchableWithoutFeedback>
    );
};

Touchable.propTypes = {
    onPress: PropTypes.func
};

export default Touchable;
