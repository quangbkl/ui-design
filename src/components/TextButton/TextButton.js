import React from 'react';
import {Text, ViewPropTypes, StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {Touchable} from 'components';
import useApp from 'hooks/app/useApp';

const handlePressButton = () => {
    console.log('Button pressed!');
};

const Button = (props) => {
    const {state: appState} = useApp();
    const {color} = appState;

    const {onPress, style, loading, disabled, children} = props;

    const mainStyle = [
        styles.main,
        style,
        disabled && {opacity: 0.5}
    ];

    return (
        <Touchable
            onPress={onPress || handlePressButton}
            style={mainStyle}
            disabled={disabled}
        >
            {
                !loading ?
                    <Text body2 primaryColor>{children}</Text> :
                    <ActivityIndicator style={styles.activityIndicator} color={color.primaryColor}/>
            }
        </Touchable>
    );
};

const styles = StyleSheet.create({
    main: {
        fontSize: 16
    }
});

Button.propTypes = {
    icon: PropTypes.element,
    style: ViewPropTypes.style,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func
};

export default Button;
