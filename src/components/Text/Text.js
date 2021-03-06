import React from 'react';
import {Text as ReactText, StyleSheet } from 'react-native';
import {Typography, FontWeight} from 'config/typography';
import {BaseColor} from 'config/color';

const Text = (props) => {
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
        //numberOfLines
        numberOfLines,
        //custom
        style,
        ...rest
    } = props;
    
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
                thin && StyleSheet.flatten({ fontWeight: FontWeight.thin }),
                ultraLight &&
                    StyleSheet.flatten({
                        fontWeight: FontWeight.ultraLight
                    }),
                light && StyleSheet.flatten({ fontWeight: FontWeight.light }),
                regular && StyleSheet.flatten({ fontWeight: FontWeight.regular }),
                medium && StyleSheet.flatten({ fontWeight: FontWeight.medium }),
                semibold && StyleSheet.flatten({ fontWeight: FontWeight.semibold }),
                bold && StyleSheet.flatten({ fontWeight: FontWeight.bold }),
                heavy && StyleSheet.flatten({ fontWeight: FontWeight.heavy }),
                black && StyleSheet.flatten({ fontWeight: FontWeight.black }),
                // default color
                StyleSheet.flatten({
                    color: BaseColor.textPrimaryColor
                }),
                //custom for color
                primaryColor && StyleSheet.flatten({ color: BaseColor.primaryColor }),
                darkPrimaryColor &&
                    StyleSheet.flatten({
                        color: BaseColor.darkPrimaryColor
                    }),
                lightPrimaryColor &&
                    StyleSheet.flatten({
                        color: BaseColor.lightPrimaryColor
                    }),
                accentColor && StyleSheet.flatten({ color: BaseColor.accentColor }),
                textSecondaryColor &&
                    StyleSheet.flatten({
                        color: BaseColor.textSecondaryColor
                    }),
                grayColor && StyleSheet.flatten({ color: BaseColor.grayColor }),
                darkBlueColor && StyleSheet.flatten({ color: BaseColor.darkBlueColor }),
                dividerColor && StyleSheet.flatten({ color: BaseColor.dividerColor }),
                whiteColor && StyleSheet.flatten({ color: BaseColor.whiteColor }),
                fieldColor && StyleSheet.flatten({ color: BaseColor.fieldColor }),
                bluePrimaryColor && StyleSheet.flatten({ color: BaseColor.bluePrimaryColor }),
                style && style
            ])}
            numberOfLines={numberOfLines}
            {...rest}
        />
    );
};

Text.propTypes = {
    style: ReactText.propTypes.style,
};

const styles = StyleSheet.create({  
    textDefault: {
        ...Typography.headline, // Typography > headline
        color: BaseColor.whiteColor,
        fontWeight: FontWeight.semibold
    }
});

export default Text;
