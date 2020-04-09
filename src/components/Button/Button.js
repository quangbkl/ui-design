import React from 'react';
import {Text, ViewPropTypes, StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {Touchable} from 'components';
import useApp from 'hooks/app/useApp';

const handlePressButton = () => {
    console.log('Button pressed!');
};

const Button = props => {
    const {state: appState} = useApp();
    const {color} = appState;

    const {onPress, style, loading, disabled, children} = props;

    const mainStyle = [
        styles.main,
        {backgroundColor: color.primaryColor},
        style,
        disabled && {opacity: 0.5},
    ];

    return (
        <Touchable
            onPress={onPress || handlePressButton}
            style={mainStyle}
            disabled={disabled}>
            <Text
                style={{
                    color: (style && style.color) || 'white',
                    fontSize: 14,
                }}>
                {children}
            </Text>
            {loading && (
                <ActivityIndicator
                    style={styles.activityIndicator}
                    color={(style && style.color) || 'white'}
                />
            )}
        </Touchable>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 55,
        borderRadius: 5,
    },
    activityIndicator: {
        marginLeft: 5,
    },
});

Button.propTypes = {
    full: PropTypes.bool,
    round: PropTypes.bool,
    outline: PropTypes.bool,
    icon: PropTypes.element,
    style: ViewPropTypes.style,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
};

export default Button;
