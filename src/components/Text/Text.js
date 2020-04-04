import React from 'react';
import {Text as ReactText, StyleSheet } from 'react-native';
import {Typography, FontWeight} from 'config/typography';
import {BaseColor} from 'config/color';

const Text = (props) => {
    const {
        //props style
        body2,
        footnote,
        overline,
        // props font
        semibold,
        //custom color
        grayColor,
        whiteColor,
        //numberOfLines
        numberOfLines,
        //custom
        style,
        ...rest
    } = props;
    
    return (
        <ReactText
            style={StyleSheet.flatten([
                body2 && Typography.body2,
                footnote && Typography.footnote,
                overline && Typography.overline,
                //custom for font
                grayColor && StyleSheet.flatten({ color: BaseColor.grayColor }),
                semibold && StyleSheet.flatten({ fontWeight: FontWeight.semibold }),
                whiteColor && StyleSheet.flatten({ color: BaseColor.whiteColor }),
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

export default Text;
