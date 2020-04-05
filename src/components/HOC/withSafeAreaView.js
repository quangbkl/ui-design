import React from 'react';
import {SafeAreaView} from 'react-native';

const withSafeAreaView = Comp => props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Comp {...props} />
        </SafeAreaView>
    );
};

export default withSafeAreaView;
