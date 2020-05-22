import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useApp from '../../hooks/app/useApp';

const Icon = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const styles = StyleSheet.create({
        text: {fontFamily: 'Raleway'},
        header: {
            fontSize: 34,
            fontWeight: '400'
        },
        title1: {
            fontSize: 28,
            fontWeight: '400'
        },
        title2: {
            fontSize: 22,
            fontWeight: '300'
        },
        title3: {
            fontSize: 20,
            fontWeight: '300'
        },
        headline: {
            fontSize: 17,
            fontWeight: '200'
        },
        body1: {
            fontSize: 17,
            fontWeight: '200'
        },
        body2: {
            fontSize: 14,
            fontWeight: '200'
        },
        callout: {
            fontSize: 17,
            fontWeight: '200'
        },
        subhead: {
            fontSize: 15,
            fontWeight: '200'
        },
        footnote: {
            fontSize: 13,
            fontWeight: '100'
        },
        caption1: {
            fontSize: 12,
            fontWeight: '100'
        },
        caption2: {
            fontSize: 11,
            fontWeight: '100'
        },
        overline: {
            fontSize: 10,
            fontWeight: '100'
        },
        darkBlue: {
            color: colors.darkBlueColor
        },
        gray: {
            color: colors.grayColor
        },
        primary: {
            color: colors.primaryColor
        },
        accent: {
            color: colors.accentColor
        }
    });

    const {style, ...rest} = props;

    return <Icon style={StyleSheet.flatten([style && style])} {...rest} />;
};

index.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

index.defaultProps = {
    style: {}
};

export default Icon;
