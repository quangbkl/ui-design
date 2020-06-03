import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Text from '../../components/Text/Text';
import {FontWeight, Typography} from '../../config/typography';
import useApp from '../../hooks/app/useApp';

const Tag = (props) => {
    const {
        style,
        styleText,
        icon,
        outline,
        small,
        tag,
        light,
        gray,
        rate,
        sale,
        ...rest
    } = props;

    const {state: appState} = useApp();
    const {colors} = appState;

    const styles = StyleSheet.create({
        default: {
            height: 28,
            backgroundColor: colors.primaryColor,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 19,
            paddingHorizontal: 10
        },
        textDefault: {
            ...Typography.caption1,
            color: 'white',
            fontWeight: FontWeight.regular
        },
        outline: {
            borderWidth: 1,
            backgroundColor: 'transparent',
            borderColor: colors.primaryColor
        },
        textOuline: {
            color: colors.primaryColor
        },
        small: {
            height: 20,
            borderRadius: 0,
            paddingHorizontal: 5
        },
        textSmall: {
            ...Typography.caption2,
            color: 'white',
            fontWeight: FontWeight.regular
        },
        light: {
            height: 20,
            borderRadius: 0,
            paddingHorizontal: 5,
            backgroundColor: colors.lightPrimaryColor
        },
        textLight: {
            ...Typography.caption2,
            color: colors.primaryColor,
            fontWeight: FontWeight.regular
        },
        gray: {
            height: 20,
            borderRadius: 0,
            paddingHorizontal: 5,
            backgroundColor: colors.dividerColor
        },
        textGray: {
            ...Typography.caption2,
            color: colors.grayColor,
            fontWeight: FontWeight.regular
        },
        rate: {
            height: 30,
            width: 40,
            borderRadius: 5,
            borderTopRightRadius: 2,
            paddingHorizontal: 5,
            backgroundColor: colors.lightPrimaryColor
        },
        textRate: {
            ...Typography.headline,
            color: 'white',
            fontWeight: FontWeight.semibold
        },
        sale: {
            height: 50,
            width: 50,
            borderRadius: 25,
            paddingHorizontal: 5,
            backgroundColor: colors.lightPrimaryColor
        },
        textSale: {
            ...Typography.headline,
            color: 'white',
            fontWeight: FontWeight.semibold
        }
    });

    return (
        <TouchableOpacity
            {...rest}
            style={StyleSheet.flatten([
                styles.default,
                outline && styles.outline,
                small && styles.small,
                light && styles.light,
                gray && styles.gray,
                rate && styles.rate,
                sale && styles.sale,
                style
            ])}
            activeOpacity={0.9}
        >
            {icon ? icon : null}
            <View style={styles.viewText}>
                <Text
                    style={StyleSheet.flatten([
                        styles.textDefault,
                        outline && styles.textOuline,
                        small && styles.textSmall,
                        light && styles.textLight,
                        gray && styles.textGray,
                        rate && styles.textRate,
                        sale && styles.textSale,
                        styleText
                    ])}
                    numberOfLines={1}
                >
                    {props.children || 'Tag'}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

Tag.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    icon: PropTypes.node,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    light: PropTypes.bool,
    gray: PropTypes.bool,
    rate: PropTypes.bool,
    sale: PropTypes.bool
};

Tag.defaultProps = {
    style: {},
    icon: null,
    outline: false,
    small: false,
    light: false,
    gray: false,
    rate: false,
    sale: false
};

export default Tag;
