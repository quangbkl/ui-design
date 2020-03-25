import React from 'react';
import {ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import {Button as NativeBaseButton} from 'native-base';


class Button extends React.Component {
    render() {
        return (
            <NativeBaseButton {...this.props}/>
        );
    }
}

Button.propTypes = {
    full: PropTypes.bool,
    round: PropTypes.bool,
    outline: PropTypes.bool,
    icon: PropTypes.element,
    style: ViewPropTypes.style,
    loading: PropTypes.bool,
    onPress: PropTypes.func,
};

export default Button;
