import React from 'react';
import {TextInput as TextInputReact, StyleSheet} from 'react-native';
import {BaseColor} from 'config/color';

const TextInput = (props) => {
    const {style, ...rest} = props;

    return (
        <TextInputReact
            style={[styles.main, style]}
            placeholderTextColor={BaseColor.grayColor}
            {...rest}
        />
    );
};

const styles = StyleSheet.create({
    main: {
        height: 55,
        backgroundColor: BaseColor.fieldColor,
        borderRadius: 5,
        fontSize: 14,
        padding: 10,
    },
});

export default TextInput;
