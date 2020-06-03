import React from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import useApp from '../../hooks/app/useApp';
import Text from '../../components/Text/Text';
import {FontWeight, Typography} from '../../config/typography';

const Button = (props) => {
    const {
        style,
        styleText,
        icon,
        outline,
        full,
        round,
        loading,
        ...rest
    } = props;

    const {state: appState} = useApp();
    const {colors} = appState;

    const styles = StyleSheet.create({
        default: {
            height: 56,
            borderRadius: 8,
            backgroundColor: colors.primaryColor,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20
        },
        textDefault: {
            ...Typography.headline,
            color: colors.whiteColor,
            fontWeight: FontWeight.semibold
        },
        outline: {
            backgroundColor: colors.whiteColor,
            borderWidth: 1,
            borderColor: colors.primaryColor
        },
        textOuline: {
            color: colors.primaryColor
        },
        full: {
            width: '100%',
            alignSelf: 'auto'
        },
        round: {
            borderRadius: 28
        }
    });

    return (
        <TouchableOpacity
            {...rest}
            style={StyleSheet.flatten([
                styles.default,
                outline && styles.outline,
                full && styles.full,
                round && styles.round,
                style
            ])}
            activeOpacity={0.9}
        >
            {icon ? icon : null}
            <Text
                style={StyleSheet.flatten([
                    styles.textDefault,
                    outline && styles.textOuline,
                    styleText
                ])}
                numberOfLines={1}
            >
                {props.children || 'Button'}
            </Text>
            {loading ? (
                <ActivityIndicator
                    size="small"
                    color={
                        outline
                            ? colors.primaryColor
                            : colors.whiteColor
                    }
                    style={{paddingLeft: 5}}
                />
            ) : null}
        </TouchableOpacity>
    );
};

Button.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    icon: PropTypes.node,
    outline: PropTypes.bool,
    full: PropTypes.bool,
    round: PropTypes.bool,
    loading: PropTypes.bool
};

Button.defaultProps = {
    style: {},
    icon: null,
    outline: false,
    full: false,
    round: false,
    loading: false
};

export default Button;
