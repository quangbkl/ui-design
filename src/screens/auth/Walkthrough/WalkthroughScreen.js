import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageSlider from './ImageSlider';
import AuthForm from './AuthForm';

const WalkthroughScreen = () => {
    return (
        <View style={styles.container}>
            <ImageSlider/>
            <AuthForm/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default WalkthroughScreen;
