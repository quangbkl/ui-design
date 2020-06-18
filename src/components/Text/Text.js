import React from 'react';
import {Text as ReactText, StyleSheet} from 'react-native';
import {Typography, FontWeight} from 'config/typography';
import useApp from '../../hooks/app/useApp';

const Text = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const {
        //props style
        header,
        title1,
        title2,
        title3,
        headline,
        body1,
        body2,
        callout,
        subhead,
        footnote,
        caption1,
        caption2,
        overline,
        // props font
        thin,
        ultraLight,
        light,
        regular,
        medium,
        semibold,
        bold,
        heavy,
        black,
        //custom color
        primaryColor,
        darkPrimaryColor,
        lightPrimaryColor,
        accentColor,
        textSecondaryColor,
        grayColor,
        darkBlueColor,
        dividerColor,
        whiteColor,
        fieldColor,
        bluePrimaryColor,
        errorColor,
        //numberOfLines
        numberOfLines,
        //custom
        style,
        ...rest
    } = props;

    const styles = StyleSheet.create({
        textDefault: {
            ...Typography.headline, // Typography > headline
            color: colors.textPrimaryColor,
            fontWeight: FontWeight.semibold
        }
    });

    return (
        <ReactText
            style={StyleSheet.flatten([
                styles.textDefault,
                header && Typography.header,
                title1 && Typography.title1,
                title2 && Typography.title2,
                title3 && Typography.title3,
                headline && Typography.headline,
                body1 && Typography.body1,
                body2 && Typography.body2,
                callout && Typography.callout,
                subhead && Typography.subhead,
                footnote && Typography.footnote,
                caption1 && Typography.caption1,
                caption2 && Typography.caption2,
                overline && Typography.overline,
                //custom for font
                thin && StyleSheet.flatten({fontWeight: FontWeight.thin}),
                ultraLight &&
                StyleSheet.flatten({
                    fontWeight: FontWeight.ultraLight
                }),
                light && StyleSheet.flatten({fontWeight: FontWeight.light}),
                regular && StyleSheet.flatten({fontWeight: FontWeight.regular}),
                medium && StyleSheet.flatten({fontWeight: FontWeight.medium}),
                semibold && StyleSheet.flatten({fontWeight: FontWeight.semibold}),
                bold && StyleSheet.flatten({fontWeight: FontWeight.bold}),
                heavy && StyleSheet.flatten({fontWeight: FontWeight.heavy}),
                black && StyleSheet.flatten({fontWeight: FontWeight.black}),
                // default color
                StyleSheet.flatten({
                    color: colors.textPrimaryColor
                }),
                //custom for color
                primaryColor && StyleSheet.flatten({color: colors.primaryColor}),
                darkPrimaryColor &&
                StyleSheet.flatten({
                    color: colors.darkPrimaryColor
                }),
                lightPrimaryColor &&
                StyleSheet.flatten({
                    color: colors.lightPrimaryColor
                }),
                accentColor && StyleSheet.flatten({color: colors.accentColor}),
                textSecondaryColor &&
                StyleSheet.flatten({
                    color: colors.textSecondaryColor
                }),
                grayColor && StyleSheet.flatten({color: colors.grayColor}),
                darkBlueColor && StyleSheet.flatten({color: colors.darkBlueColor}),
                dividerColor && StyleSheet.flatten({color: colors.dividerColor}),
                whiteColor && StyleSheet.flatten({color: colors.whiteColor}),
                fieldColor && StyleSheet.flatten({color: colors.fieldColor}),
                bluePrimaryColor && StyleSheet.flatten({color: colors.bluePrimaryColor}),
                errorColor && StyleSheet.flatten({color: colors.errorColor}),
                style && style
            ])}
            numberOfLines={numberOfLines}
            {...rest}
        />
    );
};

Text.propTypes = {
    style: ReactText.propTypes.style
};

export default Text;
