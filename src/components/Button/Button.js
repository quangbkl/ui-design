import React from 'react';
import {Text, ViewPropTypes, StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {BaseColor} from 'config/color';
import {Touchable} from 'components';

const handlePressButton = () => {
    console.log('Button pressed!');
};

const Button = (props) => {
    const {onPress, style, loading, children} = props;

    return (
        <Touchable
            onPress={onPress || handlePressButton}
            style={[styles.main, style]}
        >
            <Text style={{color: (style && style.color) || 'white', fontSize: 14}}>{children}</Text>
            {loading && <ActivityIndicator style={styles.activityIndicator} color={(style && style.color) || 'white'}/>}
        </Touchable>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BaseColor.primaryColor,
        padding: 10,
        height: 55,
        borderRadius: 5
    },
    activityIndicator: {
        marginLeft: 5
    }
});

Button.propTypes = {
    full: PropTypes.bool,
    round: PropTypes.bool,
    outline: PropTypes.bool,
    icon: PropTypes.element,
    style: ViewPropTypes.style,
    loading: PropTypes.bool,
    onPress: PropTypes.func
};

export default Button;
