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
                    <Text style={{color: color.primaryColor, fontSize: 14}}>{children}</Text> :
                    <ActivityIndicator style={styles.activityIndicator} color={color.primaryColor}/>
            }
        </Touchable>
    );
};

const styles = StyleSheet.create({});

Button.propTypes = {
    icon: PropTypes.element,
    style: ViewPropTypes.style,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func
};

export default Button;
