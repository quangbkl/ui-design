import React from 'react';
import {TextInput as TextInputReact} from 'react-native';

const TextInput = () => {
    return (
        <TextInputReact
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
    );
};

export default TextInput;
