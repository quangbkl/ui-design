import React from 'react';
import {View} from 'react-native';

const Separator = ({style}) => {
    return (
        <View
            style={[style, {
                height: 1,
                backgroundColor: '#8b8b8b',
                marginTop: 10,
                marginBottom: 10,
            }]}
        />
    );
};

export default Separator;
